# areOctals

## Mô tả

`areOctals` xác định liệu giá trị được cung cấp có phải là một mảng không rỗng gồm các chuỗi bát phân hợp lệ hay không.

### Trường hợp sử dụng

Dùng `areOctals` khi xác thực dữ liệu người dùng nhập, giá trị cấu hình, hoặc payload API bắt buộc phải chứa các literal
bát phân (ví dụ: chế độ quyền tệp như `0o755`) và bạn muốn từ chối mảng rỗng hoặc bất kỳ mục không hợp lệ nào bằng cách
trả về `false`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areOctals` để đảm bảo bạn có một `unknown[]` không rỗng, trong đó mỗi phần tử là một chuỗi bát phân hợp lệ trước
> khi chuyển đổi (ví dụ: qua `Number(...)` hoặc tự phân tích).

### Ưu điểm

- Xác thực rằng một giá trị là một mảng không rỗng, trong đó mọi phần tử đều là một chuỗi bát phân, chỉ trả về `true`
  khi tất cả các mục đều đạt.
- Thất bại nhanh: trả về `false` ngay khi phát hiện một phần tử không phải bát phân.
- Hữu ích như một bước bảo vệ trước khi phân tích hoặc chuyển đổi các chuỗi bát phân để tránh lỗi khi chạy và xử lý đầu
  vào không nhất quán.

## Cách dùng

### Cú pháp

Hàm:

- `areOctals(array)`

Tham số:

- `array`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value là một mảng không rỗng gồm các chuỗi bát phân
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areOctals(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 14:59:00 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>