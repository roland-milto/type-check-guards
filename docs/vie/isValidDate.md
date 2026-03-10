# isValidDate

## Mô tả

`isValidDate` kiểm tra liệu một giá trị đã cho có phải là một đối tượng `Date` hợp lệ hay không và chỉ trả về `true` đối
với các ngày thực, không bị vô hiệu.

### Trường hợp sử dụng

Xác thực dữ liệu người dùng nhập hoặc dữ liệu API có thể chứa ngày tháng, đảm bảo giá trị là một thể hiện `Date` thực và
không phải ngày không hợp lệ trước khi thực hiện tính toán, định dạng hoặc so sánh ngày tháng.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isValidDate` trước khi gọi các phương thức của `Date` (ví dụ: `toISOString`, `getTime`) trên các giá trị có kiểu
`unknown` để đảm bảo chúng là các đối tượng `Date` hợp lệ.

### Ưu điểm

- Đảm bảo một giá trị là một thể hiện `Date` và không chỉ là chuỗi hoặc số trông giống ngày tháng.
- Loại bỏ các ngày không hợp lệ (ví dụ: `new Date("invalid")`) bằng cách kiểm tra giá trị thời gian `NaN`.
- Bộ kiểm tra boolean đơn giản, dễ dùng trong các điều kiện và quy trình xác thực.
- Giúp ngăn lỗi khi chạy bằng cách xác minh đầu vào trước khi gọi các phương thức ngày tháng.

## Cách dùng

### Cú pháp

Hàm:

- `isValidDate(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input là một thể hiện Date hợp lệ
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // sai
console.log(isValidDate("2025-12-22")); // sai

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isValidDate(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 16:53:35 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>