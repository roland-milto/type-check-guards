# areNumerics

## Mô tả

`areNumerics` kiểm tra liệu một giá trị có phải là mảng không rỗng mà tất cả phần tử đều là số hay không.

### Trường hợp sử dụng

Dùng `areNumerics` để xác thực dữ liệu bên ngoài hoặc không có kiểu (ví dụ: payload JSON, tham số truy vấn, dữ liệu biểu
mẫu) trước khi tính tổng, trung bình, hoặc các phép toán số khác, đảm bảo đầu vào là một mảng số không rỗng và trả về
`false` nếu không phải.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areNumerics` để canh gác (guard) đầu vào kiểu `unknown` trước khi coi nó là một mảng số; hàm trả về `false` với
> giá trị không phải mảng và với mảng rỗng.

### Ưu điểm

- Chỉ trả về `true` khi đầu vào là một mảng không rỗng và mọi phần tử đều là số.
- Thất bại nhanh: dừng kiểm tra ngay khi gặp một phần tử không phải số và trả về `false`.
- Giúp xác thực an toàn đầu vào không rõ kiểu trước khi thực hiện các phép toán số.

## Cách dùng

### Cú pháp

Hàm:

- `areNumerics(array)`

Tham số:

- `array`: Mảng cần kiểm tra xem các phần tử có phải là số hay không.

### Nhập hàm cục bộ

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // đúng
console.log(areNumerics(b)); // đúng
console.log(areNumerics(c)); // sai
console.log(areNumerics(d)); // sai
console.log(areNumerics(e)); // sai

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areNumerics(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Tệp được tạo vào 6 February 2026 at 16:08:17 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>