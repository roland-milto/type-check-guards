# isSymbol

## 说明

`isSymbol` 用于判断给定值是否为 `symbol` 类型；对于 symbol 返回 `true`，否则返回 `false`。

### 使用场景

在将 `unknown` 值用作唯一标识符、注册表键，或在对象与 Map 中用作计算属性键之前，验证它是一个 `symbol`。

> **给 TypeScript 用户的提示：**
>
> 在调用与 symbol 相关的函数或将其用作计算属性键之前，使用 `isSymbol` 将 `unknown` 缩小为 `symbol`。

### 优势

- 为 JavaScript `symbol` 原始类型提供简单、可靠的运行时检查。
- 在使用特定于 symbol 的 API 或将其作为键存储之前，帮助缩小 `unknown` 值的类型范围。
- 通过使用 `typeof`（检测 `symbol` 值的规范方式）避免误判。

## 用法

### 语法

函数：

- `isSymbol(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // 此处 input 是一个符号
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

<small>该文件于 2026年1月30日 14:29:33 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>