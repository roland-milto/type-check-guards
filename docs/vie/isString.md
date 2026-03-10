# isString

## Mô tả

`isString` xác định liệu một giá trị cho trước có phải là chuỗi hay không.

### Trường hợp sử dụng

Xác thực dữ liệu người dùng nhập, các trường trong payload API, hoặc giá trị cấu hình tại runtime để đảm bảo một giá trị
là chuỗi trước khi áp dụng các thao tác chuỗi (ví dụ: cắt khoảng trắng, tách chuỗi, chuyển đổi chữ hoa/thường).

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isString` để xác thực các giá trị `unknown` hoặc được định kiểu lỏng lẻo trước khi gọi các phương thức chuỗi;
> hàm chỉ trả về `true` khi `typeof value === "string"`.

### Ưu điểm

- Kiểm tra đơn giản và nhanh bằng `typeof`.
- Trả về kết quả boolean có thể dự đoán: `true` cho chuỗi, ngược lại `false`.
- Hoạt động cho cả chuỗi rỗng và không rỗng.
- Hữu ích như một cơ chế bảo vệ runtime nhẹ trước khi thực hiện các thao tác dành riêng cho chuỗi.

## Cách dùng

### Cú pháp

Hàm:

- `isString(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra xem có phải kiểu chuỗi hay không.

### Nhập hàm cục bộ

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input là một chuỗi ở đây
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isString(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isString](../_analysis/isString.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 13:16:16 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>