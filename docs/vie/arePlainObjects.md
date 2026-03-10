# arePlainObjects

## Mô tả

Kiểm tra liệu tất cả phần tử của một mảng có phải là đối tượng thuần hay không, chỉ trả về `true` nếu mọi phần tử đều
đạt điều kiện.

### Trường hợp sử dụng

Xác thực dữ liệu bên ngoài hoặc không được định kiểu (ví dụ: JSON đã phân tích, payload API, dữ liệu gửi từ biểu mẫu) để
đảm bảo bạn nhận được một mảng không rỗng mà mỗi mục đều là một đối tượng thuần trước khi lặp và đọc các thuộc tính.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `arePlainObjects` để xác thực đầu vào không rõ kiểu trước khi coi nó là `Record<string, unknown>[]` (hoặc một
> dạng đối tượng chặt chẽ hơn) trong TypeScript.

### Ưu điểm

- Đảm bảo mọi phần tử trong mảng đầu vào đều là đối tượng thuần, chỉ trả về `true` khi tất cả mục đều khớp.
- Loại bỏ sớm các đầu vào không hợp lệ (không phải mảng hoặc mảng rỗng) bằng cách trả về `false`.
- Coi cả đối tượng literal và đối tượng `Object.create(null)` là các đối tượng thuần hợp lệ.

## Cách dùng

### Cú pháp

Hàm:

- `arePlainObjects(array)`

Tham số:

- `array`: Mảng cần được kiểm tra để xác định các phần tử có phải là đối tượng thuần hay không.

### Nhập hàm cục bộ

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // đúng
const b = arePlainObjects([{}, Object.create(null)]); // đúng
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // sai
const d = arePlainObjects([] as unknown[]); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.arePlainObjects(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 16:56:28 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>