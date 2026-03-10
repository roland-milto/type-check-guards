# areStrings

## Mô tả

`areStrings` kiểm tra liệu một mảng có không rỗng và tất cả các phần tử của nó đều là chuỗi hay không, chỉ trả về `true`
trong trường hợp đó.

### Trường hợp sử dụng

Xác thực dữ liệu bên ngoài hoặc do người dùng cung cấp (ví dụ: tham số truy vấn, payload JSON, trường CSV) để đảm bảo
bạn có một danh sách chuỗi không rỗng trước khi xử lý.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areStrings` để xác thực các mảng không xác định trước khi áp dụng logic chỉ dành cho chuỗi; hàm trả về `false`
> đối với mảng rỗng.

### Ưu điểm

- Đảm bảo mọi phần tử đều là chuỗi và từ chối các mảng có kiểu dữ liệu trộn lẫn bằng cách trả về `false`.
- Từ chối mảng rỗng, vì vậy `true` chỉ cho biết một danh sách chuỗi không rỗng.
- Hữu ích như một kiểm tra bảo vệ (runtime guard) nhanh trước khi thực hiện các thao tác chỉ dành cho chuỗi (ví dụ:
  `trim`, `toLowerCase`).

## Cách dùng

### Cú pháp

Hàm:

- `areStrings(value)`

Tham số:

- `value`: Expected type `string[]`.

### Nhập hàm cục bộ

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input là một string[] không rỗng tại thời điểm chạy
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areStrings(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 13:21:02 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>