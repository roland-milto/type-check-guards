# isOfType

## Mô tả

Xác định liệu `value` đã cho có khớp với một chuỗi kiểu được chỉ định hay không, dùng `typeof` cho các kiểu nguyên thủy
và cơ chế dự phòng cho các kiểu phức tạp.

### Trường hợp sử dụng

Xác thực và thu hẹp các đầu vào `unknown` (ví dụ: phản hồi API, dữ liệu người dùng nhập, JSON đã parse) bằng cách kiểm
tra xem một giá trị có thuộc chuỗi kiểu mong đợi hay không trước khi thực hiện các thao tác đặc thù theo kiểu.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isOfType` để rẽ nhánh theo kiểu tại thời điểm chạy khi làm việc với các giá trị `unknown`; hàm trả về `true`/
`false` và xử lý `null` và `undefined` một cách tường minh.

### Ưu điểm

- Kiểm tra các kiểu nguyên thủy bằng `typeof` trực tiếp để tăng tốc độ và rõ ràng.
- Xử lý đúng `null` và `undefined`, điều mà chỉ dùng `typeof` thì không thể phân biệt như mong muốn.
- Hỗ trợ các chuỗi kiểu phức tạp hoặc tùy chỉnh thông qua so sánh dự phòng bằng `getTypeOf`.
- Trả về kết quả boolean đơn giản (`true`/`false`) phù hợp cho các guard và rẽ nhánh.

## Cách dùng

### Cú pháp

Hàm:

- `isOfType(value, type)`

Tham số:

- `value`: Giá trị cần kiểm tra so với `type`.
- `type`: Biểu diễn dạng chuỗi của kiểu cần đối chiếu.

### Nhập hàm cục bộ

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input là một số ở đây
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input là một chuỗi ở đây
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isOfType(value, type)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 17:07:14 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>