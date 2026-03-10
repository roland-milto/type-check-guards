# isSymbol

## 说明

`isSymbol` 用来判断给定个值是不是 `symbol` 类型：是 symbol 就返回 `true`，否则返回 `false`。

### 使用场景

在把一个 `unknown` 值用作唯一标识符、注册表键，或者对象同 map 里个计算属性键之前，先验证伊是不是 `symbol`。

> **给 TypeScript 用户的提示：**
>
> 用 `isSymbol` 把 `unknown` 缩小到 `symbol` 之后，再去调用跟 symbol 有关个函数，或者拿来当计算属性键。

### 优势

- 为 JavaScript `symbol` 原始类型提供简单、可靠个运行时检查。
- 帮侬在用 symbol 专用 API 或者拿来当键存之前，把 `unknown` 值缩小范围。
- 用 `typeof` 来避免误判；`typeof` 是检测 `symbol` 值个标准办法。

## 用法

### 语法

函数：

- `isSymbol(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input 箇搭是 symbol
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isSymbol(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>该文件于 30 January 2026 at 14:29:27 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>