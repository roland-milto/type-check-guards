# isObject

## Mô tả

Xác định liệu `value` đã cho có phải là một `object` hay không (loại trừ `null`).

### Trường hợp sử dụng

Dùng `isObject` để xác thực các đầu vào không rõ (ví dụ: JSON đã parse, phản hồi API, payload sự kiện) trước khi truy
cập thuộc tính, đảm bảo giá trị là một object và không phải `null`.

> **Ghi chú cho người dùng TypeScript:**
>
> `isObject` là một guard runtime trả về boolean; nó không thu hẹp về một hình dạng object cụ thể. Hãy kết hợp với các
> kiểm tra bổ sung (ví dụ: sự tồn tại của thuộc tính) khi bạn cần kiểu mạnh hơn.

### Ưu điểm

- Chỉ trả về `true` đối với các giá trị không phải `null` mà `typeof` là `"object"`.
- Ngăn lỗi phổ biến trong JavaScript khi `null` có thể bị coi là một object.
- Hoạt động với object thuần và các thể hiện object dựng sẵn (ví dụ: `Date`, `RegExp`).
- Kiểm tra runtime đơn giản, nhanh, phù hợp cho lập trình phòng thủ và xác thực đầu vào.

## Cách dùng

### Cú pháp

Hàm:

- `isObject(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra xem có phải là một `object` hay không.

### Nhập hàm cục bộ

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input là một đối tượng không null tại thời điểm chạy
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isObject(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isObject](../_analysis/isObject.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 00:26:24 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>