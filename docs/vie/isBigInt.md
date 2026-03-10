# isBigInt

## Mô tả

`isBigInt` kiểm tra liệu một giá trị đã cho có thuộc kiểu `bigint` hay không, trả về `true` cho các giá trị nguyên thủy
BigInt và `false` trong các trường hợp khác.

### Trường hợp sử dụng

Xác thực và thu hẹp các giá trị đến từ nguồn không có kiểu (ví dụ: phân tích JSON, dữ liệu người dùng nhập, API bên
ngoài) trước khi thực hiện các phép tính đặc thù của BigInt hoặc lưu chúng vào các trường chỉ chấp nhận BigInt.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isBigInt` để thu hẹp `unknown` thành `bigint` trước khi thực hiện phép toán BigInt (ví dụ: `+`, `*`) vốn yêu cầu
> toán hạng là BigInt.

### Ưu điểm

- Cung cấp một phép kiểm tra thời gian chạy đơn giản, đáng tin cậy cho kiểu nguyên thủy `bigint`.
- Giúp thu hẹp các giá trị `unknown` trước khi thực hiện các thao tác chỉ dành cho BigInt.
- Tránh dương tính giả: số thông thường, chuỗi và các kiểu khác sẽ trả về `false`.

## Cách dùng

### Cú pháp

Hàm:

- `isBigInt(value)`

Tham số:

- `value`: Giá trị cần kiểm tra.

### Nhập hàm cục bộ

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // đúng
console.log(isBigInt(10));  // sai
console.log(isBigInt("10")); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isBigInt(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 23:33:50 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>