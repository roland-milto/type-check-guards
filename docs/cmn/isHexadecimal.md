# isHexadecimal

## 说明

`isHexadecimal` 用于检查给定值是否为带有强制 `0x`/`0X` 前缀的十六进制字符串字面量。

### 使用场景

使用 `isHexadecimal` 来验证配置值、API 负载字段或 CLI 参数：它们必须以十六进制字符串字面量形式提供（例如
ID、掩码或地址），并且不得包含周围空白。

> **给 TypeScript 用户的提示：**
>
> 当你需要在解析或转换之前，将用户输入或序列化数据验证为严格的十六进制字面量字符串（包含 `0x`/`0X` 前缀）时，请使用
`isHexadecimal`。

### 优势

- 验证某个值是否为字符串，并且匹配严格的十六进制字面量格式（要求带有 `0x`/`0X` 前缀）。
- 拒绝带有前导或尾随空白的字符串，帮助避免意外接受被填充的输入。
- 支持可选符号，并且对前缀与数字大小写不敏感，可预测地返回 `true`/`false`。

## 用法

### 语法

函数：

- `isHexadecimal(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // 真
isHexadecimal("-0Xff"); // 真
isHexadecimal("1A2B"); // 假（缺少前缀）
isHexadecimal(" 0x1A2B"); // 假（前导空白）
isHexadecimal(0x1a2b); // 假（不是字符串）
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

<small>该文件于 31 January 2026 at 22:58:11 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>