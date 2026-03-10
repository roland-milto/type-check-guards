# isEmpty

## Mô tả

Xác định liệu một giá trị cho trước có rỗng hay không, trả về `true` cho `null`, `undefined`, chuỗi rỗng/chỉ có khoảng
trắng, mảng rỗng, `Map`/`Set` rỗng, hoặc đối tượng không có thuộc tính enumerable riêng.

### Trường hợp sử dụng

Dùng `isEmpty` để xác thực đầu vào và phát hiện các giá trị bị thiếu/trống trên nhiều kiểu dữ liệu (ví dụ: trường biểu
mẫu, payload API, đối tượng cấu hình) nơi `null`, `undefined`, chuỗi chỉ có khoảng trắng, các collection rỗng và các đối
tượng không có thuộc tính nên được coi là rỗng.

> **Ghi chú cho người dùng TypeScript:**
>
> `isEmpty` là một tiện ích trả về boolean (không phải là type predicate của TypeScript), vì vậy nó không tự thu hẹp
> kiểu; hãy dùng nó cho việc xác thực/rẽ nhánh thay vì thu hẹp ở thời điểm biên dịch.

### Ưu điểm

- Coi `null` và `undefined` là `true` khi kiểm tra tính rỗng.
- Xem các chuỗi chỉ có khoảng trắng là rỗng bằng cách `trim` trước khi kiểm tra độ dài.
- Hỗ trợ các kiểu vùng chứa phổ biến (mảng, `Map`, `Set`) và các đối tượng thuần không có thuộc tính enumerable riêng.
- Tránh đếm các thuộc tính kế thừa bằng cách dùng kiểm tra `hasOwnProperty`.
- Trả về kết quả boolean đơn giản (`true`/`false`) phù hợp cho guard và xác thực.

## Cách dùng

### Cú pháp

Hàm:

- `isEmpty(value)`

Tham số:

- `value`: Giá trị cần kiểm tra có rỗng hay không.

### Nhập hàm cục bộ

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isEmpty(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Tệp được tạo vào 6 February 2026 at 16:21:34 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>