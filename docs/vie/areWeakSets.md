# areWeakSets

## Mô tả

Kiểm tra xem đầu vào có phải là một mảng không rỗng mà mọi phần tử đều là `WeakSet` hay không, và chỉ trả về `true`
trong trường hợp đó.

### Trường hợp sử dụng

Xác thực đầu vào lúc chạy (ví dụ: từ API, cấu hình, hoặc dữ liệu do người dùng cung cấp) để đảm bảo bạn có một danh sách
không rỗng các thể hiện `WeakSet` trước khi tiếp tục với logic phụ thuộc vào hành vi của `WeakSet`.

> **Ghi chú cho người dùng TypeScript:**
>
> Dùng `areWeakSets` để xác thực đầu vào không rõ trước khi coi nó là `WeakSet[]`. Hàm trả về `false` cho mảng rỗng và
> các giá trị không phải mảng.

### Ưu điểm

- Đảm bảo mọi phần tử trong mảng đầu vào đều là một `WeakSet`.
- Trả về `false` cho mảng rỗng, ngăn kết quả “tất cả đều hợp lệ” do vô tình khi thiếu dữ liệu.
- Thất bại an toàn bằng cách trả về `false` khi đầu vào không phải là một mảng có phần tử (bao gồm cả `null`).
- Hữu ích như một điều kiện bảo vệ trước khi thực hiện các thao tác yêu cầu các thể hiện `WeakSet`.

## Cách dùng

### Cú pháp

Hàm:

- `areWeakSets(array)`

Tham số:

- `array`: Mảng cần được kiểm tra xem có phải là các đối tượng `WeakSet` hay không.

### Nhập hàm cục bộ

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a là một mảng không rỗng gồm các thể hiện WeakSet
}

console.log(areWeakSets(a)); // đúng
console.log(areWeakSets(b)); // sai
console.log(areWeakSets(c)); // sai
console.log(areWeakSets(null as unknown)); // sai
```

### Nhập đối tượng toàn cục

Để nhập các hàm như phương thức của đối tượng toàn cục, hãy dùng:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Khi đó phương thức sau sẽ khả dụng toàn cục:

- `Type.areWeakSets(array)`

## Phân tích hàm

Tại đây có tài liệu phân tích dạng bảng về đầu ra tạo ra khi đưa các tham số khác nhau vào các
hàm: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Tệp được tạo vào 30 January 2026 at 14:11:42 (UTC) bằng cách sử dụng *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** bởi *
*[Roland Milto](https://roland-milto.de/)**.</small>