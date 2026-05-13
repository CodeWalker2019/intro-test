import { useState, useEffect } from "react";

export function useFontEmbed(path: string, family: string): string {
  const [style, setStyle] = useState('');

  useEffect(() => {
    fetch(path)
      .then(r => r.ok ? r.arrayBuffer() : null)
      .then(buf => {
        if (!buf) return;
        const bytes = new Uint8Array(buf);
        let binary = '';
        for (let i = 0; i < bytes.length; i += 8192) {
          binary += String.fromCharCode(...bytes.subarray(i, Math.min(i + 8192, bytes.length)));
        }
        const src = `data:font/woff2;base64,${btoa(binary)}`;
        setStyle(`@font-face{font-family:'${family}';src:url('${src}')format('woff2')}`);
      })
      .catch(() => {});
  }, [path, family]);

  return style;
}
