# areDecimals

## Mô tả

Kiểm tra xem tất cả phần tử trong một mảng có phải là số thập phân và mảng có được điền (không rỗng) hay không, trả về
`true` hoặc `false`.

### Trường hợp sử dụng

Xác thực các danh sách do người dùng cung cấp (ví dụ: các cột CSV hoặc dữ liệu nhập từ biểu mẫu) để đảm bảo mảng không
rỗng và mọi mục đều là một giá trị thập phân trước khi phân tích hoặc tính toán.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areDecimals` khi bạn cần một phép kiểm tra boolean nhanh để xác nhận một `unknown[]` là không rỗng và mọi phần
> tử đều là biểu diễn số thập phân.

### Ưu điểm

- Đảm bảo đầu vào là một mảng đã được điền (không rỗng) trước khi xác thực các phần tử, tránh việc vô tình chấp nhận
  danh sách trống.
- Xác thực mọi phần tử bằng `isDecimal`, vì vậy các giá trị lẫn lộn hoặc không hợp lệ sẽ lập tức cho kết quả `false`.
- Cung cấp kết quả boolean đơn giản (`true`/`false`) phù hợp cho các guard và luồng xác thực trả về sớm.

## Cách dùng

### Cú pháp

Hàm:

- `areDecimals(array)`

Tham số:

- `array`: Mảng cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // đúng
console.log(areDecimals(b)); // sai
console.log(areDecimals(c)); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areDecimals(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 15:59:47 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>