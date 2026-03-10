# isSymbol

## Mô tả

`isSymbol` xác định liệu một giá trị cho trước có thuộc kiểu `symbol` hay không, trả về `true` cho symbol và `false`
trong các trường hợp khác.

### Trường hợp sử dụng

Xác thực rằng một giá trị `unknown` là một `symbol` trước khi dùng nó làm định danh duy nhất, khóa registry, hoặc khóa
thuộc tính được tính toán trong object và map.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isSymbol` để thu hẹp `unknown` thành `symbol` trước khi gọi các hàm liên quan đến symbol hoặc dùng nó làm khóa
> thuộc tính được tính toán.

### Ưu điểm

- Cung cấp một kiểm tra thời gian chạy đơn giản, đáng tin cậy cho kiểu nguyên thủy JavaScript `symbol`.
- Giúp thu hẹp các giá trị `unknown` trước khi dùng các API dành riêng cho symbol hoặc lưu chúng làm khóa.
- Tránh dương tính giả bằng cách dùng `typeof`, vốn là cách chuẩn để phát hiện các giá trị `symbol`.

## Cách dùng

### Cú pháp

Hàm:

- `isSymbol(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input là một symbol ở đây
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isSymbol(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 14:29:20 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>