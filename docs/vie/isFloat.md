# isFloat

## Mô tả

`isFloat` xác định liệu `value` đã cho có phải là một số dấu phẩy động hữu hạn hay không (một `number` không phải số
nguyên).

### Trường hợp sử dụng

Xác thực đầu vào số do người dùng cung cấp khi cần giá trị có phần thập phân (ví dụ: giá, phép đo, tỷ lệ) và loại bỏ số
nguyên, `NaN` và các giá trị vô cực.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isFloat` khi bạn cần chỉ chấp nhận các đầu vào số hữu hạn, không phải số nguyên; nó loại bỏ số nguyên và các số
> không hữu hạn.

### Ưu điểm

- Chỉ trả về `true` đối với các số hữu hạn, không phải số nguyên (loại trừ số nguyên, `NaN`, `Infinity` và `-Infinity`).
- Hoạt động với mọi kiểu đầu vào (`unknown`) và thu hẹp kiểu an toàn bằng cách kiểm tra `typeof value === "number"`.
- Sử dụng các bộ kiểm tra số học có sẵn (`Number.isInteger`, `Number.isFinite`) để có hành vi nhất quán, dễ dự đoán.

## Cách dùng

### Cú pháp

Hàm:

- `isFloat(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra xem có phải là số dấu phẩy động hay không.

### Nhập hàm cục bộ

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // giá trị là một số tại thời điểm chạy; nó là hữu hạn và không phải là số nguyên
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isFloat(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 16:10:26 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>