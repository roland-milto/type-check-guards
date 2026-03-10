# isMap

## 说明

检查所给个 `value` 系毋系 `Map`；系就返回 `true`，毋系就返回 `false`。

### 使用场景

当你收到一个 `unknown` 值（比如 JSON 解析、外部 APIs，抑系用户输入）而且需要在执行 `Map` 操作之前确认佢系 `Map` 时，就用
`isMap`。

> **给 TypeScript 用户的提示：**
>
> `isMap` 系一个运行时守护：当值系 `Map` 时返回 `true`，毋系就返回 `false`；用佢来先缩窄 `unknown`，正好去调用 `Map` APIs。

### 优势

- 提供快速个运行时检查，判断一个值系毋系 `Map`。
- 透过守护需要用到 `Map` 方法（像系 `get`、`set`、`has`）个代码路径，帮助避免类型错误。
- 处理 `unknown` 输入时，做为轻量个验证步骤当好用。

## 用法

### 语法

函数：

- `isMap(value)`

参数：

- `value`: 爱检查个值。

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

<small>该文件于 31 January 2026 at 16:04:33 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>