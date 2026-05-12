import { useQR } from "../context/QRContext";
import { useQRCode } from "../hooks/useQRCode";
import { Button } from "../components/ui/button";
import { Download } from "lucide-react";
import { logFirebaseEvent } from "../lib/firebase";

export function QRCodePreview() {
  const { options } = useQR();
  const { ref, download } = useQRCode(options);

  const handleDownload = (ext: "png" | "svg" | "jpeg" | "webp") => {
    download(ext);
    logFirebaseEvent('download_qr_code', { format: ext, data_length: options.data.length });
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* QR Code Container */}
      <div 
        ref={ref} 
        className="bg-white p-6 rounded-2xl shadow-lg border border-border transition-all duration-300 hover:scale-[1.02] origin-center [&>canvas]:max-w-full [&>canvas]:h-auto [&>svg]:max-w-full [&>svg]:h-auto"
      />
      
      {/* Download Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {(["png", "svg", "jpeg", "webp"] as const).map((ext) => (
          <Button 
            key={ext}
            variant="outline" 
            size="sm" 
            onClick={() => handleDownload(ext)}
            className="text-[11px] uppercase font-bold tracking-widest h-9 px-4 bg-card hover:bg-primary hover:text-primary-foreground border-border transition-all"
          >
            <Download size={14} className="mr-2" />
            {ext}
          </Button>
        ))}
      </div>
    </div>
  );
}
