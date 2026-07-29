declare module 'qrcode.react' {
  import React from 'react';
  export interface QRCodeProps {
    value: string;
    size?: number;
    level?: 'L' | 'M' | 'Q' | 'H';
    bgColor?: string;
    fgColor?: string;
    includeMargin?: boolean;
  }
  export const QRCodeSVG: React.FC<QRCodeProps>;
  export const QRCodeCanvas: React.FC<QRCodeProps>;
}

declare module 'peerjs' {
  export interface DataConnection {
    peer: string;
    open: boolean;
    on(event: 'data', callback: (data: any) => void): void;
    on(event: 'open', callback: () => void): void;
    on(event: 'close', callback: () => void): void;
    on(event: 'error', callback: (err: any) => void): void;
    send(data: any): void;
    close(): void;
  }

  export interface PeerOptions {
    host?: string;
    port?: number;
    path?: string;
    secure?: boolean;
    config?: any;
    debug?: number;
  }

  export default class Peer {
    id: string;
    constructor(id?: string | PeerOptions, options?: PeerOptions);
    on(event: 'open', callback: (id: string) => void): void;
    on(event: 'connection', callback: (conn: DataConnection) => void): void;
    on(event: 'error', callback: (err: any) => void): void;
    connect(peer: string, options?: any): DataConnection;
    destroy(): void;
  }
}
