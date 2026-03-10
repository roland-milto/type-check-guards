# isEmpty

## 说明

判断给定值是否为空：对 `null`、`undefined`、空/仅空白字符串、空数组、空 `Map`/`Set`，或没有自有可枚举属性的对象返回 `true`。

### 使用场景

使用 `isEmpty` 来校验输入并检测多种数据类型中的缺失/空白值（例如表单字段、API 载荷、配置对象），在这些场景中应将 `null`、
`undefined`、仅空白字符串、空集合以及无属性对象视为空。

> **给 TypeScript 用户的提示：**
>
> `isEmpty` 是一个返回布尔值的工具函数（不是 TypeScript 类型谓词），因此它本身不会收窄类型；将其用于校验/分支判断，而不是用于编译期类型收窄。

### 优势

- 在空值检查中将 `null` 和 `undefined` 视为 `true`（为空）。
- 在检查长度之前先进行裁剪（trim），将仅包含空白字符的字符串视为空。
- 支持常见容器类型（数组、`Map`、`Set`）以及没有自有可枚举属性的普通对象。
- 通过 `hasOwnProperty` 检查避免统计继承属性。
- 返回简单的布尔结果（`true`/`false`），适用于守卫与校验。

## 用法

### 语法

函数：

- `isEmpty(value)`

参数：

- `value`: 要检查是否为空的值。

### 本地函数导入

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isEmpty(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>该文件于 2026年2月6日 16:21:48 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>