# isDate

## 说明

`isDate` 用来判断传入个值是不是 `Date`，对 `Date` 实例返回 `true`，其他情况返回 `false`。

### 使用场景

喺执行 `Date` 操作（比如格式化、比较，或者调用 `toISOString()`）之前，先验证并缩窄未知值（比如请求数据、配置值，或者解析后个
JSON）。

> **给 TypeScript 用户的提示：**
>
> 用 `isDate` 可以喺运行时把 `unknown` 缩窄到 `Date`；只有真个 `Date` 实例（唔系日期字符串）先会返回 `true`。

### 优势

- 提供一个简单个运行时守卫，用来验证一个值是不是 `Date`。
- 通过确保只有 `Date` 实例能通过验证，帮助避免类型错误。
- 在用日期专用方法之前，用来验证未知输入（比如 API 载荷）特别有用。

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
  // input 这块儿是 Date
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

<small>该文件于 31 January 2026 at 15:36:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>