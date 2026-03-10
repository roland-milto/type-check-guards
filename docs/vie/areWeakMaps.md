# areWeakMaps

## Mô tả

`areWeakMaps` kiểm tra liệu một giá trị có phải là một mảng không rỗng mà trong đó mọi phần tử đều là `WeakMap` hay
không, chỉ trả về `true` trong trường hợp đó và `false` trong các trường hợp còn lại.

### Trường hợp sử dụng

Xác thực dữ liệu thời gian chạy (ví dụ: JSON đã phân tích, đầu vào plugin, hoặc cấu hình kiểu lỏng) để đảm bảo đó là một
mảng không rỗng gồm các thể hiện `WeakMap` trước khi lặp và gọi các phương thức `WeakMap`; trả về `false` khi bất kỳ
phần tử nào không phải là `WeakMap` hoặc khi mảng rỗng.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areWeakMaps` để xác thực đầu vào không rõ kiểu trước khi coi nó là một `WeakMap[]` không rỗng; hàm trả về
`false` đối với mảng rỗng.

### Ưu điểm

- Đảm bảo mọi phần tử trong mảng được cung cấp đều là một thể hiện `WeakMap`.
- Trả về `false` cho mảng rỗng, ngăn việc vô tình chấp nhận “không có dữ liệu” như là đầu vào hợp lệ.
- Hữu ích như một bước kiểm tra (guard) trước khi thực hiện các thao tác đặc thù của `WeakMap` trên tất cả các phần tử.

## Cách dùng

### Cú pháp

Hàm:

- `areWeakMaps(array)`

Tham số:

- `array`: Mảng cần kiểm tra xem có phải các thể hiện `WeakMap` hay không.

### Nhập hàm cục bộ

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list là một mảng không rỗng gồm các thể hiện WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // không phải là một WeakMap[] không rỗng
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areWeakMaps(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 13:40:23 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>