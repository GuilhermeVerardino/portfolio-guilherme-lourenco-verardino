/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MainLayout } from "@/components/layout/MainLayout";
import { QRProvider } from "@/context/QRContext";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { QRCodePreview } from "@/components/QRCodePreview";
import { OptionsSidebar } from "@/components/OptionsSidebar";
import { SupportChat } from "@/components/SupportChat";
import { logFirebaseEvent } from "@/lib/firebase";

export default function App() {
  useEffect(() => {
    logFirebaseEvent('page_view', { page_title: 'Home' });
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <QRProvider>
            <div className="h-screen flex flex-col bg-background text-foreground transition-colors duration-300 overflow-hidden">
              <Navbar />
              <MainLayout 
                preview={<QRCodePreview />}
              >
                <OptionsSidebar />
              </MainLayout>
              <SupportChat />
            </div>
          </QRProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}


