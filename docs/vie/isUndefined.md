# isUndefined

## Mô tả

Kiểm tra xem một giá trị cho trước có phải là `undefined` hay không.

### Trường hợp sử dụng

Dùng `isUndefined` để bảo vệ các đầu vào tùy chọn, phát hiện thuộc tính bị thiếu, hoặc phân biệt giữa “không được cung
cấp” (`undefined`) và “rỗng một cách tường minh” (`null`).

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isUndefined` khi bạn cần phát hiện cụ thể `undefined` (không phải `null`). Hàm an toàn vì dựa trên
`typeof value === "undefined"`.

### Ưu điểm

- Cung cấp một phép kiểm tra rõ ràng, tường minh cho `undefined` bằng `typeof`, tránh các trường hợp biên với biến chưa
  được khai báo.
- Trả về kết quả boolean đơn giản (`true`/`false`) phù hợp cho guard, rẽ nhánh và logic xác thực.
- Giúp phân biệt `undefined` với các giá trị “rỗng” khác như `null`, `0`, `""` hoặc `NaN`.

## Cách dùng

### Cú pháp

Hàm:

- `isUndefined(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x là undefined ở đây
} else {
  // x không phải là undefined ở đây
}

const a = isUndefined(undefined); // đúng
const b = isUndefined(null);      // sai

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isUndefined(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 14:04:59 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>