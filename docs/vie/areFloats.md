# areFloats

## Mô tả

`areFloats` kiểm tra liệu một mảng cho trước có được điền (không rỗng) và tất cả các phần tử của nó đều là float hay
không.

### Trường hợp sử dụng

Dùng `areFloats` khi bạn nhận được một `unknown[]` (ví dụ: từ JSON, tham số truy vấn, hoặc các API bên ngoài) và bạn cần
đảm bảo đó là một mảng đã được điền mà mọi mục đều là float trước khi chạy logic số học như tính trung bình, nội suy,
hoặc các phép tính thống kê.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areFloats` để canh gác (guard) `unknown[]` trước khi coi nó như `number[]` chỉ chứa các số thực (float); hàm trả
> về `false` cho mảng rỗng và cho bất kỳ phần tử nào không phải float.

### Ưu điểm

- Chỉ trả về `true` khi đầu vào là một mảng không rỗng và mọi phần tử đều là số thực (float).
- Thất bại sớm: trả về `false` ngay khi phát hiện một phần tử không phải float.
- Giúp xác thực đầu vào không rõ kiểu trước khi thực hiện các phép tính dành riêng cho float.

## Cách dùng

### Cú pháp

Hàm:

- `areFloats(array)`

Tham số:

- `array`: Mảng cần kiểm tra để xác định các phần tử float.

### Nhập hàm cục bộ

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // đúng
console.log(areFloats(b)); // sai
console.log(areFloats(c)); // sai

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areFloats(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 16:00:26 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>