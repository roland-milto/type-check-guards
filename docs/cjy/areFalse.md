# areFalse

## 说明

`areFalse` 用来检查传入数组入面嘅所有元素系咪都严格等于布尔值 `false`。

### 使用场景

喺继续执行之前，验证一组 feature flags、检查结果或者 guard 结果系咪全部都系 `false`（例如：确认冇任何阻塞条件存在）。

> **给 TypeScript 用户的提示：**
>
> 当你需要严格验证一个数组唔系空，并且只包含布尔值 `false` 嘅时候，用 `areFalse`。

### 优势

- 确保每个元素都严格系 `false`（唔会做 truthy/falsey 强制转换）。
- 通过 `isFilledArray` 要求数组必须有内容，所以对非数组或者空数组会返回 `false`。
- 为咗效率，遇到第一个唔系 `false` 嘅元素就会提前停止。

## 用法

### 语法

函数：

- `areFalse(array)`

参数：

- `array`: 要检查嘅数组，入面可以包含任何类型嘅元素。

### 本地函数导入

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // true
const b = areFalse([false, true, false]);  // false
const c = areFalse([false, "false", false]); // false
const d = areFalse([]); // false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFalse(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFalse](../_analysis/areFalse.md)

<br>

---

<small>该文件于 31 January 2026 at 16:16:29 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>