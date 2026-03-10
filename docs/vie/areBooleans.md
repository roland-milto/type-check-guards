# areBooleans

## Mô tả

`areBooleans` kiểm tra xem một mảng không rỗng đã cho có chỉ chứa các giá trị boolean hay không, trả về `true` nếu có và
`false` nếu không.

### Trường hợp sử dụng

Xác thực dữ liệu do người dùng cung cấp hoặc dữ liệu bên ngoài (ví dụ: payload JSON, tham số truy vấn, mảng cấu hình) để
đảm bảo một danh sách không rỗng chỉ chứa các giá trị boolean trước khi áp dụng logic boolean hoặc truyền nó vào các API
yêu cầu `boolean[]`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areBooleans` để xác thực `unknown[]` trước khi coi nó là `boolean[]`; hàm trả về `false` cho mảng rỗng, vì vậy
> hãy xử lý trường hợp đó một cách tường minh nếu danh sách rỗng nên được cho phép.

### Ưu điểm

- Chỉ trả về `true` khi mọi phần tử đều là boolean và đầu vào là một mảng không rỗng.
- Ngăn chặn dương tính giả bằng cách từ chối mảng rỗng (trả về `false`).
- Hoạt động tốt như một kiểm tra bảo vệ lúc chạy trước các thao tác chỉ dành cho boolean (ví dụ: `every`, `some`, các
  phép rút gọn logic).

## Cách dùng

### Cú pháp

Hàm:

- `areBooleans(array)`

Tham số:

- `array`: Mảng cần được kiểm tra xem có các phần tử boolean hay không.

### Nhập hàm cục bộ

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areBooleans(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 14:43:09 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>