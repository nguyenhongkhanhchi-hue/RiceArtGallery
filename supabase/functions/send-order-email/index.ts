import { corsHeaders } from '../_shared/cors.ts';

interface OrderData {
  name: string;
  phone: string;
  email: string;
  address: string;
  package: string;
  message?: string;
  attachments?: string[];
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const orderData: OrderData = await req.json();
    console.log('Processing order:', orderData);

    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background: linear-gradient(135deg, #78350f 0%, #92400e 50%, #eab308 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: #fde047; margin: 0; font-size: 28px;">🌾 Đơn Hàng Mới - Tranh Gạo May Mắn</h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #78350f; border-bottom: 3px solid #eab308; padding-bottom: 10px;">Thông Tin Khách Hàng</h2>
          
          <table style="width: 100%; margin: 20px 0; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background-color: #fef9c3; font-weight: bold; width: 40%;">👤 Họ và Tên:</td>
              <td style="padding: 12px; background-color: #fffbeb;">${orderData.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #fef9c3; font-weight: bold;">📞 Số Điện Thoại:</td>
              <td style="padding: 12px; background-color: #fffbeb;">${orderData.phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #fef9c3; font-weight: bold;">✉️ Email:</td>
              <td style="padding: 12px; background-color: #fffbeb;">${orderData.email}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #fef9c3; font-weight: bold;">📍 Địa Chỉ:</td>
              <td style="padding: 12px; background-color: #fffbeb;">${orderData.address}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #fef9c3; font-weight: bold;">📦 Gói Sản Phẩm:</td>
              <td style="padding: 12px; background-color: #fffbeb; color: #b45309; font-weight: bold; font-size: 16px;">${orderData.package}</td>
            </tr>
          </table>

          ${orderData.message ? `
            <h3 style="color: #78350f; margin-top: 30px; border-bottom: 2px solid #eab308; padding-bottom: 10px;">💬 Lời Nhắn</h3>
            <p style="background-color: #fffbeb; padding: 15px; border-left: 4px solid #eab308; margin: 15px 0; line-height: 1.6;">
              ${orderData.message}
            </p>
          ` : ''}

          ${orderData.attachments && orderData.attachments.length > 0 ? `
            <h3 style="color: #78350f; margin-top: 30px; border-bottom: 2px solid #eab308; padding-bottom: 10px;">📎 Hình Ảnh Đính Kèm</h3>
            <p style="color: #666; margin: 10px 0;">Khách hàng đã gửi ${orderData.attachments.length} hình ảnh:</p>
            <ul style="list-style: none; padding: 0;">
              ${orderData.attachments.map((url, i) => `
                <li style="margin: 8px 0;">
                  <a href="${url}" style="color: #b45309; text-decoration: none; font-weight: 500;">
                    🖼️ Hình ảnh ${i + 1}: ${url}
                  </a>
                </li>
              `).join('')}
            </ul>
          ` : ''}

          <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #fef9c3 0%, #fde047 100%); border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #78350f; font-weight: bold; font-size: 14px;">
              ⏰ Đơn hàng được gửi vào: ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>Email này được gửi tự động từ hệ thống Tranh Gạo May Mắn</p>
        </div>
      </div>
    `;

    // Send email via Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY not configured');
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Tranh Gạo May Mắn <onboarding@resend.dev>',
        to: [orderData.email], // Send to customer
        subject: `✅ Xác Nhận Đơn Hàng - ${orderData.package}`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error:', errorText);
      throw new Error(`Resend: ${errorText}`);
    }

    const result = await resendResponse.json();
    console.log('Email sent successfully:', result);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Đơn hàng đã được gửi thành công!',
        emailId: result.id 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error processing order:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Có lỗi xảy ra khi xử lý đơn hàng' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
