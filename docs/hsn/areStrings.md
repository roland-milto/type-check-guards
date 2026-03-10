# areStrings

## 说明

`areStrings` check kardā hai ki array non-empty hai ate us dē sāre elements strings han, te `true` sirf usī hālat vich
wapas kardā hai.

### 使用场景

External yā user-provided data (jivēṁ query params, JSON payloads, CSV fields) nūṁ validate karo tāṁ jo process karan
tōṁ pahilā tuhāḍē kōl strings dī non-empty list hovē.

> **给 TypeScript 用户的提示：**
>
> Unknown arrays nūṁ string-only logic lagāun tōṁ pahilā validate karan lai `areStrings` vartō; eh khālī arrays lai
`false` wapas kardā hai.

### 优势

- Yah yakīn banāwā hai ki har element string hai aur mixed-type arrays ne `false` wapas kar ke rad kar dindā hai.
- Khālī arrays ne rad kar dindā hai, is karke `true` sirf non-empty strings di list dā ishāra dindā hai.
- String-only operations (jivēṁ `trim`, `toLowerCase`) karan tōṁ pahilā ik quick runtime guard vāṅgūṁ faidēmand hai.

## 用法

### 语法

函数：

- `areStrings(value)`

参数：

- `value`: Expected type `string[]`.

### 本地函数导入

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input runtime mein non-empty string[] hai
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areStrings(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areStrings](../_analysis/areStrings.md)

<br>

---

<small>该文件于 30 January 2026 at 13:18:33 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>