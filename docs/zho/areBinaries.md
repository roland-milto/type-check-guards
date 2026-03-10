# areBinaries

## 说明

检查所提供的值是否为由有效二进制字符串组成的非空数组，并且仅当所有项都通过验证时才返回 `true`。

### 使用场景

当你收到一个未知列表（例如来自 JSON、表单或 API）并且需要在解析或处理之前确保它是由二进制字符串组成的非空数组时，使用
`areBinaries`。

> **给 TypeScript 用户的提示：**
>
> 在将二进制字符串转换为数字/BigInts 之前，使用 `areBinaries` 来验证未知输入；它确保数组非空且每个元素都是有效的二进制字符串。

### 优势

- 验证某个值是否为非空数组，且其中每个元素都是有效的二进制字符串。
- 返回简单的布尔结果（`true`/`false`），适用于类型守卫、提前返回以及输入校验。
- 通过拒绝包含任何非二进制条目的数组，防止下游解析错误。

## 用法

### 语法

函数：

- `areBinaries(array)`

参数：

- `array`: 要检查的值。

### 本地函数导入

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // 真
console.log(areBinaries(b)); // 假
console.log(areBinaries([])); // 假
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBinaries(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>该文件于 2026年1月31日 23:16:36 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>