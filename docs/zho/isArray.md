# isArray

## 说明

`isArray` 用于检查给定值是否为数组；如果是则返回 `true`，否则返回 `false`。

### 使用场景

验证未知数据（例如解析后的 JSON 或 API 响应），以确保某个值在迭代、索引或访问 `.length` 之前是数组。

> **给 TypeScript 用户的提示：**
>
> 当你需要在运行时检查是否为数组时使用 `isArray`；它返回布尔值，并且对 `unknown` 值调用是安全的。

### 优势

- 使用内置的 `Array.isArray`，可在不同 realm（例如 iframe）之间可靠地检测数组。
- 返回简单的布尔结果（`true`/`false`），适用于守卫与分支逻辑。
- 由于参数类型为 `unknown`，可用于任何输入类型。

## 用法

### 语法

函数：

- `isArray(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input 在运行时是一个数组
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isArray(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isArray](../_analysis/isArray.md)

<br>

---

<small>该文件于 2026年2月6日 11:32:44 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>