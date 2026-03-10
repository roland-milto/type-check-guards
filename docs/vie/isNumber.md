# isNumber

## Mô tả

`isNumber` kiểm tra liệu một giá trị có phải là một số hữu hạn và không phải `NaN` hay không.

### Trường hợp sử dụng

Xác thực đầu vào dạng số từ các nguồn không đáng tin cậy (biểu mẫu, tham số truy vấn, payload JSON) trước khi tính toán,
lưu trữ hoặc kiểm tra phạm vi, đảm bảo chỉ các số hữu hạn mới được chấp nhận (`true`) và mọi thứ khác trả về `false`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isNumber` để xác thực các giá trị `unknown` trước khi thực hiện phép toán; nó loại bỏ `NaN`, `Infinity` và
`-Infinity`.

### Ưu điểm

- Chỉ trả về `true` đối với các số JavaScript thực sự (kiểm tra kiểu cộng với việc loại bỏ `NaN` và vô cực).
- Ngăn các lỗi xác thực phổ biến khi `NaN`, `Infinity` hoặc `-Infinity` vô tình được chấp nhận là số.
- Hoạt động tốt như một cơ chế bảo vệ lúc chạy (runtime guard) cho đầu vào không xác định (ví dụ: JSON, dữ liệu người
  dùng nhập, API bên ngoài).
- Đơn giản, nhanh và không có tác dụng phụ.

## Cách dùng

### Cú pháp

Hàm:

- `isNumber(value)`

Tham số:

- `value`: Giá trị cần kiểm tra.

### Nhập hàm cục bộ

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input là một số hữu hạn hợp lệ
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isNumber(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 13:11:52 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>