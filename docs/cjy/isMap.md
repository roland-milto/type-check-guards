# isMap

## 说明

检查给定嘅 `value` 系咪 `Map`；如果系就返回 `true`，否则返回 `false`。

### 使用场景

当你收到一个 `unknown` 值（例如来自 JSON 解析、外部 API、或者用户输入），并且需要喺执行 `Map` 操作之前确保佢系 `Map` 时，就用
`isMap`。

> **给 TypeScript 用户的提示：**
>
> `isMap` 系一个运行时守卫：当值系 `Map` 时返回 `true`，否则返回 `false`；用佢喺调用 `Map` API 之前先把 `unknown` 收窄。

### 优势

- 提供一个快速嘅运行时检查，用嚟判断一个值系咪 `Map`。
- 通过守护需要用到 `Map` 方法（比如 `get`、`set`、`has`）嘅代码路径，帮助防止类型错误。
- 处理 `unknown` 输入时，作为轻量级校验步骤非常好用。

## 用法

### 语法

函数：

- `isMap(value)`

参数：

- `value`: 要检查嘅值。

### 本地函数导入

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isMap(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isMap](../_analysis/isMap.md)

<br>

---

<small>该文件于 31 January 2026 at 16:04:00 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>