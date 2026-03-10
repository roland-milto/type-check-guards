# isWeakSet

## 说明

判断给定的 `value` 是否为对象的 `WeakSet`。

### 使用场景

当接收未类型化的输入（例如来自外部 API、动态配置或 `unknown` 值）且需要在使用 `WeakSet` 特有操作之前验证它确实是 `WeakSet`
时，使用 `isWeakSet`。

> **给 TypeScript 用户的提示：**
>
> 在运行时使用 `isWeakSet` 将 `unknown` 值收窄为 `WeakSet<object>`；注意 `WeakSet` 只能包含对象引用。

### 优势

- 提供一个简单的运行时检查，用于判断某个值是否为 `WeakSet`。
- 通过确保只有 `WeakSet` 实例才会被当作 `WeakSet` 处理，帮助防止类型错误。
- 适用于任何 `unknown` 输入，并返回清晰的布尔结果（`true`/`false`）。

## 用法

### 语法

函数：

- `isWeakSet(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a 在运行时是一个 WeakSet
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

<small>该文件于 2026年1月30日 14:19:58 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>