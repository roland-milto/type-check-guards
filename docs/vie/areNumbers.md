# areNumbers

## Mô tả

`areNumbers` kiểm tra liệu một giá trị có phải là một mảng không rỗng mà trong đó tất cả các phần tử đều là số hay
không.

### Trường hợp sử dụng

Xác thực dữ liệu do người dùng cung cấp hoặc do API cung cấp để đảm bảo đó là một mảng số không rỗng trước khi tính
tổng, trung bình, hoặc các phép gộp số khác.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areNumbers` để xác thực các mảng không rõ kiểu trước khi thực hiện các phép tính số; hàm trả về `false` với mảng
> rỗng và với các mảng chứa bất kỳ giá trị nào không phải số.

### Ưu điểm

- Chỉ trả về `true` khi đầu vào là một mảng không rỗng và mọi phần tử đều là số.
- Ngăn chặn kết quả dương tính giả bằng cách loại bỏ mảng rỗng và các đầu vào không phải mảng.
- Hữu ích như một bước kiểm tra trước các phép toán số (ví dụ: tính tổng, tính trung bình) để tránh lỗi khi chạy.

## Cách dùng

### Cú pháp

Hàm:

- `areNumbers(array)`

Tham số:

- `array`: Mảng cần được kiểm tra xem có các phần tử là số hay không.

### Nhập hàm cục bộ

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areNumbers(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 13:06:33 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>