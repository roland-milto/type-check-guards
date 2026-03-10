# isNumeric

## Mô tả

`isNumeric` xác định liệu một `value` nhất định có được coi là kiểu số hay không bằng cách kiểm tra kiểu đã được phân
giải của nó so với `NUMERIC_TYPES`.

### Trường hợp sử dụng

Dùng `isNumeric` để xác thực đầu vào (ví dụ: API payloads, giá trị biểu mẫu, cấu hình) trước khi thực hiện các phép toán
số, và để nhất quán chấp nhận các kiểu giống số (như `BigInt`) theo `NUMERIC_TYPES`.

> **Ghi chú cho người dùng TypeScript:**
>
> `isNumeric` là một predicate trả về boolean; hãy coi nó như một kiểm tra runtime để xác định liệu một giá trị có thuộc
> tập kiểu số do thư viện định nghĩa hay không.

### Ưu điểm

- Sử dụng `getTypeOf` cùng với `NUMERIC_TYPES` để tập trung hóa logic nhận diện kiểu số và giữ cho các kiểm tra nhất
  quán trên toàn bộ codebase.
- Trả về một giá trị boolean đơn giản (`true`/`false`) để dễ rẽ nhánh và sử dụng theo kiểu guard.
- Hỗ trợ nhiều biểu diễn số (ví dụ: `number`, `BigInt`) như được định nghĩa bởi `NUMERIC_TYPES`.

## Cách dùng

### Cú pháp

Hàm:

- `isNumeric(value)`

Tham số:

- `value`: Giá trị cần kiểm tra xem có thuộc kiểu số hay không.

### Nhập hàm cục bộ

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v được coi là kiểu số theo các quy tắc kiểu của thư viện
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isNumeric(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Tệp được tạo vào 6 February 2026 at 15:55:20 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>