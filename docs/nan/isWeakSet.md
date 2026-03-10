# isWeakSet

## 说明

判断所给的 `value` 是否为对象的 `WeakSet`。

### 使用场景

当你接受无类型输入（例如来自外部 API、动态配置，或 `unknown` 值）而且需要在使用 `WeakSet` 特有操作之前先验证它是 `WeakSet`
时，就用 `isWeakSet`。

> **给 TypeScript 用户的提示：**
>
> 用 `isWeakSet` 来在运行时把 `unknown` 值缩小为 `WeakSet<object>`；注意 `WeakSet` 只能包含对象引用。

### 优势

- 提供一个简单的运行时检查，用来判断一个值是不是 `WeakSet`。
- 通过确保只有 `WeakSet` 实例才会被当作 `WeakSet` 使用，帮助防止类型错误。
- 适用于任何 `unknown` 输入，并返回清楚的布尔结果（`true`/`false`）。

## 用法

### 语法

函数：

- `isWeakSet(value)`

参数：

- `value`: 欲检查的值。

### 本地函数导入

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // chin
console.log(isWeakSet(b)); // m̄-sī

if (isWeakSet(a)) {
  // a sī chi̍t ê WeakSet tī ūn-hêng sî
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isWeakSet(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>该文件于 30 January 2026 at 14:18:18 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>