# getTypeOf

## Mô tả

`getTypeOf` trả về một nhãn kiểu chi tiết, dễ đọc cho con người cho một giá trị cho trước, bao gồm các kiểu số được tinh
chỉnh và các loại đối tượng cụ thể.

### Trường hợp sử dụng

Dùng `getTypeOf` để chuẩn hoá việc phát hiện kiểu trong kiểm tra đầu vào và chẩn đoán—ví dụ: từ chối `nan`, chỉ chấp
nhận ID dạng `integer`, xử lý chuỗi số như `decimal` khác với `string` thông thường, hoặc ghi log chính xác loại đối
tượng như `date` và `regexp`.

> **Ghi chú cho người dùng TypeScript:**
>
> Kiểu trả về là `DataTypeAsString | string`. Hãy xem nó như một nhãn mô tả; so sánh với các literal đã biết như
`integer`, `float`, `nan`, `array`, `null` và `undefined` khi rẽ nhánh.

### Ưu điểm

- Trả về một chuỗi kiểu chi tiết hơn so với `typeof` của JavaScript, bao gồm các kiểu con số như `integer`, `float` và
  `nan`.
- Phân biệt rõ ràng `null` và `undefined` lần lượt là `null` và `undefined`.
- Phát hiện các định dạng chuỗi số phổ biến và báo cáo chúng là `binary`, `octal`, `decimal` hoặc `hexadecimal` thay vì
  chỉ là `string`.
- Cũng nhận diện mảng là `array` và dùng `Object.prototype.toString` để cung cấp tên kiểu đối tượng cụ thể (ví dụ:
  `date`, `regexp`, `map`, `set`).
- Rất hữu ích cho việc kiểm tra hợp lệ (validation), ghi log và gỡ lỗi khi cần các nhãn kiểu nhất quán, dễ đọc cho con
  người.

## Cách dùng

### Cú pháp

Hàm:

- `getTypeOf(value)`

Tham số:

- `value`: Giá trị cần xác định kiểu dữ liệu.

### Nhập hàm cục bộ

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Các kiểm tra ví dụ
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.getTypeOf(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Tệp được tạo vào 6 February 2026 at 13:15:40 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>