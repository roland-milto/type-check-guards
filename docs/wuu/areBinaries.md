# areBinaries

## 说明

检查提供个值是不是由有效二进制字符串组成个非空数组，只有当所有条目都通过验证才返回 `true`。

### 使用场景

当侬收到一个未知个列表（比如从 JSON、表单或者 API 来个），并且需要在解析或处理之前确保伊是一个由二进制字符串组成个非空数组，就用
`areBinaries`。

> **给 TypeScript 用户的提示：**
>
> 用 `areBinaries` 来验证未知输入，再去把二进制字符串转换成 numbers/BigInts；伊会保证数组是非空个，而且每个元素都是有效个二进制字符串。

### 优势

- 验证一个值是不是非空数组，而且里向每个元素都是有效个二进制字符串。
- 返回一个简单个布尔结果（`true`/`false`），适合用来做守卫、提前返回搭输入校验。
- 通过拒绝包含任何非二进制条目个数组，防止后续解析出错。

## 用法

### 语法

函数：

- `areBinaries(array)`

参数：

- `array`: 要检查个值。

### 本地函数导入

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // 对
console.log(areBinaries(b)); // 勿对
console.log(areBinaries([])); // 勿对
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

<small>该文件于 31 January 2026 at 23:16:30 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>