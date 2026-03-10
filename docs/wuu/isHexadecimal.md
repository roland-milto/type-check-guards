# isHexadecimal

## 说明

`isHexadecimal` 检查给定个值是不是带强制 `0x`/`0X` 前缀个十六进制字符串字面量。

### 使用场景

用 `isHexadecimal` 来验证配置值、API 载荷字段，或者 CLI 参数：伊拉必须用十六进制字符串字面量（比如 ID、掩码或地址）来提供，并且勿能带前后空白。

> **给 TypeScript 用户的提示：**
>
> 当侬需要在解析或转换之前，先把用户输入或序列化数据验证成严格个十六进制字面量字符串（包括 `0x`/`0X` 前缀）个辰光，用
`isHexadecimal`。

### 优势

- 验证一个值是不是字符串，并且匹配严格个十六进制字面量格式（必须有 `0x`/`0X` 前缀）。
- 拒绝前头或后头带空白个字符串，帮侬避免误把填充过个输入当作有效。
- 支持可选正负号，对前缀同数字大小写勿敏感，稳定返回 `true`/`false`。

## 用法

### 语法

函数：

- `isHexadecimal(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // 对
isHexadecimal("-0Xff"); // 对
isHexadecimal("1A2B"); // 勿对（少脱前缀）
isHexadecimal(" 0x1A2B"); // 勿对（前头有空白）
isHexadecimal(0x1a2b); // 勿对（勿是字符串）
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isHexadecimal(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>该文件于 31 January 2026 at 23:01:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>