# areHexadecimals

## Mô tả

Kiểm tra liệu tất cả phần tử trong một mảng có phải là chuỗi thập lục phân hay không, chỉ trả về `true` cho các mảng
không rỗng mà mọi mục đều hợp lệ.

### Trường hợp sử dụng

Dùng `areHexadecimals` để xác thực dữ liệu người dùng nhập hoặc dữ liệu bên ngoài (ví dụ: ID, checksum, mã màu không có
ký tự '#' ở đầu) trước khi thực hiện phân tích thập lục phân hoặc xử lý tiếp.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areHexadecimals` để xác thực đầu vào không rõ kiểu trước khi phân tích hoặc chuyển đổi giá trị (ví dụ, trước
`parseInt(value, 16)` hoặc chuyển đổi BigInt).

### Ưu điểm

- Xác thực rằng mọi phần tử đều là chuỗi thập lục phân và chỉ trả về `true` khi tất cả mục đều khớp.
- Theo thiết kế sẽ từ chối mảng rỗng, trả về `false` khi thiếu dữ liệu đầu vào.
- Cung cấp kết quả boolean đơn giản (`true`/`false`) phù hợp cho các guard và kiểm tra hợp lệ kiểu trả về sớm.

## Cách dùng

### Cú pháp

Hàm:

- `areHexadecimals(array)`

Tham số:

- `array`: Mảng cần được kiểm tra xem có các phần tử là chuỗi thập lục phân hay không.

### Nhập hàm cục bộ

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areHexadecimals(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 23:08:37 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>