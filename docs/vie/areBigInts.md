# areBigInts

## Mô tả

`areBigInts` xác định liệu một giá trị có phải là một mảng không rỗng chỉ chứa các giá trị `bigint` hay không.

### Trường hợp sử dụng

Xác thực đầu vào không xác định (ví dụ: dữ liệu kiểu JSON đã parse, payload API, hoặc tham số hàm được gán kiểu
`unknown`) để đảm bảo đó là một mảng không rỗng gồm các giá trị `bigint` trước khi xử lý; chỉ trả về `true` khi tất cả
phần tử là `bigint`, nếu không thì `false`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areBigInts` như một guard ở runtime trước khi thực hiện các thao tác chỉ dành cho `bigint` (ví dụ: số học, so
> sánh) trên đầu vào không xác định.

### Ưu điểm

- Đảm bảo mọi phần tử đều là `bigint`, chỉ trả về `true` khi toàn bộ mảng khớp.
- Theo thiết kế, từ chối các giá trị không phải mảng và mảng rỗng (thông qua `isFilledArray`), ngăn việc vô tình chấp
  nhận đầu vào không hợp lệ.
- Thất bại nhanh: trả về `false` ngay khi phát hiện một phần tử không phải `bigint`.

## Cách dùng

### Cú pháp

Hàm:

- `areBigInts(array)`

Tham số:

- `array`: Giá trị cần kiểm tra.

### Nhập hàm cục bộ

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // đúng
console.log(areBigInts(b)); // sai
console.log(areBigInts(c)); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areBigInts(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 23:27:51 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>