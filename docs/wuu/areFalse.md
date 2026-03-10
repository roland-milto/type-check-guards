# areFalse

## 说明

`areFalse` 检查传入个数组里向是不是所有元素都严格等于布尔值 `false`。

### 使用场景

继续执行之前，验证一组 feature flags、检查结果或者 guard 结果是不是全是 `false`（比方讲，确认弗存在任何阻塞条件）。

> **给 TypeScript 用户的提示：**
>
> 当侬需要严格验证一个数组非空，而且只包含布尔值 `false` 个辰光，用 `areFalse`。

### 优势

- 确保每个元素严格是 `false`（弗会发生 truthy/falsey 强制转换）。
- 对非数组或者空数组返回 `false`，因为通过 `isFilledArray` 要求数组必须有内容。
- 为效率起见，碰到第一个非 `false` 元素就提前停止。

## 用法

### 语法

函数：

- `areFalse(array)`

参数：

- `array`: 要检查个数组，里向可以包含任意类型个元素。

### 本地函数导入

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // 对
const b = areFalse([false, true, false]);  // 勿对
const c = areFalse([false, "false", false]); // 勿对
const d = areFalse([]); // 勿对
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

<small>该文件于 31 January 2026 at 16:19:13 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>