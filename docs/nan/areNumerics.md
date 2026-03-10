# areNumerics

## 说明

`areNumerics` kiểm tra một giá trị có phải là mảng không rỗng mà tất cả phần tử đều là số hay không.

### 使用场景

Dùng `areNumerics` để kiểm định dữ liệu bên ngoài hoặc không có kiểu (ví dụ: payload JSON, tham số truy vấn, dữ liệu
nhập form) trước khi tính tổng, trung bình, hoặc các phép toán số khác, đảm bảo đầu vào là một mảng số không rỗng; nếu
không thì trả về `false`.

> **给 TypeScript 用户的提示：**
>
> Dùng `areNumerics` để canh gác (guard) đầu vào kiểu `unknown` trước khi coi nó là mảng số; hàm sẽ trả về `false` cho
> giá trị không phải mảng và cho mảng rỗng.

### 优势

- Chỉ khi đầu vào là một mảng không rỗng và mỗi phần tử đều là số thì mới trả về `true`.
- Thất bại nhanh: vừa gặp phần tử không phải số là dừng kiểm tra liền, trả về `false`.
- Giúp kiểm tra/kiểm định dữ liệu đầu vào không rõ kiểu một cách an toàn trước khi thực hiện các phép toán số.

## 用法

### 语法

函数：

- `areNumerics(array)`

参数：

- `array`: Mảng cần kiểm tra xem các phần tử có phải là số hay không.

### 本地函数导入

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // 真
console.log(areNumerics(b)); // 真
console.log(areNumerics(c)); // 假
console.log(areNumerics(d)); // 假
console.log(areNumerics(e)); // 假

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNumerics(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>该文件于 6 February 2026 at 16:06:24 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>