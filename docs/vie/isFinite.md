# isFinite

## Mô tả

Xác định liệu `value` đã cho có phải là một `number` hữu hạn hay không.

### Trường hợp sử dụng

Dùng `isFinite` để xác thực đầu vào không rõ kiểu (ví dụ: từ JSON, biểu mẫu hoặc API) trước khi thực hiện các phép tính
số, đảm bảo giá trị là một số thực, hữu hạn.

> **Ghi chú cho người dùng TypeScript:**
>
> `isFinite` chỉ trả về `true` đối với các số hữu hạn; nó trả về `false` cho `NaN`, `Infinity` và mọi giá trị không phải
> số.

### Ưu điểm

- Sử dụng `Number.isFinite` tích hợp sẵn để kiểm tra tính hữu hạn một cách đáng tin cậy.
- Chỉ trả về `true` đối với các số hữu hạn; trả về `false` cho `NaN`, `Infinity` và các đầu vào không phải số.
- Predicate đơn giản, không có tác dụng phụ, phù hợp cho việc xác thực và logic bảo vệ.

## Cách dùng

### Cú pháp

Hàm:

- `isFinite(value)`

Tham số:

- `value`: Giá trị cần kiểm tra tính hữu hạn.

### Nhập hàm cục bộ

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers là: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value là một số hữu hạn ở đây
  const doubled = value * 2;
  console.log(doubled);
}
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isFinite(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 16:32:16 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>