# isFinite

## 说明

判断给定个 `value` 是不是有限个 `number`。

### 使用场景

用 `isFinite` 来校验未知输入（比如从 JSON、表单或者 API 来个）之后再做数字计算，保证这个值是真正个、有限个数字。

> **给 TypeScript 用户的提示：**
>
> `isFinite` 只对有限个数字返回 `true`；对 `NaN`、`Infinity` 还有任何非数字个值返回 `false`。

### 优势

- 用内置个 `Number.isFinite` 来做可靠个有限性检查。
- 只对有限个数字返回 `true`；对 `NaN`、`Infinity` 还有非数字输入返回 `false`。
- 简单、无副作用个谓词，适合用来做校验同防护逻辑。

## 用法

### 语法

函数：

- `isFinite(value)`

参数：

- `value`: 要检查是不是有限个值。

### 本地函数导入

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers 是: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // 迭搭 value 是一只有限个数
  const doubled = value * 2;
  console.log(doubled);
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFinite(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFinite](../_analysis/isFinite.md)

<br>

---

<small>该文件于 30 January 2026 at 16:32:17 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>