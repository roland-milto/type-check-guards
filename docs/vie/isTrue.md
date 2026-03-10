# isTrue

## Mô tả

`isTrue` xác định liệu một giá trị đã cho có bằng nghiêm ngặt với `true` hay không.

### Trường hợp sử dụng

Dùng `isTrue` để xác thực các cờ (flag), bật/tắt tính năng (feature toggle) hoặc giá trị cấu hình, nơi chỉ literal
`true` được chấp nhận và mọi thứ khác phải được coi là `false`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isTrue` khi bạn cần chỉ chấp nhận literal boolean `true`, không chỉ là các giá trị truthy.

### Ưu điểm

- Cung cấp kiểm tra nghiêm ngặt cho literal boolean `true` (không ép kiểu).
- Giúp phân biệt `true` với các giá trị truthy như `1`, `"true"` hoặc `{}`.
- Hành vi đơn giản, có thể dự đoán, phù hợp cho các guard và pipeline kiểm tra/ xác thực.

## Cách dùng

### Cú pháp

Hàm:

- `isTrue(value)`

Tham số:

- `value`: Giá trị cần kiểm tra.

### Nhập hàm cục bộ

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // đúng
const b = isTrue(1);         // sai
const c = isTrue("true");   // sai

if (isTrue(a)) {
  // a là true ở đây
}
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isTrue(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 13:46:45 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>