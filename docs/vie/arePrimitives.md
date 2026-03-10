# arePrimitives

## Mô tả

`arePrimitives` đánh giá liệu tất cả phần tử trong một mảng được cung cấp (không rỗng) có phải là các kiểu nguyên thủy
hay không.

### Trường hợp sử dụng

Xác thực rằng dữ liệu đầu vào (ví dụ: tham số truy vấn, giá trị từng dòng CSV, hoặc danh sách ID/thẻ) chỉ chứa các giá
trị nguyên thủy trước khi tuần tự hóa, băm, ghi log, hoặc truyền vào các API không được nhận đối tượng.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `arePrimitives` khi bạn cần đảm bảo một `unknown[]` chỉ chứa các giá trị nguyên thủy (string, number, bigint,
> boolean, symbol, undefined, hoặc null) trước khi xử lý tiếp.

### Ưu điểm

- Chỉ trả về `true` khi mọi phần tử đều là giá trị nguyên thủy, khiến nó trở thành một bộ kiểm tra nghiêm ngặt cho các
  mảng “không có đối tượng/hàm”.
- Thất bại sớm: trả về `false` ngay khi phát hiện một phần tử không nguyên thủy.
- Cũng trả về `false` cho các giá trị không phải mảng và cho mảng rỗng (thông qua kiểm tra mảng có phần tử), giúp ngăn
  việc vô tình chấp nhận đầu vào không hợp lệ.

## Cách dùng

### Cú pháp

Hàm:

- `arePrimitives(array)`

Tham số:

- `array`: Mảng cần được kiểm tra xem các phần tử có thuộc kiểu nguyên thủy hay không.

### Nhập hàm cục bộ

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // đúng
const r2 = arePrimitives(b); // đúng
const r3 = arePrimitives(c); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.arePrimitives(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 00:07:12 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>