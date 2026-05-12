export function Hero() {
  return (
    <div className="relative h-32 w-full flex items-center overflow-hidden">
      {/* Chromatic Gradient Background - Adjusted to be more reddish-purple */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#701a75] to-white opacity-95" />
      
      {/* Text Content - Aligned to the absolute left */}
      <div className="relative z-10 w-full px-8">
        <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tighter flex items-center gap-2 drop-shadow-sm">
          <span className="bg-white text-black px-2 py-1 rounded">QR CODE</span>
          <span className="font-light italic opacity-90">styling</span>
        </h1>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
}
