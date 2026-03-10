# isSet

## Mô tả

Xác định liệu một giá trị đã cho có phải là `Set` hay không.

### Trường hợp sử dụng

Xác thực đầu vào từ các nguồn bên ngoài (ví dụ: phân tích JSON, dữ liệu người dùng nhập, hoặc API của bên thứ ba) để đảm
bảo một giá trị là `Set` trước khi thực hiện các thao tác `Set`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isSet` để thu hẹp các giá trị `unknown` trước khi gọi các API dành riêng cho `Set` như `.add`, `.has`, hoặc
`.size`.

### Ưu điểm

- Cung cấp một kiểm tra thời gian chạy đơn giản để xác nhận một giá trị có phải là `Set` hay không.
- Giúp ngăn lỗi kiểu bằng cách cho phép rẽ nhánh sớm khi một giá trị không phải là `Set`.
- Hoạt động với mọi nội dung của `Set` (rỗng hoặc có phần tử) và luôn trả về `true`/`false` một cách nhất quán.

## Cách dùng

### Cú pháp

Hàm:

- `isSet(value)`

Tham số:

- `value`: Giá trị cần kiểm tra.

### Nhập hàm cục bộ

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a là một Set tại thời điểm chạy
  console.log(a.size);
}

console.log(isSet(b)); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isSet(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isSet](../_analysis/isSet.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 23:11:45 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>