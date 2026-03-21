import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="text-center px-4">
        <h1 className="text-9xl font-display font-bold text-gradient-gold mb-4">404</h1>
        <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">
          Không Tìm Thấy Trang
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <Button 
          onClick={() => navigate('/')}
          size="lg"
          className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700"
        >
          <Home className="mr-2 h-5 w-5" />
          Về Trang Chủ
        </Button>
      </div>
    </div>
  );
}
