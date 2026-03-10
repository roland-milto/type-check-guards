# isFalse

## Mô tả

`isFalse` kiểm tra xem một giá trị đã cho có bằng nghiêm ngặt với literal boolean `false` hay không.

### Trường hợp sử dụng

Xác thực dữ liệu không xác định (ví dụ: từ JSON, tham số truy vấn, hoặc đầu vào người dùng) khi chỉ giá trị boolean
tường minh `false` mới nên được coi là một cờ hợp lệ, và mọi thứ khác đều phải bị từ chối.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isFalse` khi bạn cần chỉ chấp nhận literal `false` và từ chối mọi giá trị falsy khác; hàm chỉ trả về `true` khi
`value === false`.

### Ưu điểm

- Cung cấp kiểm tra nghiêm ngặt cho literal boolean `false` mà không ép kiểu.
- Giúp phân biệt `false` với các giá trị “falsy” khác như `0`, `""`, `null`, và `undefined`.
- Cải thiện khả năng đọc bằng cách làm rõ ý định khi xác thực đầu vào không xác định.

## Cách dùng

### Cú pháp

Hàm:

- `isFalse(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input chính xác là false tại đây
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isFalse(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 16:45:06 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>