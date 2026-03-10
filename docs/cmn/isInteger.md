# isInteger

## 说明

判断给定的 `value` 是否为安全整数数字。

### 使用场景

在将不可信输入（例如查询参数、JSON 负载、环境变量）用作数组索引、分页、计数器或数据库 ID 的整数之前进行校验。

> **给 TypeScript 用户的提示：**
>
> 在将未知输入当作数值整数处理之前，使用 `isInteger` 进行校验；它仅对满足 `typeof value === "number"` 且
`Number.isSafeInteger(value)` 的值返回 `true`。

### 优势

- 同时检查类型与数值安全性：仅当输入是数字且为安全整数时才返回 `true`。
- 避免数值强制转换的常见陷阱：像 "5" 这样的字符串会正确返回 `false`。
- 拒绝非整数与不安全整数，使其适用于 ID、计数器以及数组索引。

## 用法

### 语法

函数：

- `isInteger(value)`

参数：

- `value`: 要检查其是否为整数的值。

### 本地函数导入

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // 真
const b = isInteger(-100);   // 真
const c = isInteger("5");    // 假
const d = isInteger(5.5);    // 假
const e = isInteger(null);   // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isInteger(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isInteger](../_analysis/isInteger.md)

<br>

---

<small>该文件于 31 January 2026 at 00:49:28 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>