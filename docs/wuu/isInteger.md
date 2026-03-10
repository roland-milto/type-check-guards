# isInteger

## 说明

判断给定个 `value` 是不是安全整数 number。

### 使用场景

在把不可信输入（比如 query params、JSON payloads、environment variables）当作整数用来做数组索引、分页、计数器或者数据库 ID
之前，先做校验。

> **给 TypeScript 用户的提示：**
>
> 用 `isInteger` 来先验证未知输入，再当作数值整数来用；只有当 `typeof value === "number"` 并且
`Number.isSafeInteger(value)` 成立个辰光才会返回 `true`。

### 优势

- 同时检查类型同数值安全：只有当输入是 number 而且是安全整数个辰光才会返回 `true`。
- 防止数值强制转换个常见坑：像 "5" 这种字符串会正确返回 `false`。
- 拒绝非整数同不安全整数，适合用来做 ID、计数器同数组索引。

## 用法

### 语法

函数：

- `isInteger(value)`

参数：

- `value`: 要检查是不是整数个值。

### 本地函数导入

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // 是
const b = isInteger(-100);   // 是
const c = isInteger("5");    // 弗是
const d = isInteger(5.5);    // 弗是
const e = isInteger(null);   // 弗是

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

<small>该文件于 31 January 2026 at 00:51:58 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>