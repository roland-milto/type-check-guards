# isDate

## 说明

`isDate` 用于判断提供的值是否为 `Date`：对于 `Date` 实例返回 `true`，否则返回 `false`。

### 使用场景

在执行 `Date` 操作（例如格式化、比较或调用 `toISOString()`）之前，验证并缩小未知值（例如请求数据、配置值或解析后的 JSON）。

> **给 TypeScript 用户的提示：**
>
> 使用 `isDate` 在运行时将 `unknown` 缩小为 `Date`；它只会对真实的 `Date` 实例返回 `true`（不包括日期字符串）。

### 优势

- 它提供了一个简单的运行时守卫，用于验证某个值是否为 `Date`。
- 它通过确保只有 `Date` 实例能通过验证来帮助防止类型错误。
- 在使用日期相关方法之前，它对于验证未知输入（例如 API 载荷）很有用。

## 用法

### 语法

函数：

- `isDate(value)`

参数：

- `value`: 要检查是否为 `Date` 类型的值。

### 本地函数导入

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // 此处 input 是 Date
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

<small>该文件于 2026年1月31日 15:48:31 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>