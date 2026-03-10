# isBoolean

## Mô tả

Xác định liệu một giá trị đã cho có phải là `boolean` hay không.

### Trường hợp sử dụng

Xác thực dữ liệu bên ngoài hoặc không có kiểu (ví dụ: biến môi trường, payload JSON, tham số truy vấn) để đảm bảo một
giá trị là `boolean` trước khi dùng nó trong logic điều kiện.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isBoolean` để thu hẹp `unknown` thành `boolean` trước khi áp dụng các phép toán boolean.

### Ưu điểm

- Kiểm tra thời gian chạy đơn giản và nhanh bằng `typeof`.
- Giúp xác thực đầu vào không rõ kiểu trước khi áp dụng logic dành riêng cho boolean.
- Trả về kết quả `boolean` có thể dự đoán (`true`/`false`).

## Cách dùng

### Cú pháp

Hàm:

- `isBoolean(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input là boolean ở đây
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isBoolean(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 14:38:26 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>