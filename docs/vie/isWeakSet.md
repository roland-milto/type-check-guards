# isWeakSet

## Mô tả

Xác định liệu `value` đã cho có phải là một `WeakSet` của các đối tượng hay không.

### Trường hợp sử dụng

Dùng `isWeakSet` khi chấp nhận đầu vào không có kiểu (ví dụ: từ các API bên ngoài, cấu hình động, hoặc các giá trị
`unknown`) và bạn cần xác minh đó là một `WeakSet` trước khi sử dụng các thao tác đặc thù của `WeakSet`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isWeakSet` để thu hẹp một giá trị `unknown` thành `WeakSet<object>` tại thời gian chạy; lưu ý rằng `WeakSet` chỉ
> có thể chứa các tham chiếu đối tượng.

### Ưu điểm

- Cung cấp một kiểm tra thời gian chạy đơn giản để xác định liệu một giá trị có phải là `WeakSet` hay không.
- Giúp ngăn ngừa lỗi kiểu bằng cách đảm bảo chỉ các thể hiện `WeakSet` mới được xử lý như vậy.
- Hoạt động với mọi đầu vào `unknown` và trả về kết quả boolean rõ ràng (`true`/`false`).

## Cách dùng

### Cú pháp

Hàm:

- `isWeakSet(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // đúng
console.log(isWeakSet(b)); // sai

if (isWeakSet(a)) {
  // a là một WeakSet tại thời điểm chạy
}
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isWeakSet(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 14:19:51 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>