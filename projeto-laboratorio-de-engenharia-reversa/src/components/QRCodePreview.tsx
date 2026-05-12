import { useQR } from "../context/QRContext";
import { useQRCode } from "../hooks/useQRCode";
import { Button } from "../components/ui/button";
import { Download } from "lucide-react";

export function QRCodePreview() {
  const { options } = useQR();
  const { ref, download } = useQRCode(options);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Container with max-width to prevent overflow and scale down if needed */}
      <div className="w-full max-w-[320px] flex justify-center overflow-hidden">
        <div 
          ref={ref} 
          className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:scale-[1.02] origin-center [&>canvas]:max-w-full [&>canvas]:h-auto [&>svg]:max-w-full [&>svg]:h-auto"
        />
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        {(["png", "svg", "jpeg", "webp"] as const).map((ext) => (
          <Button 
            key={ext}
            variant="outline" 
            size="sm" 
            onClick={() => download(ext)}
            className="text-[11px] uppercase font-bold tracking-wider h-8 px-3 bg-white hover:bg-gray-50 border-gray-200"
          >
            <Download size={12} className="mr-1" />
            {ext}
          </Button>
        ))}
      </div>
    </div>
  );
}
