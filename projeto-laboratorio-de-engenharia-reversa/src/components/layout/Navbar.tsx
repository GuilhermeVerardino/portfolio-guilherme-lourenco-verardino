import { Github } from "lucide-react";

export function Navbar() {
  return (
    <nav className="h-10 bg-[#f5f5f5] border-b border-gray-200 flex items-center justify-between px-4 text-[13px] text-gray-600 font-sans">
      <div className="flex items-center gap-4">
        <span className="font-medium text-gray-800">qr code styling</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 bg-white border border-gray-300 rounded px-2 py-0.5 h-6">
          <span className="font-mono text-[11px]">npm</span>
          <span className="font-mono text-[11px] font-bold">v1.8.3</span>
        </div>
        <a 
          href="https://github.com/denysvitali/qr-code-styling" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-black transition-colors"
        >
          <Github size={14} />
          <span>github</span>
        </a>
      </div>
    </nav>
  );
}
