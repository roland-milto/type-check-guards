# areArrays

## 说明

`areArrays` eh tay kare hai ki koi value bhari hoi do-dimensions array hai jisde items sab arrays ne.

### 使用场景

`areArrays` nu tabular ya matrix-wargi inputs (jaise CSV rows, grid data, ya grouped lists) validate karan lai vartyo
row/column operations karan ton pehlan; eh `false` wapas karega je input array nahi, khali hai, ya kise vich vi
non-array element maujood hove.

> **给 TypeScript 用户的提示：**
>
> `areArrays` ohdon vartyo jadon tuhanu eh yakeen karna hove ki koi value non-empty 2D array hai te har row ik array
> hai, nested arrays vich iterate ya index karan ton pehlan.

### 优势

- Input ke validate kare hai ki u non-empty do-dimensions array hai jithe har element ek array hai.
- Ik sadharan boolean natija (`true`/`false`) wapas kare hai jo guards te early exits lai theek hai.
- Runtime errors ton bachave hai jadon baad wala code nested array operations (jaise rows te mapping) assume kare.

## 用法

### 语法

函数：

- `areArrays(array)`

参数：

- `array`: Check karan lai input.

### 本地函数导入

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value 2D array hai jisme elements ke roop me arrays hain
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areArrays(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areArrays](../_analysis/areArrays.md)

<br>

---

<small>该文件于 6 February 2026 at 13:39:53 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>