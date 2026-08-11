/**
 * Service untuk mendeteksi IP Wi-Fi Lokal Host (Laptop) secara otomatis
 * menggunakan WebRTC Local ICE Candidate Probe.
 */
export async function detectLocalWifiIP(): Promise<string> {
  // If current URL is already an IP address (e.g., http://192.168.1.15:5173), return it directly
  const hostname = window.location.hostname;
  if (hostname && hostname !== 'localhost' && hostname !== '127.0.0.1' && hostname !== '0.0.0.0') {
    return hostname;
  }

  return new Promise((resolve) => {
    let resolved = false;

    // Timeout fallback after 1.5 seconds if ICE candidate is blocked
    const fallbackTimer = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        resolve(hostname === 'localhost' ? '192.168.1.100' : hostname);
      }
    }, 1500);

    try {
      const pc = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
      });

      pc.createDataChannel('');
      pc.createOffer().then((offer) => pc.setLocalDescription(offer));

      pc.onicecandidate = (event) => {
        if (!event || !event.candidate || resolved) return;

        const cand = event.candidate.candidate;
        // Search for IPv4 LAN pattern (192.168.x.x, 10.x.x.x, 172.16-31.x.x)
        const match = /([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/.exec(cand);
        if (match) {
          const ip = match[1];
          if (ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('172.')) {
            if (!resolved) {
              resolved = true;
              clearTimeout(fallbackTimer);
              pc.close();
              resolve(ip);
            }
          }
        }
      };
    } catch {
      if (!resolved) {
        resolved = true;
        clearTimeout(fallbackTimer);
        resolve(hostname === 'localhost' ? '192.168.1.100' : hostname);
      }
    }
  });
}
