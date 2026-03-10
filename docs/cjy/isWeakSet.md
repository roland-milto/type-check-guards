# isWeakSet

## 说明

判断给定个 `value` 是不是对象个 `WeakSet`。

### 使用场景

当你接收无类型个输入（比如外部 API、动态配置，或者 `unknown` 值）时，用 `isWeakSet` 来先验证它是不是 `WeakSet`，再去用
`WeakSet` 专用个操作。

> **给 TypeScript 用户的提示：**
>
> 用 `isWeakSet` 来把运行时个 `unknown` 值收窄成 `WeakSet<object>`；注意 `WeakSet` 只能装对象引用。

### 优势

- 提供一个简单个运行时检查，用来判断一个值是不是 `WeakSet`。
- 通过确保只有 `WeakSet` 实例才按 `WeakSet` 来用，帮助避免类型错误。
- 对任何 `unknown` 输入都好使，并且返回清楚个布尔结果（`true`/`false`）。

## 用法

### 语法

函数：

- `isWeakSet(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a 运行时系 WeakSet
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

<small>该文件于 30 January 2026 at 14:14:10 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>