/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { MainLayout } from "@/components/layout/MainLayout";
import { QRProvider } from "@/context/QRContext";
import { QRCodePreview } from "@/components/QRCodePreview";
import { OptionsSidebar } from "@/components/OptionsSidebar";

export default function App() {
  return (
    <QRProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <MainLayout 
          preview={<QRCodePreview />}
        >
          <OptionsSidebar />
        </MainLayout>
      </div>
    </QRProvider>
  );
}


