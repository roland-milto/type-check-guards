# areFilledArrays

## Mô tả

`areFilledArrays` kiểm tra liệu một mảng hai chiều có không rỗng và tất cả các mảng con của nó đều không rỗng hay không.

### Trường hợp sử dụng

Dùng `areFilledArrays` để xác thực đầu vào dạng bảng hoặc giống ma trận (ví dụ: các hàng CSV, dữ liệu lưới, kết quả được
nhóm) ताकि bạn có thể yên tâm giả định rằng có ít nhất một mảng con và không mảng con nào bị rỗng.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areFilledArrays` khi bạn cần đảm bảo một mảng 2D có ít nhất một hàng và mỗi hàng có ít nhất một phần tử trước
> khi lặp hoặc truy cập theo chỉ số vào nó.

### Ưu điểm

- Xác thực rằng mảng bên ngoài không rỗng và mọi mảng con bên trong cũng không rỗng, chỉ trả về `true` khi cả hai điều
  kiện đều được đáp ứng.
- Hoạt động với mọi kiểu phần tử bên trong các mảng con (ví dụ: số, chuỗi, đối tượng, mảng lồng nhau) vì nó chỉ kiểm tra
  trạng thái “được lấp đầy” của mảng, không kiểm tra nội dung phần tử.
- Cung cấp kết quả boolean đơn giản (`true`/`false`) phù hợp để dùng làm điều kiện bảo vệ trước khi xử lý dữ liệu hai
  chiều.

## Cách dùng

### Cú pháp

Hàm:

- `areFilledArrays(array)`

Tham số:

- `array`: Mảng hai chiều cần kiểm tra.

### Nhập hàm cục bộ

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // đúng
console.log(areFilledArrays(b)); // đúng
console.log(areFilledArrays(c)); // đúng
console.log(areFilledArrays(d)); // sai
console.log(areFilledArrays(e)); // sai
console.log(areFilledArrays(f)); // sai

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areFilledArrays(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Tệp được tạo vào 6 February 2026 at 11:59:48 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>