# isRegEx

## Mô tả

Xác định liệu một giá trị được cung cấp có phải là một instance của `RegExp` hay không.

### Trường hợp sử dụng

Xác thực các giá trị do người dùng cung cấp hoặc giá trị động (ví dụ: cấu hình, payload API, đầu vào plugin) trước khi
coi chúng như một biểu thức chính quy.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isRegEx` để thu hẹp các giá trị kiểu `unknown` (hoặc union) trước khi sử dụng các thuộc tính hoặc phương thức
> đặc thù của RegExp; hàm chỉ trả về `true` đối với các giá trị là instance của `RegExp`.

### Ưu điểm

- Cung cấp một type guard đơn giản ở runtime để kiểm tra xem một giá trị có phải là `RegExp` hay không.
- Giúp ngăn ngừa lỗi khi mã mong đợi một biểu thức chính quy (ví dụ: trước khi gọi `test`, `exec`, hoặc đọc `source`).
- Hoạt động với cả regex literal và các instance được tạo qua `new RegExp(...)`.
- Trả về kết quả boolean rõ ràng (`true`/`false`) mà không ném lỗi đối với các đầu vào không phải regex.

## Cách dùng

### Cú pháp

Hàm:

- `isRegEx(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input là một RegExp ở đây
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isRegEx(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 23:31:38 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>