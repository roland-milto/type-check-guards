# areRegExes

## Mô tả

`areRegExes` kiểm tra xem một giá trị có phải là một mảng đã được điền (không rỗng) chỉ chứa các đối tượng `RegExp` hay
không.

### Trường hợp sử dụng

Xác thực rằng một tuỳ chọn cấu hình (ví dụ: danh sách các pattern cho phép/từ chối) là một mảng không rỗng các biểu thức
chính quy trước khi dùng nó để so khớp.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areRegExes` để thu hẹp kiểu `unknown` thành `RegExp[]` trước khi lặp hoặc kết hợp các pattern.

### Ưu điểm

- Đảm bảo một giá trị là một mảng không rỗng, trong đó mọi phần tử đều là một thể hiện của `RegExp`.
- Cung cấp một cơ chế kiểm tra boolean đơn giản (`true`/`false`) để xác thực dữ liệu đầu vào của người dùng hoặc cấu
  hình.
- Giúp ngăn lỗi khi chạy (runtime) khi mã phía sau giả định rằng tất cả các mục đều hỗ trợ các thao tác biểu thức chính
  quy.

## Cách dùng

### Cú pháp

Hàm:

- `areRegExes(array)`

Tham số:

- `array`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns là một mảng RegExp tại đây
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areRegExes(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 23:22:33 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>