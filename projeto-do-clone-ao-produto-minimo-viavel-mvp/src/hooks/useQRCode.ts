import { useEffect, useRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

export function useQRCode(options: Options) {
  const qrCodeRef = useRef<QRCodeStyling | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize the QR Code instance only once
  useEffect(() => {
    if (!qrCodeRef.current) {
      qrCodeRef.current = new QRCodeStyling(options);
    }
  }, []);

  // Append to container when it's available
  useEffect(() => {
    if (containerRef.current && qrCodeRef.current) {
      // Clear container before appending to avoid multiple canvases
      containerRef.current.innerHTML = "";
      qrCodeRef.current.append(containerRef.current);
    }
  }, []);

  // Update options when they change
  useEffect(() => {
    if (qrCodeRef.current) {
      qrCodeRef.current.update(options);
    }
  }, [options]);

  const download = (extension: "png" | "svg" | "jpeg" | "webp") => {
    if (qrCodeRef.current) {
      qrCodeRef.current.download({ extension });
    }
  };

  return { ref: containerRef, download };
}
