# isIndexFound

## Mô tả

`isIndexFound` xác định liệu một giá trị cho trước có phải là số nguyên không âm hay không, cho biết rằng đã tìm thấy
một chỉ mục.

### Trường hợp sử dụng

Xác thực rằng kết quả tìm kiếm biểu thị một chỉ mục có thể sử dụng (số nguyên `>= 0`) trước khi truy cập chỉ mục vào
mảng hoặc chuỗi, ngăn việc vô tình dùng `-1` hoặc các giá trị không phải số.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isIndexFound` sau các thao tác như `indexOf`, `findIndex` hoặc các tìm kiếm tùy chỉnh nơi `-1` (hoặc các giá trị
> không hợp lệ khác) có thể biểu thị “không tìm thấy”. Khi nó trả về `true`, giá trị là một số và an toàn để dùng làm
> chỉ
> mục mảng/chuỗi.

### Ưu điểm

- Cung cấp một type guard đơn giản để phát hiện liệu có tìm thấy chỉ mục hay không bằng cách kiểm tra một số nguyên
  không âm.
- Chỉ trả về `true` cho các giá trị hợp lệ dạng chỉ mục (số nguyên `>= 0`), loại bỏ số âm, số không nguyên và giá trị
  không phải số.
- Giúp tránh lỗi lệch một đơn vị (off-by-one) và lỗi giá trị canh gác (sentinel) khi làm việc với các API trả về `-1`
  cho trường hợp “không tìm thấy”.

## Cách dùng

### Cú pháp

Hàm:

- `isIndexFound(value)`

Tham số:

- `value`: Giá trị cần kiểm tra xem có phải là số nguyên không âm hay không.

### Nhập hàm cục bộ

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx là một số ở đây và >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Cách sử dụng điển hình với indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isIndexFound(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 00:48:30 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>