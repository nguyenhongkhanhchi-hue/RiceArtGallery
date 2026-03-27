import HeroSection from '@/components/features/HeroSection';
import CountdownTimer from '@/components/features/CountdownTimer';
import VideoSlider from '@/components/features/VideoSlider';
import StorySection from '@/components/features/StorySection';
import BenefitsSection from '@/components/features/BenefitsSection';
import ProcessSection from '@/components/features/ProcessSection';
import ProductGallery from '@/components/features/ProductGallery';
import TestimonialsSection from '@/components/features/TestimonialsSection';
import CustomerPhotosSlider from '@/components/features/CustomerPhotosSlider';
import PricingSection from '@/components/features/PricingSection';
import CharitySection from '@/components/features/CharitySection';
import GuaranteeSection from '@/components/features/GuaranteeSection';
import BlogSection from '@/components/features/BlogSection';
import FAQSection from '@/components/features/FAQSection';
import CTASection from '@/components/features/CTASection';
import OrderForm from '@/components/features/OrderForm';
import FacebookComments from '@/components/features/FacebookComments';
import Footer from '@/components/layout/Footer';
import StickyOrderButton from '@/components/features/StickyOrderButton';
import LanguageSwitcher from '@/components/features/LanguageSwitcher';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Language Switcher - Fixed Top Right */}
      <LanguageSwitcher />
      
      {/* Sticky Order & Zalo Buttons */}
      <StickyOrderButton />
      
      {/* Hero với Countdown Timer */}
      <HeroSection />
      <CountdownTimer />
      
      {/* Video Giới Thiệu */}
      <VideoSlider />
      
      {/* Câu Chuyện & Lợi Ích */}
      <StorySection />
      <BenefitsSection />
      
      {/* Quy Trình & Gallery */}
      <ProcessSection />
      <ProductGallery />
      
      {/* Đánh Giá & Khách Hàng */}
      <TestimonialsSection />
      <CustomerPhotosSlider />
      
      {/* Bảng Giá */}
      <PricingSection />
      
      {/* Từ Thiện & Bảo Đảm */}
      <CharitySection />
      <GuaranteeSection />
      
      {/* Blog */}
      <BlogSection />
      
      {/* FAQ */}
      <FAQSection />
      
      {/* CTA & Form Đặt Hàng */}
      <CTASection />
      <OrderForm />
      
      {/* Facebook Comments */}
      <FacebookComments />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
