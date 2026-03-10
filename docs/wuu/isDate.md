# isDate

## 说明

`isDate` 用来判断传进来个值是不是 `Date`：碰着 `Date` 实例就返回 `true`，否则返回 `false`。

### 使用场景

先校验并收窄未知值（比方讲 request data、config values 或者解析出来个 JSON），再做 `Date` 操作，比方讲格式化、比较，或者调用
`toISOString()`。

> **给 TypeScript 用户的提示：**
>
> 用 `isDate` 来把运行时个 `unknown` 收窄到 `Date`；伊只会对真正个 `Date` 实例返回 `true`（勿包括日期字符串）。

### 优势

- 伊提供一个简单个运行时守卫，用来验证一个值是不是 `Date`。
- 伊帮侬防止类型错误，保证只有 `Date` 实例通过校验。
- 伊对校验未知输入（比方讲 API payload）蛮有用，先校验再用日期相关方法。

## 用法

### 语法

函数：

- `isDate(value)`

参数：

- `value`: 要检查是不是 `Date` 类型个值。

### 本地函数导入

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input 伲是 Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isDate(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isDate](../_analysis/isDate.md)

<br>

---

<small>该文件于 31 January 2026 at 15:48:27 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>