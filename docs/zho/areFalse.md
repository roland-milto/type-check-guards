# areFalse

## 说明

`areFalse` 用于检查所提供数组中的所有元素是否都严格等于布尔值 `false`。

### 使用场景

在继续执行之前，验证一组功能开关、检查项或守卫结果是否全部为 `false`（例如，确认不存在任何阻塞条件）。

> **给 TypeScript 用户的提示：**
>
> 当你需要严格验证一个数组非空且只包含布尔值 `false` 时，请使用 `areFalse`。

### 优势

- 确保每个元素都严格为 `false`（不进行 truthy/falsey 的类型强制转换）。
- 通过 `isFilledArray` 要求数组为已填充数组，从而对非数组或空数组返回 `false`。
- 为提高效率，在遇到第一个非 `false` 元素时会提前停止。

## 用法

### 语法

函数：

- `areFalse(array)`

参数：

- `array`: 要检查的数组，包含任意类型的元素。

### 本地函数导入

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // 真
const b = areFalse([false, true, false]);  // 假
const c = areFalse([false, "false", false]); // 假
const d = areFalse([]); // 假
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

<small>该文件于 2026年1月31日 16:19:19 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>