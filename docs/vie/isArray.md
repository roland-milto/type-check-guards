# isArray

## Mô tả

`isArray` kiểm tra xem một giá trị cho trước có phải là mảng hay không và trả về `true` nếu đúng, ngược lại là `false`.

### Trường hợp sử dụng

Xác thực dữ liệu không rõ (ví dụ: JSON đã parse hoặc phản hồi API) để đảm bảo một giá trị là mảng trước khi lặp, truy
cập theo chỉ số, hoặc truy cập `.length`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isArray` khi bạn cần kiểm tra mảng ở runtime; hàm trả về boolean và an toàn khi gọi với các giá trị `unknown`.

### Ưu điểm

- Sử dụng `Array.isArray` tích hợp sẵn để phát hiện mảng một cách đáng tin cậy trên nhiều realm (ví dụ: iframe).
- Trả về kết quả boolean đơn giản (`true`/`false`) phù hợp cho các guard và logic rẽ nhánh.
- Hoạt động với mọi kiểu đầu vào vì tham số là `unknown`.

## Cách dùng

### Cú pháp

Hàm:

- `isArray(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input là một mảng tại thời điểm chạy
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isArray(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isArray](../_analysis/isArray.md)

<br>

---

<small>Tệp được tạo vào 6 February 2026 at 11:32:38 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>