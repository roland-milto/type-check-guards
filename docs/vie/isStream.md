# isStream

## Mô tả

`isStream` kiểm tra xem một giá trị cho trước có phải là đối tượng stream hay không (giống stream của Node.js,
`ReadableStream`, hoặc `WritableStream`).

### Trường hợp sử dụng

Xác thực đầu vào có thể là đối tượng thuần hoặc stream (ví dụ: tải tệp lên, body HTTP, hoặc các pipeline xử lý) và rẽ
nhánh logic dựa trên việc giá trị đó có phải là stream hay không.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isStream` để thu hẹp kiểu `unknown` trước khi gọi các phương thức stream; nó nhận diện các đối tượng giống
> stream của Node.js (qua `pipe`/`on`) và Web Streams (`ReadableStream`/`WritableStream`) khi các global đó tồn tại.

### Ưu điểm

- Phát hiện an toàn các đối tượng giống stream phổ biến của Node.js bằng cách kiểm tra các hàm `pipe` và `on`.
- Cũng hỗ trợ Web Streams bằng cách nhận diện `ReadableStream` và `WritableStream` khi khả dụng.
- Trả về kết quả boolean đơn giản (`true`/`false`) phù hợp cho các guard và logic rẽ nhánh.

## Cách dùng

### Cú pháp

Hàm:

- `isStream(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream giống như stream; bạn có thể an toàn sử dụng các API stream phổ biến
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isStream(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isStream](../_analysis/isStream.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 23:43:36 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>