# areObjects

## Mô tả

`areObjects` kiểm tra xem một mảng có phần tử được cung cấp có chỉ chứa các đối tượng hay không.

### Trường hợp sử dụng

Dùng `areObjects` khi bạn nhận được một mảng không rõ (ví dụ: từ việc phân tích JSON hoặc các API bên ngoài) và cần đảm
bảo mảng không rỗng và mọi phần tử đều là một đối tượng trước khi lặp và truy cập các thuộc tính của đối tượng.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areObjects` để xác thực `unknown[]` trước khi coi các phần tử là đối tượng; hàm trả về `false` với các mảng
> rỗng.

### Ưu điểm

- Chỉ trả về `true` khi đầu vào là một mảng có phần tử và mọi phần tử đều là một đối tượng.
- Dừng sớm và trả về `false` ngay khi phát hiện một phần tử không phải đối tượng.
- Giúp xác thực đầu vào không rõ trước khi thực hiện các thao tác dành riêng cho đối tượng.

## Cách dùng

### Cú pháp

Hàm:

- `areObjects(array)`

Tham số:

- `array`: Mảng cần được kiểm tra xem có các phần tử là đối tượng hay không.

### Nhập hàm cục bộ

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value là một mảng đã được điền đầy các đối tượng
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areObjects(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 00:11:01 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>