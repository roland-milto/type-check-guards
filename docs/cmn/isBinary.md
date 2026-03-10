# isBinary

## 说明

`isBinary` 用于判断一个值是否为二进制字符串（可选带 `0b`/`0B` 前缀），并返回 `true` 或 `false`。

### 使用场景

在进一步处理之前，校验用户提供的字符串（例如表单字段、CLI 参数、配置值），确保它们只包含二进制数字，并且可选带 `0b`/`0B` 前缀。

> **给 TypeScript 用户的提示：**
>
> 在解析或将字符串转换为 `BigInt`/`Number` 之前，使用 `isBinary` 作为类型守卫以避免无效输入。

### 优势

- 接受带或不带 `0b`/`0B` 前缀的二进制字符串。
- 拒绝空字符串以及带有前导/尾随空白字符（ASCII ≤ 32）的字符串。
- 返回 `true`/`false` 而不抛出异常，使其对未知输入更安全。

## 用法

### 语法

函数：

- `isBinary(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // 真
const b = isBinary("1010");   // 真
const c = isBinary("0b1020"); // 假
const d = isBinary(0b1010);     // 假

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

<small>该文件于 31 January 2026 at 23:09:29 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>