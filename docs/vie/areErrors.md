# areErrors

## Mô tả

Kiểm tra xem một mảng có không rỗng và chỉ chứa các đối tượng `Error` hay không, trả về `true` hoặc `false`.

### Trường hợp sử dụng

Xác thực rằng một `unknown[]` được cung cấp ở runtime (ví dụ: các lỗi được tổng hợp, kết quả kiểm tra hợp lệ, hoặc dữ
liệu đã được giải tuần tự) là một danh sách không rỗng các đối tượng `Error` trước khi lặp qua, ghi log, hoặc ném lại (
rethrow).

> **Ghi chú cho người dùng TypeScript:**
>
> `areErrors` chỉ trả về `true` đối với một mảng có phần tử mà mọi mục đều là một `Error`; nó trả về `false` đối với
> mảng rỗng hoặc nếu bất kỳ phần tử nào không phải là `Error`.

### Ưu điểm

- Đảm bảo mọi phần tử đều là một thể hiện của `Error`, cho phép xử lý và ghi log lỗi một cách an toàn.
- Từ chối mảng rỗng, ngăn việc vô tình coi trạng thái “không có lỗi” là danh sách lỗi hợp lệ.
- Hoạt động tốt như một bộ kiểm tra (guard) ở runtime khi làm việc với đầu vào `unknown[]` (ví dụ: từ API hoặc các khối
  `catch`).

## Cách dùng

### Cú pháp

Hàm:

- `areErrors(array)`

Tham số:

- `array`: Mảng cần kiểm tra xem có phải các đối tượng `Error` hay không.

### Nhập hàm cục bộ

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value là một mảng không rỗng gồm các đối tượng Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areErrors(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Tệp được tạo vào 6 February 2026 at 12:36:13 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>