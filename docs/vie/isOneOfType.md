# isOneOfType

## Mô tả

`isOneOfType` xác định liệu `value` đã cho có khớp với ít nhất một trong các chuỗi kiểu được cung cấp hay không, trả về
`true` nếu tìm thấy bất kỳ kiểu nào khớp và `false` nếu không.

### Trường hợp sử dụng

Xác thực dữ liệu kiểu lỏng hoặc dữ liệu bên ngoài (ví dụ: JSON đã parse, tham số truy vấn) bằng cách cho phép nhiều kiểu
runtime chấp nhận được (như `number` hoặc `string`) trước khi tiếp tục với logic tiếp theo.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isOneOfType` khi bạn muốn kiểm tra ở runtime rằng một giá trị khớp với bất kỳ kiểu nào trong số nhiều kiểu được
> cho phép; hàm trả về `true` nếu ít nhất một kiểu khớp, ngược lại trả về `false`.

### Ưu điểm

- Kiểm tra một giá trị với nhiều kiểu được cho phép trong một lần gọi, trả về `true` ngay khi khớp lần đầu.
- Cung cấp kết quả boolean đơn giản, dễ kết hợp với logic điều kiện và các lệnh return sớm.
- Hoạt động với đầu vào `unknown`, hữu ích tại các ranh giới runtime (ví dụ: dữ liệu bên ngoài, dữ liệu người dùng
  nhập).

## Cách dùng

### Cú pháp

Hàm:

- `isOneOfType(value, types)`

Tham số:

- `value`: Giá trị cần được kiểm tra đối chiếu với các kiểu đã chỉ định.
- `types`: Một mảng các chuỗi kiểu đại diện cho các kiểu tiềm năng của giá trị.

### Nhập hàm cục bộ

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input là một đối tượng tại thời điểm chạy
}

console.log(isOneOfType(3, ["number", "string"])); // đúng
console.log(isOneOfType("hello", ["number", "boolean"])); // sai

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isOneOfType(value, types)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Tệp được tạo vào 6 February 2026 at 13:59:21 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>