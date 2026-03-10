# areUndefined

## 说明

`areUndefined` 用于检查所提供数组中的每个元素是否都是 `undefined`。

### 使用场景

验证一个可选结果列表不包含任何实际值（仅有 `undefined`），例如在映射查找之后，缺失条目用 `undefined` 表示，而你希望确认所有查找都失败了。

> **给 TypeScript 用户的提示：**
>
> 当你需要断言某个 `unknown[]` 仅包含 `undefined` 值时使用 `areUndefined`；由于内部的 `isFilledArray`
> 检查，它对空数组以及非数组/无效输入会返回 `false`。

### 优势

- 通过 `isFilledArray` 要求数组为非空，从而对非数组和空数组返回 `false`。
- 确保每个元素都是 `undefined`，而不仅仅是部分元素，从而使意图更明确。
- 在验证未知输入集合时，可作为守卫风格的谓词使用。

## 用法

### 语法

函数：

- `areUndefined(array)`

参数：

- `array`: 要检查其元素是否为 `undefined` 的数组。

### 本地函数导入

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// 注意：对空数组返回 false
const r4 = areUndefined([]); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areUndefined(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>该文件于 2026年1月30日 13:58:53 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>