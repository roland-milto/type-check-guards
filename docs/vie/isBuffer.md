# isBuffer

## Mô tả

Kiểm tra xem một giá trị có phải là `Buffer` của Node.js hay không và trả về `true` hoặc `false`.

### Trường hợp sử dụng

Xác thực đầu vào lúc chạy (ví dụ: payload API, dữ liệu tệp, hoặc bộ đệm thông điệp) để đảm bảo một giá trị là `Buffer`
trước khi xử lý, và nhận `false` một cách đáng tin cậy khi chạy ngoài Node.js nơi `Buffer` có thể không tồn tại.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isBuffer` để thu hẹp các giá trị `unknown` thành `Buffer` trước khi gọi các phương thức dành riêng cho Buffer.

### Ưu điểm

- Phát hiện an toàn các thể hiện `Buffer` của Node.js bằng `Buffer.isBuffer`.
- Trả về `false` trong các môi trường không có `Buffer`, tránh lỗi khi chạy (runtime errors).
- Hoạt động với đầu vào kiểu `unknown`, phù hợp cho việc kiểm tra hợp lệ lúc chạy và thu hẹp kiểu (type narrowing).

## Cách dùng

### Cú pháp

Hàm:

- `isBuffer(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // đúng
console.log(isBuffer(b)); // sai

if (isBuffer(a)) {
  // a là một Buffer ở đây
  console.log(a.toString("utf8"));
}
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isBuffer(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 16:33:51 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>