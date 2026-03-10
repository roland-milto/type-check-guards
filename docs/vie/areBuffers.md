# areBuffers

## Mô tả

`areBuffers` kiểm tra liệu giá trị được cung cấp có phải là một mảng không rỗng, đã được điền, trong đó mọi phần tử đều
là một `Buffer` hay không; nếu đúng thì trả về `true`, nếu không thì trả về `false`.

### Trường hợp sử dụng

Xác thực các mảng chunk đầu vào (ví dụ: từ stream, tải tệp lên, hoặc gói tin mạng) để đảm bảo tất cả các phần đều là các
thể hiện `Buffer` trước khi nối, giải mã, hoặc chuyển chúng cho các hàm mật mã hay xử lý nhị phân.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areBuffers` để xác thực `unknown[]` trước khi gọi các API dành riêng cho Buffer như `Buffer.concat`, đảm bảo hàm
> chỉ trả về `true` khi mọi phần tử đều là một `Buffer`.

### Ưu điểm

- Đảm bảo mọi phần tử trong đầu vào đều là một thể hiện `Buffer` của Node.js, chỉ trả về `true` khi toàn bộ mảng khớp.
- Loại bỏ sớm các đầu vào không hợp lệ bằng cách yêu cầu một mảng không rỗng và đã được điền; trả về `false` cho mảng
  rỗng hoặc giá trị không phải mảng.
- Hữu ích như một bước kiểm tra trước khi thực hiện các thao tác chỉ dành cho buffer (ví dụ: nối, băm, giao thức nhị
  phân).

## Cách dùng

### Cú pháp

Hàm:

- `areBuffers(array)`

Tham số:

- `array`: Mảng cần được kiểm tra xem có phải là các thể hiện buffer hay không.

### Nhập hàm cục bộ

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areBuffers(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 16:28:00 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>