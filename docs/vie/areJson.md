# areJson

## Mô tả

Kiểm tra liệu tất cả phần tử của một mảng có phải là chuỗi JSON hay không, chỉ trả về `true` nếu mảng có phần tử và mọi
mục đều là JSON hợp lệ; nếu không trả về `false`.

### Trường hợp sử dụng

Xác thực dữ liệu đầu vào (ví dụ: từ query params, biến môi trường, hoặc API bên ngoài) khi bạn kỳ vọng một mảng các
chuỗi được mã hoá JSON và muốn từ chối mảng rỗng hoặc bất kỳ mục nào không phải JSON.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areJson` khi bạn cần xác thực rằng một `unknown[]` chỉ chứa các chuỗi JSON trước khi phân tích chúng (ví dụ, với
`JSON.parse`).

### Ưu điểm

- Chỉ trả về `true` khi mọi phần tử đều là một chuỗi JSON hợp lệ; nếu không sẽ trả về `false`.
- Thất bại nhanh: dừng kiểm tra ngay khi phát hiện một phần tử không phải JSON.
- Theo thiết kế sẽ từ chối mảng rỗng, trả về `false` cho đầu vào không có phần tử.

## Cách dùng

### Cú pháp

Hàm:

- `areJson(array)`

Tham số:

- `array`: Mảng cần được kiểm tra xem có các phần tử là chuỗi JSON hay không.

### Nhập hàm cục bộ

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // đúng
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // sai
const empty = areJson([]); // sai

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areJson(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areJson](../_analysis/areJson.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 16:18:11 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>