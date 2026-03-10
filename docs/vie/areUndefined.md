# areUndefined

## Mô tả

`areUndefined` kiểm tra liệu mọi phần tử trong một mảng được cung cấp có phải là `undefined` hay không.

### Trường hợp sử dụng

Xác thực rằng một danh sách các kết quả tùy chọn không chứa giá trị thực nào (chỉ có `undefined`), ví dụ sau khi ánh xạ
các lần tra cứu mà các mục bị thiếu được biểu diễn bằng `undefined`, và bạn muốn xác nhận rằng tất cả các lần tra cứu
đều thất bại.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areUndefined` khi bạn cần khẳng định rằng một `unknown[]` chỉ chứa các giá trị `undefined`; hàm trả về `false`
> cho mảng rỗng và các đầu vào không phải mảng/không hợp lệ do kiểm tra `isFilledArray` bên trong.

### Ưu điểm

- Trả về `false` cho các giá trị không phải mảng và mảng rỗng bằng cách yêu cầu một mảng đã được điền thông qua
  `isFilledArray`.
- Đảm bảo mọi phần tử đều là `undefined`, không chỉ một vài phần tử, giúp ý định trở nên rõ ràng.
- Hữu ích như một predicate kiểu guard khi xác thực các tập hợp đầu vào không xác định.

## Cách dùng

### Cú pháp

Hàm:

- `areUndefined(array)`

Tham số:

- `array`: Mảng cần kiểm tra các phần tử `undefined`.

### Nhập hàm cục bộ

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // đúng
const r2 = areUndefined(b); // sai
const r3 = areUndefined(c); // sai

// Lưu ý: trả về sai đối với mảng rỗng
const r4 = areUndefined([]); // sai

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areUndefined(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 13:58:44 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>