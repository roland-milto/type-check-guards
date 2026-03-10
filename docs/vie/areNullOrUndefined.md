# areNullOrUndefined

## Mô tả

Kiểm tra xem tất cả phần tử trong mảng đã cho có phải là `null` hoặc `undefined` hay không.

### Trường hợp sử dụng

Xác thực rằng một danh sách các trường tùy chọn không chứa giá trị thực nào (chỉ `null`/`undefined`) trước khi quyết
định bỏ qua xử lý hoặc hiển thị trạng thái “không có giá trị nào được cung cấp”.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areNullOrUndefined` khi bạn cần xác minh rằng một mảng chỉ chứa các giá trị bị thiếu (`null`/`undefined`). Lưu ý
> rằng hàm trả về `false` đối với mảng rỗng.

### Ưu điểm

- Chỉ trả về `true` khi mọi phần tử đều là `null` hoặc `undefined`.
- Trả về `false` cho mảng rỗng, giúp phân biệt “không có dữ liệu” với “tất cả đều là giá trị bị thiếu”.
- Hoạt động với `unknown[]`, giúp an toàn khi dùng trước khi thu hẹp kiểu.

## Cách dùng

### Cú pháp

Hàm:

- `areNullOrUndefined(array)`

Tham số:

- `array`: Mảng cần kiểm tra.

### Nhập hàm cục bộ

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areNullOrUndefined(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 00:31:54 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>