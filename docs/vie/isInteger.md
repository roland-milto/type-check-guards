# isInteger

## Mô tả

Xác định liệu `value` đã cho có phải là một số nguyên an toàn hay không.

### Trường hợp sử dụng

Xác thực đầu vào không đáng tin cậy (ví dụ: tham số truy vấn, payload JSON, biến môi trường) trước khi dùng nó như một
số nguyên cho chỉ mục mảng, phân trang, bộ đếm hoặc ID cơ sở dữ liệu.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isInteger` để xác thực đầu vào không rõ trước khi coi nó là số nguyên; hàm chỉ trả về `true` cho các giá trị mà
`typeof value === "number"` và `Number.isSafeInteger(value)`.

### Ưu điểm

- Kiểm tra cả kiểu và độ an toàn số học: chỉ trả về `true` khi đầu vào là một số và là số nguyên an toàn.
- Ngăn các lỗi thường gặp do ép kiểu số: các chuỗi như "5" sẽ trả về `false` một cách chính xác.
- Loại bỏ số không nguyên và số nguyên không an toàn, phù hợp cho ID, bộ đếm và lập chỉ mục mảng.

## Cách dùng

### Cú pháp

Hàm:

- `isInteger(value)`

Tham số:

- `value`: Giá trị cần kiểm tra xem có phải là số nguyên hay không.

### Nhập hàm cục bộ

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // đúng
const b = isInteger(-100);   // đúng
const c = isInteger("5");    // sai
const d = isInteger(5.5);    // sai
const e = isInteger(null);   // sai

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isInteger(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 00:51:56 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>