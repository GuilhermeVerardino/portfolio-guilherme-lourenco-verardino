import { useEffect, useRef, useState } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

export function useQRCode(options: Options) {
  const [qrCode] = useState<QRCodeStyling>(() => new QRCodeStyling(options));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    qrCode.update(options);
  }, [qrCode, options]);

  const download = (extension: "png" | "svg" | "jpeg" | "webp") => {
    qrCode.download({ extension });
  };

  return { ref, download };
}
