import React from "react";
import { useQR } from "../context/QRContext";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Settings2, Box, Image as ImageIcon, Layout, Maximize } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function OptionsSidebar() {
  const { options, updateOption } = useQR();
  const { t } = useLanguage();

  const ControlGroup = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div className="space-y-3">
      <Label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">{label}</Label>
      {children}
    </div>
  );

  return (
    <Accordion type="multiple" defaultValue={["main"]} className="w-full space-y-2">
      {/* Main Options */}
      <AccordionItem value="main" className="border-none">
        <AccordionTrigger className="px-0 py-4 hover:no-underline group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Settings2 size={16} />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider">{t('main_options')}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-0 pb-6 pt-2 space-y-6">
          <ControlGroup label={t('data')}>
            <Input 
              value={options?.data || ""} 
              onChange={(e) => updateOption("data", e.target.value)}
              className="bg-background border-border font-mono text-xs h-10"
              placeholder="https://..."
            />
          </ControlGroup>

          <div className="grid grid-cols-1 gap-6">
            <ControlGroup label={`${t('width')} (px)`}>
              <Slider 
                value={[options?.width || 300]} 
                min={100} 
                max={1000} 
                step={10}
                onValueChange={(val) => updateOption("width", val[0])}
              />
            </ControlGroup>
            <ControlGroup label={`${t('height')} (px)`}>
              <Slider 
                value={[options?.height || 300]} 
                min={100} 
                max={1000} 
                step={10}
                onValueChange={(val) => updateOption("height", val[0])}
              />
            </ControlGroup>
            <ControlGroup label={`${t('margin')} (px)`}>
              <Slider 
                value={[options?.margin ?? 10]} 
                min={0} 
                max={100} 
                step={1}
                onValueChange={(val) => updateOption("margin", val[0])}
              />
            </ControlGroup>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Dots Options */}
      <AccordionItem value="dots" className="border-none">
        <AccordionTrigger className="px-0 py-4 hover:no-underline group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Box size={16} />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider">{t('dots_options')}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-0 pb-6 pt-2 space-y-6">
          <ControlGroup label={t('type')}>
            <Select 
              value={options?.dotsOptions?.type || "square"} 
              onValueChange={(val) => updateOption("dotsOptions.type", val)}
            >
              <SelectTrigger className="bg-background border-border text-xs h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["rounded", "dots", "classy", "classy-rounded", "square", "extra-rounded"].map((type) => (
                  <SelectItem key={type} value={type} className="text-xs">{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </ControlGroup>

          <ControlGroup label={t('color')}>
            <div className="flex gap-2">
              <Input 
                type="color" 
                value={options?.dotsOptions?.color || "#000000"} 
                onChange={(e) => updateOption("dotsOptions.color", e.target.value)}
                className="w-12 h-10 p-1 bg-background border-border cursor-pointer rounded-lg shrink-0"
              />
              <Input 
                value={options?.dotsOptions?.color || "#000000"} 
                onChange={(e) => updateOption("dotsOptions.color", e.target.value)}
                className="flex-1 bg-background border-border font-mono text-xs h-10"
              />
            </div>
          </ControlGroup>
        </AccordionContent>
      </AccordionItem>

      {/* Background Options */}
      <AccordionItem value="background" className="border-none">
        <AccordionTrigger className="px-0 py-4 hover:no-underline group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Layout size={16} />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider">{t('background_options')}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-0 pb-6 pt-2 space-y-6">
          <ControlGroup label={t('color')}>
            <div className="flex gap-2">
              <Input 
                type="color" 
                value={options?.backgroundOptions?.color || "#ffffff"} 
                onChange={(e) => updateOption("backgroundOptions.color", e.target.value)}
                className="w-12 h-10 p-1 bg-background border-border cursor-pointer rounded-lg shrink-0"
              />
              <Input 
                value={options?.backgroundOptions?.color || "#ffffff"} 
                onChange={(e) => updateOption("backgroundOptions.color", e.target.value)}
                className="flex-1 bg-background border-border font-mono text-xs h-10"
              />
            </div>
          </ControlGroup>
        </AccordionContent>
      </AccordionItem>

      {/* Corners Options */}
      <AccordionItem value="corners" className="border-none">
        <AccordionTrigger className="px-0 py-4 hover:no-underline group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Maximize size={16} />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider">{t('corners_square')}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-0 pb-6 pt-2 space-y-6">
          <ControlGroup label={t('type')}>
            <Select 
              value={options?.cornersSquareOptions?.type || "square"} 
              onValueChange={(val) => updateOption("cornersSquareOptions.type", val)}
            >
              <SelectTrigger className="bg-background border-border text-xs h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["dot", "square", "extra-rounded"].map((type) => (
                  <SelectItem key={type} value={type} className="text-xs">{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </ControlGroup>
          <ControlGroup label={t('color')}>
            <div className="flex gap-2">
              <Input 
                type="color" 
                value={options?.cornersSquareOptions?.color || "#000000"} 
                onChange={(e) => updateOption("cornersSquareOptions.color", e.target.value)}
                className="w-12 h-10 p-1 bg-background border-border cursor-pointer rounded-lg shrink-0"
              />
              <Input 
                value={options?.cornersSquareOptions?.color || "#000000"} 
                onChange={(e) => updateOption("cornersSquareOptions.color", e.target.value)}
                className="flex-1 bg-background border-border font-mono text-xs h-10"
              />
            </div>
          </ControlGroup>
        </AccordionContent>
      </AccordionItem>

      {/* Image Options */}
      <AccordionItem value="image" className="border-none">
        <AccordionTrigger className="px-0 py-4 hover:no-underline group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <ImageIcon size={16} />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider">{t('image_options')}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-0 pb-6 pt-2 space-y-6">
          <ControlGroup label={t('image_url')}>
            <Input 
              placeholder="https://..."
              value={options?.image || ""} 
              onChange={(e) => updateOption("image", e.target.value)}
              className="bg-background border-border text-xs h-10"
            />
          </ControlGroup>
          <ControlGroup label={`${t('image_size')} (%)`}>
            <Slider 
              value={[(options?.imageOptions?.imageSize ?? 0.5) * 100]} 
              min={10} 
              max={50} 
              step={1}
              onValueChange={(val) => updateOption("imageOptions.imageSize", val[0] / 100)}
            />
          </ControlGroup>
          <ControlGroup label={`${t('image_margin')} (px)`}>
            <Slider 
              value={[options?.imageOptions?.margin ?? 5]} 
              min={0} 
              max={50} 
              step={1}
              onValueChange={(val) => updateOption("imageOptions.margin", val[0])}
            />
          </ControlGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
