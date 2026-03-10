# areSymbols

## Mô tả

Kiểm tra xem một đầu vào có phải là mảng đã được điền mà các phần tử đều là symbol hay không, trả về `true` hoặc
`false`.

### Trường hợp sử dụng

Xác thực rằng một trường cấu hình (ví dụ: danh sách các khóa duy nhất được biểu diễn bằng symbol) là một mảng không rỗng
chỉ chứa symbol trước khi dùng nó trong các API yêu cầu `symbol[]`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areSymbols` để xác thực đầu vào không rõ trước khi coi nó là `symbol[]`; hàm trả về `false` đối với giá trị
> không phải mảng và mảng rỗng.

### Ưu điểm

- Chỉ trả về `true` khi đầu vào là một mảng không rỗng và mọi phần tử đều là symbol.
- Ngăn chặn kết quả dương tính giả bằng cách loại bỏ các giá trị không phải mảng và mảng rỗng thông qua kiểm tra mảng đã
  được điền (filled-array) nội bộ.
- Hữu ích như một bộ bảo vệ kiểu (type guard) ở thời gian chạy để xác thực các danh sách chỉ gồm symbol trước khi xử lý
  tiếp.

## Cách dùng

### Cú pháp

Hàm:

- `areSymbols(array)`

Tham số:

- `array`: Mảng cần được kiểm tra xem các phần tử có phải là symbol hay không.

### Nhập hàm cục bộ

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a là một mảng chỉ gồm symbol tại thời điểm chạy
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areSymbols(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 14:24:34 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>