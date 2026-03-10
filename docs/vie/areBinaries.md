# areBinaries

## Mô tả

Kiểm tra xem giá trị được cung cấp có phải là một mảng không rỗng gồm các chuỗi nhị phân hợp lệ hay không và chỉ trả về
`true` nếu tất cả các mục đều vượt qua xác thực.

### Trường hợp sử dụng

Dùng `areBinaries` khi bạn nhận một danh sách không rõ (ví dụ: từ JSON, biểu mẫu hoặc API) và cần đảm bảo đó là một mảng
không rỗng gồm các chuỗi nhị phân trước khi phân tích hoặc xử lý.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areBinaries` để xác thực đầu vào không rõ trước khi chuyển các chuỗi nhị phân sang số/BigInt; nó đảm bảo mảng
> không rỗng và mọi phần tử đều là một chuỗi nhị phân hợp lệ.

### Ưu điểm

- Xác thực rằng một giá trị là một mảng không rỗng, trong đó mọi phần tử đều là một chuỗi nhị phân hợp lệ.
- Trả về một kết quả boolean đơn giản (`true`/`false`) phù hợp cho các guard, trả về sớm và xác thực đầu vào.
- Ngăn lỗi phân tích cú pháp ở các bước sau bằng cách từ chối các mảng chứa bất kỳ mục không phải nhị phân nào.

## Cách dùng

### Cú pháp

Hàm:

- `areBinaries(array)`

Tham số:

- `array`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // đúng
console.log(areBinaries(b)); // sai
console.log(areBinaries([])); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areBinaries(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 23:16:28 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>