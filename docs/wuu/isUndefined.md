# isUndefined

## 说明

检查给定个值是不是 `undefined`。

### 使用场景

用 `isUndefined` 来守卫可选输入、发现缺失个属性，或者区分“没提供”（`undefined`）跟“明确设为空”（`null`）。

> **给 TypeScript 用户的提示：**
>
> 当侬明确需要检测 `undefined`（勿是 `null`）个辰光，用 `isUndefined`。伊是安全个，因为伊靠个是
`typeof value === "undefined"`。

### 优势

- 用 `typeof` 来对 `undefined` 做清爽、明确个检查，避开未声明变量带来个边角情况。
- 返回简单个布尔结果（`true`/`false`），适合用来做守卫、分支判断搭验证逻辑。
- 帮侬区分 `undefined` 跟其他“空”值，比方讲 `null`、`0`、`""` 或者 `NaN`。

## 用法

### 语法

函数：

- `isUndefined(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x 㑚搭是 undefined
} else {
  // x 㑚搭勿是 undefined
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isUndefined(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>该文件于 30 January 2026 at 14:05:00 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>