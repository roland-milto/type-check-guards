# isSymbol

## 说明

`isSymbol` 用来判断给定个值係唔係 `symbol` 类型：係 symbol 就返回 `true`，唔係就返回 `false`。

### 使用场景

喺把一个 `unknown` 值当作唯一标识、注册表键，或者对象同 map 里个计算属性键之前，先验证佢係唔係 `symbol`。

> **给 TypeScript 用户的提示：**
>
> 用 `isSymbol` 先把 `unknown` 缩窄到 `symbol`，再去调用同 symbol 有关个函数，或者把佢当计算属性键用。

### 优势

- 为 JavaScript `symbol` 原始类型提供简单、可靠个运行时检查。
- 帮你喺用 symbol 专用 API 或者当键存储之前，先把 `unknown` 值缩窄。
- 用 `typeof` 来避免误判，`typeof` 係检测 `symbol` 值个标准办法。

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
  // input 搁这儿系个符号
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

<small>该文件于 30 January 2026 at 14:26:13 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>