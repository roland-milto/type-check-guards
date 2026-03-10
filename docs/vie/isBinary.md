# isBinary

## Mô tả

`isBinary` xác định liệu một giá trị có phải là chuỗi nhị phân (tùy chọn có tiền tố `0b`/`0B`) hay không và trả về
`true` hoặc `false`.

### Trường hợp sử dụng

Xác thực các chuỗi do người dùng cung cấp (ví dụ: trường biểu mẫu, đối số CLI, giá trị cấu hình) để đảm bảo chúng chỉ
biểu diễn các chữ số nhị phân, tùy chọn kèm tiền tố `0b`/`0B`, trước khi xử lý tiếp.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isBinary` như một type guard trước khi phân tích (parse) hoặc chuyển đổi một chuỗi sang `BigInt`/`Number` để
> tránh đầu vào không hợp lệ.

### Ưu điểm

- Chấp nhận chuỗi nhị phân có hoặc không có tiền tố `0b`/`0B`.
- Từ chối chuỗi rỗng và chuỗi có khoảng trắng ở đầu/cuối (ASCII ≤ 32).
- Trả về `true`/`false` mà không ném lỗi, giúp an toàn với đầu vào không xác định.

## Cách dùng

### Cú pháp

Hàm:

- `isBinary(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // đúng
const b = isBinary("1010");   // đúng
const c = isBinary("0b1020"); // sai
const d = isBinary(0b1010);     // sai

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isBinary(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 23:11:48 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>