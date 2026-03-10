# areFalse

## Mô tả

`areFalse` kiểm tra liệu tất cả các phần tử trong một mảng được cung cấp có строго là giá trị boolean `false` hay không.

### Trường hợp sử dụng

Xác thực rằng một danh sách các cờ tính năng, kiểm tra, hoặc kết quả guard đều là `false` trước khi tiếp tục (ví dụ: xác
nhận rằng không có điều kiện chặn nào tồn tại).

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areFalse` khi bạn cần xác thực nghiêm ngặt rằng một mảng không rỗng và chỉ chứa giá trị boolean `false`.

### Ưu điểm

- Đảm bảo mọi phần tử đều строго là `false` (không ép kiểu truthy/falsey).
- Trả về `false` cho các giá trị không phải mảng hoặc mảng rỗng bằng cách yêu cầu mảng phải có phần tử thông qua
  `isFilledArray`.
- Dừng sớm tại phần tử đầu tiên không phải `false` để tăng hiệu quả.

## Cách dùng

### Cú pháp

Hàm:

- `areFalse(array)`

Tham số:

- `array`: Mảng cần kiểm tra, chứa các phần tử thuộc bất kỳ kiểu nào.

### Nhập hàm cục bộ

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // đúng
const b = areFalse([false, true, false]);  // sai
const c = areFalse([false, "false", false]); // sai
const d = areFalse([]); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areFalse(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 16:19:04 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>