# isNull

## Mô tả

Xác định liệu `value` được cung cấp có phải là `null` hay không.

### Trường hợp sử dụng

Dùng `isNull` để xác thực đầu vào hoặc các trường payload API nơi `null` là một giá trị canh gác (sentinel) có ý nghĩa
và phải được xử lý khác với `undefined` hoặc các giá trị khác.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isNull` khi bạn cần phân biệt `null` với `undefined` và các giá trị falsy khác; hàm chỉ trả về `true` đối với
`null`.

### Ưu điểm

- Cung cấp phép kiểm tra chính xác cho `null` mà không gộp chung với `undefined`.
- Hoạt động đáng tin cậy với mọi kiểu đầu vào vì chấp nhận `unknown`.
- Đơn giản, nhanh và không có tác dụng phụ; chỉ trả về `true` hoặc `false`.

## Cách dùng

### Cú pháp

Hàm:

- `isNull(value)`

Tham số:

- `value`: Giá trị cần kiểm tra xem có phải `null` hay không.

### Nhập hàm cục bộ

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // đúng
console.log(isNull(b)); // sai

if (isNull(a)) {
  // a là null ở đây
}
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isNull(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isNull](../_analysis/isNull.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 15:41:21 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>