# isNullOrUndefined

## Mô tả

Kiểm tra xem một giá trị cho trước có phải là `null` hoặc `undefined` hay không.

### Trường hợp sử dụng

Dùng `isNullOrUndefined` khi bạn cần coi cả `null` và `undefined` là “không có giá trị”, chẳng hạn như kiểm tra hợp lệ
các đầu vào tùy chọn, chuẩn hóa payload API, hoặc guard các nhánh code trước khi dereference một giá trị có thể bị
thiếu.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `isNullOrUndefined` để guard chống lại các giá trị bị thiếu trước khi truy cập thuộc tính hoặc gọi phương thức;
> hàm chỉ trả về `true` đối với `null` và `undefined`.

### Ưu điểm

- Cung cấp một guard rõ ràng, có thể tái sử dụng để phát hiện `null` và `undefined` tại một nơi.
- Trả về một giá trị boolean đơn giản (`true`/`false`) dễ kết hợp trong các điều kiện và kiểm tra hợp lệ.
- Giúp tránh các lỗi runtime phổ biến bằng cách kiểm tra giá trị bị thiếu trước khi truy cập thuộc tính hoặc gọi phương
  thức.

## Cách dùng

### Cú pháp

Hàm:

- `isNullOrUndefined(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra xem có phải `null` hoặc `undefined` hay không.

### Nhập hàm cục bộ

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // xử lý giá trị bị thiếu
}

console.log(isNullOrUndefined(b)); // đúng
console.log(isNullOrUndefined(c)); // sai

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isNullOrUndefined(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Tệp được tạo vào 31 January 2026 at 00:35:48 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>