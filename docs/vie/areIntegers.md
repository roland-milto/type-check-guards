# areIntegers

## Mô tả

`areIntegers` xác định liệu tất cả các phần tử trong một mảng cho trước có phải là số nguyên hay không, trả về `true`
nếu đúng và `false` nếu không.

### Trường hợp sử dụng

Dùng `areIntegers` để xác thực dữ liệu do người dùng cung cấp hoặc từ nguồn bên ngoài (ví dụ: tham số truy vấn, payload
JSON, các dòng CSV) khi logic của bạn yêu cầu một danh sách có phần tử gồm các giá trị số nguyên như ID, bộ đếm, offset
phân trang hoặc chỉ mục mảng.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areIntegers` như một guard ở runtime cho các đầu vào `unknown[]` trước khi coi chúng là `number[]` chỉ chứa số
> nguyên. Nếu hàm trả về `false`, đầu vào либо không phải là một mảng có phần tử hoặc chứa ít nhất một giá trị không
> phải
> số nguyên.

### Ưu điểm

- Chỉ trả về `true` khi mọi phần tử đều là số nguyên; nếu không thì trả về `false`.
- Giúp xác thực đầu vào không rõ kiểu trước khi thực hiện các thao tác chỉ dành cho số nguyên (ví dụ: lập chỉ mục, số
  lượng, ID).
- Thất bại nhanh: dừng kiểm tra ngay khi phát hiện một phần tử không phải số nguyên.

## Cách dùng

### Cú pháp

Hàm:

- `areIntegers(array)`

Tham số:

- `array`: Mảng cần kiểm tra xem có các phần tử là số nguyên hay không.

### Nhập hàm cục bộ

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // đúng
console.log(areIntegers(b)); // đúng
console.log(areIntegers(c)); // sai

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areIntegers(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 01:01:10 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>