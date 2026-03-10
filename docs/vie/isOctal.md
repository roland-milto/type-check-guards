# isOctal

## Mô tả

Xác định liệu một giá trị có phải là chuỗi literal bát phân hợp lệ hay không (ví dụ: `0o755`).

### Trường hợp sử dụng

Xác thực dữ liệu người dùng nhập hoặc các giá trị cấu hình bắt buộc phải được biểu diễn dưới dạng chuỗi literal bát
phân (ví dụ, chế độ quyền tệp như `0o644`) trước khi phân tích hoặc chuyển đổi chúng.

> **Ghi chú cho người dùng TypeScript:**
>
> `isOctal` là một bộ bảo vệ kiểu (`value is string`). Sau kết quả `true`, TypeScript thu hẹp biến đã kiểm tra về
`string`.

### Ưu điểm

- Cung cấp một bộ bảo vệ kiểu nghiêm ngặt: chỉ trả về `true` khi đầu vào là một chuỗi khớp với định dạng literal bát
  phân.
- Loại bỏ chuỗi rỗng và chuỗi có khoảng trắng ở đầu/cuối (ký tự điều khiển/khoảng trắng ASCII), giúp giảm các trường hợp
  khớp ngoài ý muốn.
- Hỗ trợ dấu tùy chọn và không phân biệt hoa/thường cho tiền tố `0o`/`0O`.
- Khoan dung với đầu vào không phải chuỗi bằng cách trả về `false` thay vì ném lỗi.

## Cách dùng

### Cú pháp

Hàm:

- `isOctal(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // đúng
console.log(isOctal(b)); // đúng
console.log(isOctal(c)); // sai
console.log(isOctal(d)); // sai

if (isOctal(a)) {
  // a là chuỗi ở đây
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isOctal(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 15:44:04 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>