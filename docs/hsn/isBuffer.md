# isBuffer

## 说明

जाँचेला कि कवनो मान Node.js `Buffer` बा कि ना, आ `true` भा `false` लौटावेला।

### 使用场景

Runtime पर इनपुट (जइसे API payloads, file data, भा message buffers) के validate करीं ताकि processing से पहिले मान
`Buffer` होखे, आ Node.js के बाहर जहाँ `Buffer` मौजूद ना हो सके, भरोसेमंद रूप से `false` मिलो।

> **给 TypeScript 用户的提示：**
>
> `Buffer`-specific method कॉल करे से पहिले `unknown` मान के `Buffer` में narrow करे खातिर `isBuffer` के इस्तेमाल करीं।

### 优势

- `Buffer.isBuffer` के इस्तेमाल से Node.js `Buffer` इंस्टेंस के सुरक्षित रूप से पहचान करेला।
- जहाँ `Buffer` उपलब्ध नइखे, ओह माहौल में `false` लौटावेला, आ runtime error से बचावेला।
- `unknown` इनपुट के साथ काम करेला, एहसे runtime validation आ type narrowing खातिर उपयुक्त बा।

## 用法

### 语法

函数：

- `isBuffer(value)`

参数：

- `value`: जाँचल जाए वाला मान।

### 本地函数导入

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a इहाँ Buffer छ
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

<small>该文件于 31 January 2026 at 16:31:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>