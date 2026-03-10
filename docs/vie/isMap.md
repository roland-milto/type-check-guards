# isMap

## Mô tả

Kiểm tra xem `value` đã cho có phải là một `Map` hay không, trả về `true` nếu đúng và `false` nếu không.

### Trường hợp sử dụng

Dùng `isMap` khi bạn nhận được một giá trị `unknown` (ví dụ: từ phân tích JSON, các API bên ngoài, hoặc dữ liệu người
dùng nhập) và cần đảm bảo đó là một `Map` trước khi thực hiện các thao tác với `Map`.

> **Ghi chú cho người dùng TypeScript:**
>
> `isMap` là một guard ở thời gian chạy trả về `true` khi giá trị là một `Map` và `false` nếu không; hãy dùng nó để thu
> hẹp `unknown` trước khi gọi các API của `Map`.

### Ưu điểm

- Cung cấp một kiểm tra nhanh ở thời gian chạy để xác định một giá trị có phải là `Map` hay không.
- Giúp ngăn ngừa lỗi kiểu bằng cách bảo vệ các nhánh mã yêu cầu các phương thức `Map` như `get`, `set` và `has`.
- Hoạt động tốt như một bước xác thực nhẹ khi xử lý các đầu vào `unknown`.

## Cách dùng

### Cú pháp

Hàm:

- `isMap(value)`

Tham số:

- `value`: Giá trị cần kiểm tra.

### Nhập hàm cục bộ

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isMap(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isMap](../_analysis/isMap.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 16:42:37 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>