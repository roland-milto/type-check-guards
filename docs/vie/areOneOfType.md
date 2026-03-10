# areOneOfType

## Mô tả

`areOneOfType` kiểm tra liệu tất cả các phần tử trong một mảng không rỗng có thuộc một trong các kiểu runtime được chỉ
định hay không.

### Trường hợp sử dụng

Xác thực dữ liệu đầu vào (ví dụ: JSON đã parse) khi một trường phải là một mảng không rỗng mà các phần tử bị giới hạn
trong một tập kiểu nguyên thủy đã biết; trả về `false` khi mảng rỗng hoặc chứa bất kỳ kiểu không được phép nào.

> **Ghi chú cho người dùng TypeScript:**
>
> Hàm này trả về boolean và không thu hẹp kiểu phần tử của mảng tại thời điểm biên dịch; hãy dùng nó như một bước xác
> thực runtime trước khi xử lý tiếp.

### Ưu điểm

- Đảm bảo mọi phần tử trong một mảng khớp với ít nhất một kiểu runtime được cho phép, chỉ trả về `true` khi toàn bộ mảng
  đạt yêu cầu.
- Loại bỏ đầu vào không hợp lệ sớm: trả về `false` khi `array` hoặc `types` rỗng hoặc không phải là một mảng có phần tử.
- Hữu ích để xác thực các tập hợp có nhiều kiểu (ví dụ: số và chuỗi) chỉ với một lần gọi `areOneOfType`.

## Cách dùng

### Cú pháp

Hàm:

- `areOneOfType(array, types)`

Tham số:

- `array`: Một mảng các phần tử cần kiểm tra đối chiếu với các kiểu đã cung cấp.
- `types`: Một mảng các chuỗi biểu thị các kiểu dữ liệu cần kiểm tra đối chiếu.

### Nhập hàm cục bộ

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areOneOfType(array, types)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 23:39:11 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>