# areDates

## Mô tả

`areDates` xác định liệu một mảng cho trước có được điền dữ liệu và chỉ chứa các đối tượng `Date` hay không, chỉ trả về
`true` khi tất cả phần tử đều là ngày hợp lệ.

### Trường hợp sử dụng

Dùng `areDates` để xác thực đầu vào không rõ (ví dụ: JSON đã phân tích, dữ liệu biểu mẫu, payload API) trước khi chạy
logic dành riêng cho ngày tháng như sắp xếp theo thời gian, định dạng, hoặc tính toán khoảng.

> **Ghi chú cho người dùng TypeScript:**
>
> Chỉ trả về `true` cho các mảng không rỗng mà mọi phần tử đều là `Date`; mảng rỗng sẽ trả về `false`.

### Ưu điểm

- Đảm bảo một mảng không rỗng trước khi xác thực nội dung của nó, tránh trả về `true` cho đầu vào rỗng.
- Xác minh mọi phần tử đều là một thể hiện `Date`, trả về `false` ngay lập tức khi gặp phần tử không khớp đầu tiên.
- Hữu ích như một kiểm tra kiểu guard trước khi thực hiện các thao tác dành riêng cho ngày tháng trên các phần tử của
  mảng.

## Cách dùng

### Cú pháp

Hàm:

- `areDates(array)`

Tham số:

- `array`: Mảng cần được kiểm tra xem có phải là các đối tượng `Date` hay không.

### Nhập hàm cục bộ

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // đúng
console.log(areDates(b)); // sai
console.log(areDates(c)); // sai

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areDates(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areDates](../_analysis/areDates.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 15:32:59 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>