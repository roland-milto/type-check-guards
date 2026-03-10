# isFilledArray

## 说明

Check karta hai ke `value` ek array hai jisme kam se kam ek element ho, aur `true` ya `false` return karta hai.

### 使用场景

Incoming data (misal ke taur par API payloads, form values, configuration) ko iterate karne, pehla element access karne,
ya aisi logic lagane se pehle jisme kam se kam ek item zaroori ho, `isFilledArray` se validate karein.

> **给 TypeScript 用户的提示：**
>
> `isFilledArray` ek runtime guard hai jo boolean return karta hai; yeh element types ko is se zyada narrow nahi karta
> siwaye is baat ki tasdeeq ke ke array non-empty hai.

### 优势

- `Array.isArray` aru lambai check ke zariye non-empty array ke liye simple, tez jaanch.
- Jab code maan leta hai ke array me kam se kam ek element hai, to runtime errors se bachne me madad karta hai.
- Wazeh boolean nateeja: non-empty arrays ke liye `true` aur warna `false` return karta hai.

## 用法

### 语法

函数：

- `isFilledArray(value)`

参数：

- `value`: Woh value jisko check karna hai ke kya yeh non-empty array hai.

### 本地函数导入

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input runtime par ek non-empty array hai
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFilledArray(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>该文件于 6 February 2026 at 11:47:22 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>