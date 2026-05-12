import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { remoteConfigValues } = useTheme();
  const { t } = useLanguage();
  
  const heroTitle = remoteConfigValues.heroTitle || t('hero_title');
  const heroSubtitle = remoteConfigValues.heroSubtitle || t('hero_subtitle');

  return (
    <div className="w-full bg-background border-b border-border py-12">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          System Active v2.5
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase">
          {heroTitle}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
          {heroSubtitle}
        </p>
      </div>
    </div>
  );
}
