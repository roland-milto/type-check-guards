# areValidDates

## Mô tả

Xác định liệu một mảng có khác rỗng và hoàn toàn bao gồm các đối tượng `Date` hợp lệ hay không.

### Trường hợp sử dụng

Dùng `areValidDates` để xác thực các mảng do người dùng hoặc API cung cấp trước khi thực hiện các thao tác dựa trên
ngày (sắp xếp, kiểm tra khoảng, định dạng), đảm bảo mọi mục đều là các đối tượng `Date` thật, hợp lệ và danh sách không
rỗng.

> **Ghi chú cho người dùng TypeScript:**
>
> `areValidDates` trả về `false` cho một mảng rỗng; hãy đảm bảo mảng được dự định là không rỗng trước khi dựa vào nó như
> một bước xác thực.

### Ưu điểm

- Chỉ trả về `true` khi mọi phần tử đều là một thể hiện `Date` hợp lệ (không có ngày không hợp lệ như
  `new Date('invalid')`).
- Từ chối đầu vào rỗng bằng cách trả về `false`, đảm bảo bạn chỉ chấp nhận danh sách ngày có ý nghĩa, không rỗng.
- Cung cấp một kiểm tra boolean kiểu guard đơn giản, dễ kết hợp với các bước xác thực khác.

## Cách dùng

### Cú pháp

Hàm:

- `areValidDates(array)`

Tham số:

- `array`: Mảng cần kiểm tra, có thể chứa các đối tượng `Date`.

### Nhập hàm cục bộ

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // đúng
console.log(areValidDates(b)); // sai
console.log(areValidDates(c)); // sai
console.log(areValidDates(d)); // sai

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areValidDates(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 14:34:38 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>