# areSets

## Mô tả

Kiểm tra xem một mảng không rỗng cho trước có chỉ chứa các thể hiện của `Set` hay không; trả về `true` nếu có và `false`
nếu không.

### Trường hợp sử dụng

Xác thực rằng một giá trị (ví dụ: từ dữ liệu người dùng nhập, phân tích JSON, hoặc các API bên ngoài) là một mảng không
rỗng gồm các đối tượng `Set` trước khi xử lý từng set.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areSets` để xác thực đầu vào không rõ trước khi lặp và gọi các API của `Set` (ví dụ: `.size`, `.has`, `.add`)
> trên từng phần tử.

### Ưu điểm

- Chỉ trả về `true` khi đầu vào là một mảng không rỗng và mọi phần tử đều là một thể hiện của `Set`.
- Ngăn các kết quả dương tính giả đối với mảng rỗng bằng cách trả về `false` khi mảng không có phần tử nào.
- Hữu ích như một kiểm tra bảo vệ ở thời gian chạy trước khi thực hiện các thao tác đặc thù của `Set` trên từng phần tử.

## Cách dùng

### Cú pháp

Hàm:

- `areSets(array)`

Tham số:

- `array`: Mảng cần được kiểm tra xem có phải là các thể hiện của `Set` hay không.

### Nhập hàm cục bộ

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a là một mảng các thể hiện Set tại thời điểm chạy
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // sai
console.log(areSets(c)); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areSets(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areSets](../_analysis/areSets.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 23:16:00 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>