// ============================================
// VIDEO GIỚI THIỆU / INTRODUCTION VIDEOS
// ============================================

/**
 * 🎥 HƯỚNG DẪN THAY ĐỔI VIDEO YOUTUBE:
 * 
 * Bước 1: Tìm video YouTube bạn muốn hiển thị
 * Bước 2: Copy URL video (ví dụ: https://www.youtube.com/watch?v=ABC123xyz)
 * Bước 3: Lấy phần ID sau dấu "v=" (ví dụ: ABC123xyz)
 * Bước 4: Paste ID vào trường "id" bên dưới
 * 
 * Lưu ý: 
 * - Video sẽ tự động chuyển sau 5 giây khi không phát
 * - Có thể thêm/bớt video bằng cách thêm/xóa object trong mảng
 * - Title và description được hiển thị dưới video
 */

export const YOUTUBE_VIDEOS = {
  vi: [
    {
      id: 'dQw4w9WgXcQ', // ⚠️ THAY ĐỔI ID: Video quy trình viết chữ trên gạo
      title: 'Quy Trình Viết Chữ Trên Hạt Gạo',
      description: 'Xem nghệ nhân tài hoa viết từng chữ thư pháp trên hạt gạo nhỏ bé với độ chính xác tuyệt đối',
    },
    {
      id: 'jNQXAC9IVRw', // ⚠️ THAY ĐỔI ID: Video giới thiệu sản phẩm
      title: 'Tranh Gạo May Mắn - Nghệ Thuật Độc Đáo',
      description: 'Khám phá vẻ đẹp tinh xảo và ý nghĩa phong thủy của tranh gạo thư pháp',
    },
    {
      id: '9bZkp7q19f0', // ⚠️ THAY ĐỔI ID: Video feedback khách hàng
      title: 'Khách Hàng Đánh Giá & Unboxing',
      description: 'Nghe những phản hồi chân thật từ hơn 5000 khách hàng hài lòng với tranh gạo',
    },
  ],
  en: [
    {
      id: 'dQw4w9WgXcQ', // ⚠️ CHANGE ID: Video of calligraphy process
      title: 'Writing Calligraphy on Rice Grains',
      description: 'Watch talented artisans write calligraphy on tiny rice grains with absolute precision',
    },
    {
      id: 'jNQXAC9IVRw', // ⚠️ CHANGE ID: Product introduction video
      title: 'Lucky Rice Art - Unique Artistry',
      description: 'Discover the exquisite beauty and feng shui meaning of rice calligraphy art',
    },
    {
      id: '9bZkp7q19f0', // ⚠️ CHANGE ID: Customer feedback video
      title: 'Customer Reviews & Unboxing',
      description: 'Hear genuine feedback from over 5000 satisfied customers with rice art',
    },
  ],
};
