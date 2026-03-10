# areEqual

## Mô tả

`areEqual` kiểm tra liệu tất cả phần tử trong một mảng có bằng với một giá trị mong đợi cho trước hay không, chỉ trả về
`true` đối với các mảng không rỗng mà mọi mục đều khớp.

### Trường hợp sử dụng

Xác thực rằng một danh sách chỉ chứa một giá trị được phép duy nhất (ví dụ: tất cả cờ trạng thái đều là `true`, tất cả
vai trò đều là `"admin"`, hoặc tất cả mục số đều bằng một hằng số bắt buộc) đồng thời coi đầu vào rỗng là không hợp lệ (
`false`).

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areEqual` khi bạn cần kiểm tra nghiêm ngặt rằng tất cả mục đều khớp; hàm trả về `false` cho mảng rỗng và cho mọi
> đầu vào không phải mảng hoặc không phải mảng có phần tử.

### Ưu điểm

- Chỉ trả về `true` khi mọi phần tử đều khớp với giá trị mong đợi; nếu không thì trả về `false`.
- Thất bại sớm: dừng kiểm tra ngay khi phát hiện một phần tử không khớp.
- Bảo vệ khỏi đầu vào không hợp lệ bằng cách trả về `false` khi đầu vào không phải là một mảng có phần tử.

## Cách dùng

### Cú pháp

Hàm:

- `areEqual(value, expected)`

Tham số:

- `value`: Mảng cần được kiểm tra.
- `expected`: Phần tử dùng để so sánh với từng mục trong mảng.

### Nhập hàm cục bộ

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areEqual(value, expected)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 23:52:47 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>