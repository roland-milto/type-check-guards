# areOfType

## Mô tả

Kiểm tra xem tất cả phần tử trong `array` đã cho có thuộc `type` được chỉ định hay không.

### Trường hợp sử dụng

Dùng `areOfType` để xác thực đầu vào không rõ kiểu (ví dụ: JSON đã parse, payload API, dữ liệu người dùng nhập) trước
khi thực hiện các thao tác phụ thuộc kiểu trên mọi phần tử của một mảng.

> **Ghi chú cho người dùng TypeScript:**
>
> Vì `areOfType` là một type guard, TypeScript sẽ thu hẹp kiểu của mảng bên trong khối `if (areOfType(...)) {}` thành
`Array<DataTypeOf<T>>`.

### Ưu điểm

- Cung cấp một type guard cho TypeScript: khi trả về `true`, đầu vào được thu hẹp thành `Array<DataTypeOf<T>>`.
- Xác thực mọi phần tử theo kiểu runtime được yêu cầu, ngăn các mảng trộn kiểu vượt qua.
- Thất bại sớm: trả về `false` ngay khi phát hiện một phần tử không khớp.
- Theo thiết kế, từ chối giá trị không phải mảng và mảng rỗng (phụ thuộc vào `isFilledArray`).

## Cách dùng

### Cú pháp

Hàm:

- `areOfType(array, type)`

Tham số:

- `array`: Mảng cần kiểm tra.
- `type`: Kiểu dùng để đối chiếu với từng phần tử trong mảng.

### Nhập hàm cục bộ

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values bây giờ là number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // sai

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areOfType(array, type)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 17:12:01 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>