# isError

## Mô tả

Kiểm tra xem `value` đã cho có phải là một thể hiện của `Error` hay không.

### Trường hợp sử dụng

Dùng `isError` khi bạn nhận được một giá trị `unknown` (chẳng hạn từ một khối `catch`, một callback hoặc một thư viện
bên ngoài) và bạn cần xác định một cách an toàn liệu nó có phải là một `Error` hay không trước khi đọc `message`, `name`
hoặc `stack`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isError` để bảo vệ các giá trị `unknown` (ví dụ: từ `catch`) trước khi coi chúng như một `Error`.

### Ưu điểm

- Cung cấp một kiểm tra runtime đơn giản để xác định liệu một giá trị có phải là một thể hiện của `Error` hay không.
- Giúp thu hẹp các đầu vào không xác định trước khi truy cập các thuộc tính của `Error` như `message` hoặc `stack`.
- Giảm rủi ro xảy ra ngoại lệ runtime khi xử lý các giá trị từ `catch`, API bên ngoài hoặc các nguồn không có kiểu.

## Cách dùng

### Cú pháp

Hàm:

- `isError(value)`

Tham số:

- `value`: Giá trị cần kiểm tra đối chiếu với kiểu `Error`.

### Nhập hàm cục bộ

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isError(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isError](../_analysis/isError.md)

<br>

---

<small>Tệp được tạo vào 6 February 2026 at 12:47:38 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>