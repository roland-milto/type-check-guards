# areFinite

## Mô tả

`areFinite` kiểm tra xem một giá trị có phải là một mảng không rỗng mà các phần tử đều là số hữu hạn hay không, trả về
`true` nếu đúng và `false` nếu không.

### Trường hợp sử dụng

Xác thực các mảng đầu vào dạng số (ví dụ: chuỗi dữ liệu biểu đồ, danh sách tọa độ, mẫu đo lường) trước khi thực hiện
tính toán, đảm bảo kết quả là `true` chỉ khi mọi giá trị đều là số hữu hạn.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areFinite` khi bạn cần đảm bảo một mảng là không rỗng và chỉ chứa các số hữu hạn; hàm trả về `false` cho mảng
> rỗng và cho các mảng chứa `NaN` hoặc các giá trị vô cực.

### Ưu điểm

- Chỉ trả về `true` khi đầu vào là một mảng không rỗng và mọi phần tử đều là số hữu hạn.
- Loại bỏ `Infinity`, `-Infinity` và `NaN` bằng cách dựa vào kiểm tra `isFinite` cho từng phần tử.
- Cung cấp kết quả boolean đơn giản (`true`/`false`) phù hợp cho các guard và luồng kiểm tra tính hợp lệ.

## Cách dùng

### Cú pháp

Hàm:

- `areFinite(array)`

Tham số:

- `array`: Mảng cần được kiểm tra để xác định tất cả các phần tử của nó có hữu hạn hay không.

### Nhập hàm cục bộ

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // đúng
console.log(areFinite(b)); // sai
console.log(areFinite(c)); // sai

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areFinite(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 16:38:01 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>