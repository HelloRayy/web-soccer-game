import Peer, { DataConnection } from 'peerjs';
import { GamepadState } from '../types/game';

export type { GamepadState } from '../types/game';

const ROOM_PREFIX = 'soccer-game-room-';

const PEER_CONFIG = {
  debug: 1,
  config: {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:stun2.l.google.com:19302' },
      { urls: 'stun:global.stun.twilio.com:3478' },
      { urls: 'stun:stun.services.mozilla.com' }
    ]
  }
};

export class HostPeerService {
  private peer: Peer | null = null;
  private connection: DataConnection | null = null;
  private bc: BroadcastChannel | null = null;

  public roomId: string;
  public onConnectionStateChange?: (connected: boolean) => void;
  public onInputReceived?: (input: Partial<GamepadState>) => void;
  public onGamepadStateUpdate?: (state: GamepadState) => void;

  constructor() {
    this.roomId = Math.floor(1000 + Math.random() * 9000).toString();
  }

  public init(customRoomId?: string): Promise<string> {
    if (customRoomId) {
      this.roomId = customRoomId;
    }

    const peerId = `${ROOM_PREFIX}${this.roomId}`;

    // Setup Local Fallback Listener (BroadcastChannel & LocalStorage)
    if (typeof window !== 'undefined') {
      try {
        if ('BroadcastChannel' in window) {
          this.bc = new BroadcastChannel(`soccer_game_${this.roomId}`);
          this.bc.onmessage = (e) => {
            if (e.data && e.data.type === 'CONTROLLER_INPUT') {
              if (this.onConnectionStateChange) this.onConnectionStateChange(true);
              if (this.onInputReceived) this.onInputReceived(e.data.input);
              if (this.onGamepadStateUpdate) this.onGamepadStateUpdate(e.data.input);
            }
          };
        }

        window.addEventListener('storage', (e) => {
          if (e.key === `soccer_game_input_${this.roomId}` && e.newValue) {
            try {
              const data = JSON.parse(e.newValue);
              if (data && data.input) {
                if (this.onConnectionStateChange) this.onConnectionStateChange(true);
                if (this.onInputReceived) this.onInputReceived(data.input);
                if (this.onGamepadStateUpdate) this.onGamepadStateUpdate(data.input);
              }
            } catch (err) {}
          }
        });
      } catch (err) {}
    }

    return new Promise((resolve) => {
      try {
        this.peer = new Peer(peerId, PEER_CONFIG);

        this.peer.on('open', (id: string) => {
          console.log('[HostPeerService] Host Peer open with ID:', id);
          resolve(this.roomId);
        });

        this.peer.on('connection', (conn: DataConnection) => {
          console.log('[HostPeerService] Client connected:', conn.peer);
          this.connection = conn;

          if (this.onConnectionStateChange) {
            this.onConnectionStateChange(true);
          }

          conn.on('data', (data: any) => {
            if (data && data.type === 'CONTROLLER_INPUT') {
              if (this.onInputReceived) this.onInputReceived(data.input);
              if (this.onGamepadStateUpdate) this.onGamepadStateUpdate(data.input);
            }
          });

          conn.on('close', () => {
            console.log('[HostPeerService] Client connection closed');
            this.connection = null;
            if (this.onConnectionStateChange) {
              this.onConnectionStateChange(false);
            }
          });

          conn.on('error', (err: any) => {
            console.error('[HostPeerService] Connection error:', err);
            this.connection = null;
            if (this.onConnectionStateChange) {
              this.onConnectionStateChange(false);
            }
          });
        });

        this.peer.on('error', (err: any) => {
          console.warn('[HostPeerService] Peer error, using local channel:', err);
          resolve(this.roomId);
        });
      } catch (err) {
        console.warn('[HostPeerService] Peer init failed, using local channel:', err);
        resolve(this.roomId);
      }
    });
  }

  public destroy() {
    if (this.connection) {
      this.connection.close();
      this.connection = null;
    }
    if (this.peer) {
      this.peer.destroy();
      this.peer = null;
    }
    if (this.bc) {
      this.bc.close();
      this.bc = null;
    }
  }
}

export class ControllerPeerService {
  private peer: Peer | null = null;
  private connection: DataConnection | null = null;
  private bc: BroadcastChannel | null = null;

  public onConnectionStateChange?: (connected: boolean) => void;

  public connectToHost(roomId: string, retryCount = 0): Promise<boolean> {
    const hostPeerId = `${ROOM_PREFIX}${roomId}`;

    // Setup Local Fallback Channel
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      try {
        this.bc = new BroadcastChannel(`soccer_game_${roomId}`);
      } catch (err) {}
    }

    return new Promise((resolve) => {
      try {
        if (this.peer) {
          this.peer.destroy();
        }

        this.peer = new Peer(PEER_CONFIG);

        this.peer.on('open', () => {
          console.log('[ControllerPeerService] Controller Peer open, connecting to host:', hostPeerId);
          if (!this.peer) return;

          const conn = this.peer.connect(hostPeerId, { reliable: true });
          this.connection = conn;

          let isResolved = false;

          conn.on('open', () => {
            console.log('[ControllerPeerService] Connected to host!');
            isResolved = true;
            if (this.onConnectionStateChange) {
              this.onConnectionStateChange(true);
            }
            resolve(true);
          });

          conn.on('close', () => {
            console.log('[ControllerPeerService] Host connection closed');
            this.connection = null;
            if (this.onConnectionStateChange) {
              this.onConnectionStateChange(false);
            }
          });

          conn.on('error', (err: any) => {
            console.warn('[ControllerPeerService] Connection error:', err);
            this.connection = null;

            if (!isResolved && retryCount < 3) {
              console.log(`[ControllerPeerService] Retrying connection attempt ${retryCount + 1}...`);
              setTimeout(() => {
                this.connectToHost(roomId, retryCount + 1).then(resolve);
              }, 1200);
            } else {
              // Fallback to local transport
              if (this.onConnectionStateChange) this.onConnectionStateChange(true);
              resolve(true);
            }
          });
        });

        this.peer.on('error', (err: any) => {
          console.warn('[ControllerPeerService] Peer error, using local channel:', err);
          if (this.onConnectionStateChange) this.onConnectionStateChange(true);
          resolve(true);
        });
      } catch (err) {
        console.warn('[ControllerPeerService] Init error, using local channel:', err);
        if (this.onConnectionStateChange) this.onConnectionStateChange(true);
        resolve(true);
      }
    });
  }

  public sendInput(input: Partial<GamepadState>, roomId?: string) {
    if (this.connection && this.connection.open) {
      this.connection.send({
        type: 'CONTROLLER_INPUT',
        input,
      });
    }

    // Hybrid Local Channel Transport
    if (typeof window !== 'undefined') {
      try {
        if (this.bc) {
          this.bc.postMessage({ type: 'CONTROLLER_INPUT', input });
        }
        if (roomId) {
          localStorage.setItem(`soccer_game_input_${roomId}`, JSON.stringify({ input, t: Date.now() }));
        }
      } catch (err) {}
    }
  }

  public destroy() {
    if (this.connection) {
      this.connection.close();
      this.connection = null;
    }
    if (this.peer) {
      this.peer.destroy();
      this.peer = null;
    }
    if (this.bc) {
      this.bc.close();
      this.bc = null;
    }
  }
}
