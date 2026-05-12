import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
  preview: React.ReactNode;
}

export function MainLayout({ children, preview }: MainLayoutProps) {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] bg-background overflow-hidden">
      {/* Sidebar: Configuration */}
      <aside className="w-full md:w-[380px] border-r border-border bg-card overflow-y-auto custom-scrollbar">
        <div className="p-6 space-y-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold tracking-tight">Configurações</h2>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Personalize seu QR Code</p>
          </div>
          <div className="pb-10">
            {children}
          </div>
        </div>
      </aside>

      {/* Main Content: Preview Area */}
      <main className="flex-1 bg-secondary/30 relative overflow-hidden flex flex-col">
        {/* Toolbar/Header for Preview */}
        <div className="h-12 border-b border-border bg-background/50 backdrop-blur-sm flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Visualização Ativa</span>
          </div>
          <div className="text-[10px] font-mono text-muted-foreground">
            SCALE: 100%
          </div>
        </div>

        {/* Preview Canvas */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-12 overflow-auto">
          <div className="relative group">
            {/* Decorative background for the QR Code */}
            <div className="absolute -inset-10 bg-primary/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50 scale-90 lg:scale-100 transition-transform">
              {preview}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="h-10 border-t border-border bg-background/50 backdrop-blur-sm flex items-center justify-center">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/50">
            Powered by QR LAB Studio Engine
          </span>
        </div>
      </main>
    </div>
  );
}
