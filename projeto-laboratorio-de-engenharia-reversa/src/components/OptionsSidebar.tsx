import { useQR } from "../context/QRContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function OptionsSidebar() {
  const { options, updateOption } = useQR();

  return (
    <Accordion type="multiple" defaultValue={["main"]} className="w-full space-y-4">
      {/* Main Options */}
      <AccordionItem value="main" className="border border-gray-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-[#e5e5e5] px-4 py-3 hover:no-underline hover:bg-[#dadada] transition-colors">
          <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Main Options</span>
        </AccordionTrigger>
        <AccordionContent className="p-6 bg-white space-y-6">
          <div className="space-y-2">
            <Label htmlFor="data" className="text-xs font-bold uppercase text-gray-500">Data</Label>
            <Input 
              id="data" 
              value={options.data} 
              onChange={(e) => updateOption("data", e.target.value)}
              className="bg-gray-50 border-gray-200 focus:ring-purple-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase text-gray-500">Width ({options.width}px)</Label>
              <Slider 
                value={[options.width]} 
                min={100} 
                max={1000} 
                step={10}
                onValueChange={(val) => updateOption("width", Array.isArray(val) ? val[0] : val)}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase text-gray-500">Height ({options.height}px)</Label>
              <Slider 
                value={[options.height]} 
                min={100} 
                max={1000} 
                step={10}
                onValueChange={(val) => updateOption("height", Array.isArray(val) ? val[0] : val)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-gray-500">Margin ({options.margin}px)</Label>
            <Slider 
              value={[options.margin]} 
              min={0} 
              max={100} 
              step={1}
              onValueChange={(val) => updateOption("margin", Array.isArray(val) ? val[0] : val)}
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Dots Options */}
      <AccordionItem value="dots" className="border border-gray-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-[#e5e5e5] px-4 py-3 hover:no-underline hover:bg-[#dadada] transition-colors">
          <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Dots Options</span>
        </AccordionTrigger>
        <AccordionContent className="p-6 bg-white space-y-6">
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-gray-500">Dot Type</Label>
            <Select 
              value={options.dotsOptions.type} 
              onValueChange={(val) => updateOption("dotsOptions.type", val)}
            >
              <SelectTrigger className="bg-gray-50 border-gray-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["rounded", "dots", "classy", "classy-rounded", "square", "extra-rounded"].map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-gray-500">Color</Label>
            <div className="flex gap-2">
              <Input 
                type="color" 
                value={options.dotsOptions.color} 
                onChange={(e) => updateOption("dotsOptions.color", e.target.value)}
                className="w-12 h-10 p-1 bg-white border-gray-200 cursor-pointer"
              />
              <Input 
                value={options.dotsOptions.color} 
                onChange={(e) => updateOption("dotsOptions.color", e.target.value)}
                className="flex-1 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Background Options */}
      <AccordionItem value="background" className="border border-gray-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-[#e5e5e5] px-4 py-3 hover:no-underline hover:bg-[#dadada] transition-colors">
          <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Background Options</span>
        </AccordionTrigger>
        <AccordionContent className="p-6 bg-white space-y-6">
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-gray-500">Color</Label>
            <div className="flex gap-2">
              <Input 
                type="color" 
                value={options.backgroundOptions.color} 
                onChange={(e) => updateOption("backgroundOptions.color", e.target.value)}
                className="w-12 h-10 p-1 bg-white border-gray-200 cursor-pointer"
              />
              <Input 
                value={options.backgroundOptions.color} 
                onChange={(e) => updateOption("backgroundOptions.color", e.target.value)}
                className="flex-1 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Corners Square Options */}
      <AccordionItem value="cornersSquare" className="border border-gray-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-[#e5e5e5] px-4 py-3 hover:no-underline hover:bg-[#dadada] transition-colors">
          <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Corners Square Options</span>
        </AccordionTrigger>
        <AccordionContent className="p-6 bg-white space-y-6">
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-gray-500">Type</Label>
            <Select 
              value={options.cornersSquareOptions.type} 
              onValueChange={(val) => updateOption("cornersSquareOptions.type", val)}
            >
              <SelectTrigger className="bg-gray-50 border-gray-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["dot", "square", "extra-rounded"].map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-gray-500">Color</Label>
            <div className="flex gap-2">
              <Input 
                type="color" 
                value={options.cornersSquareOptions.color} 
                onChange={(e) => updateOption("cornersSquareOptions.color", e.target.value)}
                className="w-12 h-10 p-1 bg-white border-gray-200 cursor-pointer"
              />
              <Input 
                value={options.cornersSquareOptions.color} 
                onChange={(e) => updateOption("cornersSquareOptions.color", e.target.value)}
                className="flex-1 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Corners Dot Options */}
      <AccordionItem value="cornersDot" className="border border-gray-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-[#e5e5e5] px-4 py-3 hover:no-underline hover:bg-[#dadada] transition-colors">
          <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Corners Dot Options</span>
        </AccordionTrigger>
        <AccordionContent className="p-6 bg-white space-y-6">
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-gray-500">Type</Label>
            <Select 
              value={options.cornersDotOptions.type} 
              onValueChange={(val) => updateOption("cornersDotOptions.type", val)}
            >
              <SelectTrigger className="bg-gray-50 border-gray-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["dot", "square"].map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-gray-500">Color</Label>
            <div className="flex gap-2">
              <Input 
                type="color" 
                value={options.cornersDotOptions.color} 
                onChange={(e) => updateOption("cornersDotOptions.color", e.target.value)}
                className="w-12 h-10 p-1 bg-white border-gray-200 cursor-pointer"
              />
              <Input 
                value={options.cornersDotOptions.color} 
                onChange={(e) => updateOption("cornersDotOptions.color", e.target.value)}
                className="flex-1 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Image Options */}
      <AccordionItem value="image" className="border border-gray-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-[#e5e5e5] px-4 py-3 hover:no-underline hover:bg-[#dadada] transition-colors">
          <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Image Options</span>
        </AccordionTrigger>
        <AccordionContent className="p-6 bg-white space-y-6">
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-gray-500">Image URL</Label>
            <Input 
              placeholder="https://example.com/logo.png"
              value={options.image || ""} 
              onChange={(e) => updateOption("image", e.target.value)}
              className="bg-gray-50 border-gray-200"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-gray-500">Image Size ({Math.round(options.imageOptions.imageSize * 100)}%)</Label>
            <Slider 
              value={[options.imageOptions.imageSize * 100]} 
              min={10} 
              max={50} 
              step={1}
              onValueChange={(val) => updateOption("imageOptions.imageSize", (Array.isArray(val) ? val[0] : val) / 100)}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-gray-500">Image Margin ({options.imageOptions.margin}px)</Label>
            <Slider 
              value={[options.imageOptions.margin]} 
              min={0} 
              max={50} 
              step={1}
              onValueChange={(val) => updateOption("imageOptions.margin", Array.isArray(val) ? val[0] : val)}
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* QR Options */}
      <AccordionItem value="qr" className="border border-gray-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-[#e5e5e5] px-4 py-3 hover:no-underline hover:bg-[#dadada] transition-colors">
          <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">QR Options</span>
        </AccordionTrigger>
        <AccordionContent className="p-6 bg-white space-y-6">
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-gray-500">Error Correction Level</Label>
            <Select 
              value={options.qrOptions.errorCorrectionLevel} 
              onValueChange={(val) => updateOption("qrOptions.errorCorrectionLevel", val)}
            >
              <SelectTrigger className="bg-gray-50 border-gray-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["L", "M", "Q", "H"].map((level) => (
                  <SelectItem key={level} value={level}>{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Export Options */}
      <AccordionItem value="export" className="border border-gray-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-[#e5e5e5] px-4 py-3 hover:no-underline hover:bg-[#dadada] transition-colors">
          <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Export Options</span>
        </AccordionTrigger>
        <AccordionContent className="p-6 bg-white space-y-6">
          <div className="text-sm text-gray-500 italic">
            Use the download buttons in the preview panel to export your QR code in various formats.
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
