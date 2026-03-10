# areStreams

## Mô tả

`areStreams` xác định liệu một giá trị có phải là một mảng có phần tử, trong đó mọi phần tử đều là một `Stream` hay
không.

### Trường hợp sử dụng

Xác thực các tập hợp do người dùng cung cấp hoặc được tạo động (ví dụ: nhiều stream đọc tệp) trước khi pipe, resume,
hoặc thao tác với chúng theo nhóm.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areStreams` để xác thực đầu vào không rõ trước khi coi nó là `Stream[]`; hàm chỉ trả về `true` khi giá trị là
> một mảng không rỗng và mọi phần tử đều là một `Stream`.

### Ưu điểm

- Đảm bảo đầu vào là một mảng có phần tử (không rỗng) trong đó mọi phần tử đều là một `Stream`.
- Cung cấp một kiểm tra bảo vệ `true`/`false` đơn giản để xác thực các tập hợp stream trước khi xử lý.
- Thất bại sớm: trả về `false` ngay khi phát hiện một phần tử không phải `Stream`.
- Giúp ngăn lỗi khi chạy (runtime) khi mã giả định rằng tất cả các mục đều là các thể hiện `Stream`.

## Cách dùng

### Cú pháp

Hàm:

- `areStreams(array)`

Tham số:

- `array`: Mảng cần được kiểm tra xem có phải là các đối tượng Stream hay không.

### Nhập hàm cục bộ

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input là một mảng đã được điền đầy các đối tượng Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areStreams(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 23:36:16 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>