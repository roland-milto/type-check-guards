# areMaps

## Mô tả

`areMaps` xác định liệu một mảng cho trước có không rỗng và tất cả các phần tử của nó đều là các thể hiện `Map` hay
không.

### Trường hợp sử dụng

Xác thực đầu vào không rõ kiểu (ví dụ: từ phân tích JSON, API bên ngoài, hoặc các nguồn động) trước khi coi nó như một
danh sách không rỗng các đối tượng `Map`.

> **Ghi chú cho người dùng TypeScript:**
>
> Trả về `false` đối với mảng rỗng; chỉ trả về `true` khi mảng có phần tử và mọi phần tử đều là một `Map`.

### Ưu điểm

- Đảm bảo mọi phần tử đều là một thể hiện `Map`, chỉ trả về `true` khi toàn bộ mảng vượt qua kiểm tra.
- Theo thiết kế sẽ từ chối mảng rỗng, ngăn việc vô tình chấp nhận “không có dữ liệu” như là đầu vào hợp lệ.
- Hữu ích như một điều kiện bảo vệ trước khi thực hiện các thao tác đặc thù của `Map` (ví dụ: `.get()`, `.set()`, lặp)
  trên toàn bộ một tập hợp.

## Cách dùng

### Cú pháp

Hàm:

- `areMaps(array)`

Tham số:

- `array`: Mảng cần kiểm tra.

### Nhập hàm cục bộ

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items được đảm bảo là một mảng không rỗng gồm các thể hiện Map tại thời điểm chạy
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // trả về false cho: mảng rỗng, hoặc mảng chứa bất kỳ giá trị nào không phải Map
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areMaps(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 16:15:15 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>