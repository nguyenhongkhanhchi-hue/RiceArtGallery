import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Chị Ngọc Anh',
    location: 'Hà Nội',
    rating: 5,
    text: 'Tôi đã mua tranh gạo tặng bố mẹ nhân dịp tân gia. Họ rất thích! Tranh đẹp, tinh xảo đến không ngờ. Mỗi hạt gạo đều có chữ rõ nét, thật sự là tác phẩm nghệ thuật.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces'
  },
  {
    name: 'Anh Minh Tuấn',
    location: 'TP.HCM',
    rating: 5,
    text: 'Công ty tôi đặt 10 bộ tranh làm quà tặng đối tác. Ai cũng khen ngợi! Đây là món quà độc đáo và ý nghĩa nhất mà chúng tôi từng tặng. Sẽ tiếp tục ủng hộ.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
  },
  {
    name: 'Chị Hương Lan',
    location: 'Đà Nẵng',
    rating: 5,
    text: 'Ban đầu tôi nghĩ đây chỉ là ảnh photoshop, nhưng khi nhận hàng mới thấy thật sự mỗi hạt gạo đều được viết chữ. Quá tuyệt vời! Nhà tôi treo ở phòng khách, ai đến cũng hỏi.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces'
  },
  {
    name: 'Anh Đức Thịnh',
    location: 'Cần Thơ',
    rating: 5,
    text: 'Mua lần 2 rồi! Lần đầu mua tặng vợ sinh nhật, lần này mua tặng mẹ. Tranh đẹp, đóng gói cẩn thận, ship nhanh. Giá cả hợp lý so với giá trị nghệ thuật nhận được.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces'
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Khách Hàng <span className="text-gradient-gold">Nói Gì</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hơn 5000 khách hàng đã tin tưởng và hài lòng với sản phẩm của chúng tôi
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg">
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-200"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-gold mb-2">5000+</div>
            <div className="text-gray-600">Khách Hàng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-gold mb-2">4.9⭐</div>
            <div className="text-gray-600">Đánh Giá TB</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-gold mb-2">98%</div>
            <div className="text-gray-600">Hài Lòng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-gold mb-2">24h</div>
            <div className="text-gray-600">Giao Hàng</div>
          </div>
        </div>
      </div>
    </section>
  );
}
