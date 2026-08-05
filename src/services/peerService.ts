import Peer, { DataConnection } from 'peerjs';
import { GamepadState } from '../types/game';

const ROOM_PREFIX = 'soccer-game-room-';

const PEER_CONFIG = {
  debug: 1,
  host: '0.peerjs.com',
  port: 443,
  path: '/',
  secure: true,
  config: {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:stun2.l.google.com:19302' },
      { urls: 'stun:stun3.l.google.com:19302' },
      { urls: 'stun:stun4.l.google.com:19302' },
      { urls: 'stun:global.stun.twilio.com:3478' },
      { urls: 'stun:stun.services.mozilla.com' }
    ]
  }
};

export class HostPeerService {
  private peer: Peer | null = null;
  private connection: DataConnection | null = null;

  public roomId: string;
  public onConnectionStateChange?: (connected: boolean) => void;
  public onInputReceived?: (input: Partial<GamepadState>) => void;

  constructor() {
    // Generate a random 4-digit room code, e.g. "8492"
    this.roomId = Math.floor(1000 + Math.random() * 9000).toString();
  }

  public init(customRoomId?: string): Promise<string> {
    if (customRoomId) {
      this.roomId = customRoomId;
    }

    const peerId = `${ROOM_PREFIX}${this.roomId}`;

    return new Promise((resolve, reject) => {
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
            if (this.onInputReceived && data && data.type === 'CONTROLLER_INPUT') {
              this.onInputReceived(data.input);
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
          console.error('[HostPeerService] Peer error:', err);
          reject(err);
        });
      } catch (err) {
        reject(err);
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
  }
}

export class ControllerPeerService {
  private peer: Peer | null = null;
  private connection: DataConnection | null = null;

  public onConnectionStateChange?: (connected: boolean) => void;

  public connectToHost(roomId: string, retryCount = 0): Promise<boolean> {
    const hostPeerId = `${ROOM_PREFIX}${roomId}`;

    return new Promise((resolve, reject) => {
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
            console.error('[ControllerPeerService] Connection error:', err);
            this.connection = null;
            if (this.onConnectionStateChange) {
              this.onConnectionStateChange(false);
            }

            if (!isResolved && retryCount < 3) {
              console.log(`[ControllerPeerService] Retrying connection attempt ${retryCount + 1}...`);
              setTimeout(() => {
                this.connectToHost(roomId, retryCount + 1).then(resolve).catch(reject);
              }, 1200);
            } else {
              reject(err);
            }
          });
        });

        this.peer.on('error', (err: any) => {
          console.error('[ControllerPeerService] Peer error:', err);
          if (retryCount < 3) {
            console.log(`[ControllerPeerService] Retrying after peer error attempt ${retryCount + 1}...`);
            setTimeout(() => {
              this.connectToHost(roomId, retryCount + 1).then(resolve).catch(reject);
            }, 1200);
          } else {
            reject(err);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  public sendInput(input: Partial<GamepadState>) {
    if (this.connection && this.connection.open) {
      this.connection.send({
        type: 'CONTROLLER_INPUT',
        input,
      });
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
  }
}
