# areUndefined

## 说明

`areUndefined` 用来检查传入个数组里向每个元素是不是侪是 `undefined`。

### 使用场景

用来验证一组可选结果里向勿包含任何实际值（只允许 `undefined`），比方讲映射查找之后用 `undefined` 表示缺失项，侬想确认所有查找侪失败。

> **给 TypeScript 用户的提示：**
>
> 当侬需要断言一个 `unknown[]` 里向只包含 `undefined` 值个辰光，用 `areUndefined`；因为内部会先用 `isFilledArray`
> 检查，所以对空数组同非数组/无效输入会返回 `false`。

### 优势

- 通过 `isFilledArray` 要求数组必须有内容，故对非数组同空数组会返回 `false`。
- 确保每个元素侪是 `undefined`，勿是只要有一部分是，意图更明确。
- 校验未知输入集合时，适合作为守卫式谓词来用。

## 用法

### 语法

函数：

- `areUndefined(array)`

参数：

- `array`: 要检查里向元素是不是 `undefined` 个数组。

### 本地函数导入

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// 注意：对空数组会返回 false
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

<small>该文件于 30 January 2026 at 13:58:46 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>