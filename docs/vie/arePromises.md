# arePromises

## Mô tả

`arePromises` xác định liệu tất cả các phần tử trong một mảng có phải là các thể hiện `Promise` hay không.

### Trường hợp sử dụng

Xác thực rằng một danh sách được xây dựng động hoặc được cung cấp từ bên ngoài chỉ chứa các promise trước khi tổng hợp
chúng (ví dụ: với `Promise.all`).

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `arePromises` để xác thực `unknown[]` trước khi gọi `Promise.all` hoặc các thao tác chỉ dành cho promise khác;
> hàm trả về `false` cho các mảng rỗng.

### Ưu điểm

- Đảm bảo mọi phần tử đều là một `Promise` trước khi bạn tiếp tục với logic dành riêng cho promise.
- Trả về `false` cho các mảng không có phần tử, ngăn kết quả mơ hồ đối với đầu vào rỗng.
- Hữu ích như một cơ chế bảo vệ lúc chạy (runtime guard) khi làm việc với `unknown[]` từ các nguồn bên ngoài.

## Cách dùng

### Cú pháp

Hàm:

- `arePromises(array)`

Tham số:

- `array`: Mảng cần kiểm tra xem có phải là các thể hiện của Promise hay không.

### Nhập hàm cục bộ

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values là một mảng các thể hiện Promise tại thời điểm chạy
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.arePromises(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 23:50:29 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>