import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
  preview: React.ReactNode;
}

export function MainLayout({ children, preview }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-purple-100">
      <main className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 py-8 gap-8">
        {/* Left Column: Scrollable Options */}
        <div className="flex-1 space-y-6 pb-20">
          {children}
        </div>

        {/* Right Column: Fixed Preview */}
        <div className="w-full md:w-[400px] relative">
          <div className="md:sticky md:top-8 space-y-6">
            <div className="bg-[#f9f9f9] border border-gray-100 rounded-xl p-8 shadow-sm flex flex-col min-h-[450px] relative">
              {/* Top Left: QR CODE LIVE */}
              <div className="absolute top-4 left-4 text-[13px] text-gray-400 font-bold tracking-wider uppercase">
                QR CODE LIVE
              </div>

              {/* Center: QR Code Preview */}
              <div className="flex-1 flex items-center justify-center">
                {preview}
              </div>

              {/* Bottom Center: Branding */}
              <div className="absolute bottom-6 left-0 w-full flex flex-col items-center">
                <div className="h-[1px] w-16 bg-gray-200 mb-3" />
                <div className="text-[14px] text-gray-400 font-bold tracking-[0.25em] uppercase">
                  QR CODE <span className="font-light italic lowercase tracking-normal">styling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
