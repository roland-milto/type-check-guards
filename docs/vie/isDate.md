# isDate

## Mô tả

`isDate` xác định liệu một giá trị được cung cấp có phải là `Date` hay không, trả về `true` cho các thể hiện `Date` và
`false` trong các trường hợp khác.

### Trường hợp sử dụng

Xác thực và thu hẹp các giá trị không xác định (ví dụ: dữ liệu yêu cầu, giá trị cấu hình, hoặc JSON đã phân tích) trước
khi thực hiện các thao tác `Date` như định dạng, so sánh, hoặc gọi `toISOString()`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isDate` để thu hẹp `unknown` thành `Date` ở thời gian chạy; nó chỉ trả về `true` cho các thể hiện `Date` thực
> sự (không phải chuỗi ngày tháng).

### Ưu điểm

- Nó cung cấp một cơ chế kiểm tra (guard) đơn giản ở thời gian chạy để xác minh một giá trị có phải là `Date` hay không.
- Nó giúp ngăn lỗi kiểu bằng cách đảm bảo chỉ các thể hiện `Date` mới vượt qua xác thực.
- Nó hữu ích để xác thực các đầu vào không xác định (ví dụ: payload API) trước khi sử dụng các phương thức dành riêng
  cho ngày tháng.

## Cách dùng

### Cú pháp

Hàm:

- `isDate(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra xem có thuộc kiểu `Date` hay không.

### Nhập hàm cục bộ

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input là một Date ở đây
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isDate(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isDate](../_analysis/isDate.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 15:48:23 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>