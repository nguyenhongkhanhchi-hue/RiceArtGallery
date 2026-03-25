import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { OrderProvider } from '@/contexts/OrderContext';
import LandingPage from '@/pages/LandingPage';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <LanguageProvider>
      <OrderProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster position="top-right" richColors />
        </BrowserRouter>
      </OrderProvider>
    </LanguageProvider>
  );
}
