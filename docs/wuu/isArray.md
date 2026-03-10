# isArray

## 说明

`isArray` 检查给定个值是不是数组；是就返回 `true`，勿是就返回 `false`。

### 使用场景

校验未知数据（比方讲解析出来个 JSON 或 API 响应），确保某个值是数组，再去迭代、按下标访问，或者访问 `.length`。

> **给 TypeScript 用户的提示：**
>
> 当侬需要在运行时检查数组个辰光用 `isArray`；伊返回布尔值，而且对 `unknown` 值调用也安全。

### 优势

- 用内置个 `Array.isArray` 来可靠地检测数组，跨 realm（比方讲 iframe）也好用。
- 返回简单个布尔结果（`true`/`false`），适合用来做守卫同分支逻辑。
- 参数类型是 `unknown`，所以啥输入类型都能用。

## 用法

### 语法

函数：

- `isArray(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input 实际浪是数组
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

<small>该文件于 6 February 2026 at 11:32:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>