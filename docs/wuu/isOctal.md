# isOctal

## 说明

判断一个值是不是有效个八进制字面量字符串（比方讲 `0o755`）。

### 使用场景

在解析或者转换之前，校验用户输入或者配置值：伊必须用八进制字面量字符串来表示（比方讲文件权限模式像 `0o644`）。

> **给 TypeScript 用户的提示：**
>
> `isOctal` 是一个类型守卫（`value is string`）。结果是 `true` 以后，TypeScript 会把检查过个变量收窄到 `string`。

### 优势

- 提供严格个类型守卫：只有当输入是符合八进制字面量格式个字符串辰光才会返回 `true`。
- 拒绝空字符串搭带前后空白（ASCII 控制/空格）个字符串，减少意外匹配。
- 支持可选符号，而且对 `0o`/`0O` 前缀勿区分大小写。
- 对非字符串输入比较宽松：返回 `false`，而勿是抛出异常。

## 用法

### 语法

函数：

- `isOctal(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // 对额
console.log(isOctal(b)); // 对额
console.log(isOctal(c)); // 勿对
console.log(isOctal(d)); // 勿对

if (isOctal(a)) {
  // 迭搭 a 是 string
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

<small>该文件于 30 January 2026 at 15:44:07 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>