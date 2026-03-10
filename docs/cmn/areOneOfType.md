# areOneOfType

## 说明

`areOneOfType` 用于检查非空数组中的所有元素是否都属于指定的运行时类型之一。

### 使用场景

验证传入数据（例如解析后的 JSON），其中某个字段必须是非空数组，且其项被限制为一组已知的原始类型；当数组为空或包含任何不允许的类型时返回
`false`。

> **给 TypeScript 用户的提示：**
>
> 此函数返回布尔值，并且不会在编译时收窄数组元素类型；请将其用作进一步处理前的运行时验证步骤。

### 优势

- 确保数组中的每个元素都匹配至少一种允许的运行时类型，只有当整个数组都通过时才返回 `true`。
- 尽早拒绝无效输入：当 `array` 或 `types` 为空或不是非空数组时返回 `false`。
- 适用于用一次 `areOneOfType` 调用验证混合类型集合（例如数字和字符串）。

## 用法

### 语法

函数：

- `areOneOfType(array, types)`

参数：

- `array`: 要根据所提供类型进行验证的元素数组。
- `types`: 表示要检查的数据类型的字符串数组。

### 本地函数导入

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areOneOfType(array, types)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>该文件于 31 January 2026 at 23:36:23 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>