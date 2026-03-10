# isOctal

## 说明

判断一个值是否为有效的八进制字面量字符串（例如 `0o755`）。

### 使用场景

在解析或转换之前，验证必须以八进制字面量字符串表示的用户输入或配置值（例如文件权限模式 `0o644`）。

> **给 TypeScript 用户的提示：**
>
> `isOctal` 是一个类型守卫（`value is string`）。在结果为 `true` 之后，TypeScript 会将被检查的变量收窄为 `string`。

### 优势

- 提供严格的类型守卫：仅当输入是符合八进制字面量格式的字符串时才返回 `true`。
- 拒绝空字符串以及带有前导/尾随空白（ASCII 控制字符/空格）的字符串，减少意外匹配。
- 支持可选正负号，并且对 `0o`/`0O` 前缀不区分大小写。
- 对非字符串输入更宽容：返回 `false` 而不是抛出异常。

## 用法

### 语法

函数：

- `isOctal(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // 真
console.log(isOctal(b)); // 真
console.log(isOctal(c)); // 假
console.log(isOctal(d)); // 假

if (isOctal(a)) {
  // 这里 a 是字符串
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isOctal(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isOctal](../_analysis/isOctal.md)

<br>

---

<small>该文件于 30 January 2026 at 14:44:30 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>