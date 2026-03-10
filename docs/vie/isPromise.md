# isPromise

## Mô tả

Xác định liệu một giá trị đã cho có phải là `Promise` hay không.

### Trường hợp sử dụng

Dùng `isPromise` để xác thực các đầu vào không rõ kiểu trước khi xử lý chúng như một `Promise`, chẳng hạn khi xử lý các
giá trị trả về từ plugin, dynamic import, hoặc các API có kiểu lỏng lẻo.

> **Ghi chú cho người dùng TypeScript:**
>
> `isPromise` kiểm tra bằng `instanceof Promise`, vì vậy nó chỉ trả về `true` cho các thể hiện `Promise` thực sự (không
> phải các thenable chung chung).

### Ưu điểm

- Cung cấp một kiểm tra runtime đơn giản để xác định liệu một giá trị có phải là `Promise` hay không.
- Giúp bảo vệ các nhánh mã yêu cầu một thể hiện `Promise` thực sự, trả về `true` hoặc `false` một cách nhất quán.
- Tránh dương tính giả từ các đối tượng “thenable” (ví dụ: `{ then() {} }`) bằng cách yêu cầu một thể hiện `Promise`
  thực sự.

## Cách dùng

### Cú pháp

Hàm:

- `isPromise(value)`

Tham số:

- `value`: Giá trị cần được kiểm tra.

### Nhập hàm cục bộ

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // đúng
console.log(isPromise(b)); // sai
console.log(isPromise(123)); // sai
console.log(isPromise(null)); // sai

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.isPromise(value)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 23:54:49 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>