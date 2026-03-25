import HeroSection from '@/components/features/HeroSection';
import VideoSlider from '@/components/features/VideoSlider';
import StorySection from '@/components/features/StorySection';
import BenefitsSection from '@/components/features/BenefitsSection';
import ProcessSection from '@/components/features/ProcessSection';
import ProductShowcase from '@/components/features/ProductShowcase';
import ProductGallery from '@/components/features/ProductGallery';
import TestimonialsSection from '@/components/features/TestimonialsSection';
import CustomerPhotosSlider from '@/components/features/CustomerPhotosSlider';
import PricingSection from '@/components/features/PricingSection';
import BlogSection from '@/components/features/BlogSection';
import CharitySection from '@/components/features/CharitySection';
import GuaranteeSection from '@/components/features/GuaranteeSection';
import CTASection from '@/components/features/CTASection';
import OrderForm from '@/components/features/OrderForm';
import FAQSection from '@/components/features/FAQSection';
import FacebookComments from '@/components/features/FacebookComments';
import CountdownTimer from '@/components/features/CountdownTimer';
import StickyOrderButton from '@/components/features/StickyOrderButton';
import ZaloButton from '@/components/features/ZaloButton';
import LanguageSwitcher from '@/components/features/LanguageSwitcher';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LandingPage() {
  const { language } = useLanguage();

  const countdownConfig = {
    vi: {
      enabled: true,
      title: 'ƯU ĐÃI KẾT THÚC SAU:',
      description: 'Giảm giá 30% chỉ áp dụng trong 24 giờ cho lần truy cập đầu tiên của bạn!',
    },
    en: {
      enabled: true,
      title: 'OFFER ENDS IN:',
      description: '30% discount only applies for 24 hours from your first visit!',
    },
  };

  const config = countdownConfig[language];

  return (
    <div className="min-h-screen bg-cream">
      {/* Language Switcher */}
      <LanguageSwitcher />
      
      {/* Countdown Timer Ưu Đãi */}
      {config.enabled && (
        <CountdownTimer 
          endDate={'2026-04-01T00:00:00'}
          title={config.title}
          description={config.description}
        />
      )}
      
      <HeroSection />
      <VideoSlider />
      <StorySection />
      <BenefitsSection />
      <ProcessSection />
      <ProductShowcase />
      <ProductGallery />
      <TestimonialsSection />
      <CustomerPhotosSlider />
      <BlogSection />
      <CharitySection />
      <GuaranteeSection />
      <PricingSection />
      <CTASection />
      <OrderForm />
      <FAQSection />
      <FacebookComments />
      <Footer />
      
      {/* Sticky Buttons */}
      <StickyOrderButton />
      <ZaloButton />
    </div>
  );
}
