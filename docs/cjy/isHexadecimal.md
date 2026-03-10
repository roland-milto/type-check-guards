# isHexadecimal

## 说明

`isHexadecimal` 检查给定个值系勿系带强制 `0x`/`0X` 前缀个十六进制字符串字面量。

### 使用场景

用 `isHexadecimal` 来验证配置值、API 载荷字段，或者 CLI 参数：这些值必须以十六进制字符串字面量形式提供（比如
ID、掩码或地址），并且两边勿能有空白。

> **给 TypeScript 用户的提示：**
>
> 当你需要在解析或转换之前，验证用户输入或序列化数据系严格个十六进制字面量字符串（包括 `0x`/`0X` 前缀）个辰光，用
`isHexadecimal`。

### 优势

- 验证一个值系勿系字符串，并且符合严格个十六进制字面量格式（必须带 `0x`/`0X` 前缀）。
- 拒绝前头或后头带空白个字符串，帮你避免无意间接受带填充个输入。
- 支持可选个正负号，并且对前缀同数字大小写勿敏感，稳定地返回 `true`/`false`。

## 用法

### 语法

函数：

- `isHexadecimal(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (mèi yǐu qián zhuì)
isHexadecimal(" 0x1A2B"); // false (qián tóu yǐu kōng bái)
isHexadecimal(0x1a2b); // false (bù shì zì fú chuàn)
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

<small>该文件于 31 January 2026 at 22:58:14 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>