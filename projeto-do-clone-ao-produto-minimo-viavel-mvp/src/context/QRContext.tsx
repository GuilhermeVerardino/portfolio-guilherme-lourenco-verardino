import React, { createContext, useContext, useState, useCallback } from "react";
import { QRCodeOptions } from "../types";
import { logFirebaseEvent } from "../lib/firebase";

const defaultOptions: QRCodeOptions = {
  width: 300,
  height: 300,
  margin: 10,
  data: "https://qr-code-styling.com",
  type: "canvas",
  qrOptions: {
    typeNumber: 0,
    mode: "Byte",
    errorCorrectionLevel: "H",
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.5,
    margin: 5,
    crossOrigin: "anonymous",
  },
  image: "https://placehold.co/400x400/ffffff/701a75?text=QR+LAB&font=playfair-display",
  dotsOptions: {
    type: "square",
    color: "#000000",
  },
  backgroundOptions: {
    color: "#ffffff",
  },
  cornersSquareOptions: {
    type: "square",
    color: "#000000",
  },
  cornersDotOptions: {
    type: "square",
    color: "#000000",
  },
};

interface QRContextType {
  options: QRCodeOptions;
  setOptions: React.Dispatch<React.SetStateAction<QRCodeOptions>>;
  updateOption: (path: string, value: any) => void;
}

const QRContext = createContext<QRContextType | undefined>(undefined);

export function QRProvider({ children }: { children: React.ReactNode }) {
  const [options, setOptions] = useState<QRCodeOptions>(defaultOptions);

  const updateOption = useCallback((path: string, value: any) => {
    setOptions((prev) => {
      const keys = path.split(".");
      const newOptions = JSON.parse(JSON.stringify(prev)); // Deep clone
      
      let current = newOptions;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      
      // Log option update
      logFirebaseEvent('update_qr_option', { path, value: typeof value === 'object' ? 'object' : value });
      
      return newOptions;
    });
  }, []);

  return (
    <QRContext.Provider value={{ options, setOptions, updateOption }}>
      {children}
    </QRContext.Provider>
  );
}

export function useQR() {
  const context = useContext(QRContext);
  if (!context) {
    throw new Error("useQR must be used within a QRProvider");
  }
  return context;
}
