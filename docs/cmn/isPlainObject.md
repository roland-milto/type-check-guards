# isPlainObject

## 说明

检查给定的 `value` 是否为纯对象；如果是则返回 `true`，否则返回 `false`。

### 使用场景

在读取键或将其映射为带类型的配置对象之前，先验证某个 `unknown` 输入（例如解析后的 JSON、外部数据或函数参数）是否为纯对象。

> **给 TypeScript 用户的提示：**
>
> `isPlainObject` 适用于在将 `unknown` 当作类似 record 的对象处理之前进行收窄；它只会对内部标签为 `[object Object]` 的值返回
`true`。

### 优势

- 提供一种简单、可靠的检查方式，用于判断某个值是否为纯对象（即 `Object` / `{}`），并返回 `true` 或 `false`。
- 有助于将纯对象与数组、函数、`null` 以及其他非纯对象类型区分开来。
- 在 TypeScript 中可作为类型守卫使用，在访问对象属性之前先将 `unknown` 值收窄。

## 用法

### 语法

函数：

- `isPlainObject(value)`

参数：

- `value`: 用于测试是否为纯对象的值。

### 本地函数导入

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // 此处 input 是一个普通对象
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isPlainObject(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>该文件于 6 February 2026 at 12:16:57 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>