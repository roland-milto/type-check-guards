# isBuffer

## 说明

Kiám-cha chi̍t-ê chî sī-m̄-sī Node.js `Buffer`, koh trảu `true` á-sī `false`.

### 使用场景

Tī runtime lâi kiám-giām input (chhin-chhiūⁿ API payload, file data, á-sī message buffer), hō͘ chi̍t-ê chî tī chhú-lí
chêng sī `Buffer`; jîn-chóng tī bô Node.js ê environment, `Buffer` kám-ná bô chûn-chāi, mā ē tàng-kòe chhù-tēng trảu
`false`.

> **给 TypeScript 用户的提示：**
>
> Ēng `isBuffer` lâi hō͘ `unknown` ê chî type narrowing chò `Buffer`, chiah thang kiò Buffer-specific ê method.

### 优势

- Tio̍h-sit tēng-chhà Node.js `Buffer` ê instance, ēng `Buffer.isBuffer`.
- Tī `Buffer` bô chûn-chāi ê environment, hōe trảu `false`, bián runtime error.
- Thang kap `unknown` input chòe-hóe, sī runtime validation kap type narrowing ê hóe-sūn.

## 用法

### 语法

函数：

- `isBuffer(value)`

参数：

- `value`: Beh chòe test ê chhi̍t-ê chî.

### 本地函数导入

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // chîn
console.log(isBuffer(b)); // bô

if (isBuffer(a)) {
  // a tī sī Buffer tīng
  console.log(a.toString("utf8"));
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBuffer(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>该文件于 31 January 2026 at 16:32:35 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>