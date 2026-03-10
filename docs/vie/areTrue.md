# areTrue

## Mô tả

Kiểm tra xem một mảng không rỗng có chỉ chứa các giá trị boolean `true` hay không.

### Trường hợp sử dụng

Dùng `areTrue` để xác thực rằng một tập các điều kiện tiên quyết hoặc cờ tính năng đều được bật (tất cả giá trị đều là
`true`) trước khi tiếp tục, đồng thời coi các đầu vào rỗng hoặc sai định dạng là không thỏa mãn (`false`).

> **Ghi chú cho người dùng TypeScript:**
>
> `areTrue` trả về `false` đối với mảng rỗng và đối với các mảng chứa bất kỳ giá trị nào không строго là `true`.

### Ưu điểm

- Chỉ trả về `true` khi mọi phần tử đều строго là `true` và mảng không rỗng.
- Thất bại sớm: trả về `false` ngay khi phát hiện một giá trị không phải `true`.
- Từ chối đầu vào không hợp lệ (không phải mảng hoặc mảng rỗng) bằng cách trả về `false`.

## Cách dùng

### Cú pháp

Hàm:

- `areTrue(array)`

Tham số:

- `array`: Mảng cần kiểm tra để xác nhận tất cả giá trị đều là `true`.

### Nhập hàm cục bộ

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areTrue(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 13:53:21 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>