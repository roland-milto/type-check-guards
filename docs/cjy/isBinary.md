# isBinary

## 说明

`isBinary` 用嚟判断一个值系咪二进制字符串（可选带 `0b`/`0B` 前缀），并返回 `true` 或 `false`。

### 使用场景

校验用户提供嘅字符串（例如：表单字段、CLI 参数、配置值），确保佢哋只包含二进制数字，并且可选带 `0b`/`0B` 前缀，然后先进行后续处理。

> **给 TypeScript 用户的提示：**
>
> 喺解析或者将字符串转换成 `BigInt`/`Number` 之前，先用 `isBinary` 做类型守卫，避免无效输入。

### 优势

- 接受带或者唔带 `0b`/`0B` 前缀嘅二进制字符串。
- 拒绝空字符串同埋前后有空白字符（ASCII ≤ 32）嘅字符串。
- 返回 `true`/`false`，唔会抛异常，对未知输入更安全。

## 用法

### 语法

函数：

- `isBinary(value)`

参数：

- `value`: 要检查嘅值。

### 本地函数导入

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // true
const b = isBinary("1010");   // true
const c = isBinary("0b1020"); // false
const d = isBinary(0b1010);     // false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBinary(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBinary](../_analysis/isBinary.md)

<br>

---

<small>该文件于 31 January 2026 at 23:09:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>