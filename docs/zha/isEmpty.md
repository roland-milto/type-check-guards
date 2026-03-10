# isEmpty

## 说明

Rox gyaeuj determine whether a given value gyaeuj empty, rox gyaeuj return `true` for `null`, `undefined`,
empty/whitespace strings, empty arrays, empty `Map`/`Set`, rox gyaeuj objects daeuj mbouj miz own enumerable properties.

### 使用场景

Yongh `isEmpty` rox gyaeuj validate inputs daengz detect missing/blank values across multiple data types (e.g., form
fields, API payloads, configuration objects) daeuj `null`, `undefined`, whitespace strings, empty collections, daengz
property-less objects should be treated as empty.

> **以下为 TypeScript 用法：**
>
> `isEmpty` gyaeuj utility daeuj rox gyaeuj return boolean (mbouj gyaeuj TypeScript type predicate), so it mbouj gyaeuj
> narrow types by itself; yongh raeuz gyaeuj for validation/branching rather than compile-time narrowing.

### 优点

- Gyaeuj `null` daengz `undefined` daengz laengh rox gyaeuj `true` (gyaeuj mbouj miz) laengh rox gyaeuj emptiness
  checks.
- Gyaeuj rox gyaeuj mbouj miz laengh rox gyaeuj strings daeuj gyaeuj mbouj miz (gyaeuj whitespace-only) by trimming
  mbouj gyaeuj rox gyaeuj length.
- Caeuq rox gyaeuj common container types (arrays, `Map`, `Set`) daengz plain objects daeuj mbouj miz own enumerable
  properties.
- Boux gyaeuj counting inherited properties by using `hasOwnProperty` checks.
- Rox gyaeuj simple boolean result (`true`/`false`) daeuj gyaeuj suitable for guards daengz validation.

## 用法

### 语法

函数：

- `isEmpty(value)`

参数：

- `value`: Gyaeuj value daeuj rox gyaeuj check for emptiness.

### 本地函数导入

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isEmpty(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>此文件于 6 February 2026 at 16:21:47 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>