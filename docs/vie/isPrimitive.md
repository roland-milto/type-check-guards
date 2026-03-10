# isPrimitive

## Mô tả

`isPrimitive` xác định liệu một giá trị đã cho có phải là primitive (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`) hay không.

### Trường hợp sử dụng

Xác thực đầu vào tại thời điểm chạy (ví dụ: các trường payload API, giá trị cấu hình, hoặc dữ liệu do người dùng cung
cấp) để đảm bảo một giá trị là primitive trước khi tuần tự hóa, ghi log, hoặc áp dụng các thao tác chỉ dành cho
primitive.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isPrimitive` để bảo vệ (guard) các đầu vào `unknown` trước khi coi chúng là đối tượng hoặc hàm; nó trả về `true`
> cho primitive và `false` cho đối tượng và hàm.

### Ưu điểm

- Kiểm tra nhanh, không cấp phát bộ nhớ để xác định một giá trị có phải là kiểu nguyên thủy (primitive) trong JavaScript
  hay không.
- Xử lý đúng `null` như một primitive (mặc dù `typeof null` là `"object"`).
- Giúp thu hẹp các giá trị `unknown` trước khi thực hiện các thao tác chỉ áp dụng cho đối tượng.

## Cách dùng

### Cú pháp

Hàm:

- `isPrimitive(value)`

Tham số:

- `value`: Giá trị cần kiểm tra xem có phải là kiểu primitive hay không.

### Nhập hàm cục bộ

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isPrimitive(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 23:58:22 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>