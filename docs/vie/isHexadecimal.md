# isHexadecimal

## Mô tả

`isHexadecimal` kiểm tra liệu một giá trị đã cho có phải là literal chuỗi thập lục phân với tiền tố bắt buộc `0x`/`0X`
hay không.

### Trường hợp sử dụng

Dùng `isHexadecimal` để xác thực các giá trị cấu hình, các trường trong payload API, hoặc đối số CLI bắt buộc phải được
cung cấp dưới dạng literal chuỗi thập lục phân (ví dụ: ID, mask, hoặc địa chỉ) và không được chứa khoảng trắng bao
quanh.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isHexadecimal` khi bạn cần xác thực dữ liệu người dùng nhập hoặc dữ liệu đã được tuần tự hóa như một chuỗi
> literal thập lục phân nghiêm ngặt (bao gồm tiền tố `0x`/`0X`) trước khi phân tích (parse) hoặc chuyển đổi.

### Ưu điểm

- Xác thực rằng một giá trị là chuỗi và khớp với định dạng literal thập lục phân nghiêm ngặt (yêu cầu tiền tố `0x`/
  `0X`).
- Từ chối các chuỗi có khoảng trắng ở đầu hoặc cuối, giúp tránh vô tình chấp nhận dữ liệu đầu vào có đệm.
- Hỗ trợ dấu tùy chọn và không phân biệt hoa/thường cho tiền tố và các chữ số, trả về `true`/`false` một cách nhất quán.

## Cách dùng

### Cú pháp

Hàm:

- `isHexadecimal(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // đúng
isHexadecimal("-0Xff"); // đúng
isHexadecimal("1A2B"); // sai (thiếu tiền tố)
isHexadecimal(" 0x1A2B"); // sai (khoảng trắng ở đầu)
isHexadecimal(0x1a2b); // sai (không phải chuỗi)

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isHexadecimal(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 23:01:53 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>