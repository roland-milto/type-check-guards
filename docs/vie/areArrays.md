# areArrays

## Mô tả

`areArrays` xác định liệu một giá trị có phải là một mảng hai chiều đã được điền (không rỗng) mà các phần tử của nó đều
là mảng hay không.

### Trường hợp sử dụng

Dùng `areArrays` để xác thực các đầu vào dạng bảng hoặc dạng ma trận (ví dụ: các hàng CSV, dữ liệu lưới, hoặc danh sách
được nhóm) trước khi thực hiện các thao tác theo hàng/cột; hàm trả về `false` nếu đầu vào không phải là mảng, bị rỗng,
hoặc chứa bất kỳ phần tử nào không phải là mảng.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areArrays` khi bạn cần đảm bảo một giá trị là mảng 2D không rỗng và mỗi hàng là một mảng trước khi lặp hoặc truy
> cập chỉ mục vào các mảng lồng nhau.

### Ưu điểm

- Xác thực rằng đầu vào là một mảng hai chiều không rỗng, trong đó mọi phần tử đều là một mảng.
- Trả về kết quả boolean đơn giản (`true`/`false`) phù hợp cho các guard và thoát sớm.
- Giúp ngăn lỗi khi chạy (runtime) khi mã phía sau giả định các thao tác trên mảng lồng nhau (ví dụ: map các hàng).

## Cách dùng

### Cú pháp

Hàm:

- `areArrays(array)`

Tham số:

- `array`: Đầu vào cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value là một mảng 2D với các mảng làm phần tử
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areArrays(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Tệp được tạo vào 6 February 2026 at 13:42:10 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>