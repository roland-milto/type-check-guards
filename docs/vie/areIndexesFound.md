# areIndexesFound

## Mô tả

`areIndexesFound` kiểm tra xem một giá trị có phải là một mảng không rỗng mà các phần tử của nó đều là các chỉ mục hợp
lệ hay không, trả về `true` nếu đúng và `false` nếu không.

### Trường hợp sử dụng

Xác thực dữ liệu do người dùng cung cấp hoặc dữ liệu bên ngoài (ví dụ: JSON đã được phân tích) được kỳ vọng là một danh
sách các chỉ mục trước khi dùng nó để truy cập hoặc cắt mảng.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areIndexesFound` để xác thực đầu vào không rõ trước khi coi các phần tử của nó là chỉ mục mảng; hàm trả về
`false` cho mảng rỗng và cho các mảng chứa giá trị không phải chỉ mục.

### Ưu điểm

- Chỉ trả về `true` khi đầu vào là một mảng đã được điền (không rỗng) và mọi phần tử đều là một chỉ mục hợp lệ.
- Thất bại nhanh: trả về `false` ngay khi gặp một phần tử không phải chỉ mục.
- Hữu ích như một điều kiện bảo vệ trước khi dùng các giá trị làm vị trí hoặc độ lệch trong mảng.

## Cách dùng

### Cú pháp

Hàm:

- `areIndexesFound(array)`

Tham số:

- `array`: Mảng cần được kiểm tra về tính tuân thủ chỉ mục.

### Nhập hàm cục bộ

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Ở đây, `a` được xác nhận là một mảng chỉ mục đã được điền.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areIndexesFound(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 01:04:51 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>