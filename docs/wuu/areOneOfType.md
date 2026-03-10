# areOneOfType

## 说明

`areOneOfType` 检查一个非空数组里向所有元素是不是属于指定个运行时类型当中个某一种。

### 使用场景

校验传进来个数据（比方讲解析出来个 JSON）：某个字段必须是非空数组，而且里向个条目只允许落在一组已知个基础类型里；当数组是空个或者包含任何弗允许个类型辰光返回
`false`。

> **给 TypeScript 用户的提示：**
>
> 这个函数返回一个 boolean，编译期弗会收窄数组元素个类型；把伊当作运行时校验步骤，用来做后续处理之前个验证。

### 优势

- 保证数组里向每个元素至少匹配一个允许个运行时类型，只有当整个数组都通过辰光才返回 `true`。
- 早点拒绝无效输入：当 `array` 或 `types` 是空个，或者弗是填满个数组辰光返回 `false`。
- 适合用一趟 `areOneOfType` 来校验混合类型个集合（比方讲数字搭字符串）。

## 用法

### 语法

函数：

- `areOneOfType(array, types)`

参数：

- `array`: 要拿来对照提供个类型做验证个元素数组。
- `types`: 表示要检查个数据类型个字符串数组。

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

<small>该文件于 31 January 2026 at 23:39:18 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>