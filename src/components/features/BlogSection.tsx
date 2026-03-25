import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/constants/blog';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogSection() {
  const { language } = useLanguage();
  const posts = BLOG_POSTS[language];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {language === 'vi' ? 'Tin Tức & ' : 'News & '}
            <span className="bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600 bg-clip-text text-transparent">
              {language === 'vi' ? 'Bài Viết' : 'Articles'}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'vi'
              ? 'Cập nhật kiến thức và xu hướng mới nhất về nghệ thuật tranh gạo'
              : 'Latest knowledge and trends about rice art'}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-white text-sm font-bold rounded-full shadow-lg">
                    <Tag className="h-4 w-4" />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-gold-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Read More */}
                <button className="flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold group/btn">
                  <span>{language === 'vi' ? 'Đọc thêm' : 'Read more'}</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
            {language === 'vi' ? 'Xem Tất Cả Bài Viết →' : 'View All Articles →'}
          </button>
        </div>
      </div>
    </section>
  );
}
