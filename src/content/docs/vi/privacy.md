---
title: "Tệp, quyền riêng tư và sao lưu"
description: "Biết dữ liệu nào ở trên máy, yêu cầu AI đám mây có thể gửi gì, và cách giữ danh mục cùng PDF gốc."
---

## Đọc và lưu cục bộ

Đọc, thư viện, tạo, chuyển đổi và trích ảnh chạy trên máy. Không cần tài khoản để đọc. Danh mục lưu đường dẫn và thông tin, không thay PDF bằng bản sao trên đám mây.

Đổi tên hoặc chuyển ngoài ứng dụng có thể làm hỏng đường dẫn. Giữ tệp và ổ ngoài truy cập được, đồng thời sao lưu riêng.

## Sao lưu và khôi phục

Chuyển thư viện, cấu trúc thư mục, vị trí đọc, dấu trang, ảnh bìa và cài đặt hiển thị giữa các bản phân phối hoặc máy tính.

1. **Cài đặt → Nâng cao → Sao lưu và khôi phục**
2. **Bao gồm tệp gốc** — Sao chép tệp cục bộ trong thư viện. Sách trực tuyến giữ URL và không được tải xuống. Hãy kiểm tra tệp gốc bị thiếu trước khi xuất.
3. **Xuất bản sao lưu** — Chọn nơi lưu để tạo thư mục sao lưu PDFBook. Giữ nguyên toàn bộ thư mục và chọn thư mục đó khi khôi phục.

**Không kèm tệp gốc:** Không sao chép tệp gốc. Muốn đọc, tệp vẫn phải có ở vị trí ban đầu.

**Nhập bản sao lưu → Kiểm tra bản sao lưu → Khôi phục và khởi động lại**

> Tôi hiểu rằng thư viện và cài đặt hiển thị hiện tại sẽ bị thay thế và PDFBook khởi động lại. Các thư viện không được hợp nhất.

Trước khi thay thế, bản sao dự phòng có thể nhập lại được lưu vào backups trong thư mục dữ liệu. Các tệp gốc hiện có không bị xóa. Hãy thêm lại các thư mục theo dõi sau khi khôi phục. Không chuyển quét tự động để tránh nhập trùng hoặc quét nhầm thư mục.

Không bao gồm khóa API, cài đặt và lịch sử AI, mật khẩu PDF đã lưu và giấy phép. Cài đặt AI và giấy phép hiện tại được giữ nguyên.

## Sao chép thủ công dữ liệu ứng dụng

1. Mở **Cài đặt → Nâng cao → Mở thư mục dữ liệu người dùng**.
2. Đóng PDFBook để dữ liệu không đổi trong lúc sao chép.
3. Sao chép thư mục đó cùng các thư mục PDF gốc.

`library.json` chứa danh mục, `preferences.json` chứa cài đặt và `thumbnails/` chứa bìa. Tệp khác có thể chứa hội thoại, mật khẩu nhớ, giấy phép và cấu hình nhà cung cấp. Giữ bản sao riêng tư. Chỉ `library.json` không lưu nội dung sách.

## Kết nối do bạn chọn

Mở URL sẽ tải PDF. Cập nhật liên hệ GitHub, kích hoạt xác minh giấy phép. AI đám mây có thể gửi tin nhắn, ngữ cảnh, siêu dữ liệu, văn bản và ảnh được yêu cầu. Ollama chỉ cục bộ khi máy chủ cục bộ. URL từ xa vẫn từ xa.

## Chia sẻ báo cáo

Ưu tiên các bước và ví dụ công khai, không có khóa API, giấy phép, mật khẩu hay tài liệu riêng. Không đính kèm toàn bộ dữ liệu ứng dụng công khai. Xem [chính sách riêng tư](https://pdfbook.app/privacy) và [hướng dẫn AI](/vi/features/ai-assistant/).
