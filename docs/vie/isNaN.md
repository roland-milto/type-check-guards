# isNaN

## Mô tả

Xác định liệu `value` được cung cấp có phải là `NaN` thuộc kiểu `number` hay không mà không chuyển đổi chuỗi.

### Trường hợp sử dụng

Xác thực đầu vào không đáng tin cậy hoặc có kiểu lỏng lẻo (ví dụ: payload API, giá trị biểu mẫu, JSON đã phân tích) để
phát hiện giá trị đặc biệt `NaN` và xử lý rõ ràng, đồng thời coi các đầu vào không phải số là không phải `NaN`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isNaN` khi bạn cần phát hiện giá trị số đặc biệt `NaN` đồng thời đảm bảo đầu vào thực sự là `number` (không
> chuyển đổi chuỗi sang số).

### Ưu điểm

- Kiểm tra xem một giá trị có phải là `NaN` hay không mà không ép kiểu các giá trị không phải số (ví dụ: chuỗi) thành
  số.
- Chỉ trả về `true` đối với các giá trị vừa có kiểu `number` vừa là `NaN`.
- An toàn cho đầu vào `unknown` và tránh dương tính giả do chuyển đổi ngầm định.

## Cách dùng

### Cú pháp

Hàm:

- `isNaN(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra xem có phải là `NaN` thuộc kiểu `number` hay không.

### Nhập hàm cục bộ

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // đúng
console.log(isNaN(b)); // sai
console.log(isNaN(c)); // sai

if (isNaN(a)) {
  // a là một số và cụ thể là NaN
}
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isNaN(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 15:48:47 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>