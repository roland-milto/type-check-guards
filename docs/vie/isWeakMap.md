# isWeakMap

## Mô tả

Xác định liệu `value` đã cho có phải là một thể hiện `WeakMap` hay không.

### Trường hợp sử dụng

Dùng `isWeakMap` khi bạn nhận một giá trị `unknown` (ví dụ: từ API công khai, hệ thống plugin hoặc cấu hình động) và cần
xác minh đó là `WeakMap` trước khi sử dụng hành vi dành riêng cho `WeakMap`.

> **Ghi chú cho người dùng TypeScript:**
>
> `isWeakMap` thực hiện kiểm tra `instanceof WeakMap`; đây là một bộ bảo vệ thời gian chạy chỉ trả về `true` cho các thể
> hiện `WeakMap` thực sự.

### Ưu điểm

- Kiểm tra thời gian chạy đơn giản để xác định một giá trị có phải là `WeakMap` hay không.
- Giúp ngăn việc dùng sai các API yêu cầu `WeakMap` bằng cách trả về `true`/`false` thay vì ném lỗi.
- Hoạt động với đầu vào `unknown`, giúp thuận tiện tại ranh giới mô-đun (ví dụ: phân tích, dữ liệu bên ngoài hoặc mã
  không có kiểu).

## Cách dùng

### Cú pháp

Hàm:

- `isWeakMap(value)`

Tham số:

- `value`: Giá trị cần kiểm tra.

### Nhập hàm cục bộ

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a là một WeakMap khi chạy (runtime)
}

console.log(isWeakMap(a)); // đúng
console.log(isWeakMap(b)); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isWeakMap(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 13:27:35 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>