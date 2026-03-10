# isFilledArray

## Mô tả

Kiểm tra xem `value` có phải là một mảng có ít nhất một phần tử hay không, trả về `true` hoặc `false`.

### Trường hợp sử dụng

Dùng `isFilledArray` để xác thực dữ liệu đầu vào (ví dụ: payload API, giá trị biểu mẫu, cấu hình) trước khi lặp, truy
cập phần tử đầu tiên, hoặc áp dụng logic yêu cầu ít nhất một mục.

> **Ghi chú cho người dùng TypeScript:**
>
> `isFilledArray` là một guard ở runtime trả về boolean; nó không thu hẹp kiểu phần tử vượt quá việc xác nhận rằng mảng
> không rỗng.

### Ưu điểm

- Kiểm tra đơn giản, nhanh cho một mảng không rỗng bằng cách dùng `Array.isArray` và kiểm tra độ dài.
- Giúp tránh lỗi khi chạy (runtime) khi mã giả định một mảng có ít nhất một phần tử.
- Kết quả boolean rõ ràng: trả về `true` cho mảng không rỗng và `false` trong các trường hợp khác.

## Cách dùng

### Cú pháp

Hàm:

- `isFilledArray(value)`

Tham số:

- `value`: Giá trị cần kiểm tra xem có phải là một mảng không rỗng hay không.

### Nhập hàm cục bộ

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input là một mảng không rỗng tại thời điểm chạy
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isFilledArray(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Tệp được tạo vào 6 February 2026 at 11:49:24 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>