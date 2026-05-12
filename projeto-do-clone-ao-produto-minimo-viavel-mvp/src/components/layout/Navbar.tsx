import { Github, LogIn, LogOut, User, Sun, Moon, Languages, Cpu } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage, Language } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt-BR', label: 'Português (BR)', flag: '🇧🇷' },
    { code: 'pt-PT', label: 'Português (PT)', flag: '🇵🇹' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
  ];

  return (
    <nav className="h-14 glass border-b border-border/50 flex items-center justify-between px-6 text-[13px] text-muted-foreground font-sans transition-colors sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
            <Cpu size={18} />
          </div>
          <span className="font-black text-foreground tracking-tighter text-xl uppercase italic">
            QR<span className="text-primary not-italic">LAB</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-4 border-l border-border pl-6">
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">Core System</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-9 px-3 rounded-xl hover:bg-accent hover:text-accent-foreground transition-all flex items-center gap-2 border border-transparent hover:border-border">
              <Languages size={14} />
              <span className="uppercase text-[10px] font-mono font-bold">{language.split('-')[0]}</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 rounded-xl p-2 glass neo-shadow">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`flex items-center gap-3 cursor-pointer rounded-lg p-2 transition-colors ${language === lang.code ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-accent'}`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-xs font-medium">{lang.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <button 
          onClick={toggleTheme}
          className="w-9 h-9 rounded-xl hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center border border-transparent hover:border-border"
          title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
        >
          {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
        </button>

        <div className="h-6 w-[1px] bg-border/50 mx-1" />
        
        {user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-2 py-1 rounded-xl bg-secondary/50 border border-border/50">
              {user.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt={user.displayName || "User"} 
                  className="w-6 h-6 rounded-lg border border-border"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <User size={12} />
                </div>
              )}
              <span className="hidden sm:inline text-xs font-bold text-foreground max-w-[100px] truncate">
                {user.displayName || user.email?.split('@')[0]}
              </span>
            </div>
            <button 
              onClick={logout}
              className="flex items-center gap-2 hover:text-destructive transition-colors font-mono font-bold uppercase text-[10px] tracking-tighter"
            >
              <LogOut size={14} />
              <span className="hidden md:inline">{t('logout')}</span>
            </button>
          </div>
        ) : (
          <button 
            onClick={login}
            className="h-9 px-4 bg-primary text-primary-foreground rounded-xl font-bold uppercase text-[11px] tracking-wider shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-[0.98]"
          >
            {t('login')}
          </button>
        )}
      </div>
    </nav>
  );
}
