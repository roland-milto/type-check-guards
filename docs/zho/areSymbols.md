# areSymbols

## 说明

检查输入是否为已填充数组且其元素全部为 symbol，并返回 `true` 或 `false`。

### 使用场景

在使用需要 `symbol[]` 的 API 之前，验证某个配置字段（例如：以 symbol 表示的一组唯一键列表）是一个非空且仅包含 symbol 的数组。

> **给 TypeScript 用户的提示：**
>
> 在将未知输入当作 `symbol[]` 处理之前使用 `areSymbols` 进行验证；对于非数组和空数组它会返回 `false`。

### 优势

- 仅当输入是非空数组且每个元素都是 symbol 时才返回 `true`。
- 通过内部的已填充数组检查拒绝非数组和空数组，从而防止误判。
- 在进一步处理之前，用作运行时类型守卫以验证仅包含 symbol 的列表非常有用。

## 用法

### 语法

函数：

- `areSymbols(array)`

参数：

- `array`: 要检查其元素是否为 symbol 的数组。

### 本地函数导入

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a 在运行时是仅包含 symbol 的数组
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areSymbols(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>该文件于 2026年1月30日 14:24:48 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>