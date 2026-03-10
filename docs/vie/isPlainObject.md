# isPlainObject

## Mô tả

Kiểm tra xem `value` đã cho có phải là một đối tượng thuần hay không và trả về `true` nếu đúng, nếu không thì `false`.

### Trường hợp sử dụng

Xác thực rằng một đầu vào `unknown` (ví dụ: JSON đã parse, dữ liệu bên ngoài hoặc đối số hàm) là một đối tượng thuần
trước khi đọc các khóa hoặc ánh xạ nó thành một đối tượng cấu hình có kiểu.

> **Ghi chú cho người dùng TypeScript:**
>
> `isPlainObject` hữu ích để thu hẹp `unknown` trước khi coi nó như một đối tượng dạng record; nó chỉ trả về `true` cho
> các giá trị có thẻ nội bộ là `[object Object]`.

### Ưu điểm

- Cung cấp một phép kiểm tra đơn giản, đáng tin cậy để xác định liệu một giá trị có phải là một đối tượng thuần (tức là
  `Object` / `{}`) hay không, trả về `true` hoặc `false`.
- Giúp phân biệt đối tượng thuần với mảng, hàm, `null` và các kiểu không phải đối tượng thuần khác.
- Hữu ích như một type guard trong TypeScript để thu hẹp các giá trị `unknown` trước khi truy cập các thuộc tính của đối
  tượng.

## Cách dùng

### Cú pháp

Hàm:

- `isPlainObject(value)`

Tham số:

- `value`: Giá trị cần kiểm tra xem có phải là đối tượng thuần hay không.

### Nhập hàm cục bộ

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input là một đối tượng thuần ở đây
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // đúng
console.log(isPlainObject([])); // sai
console.log(isPlainObject(null)); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isPlainObject(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Tệp được tạo vào 6 February 2026 at 12:20:33 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>