import React from "react"
import { cn } from "@/lib/utils"

interface SliderProps {
  value: number[]
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number[]) => void
  className?: string
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ className, value, min = 0, max = 100, step = 1, onValueChange }, ref) => {
    const currentValue = value[0] ?? min;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(e.target.value);
      if (onValueChange) {
        onValueChange([newValue]);
      }
    };

    return (
      <div ref={ref} className={cn("relative w-full flex items-center gap-4 py-2", className)}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onChange={handleChange}
          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary/80 transition-all"
        />
        <span className="min-w-[3rem] text-right font-mono text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
          {currentValue}
        </span>
      </div>
    )
  }
)
Slider.displayName = "Slider"

export { Slider }
