# isBinary

## 说明

`isBinary` 判断一个值是不是二进制字符串（可以带 `0b`/`0B` 前缀），并返回 `true` 或 `false`。

### 使用场景

校验用户提供个字符串（比方讲表单字段、CLI 参数、配置值），确保伊拉只包含二进制数字，并且可以选择性带 `0b`/`0B` 前缀，然后再做后续处理。

> **给 TypeScript 用户的提示：**
>
> 把字符串解析或转换成 `BigInt`/`Number` 之前，用 `isBinary` 做类型守卫，避免无效输入。

### 优势

- 接受带或勿带 `0b`/`0B` 前缀个二进制字符串。
- 拒绝空字符串搭带头/带尾空白（ASCII ≤ 32）个字符串。
- 返回 `true`/`false`，勿会抛出异常，对勿晓得个输入也安全。

## 用法

### 语法

函数：

- `isBinary(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // 对
const b = isBinary("1010");   // 对
const c = isBinary("0b1020"); // 勿对
const d = isBinary(0b1010);     // 勿对

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

<small>该文件于 31 January 2026 at 23:11:53 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>