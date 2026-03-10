# areNaNs

## Mô tả

`areNaNs` kiểm tra liệu tất cả các phần tử trong một mảng có phải là `NaN` hay không và chỉ trả về `true` nếu mọi phần
tử đều là `NaN`.

### Trường hợp sử dụng

Xác thực dữ liệu đầu vào khi `NaN` được dùng như một giá trị canh gác và bạn phải đảm bảo toàn bộ mảng chỉ gồm `NaN` (ví
dụ: phát hiện một chuỗi số mà tất cả đều bị thiếu).

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areNaNs` khi bạn cần xác thực rằng một mảng chỉ chứa giá trị số `NaN` (không ép kiểu chuỗi sang số).

### Ưu điểm

- Chỉ trả về `true` khi mọi phần tử đều là `NaN` (kiểm tra nghiêm ngặt tất cả phần tử).
- Không ép kiểu chuỗi sang số; các giá trị như "NaN" vẫn không phải `NaN` và khiến kết quả là `false`.
- Trả về `false` cho mảng không có phần tử, ngăn việc vô tình nhận `true` khi đầu vào rỗng.

## Cách dùng

### Cú pháp

Hàm:

- `areNaNs(array)`

Tham số:

- `array`: Mảng cần kiểm tra các giá trị `NaN`.

### Nhập hàm cục bộ

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // đúng
const b = areNaNs([NaN, 1, NaN]); // sai
const c = areNaNs([NaN, "NaN", NaN]); // sai
const d = areNaNs([NaN, null, NaN]); // sai
const e = areNaNs([] as unknown[]); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areNaNs(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 15:54:14 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>