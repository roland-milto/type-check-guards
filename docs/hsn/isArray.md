# isArray

## 说明

`isArray` check kare hai ki diya gaya value array hai ki nai, aur agar hai to `true` return kare hai, nai to `false`.

### 使用场景

Unknown data (jaise parsed JSON ya API responses) validate karo, taaki iterate, index, ya `.length` access kare se
pahile pakka ho jaaye ki value array hai.

> **给 TypeScript 用户的提示：**
>
> Jab tumhe arrays khatir runtime check chahiye, tab `isArray` use karo; ii boolean return kare hai aur `unknown` values
> ke saath call kare me safe hai.

### 优势

- Realm sab me (jaise iframes) bharosemand array pahchaan khatir built-in `Array.isArray` ke istemaal kare hai.
- Guard aur branching logic khatir kaam aave waala seedha boolean result (`true`/`false`) dewe hai.
- Kisi bhi input type ke saath kaam kare hai, kyunki parameter `unknown` hai.

## 用法

### 语法

函数：

- `isArray(value)`

参数：

- `value`: Check kare khatir value.

### 本地函数导入

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input runtime pe array hai
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isArray(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isArray](../_analysis/isArray.md)

<br>

---

<small>该文件于 6 February 2026 at 11:30:42 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>