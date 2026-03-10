# isDecimal

## Mô tả

`isDecimal` kiểm tra liệu một giá trị có phải là biểu diễn chuỗi thập phân không, không có khoảng trắng ở đầu/cuối và có
định dạng thập phân hợp lệ.

### Trường hợp sử dụng

Xác thực các trường biểu mẫu, payload API, hoặc giá trị cấu hình bắt buộc phải được cung cấp dưới dạng chuỗi thập phân (
có thể có dấu) mà không có bất kỳ khoảng trắng bao quanh nào, trước khi phân tích hoặc lưu trữ chúng.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isDecimal` để xác thực dữ liệu người dùng nhập trước khi chuyển đổi nó (ví dụ, với `Number(value)`), đặc biệt
> khi cần từ chối khoảng trắng.

### Ưu điểm

- Xác thực nghiêm ngặt rằng đầu vào là một chuỗi và khớp với mẫu literal thập phân.
- Từ chối khoảng trắng ở đầu và cuối (bao gồm cả ký tự điều khiển) để tránh việc phân tích mơ hồ.
- Thực hiện các kiểm tra nhanh trước (kiểm tra kiểu và ký tự đầu/cuối) trước khi chạy regex.
- Trả về kết quả boolean đơn giản (`true`/`false`) phù hợp cho guard và xác thực đầu vào.

## Cách dùng

### Cú pháp

Hàm:

- `isDecimal(value)`

Tham số:

- `value`: Giá trị cần kiểm tra xem có đúng định dạng chuỗi thập phân hay không.

### Nhập hàm cục bộ

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v là một chuỗi ở đây (đã được xác thực lúc chạy)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isDecimal(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 15:55:17 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>