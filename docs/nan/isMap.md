# isMap

## 说明

检查所提供的 `value` 是否为 `Map`；若是就回传 `true`，否则回传 `false`。

### 使用场景

当你收到一个 `unknown` 值（例如来自 JSON 解析、外部 API、或使用者输入），而你需要在执行 `Map` 操作之前先确保它是 `Map` 时，就用
`isMap`。

> **给 TypeScript 用户的提示：**
>
> `isMap` 是一个运行时守卫：当该值是 `Map` 时回传 `true`，否则回传 `false`；用它来先缩窄 `unknown`，再去调用 `Map` 的 API。

### 优势

- 提供一个快速的运行时检查，用来判断一个值是不是 `Map`。
- 通过守护需要用到 `Map` 方法（像是 `get`、`set`、`has`）的代码路径，帮助防止类型错误。
- 在处理 `unknown` 输入时，作为轻量的验证步骤会当好用。

## 用法

### 语法

函数：

- `isMap(value)`

参数：

- `value`: 欲检查的值。

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

<small>该文件于 31 January 2026 at 16:29:01 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>