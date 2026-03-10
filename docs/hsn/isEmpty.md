# isEmpty

## 说明

Dihaal value khali hai ki nai, e nirdharit karai hai; `null`, `undefined`, khali/whitespace strings, khali arrays, khali
`Map`/`Set`, ya aisan objects jekar apna enumerable properties nai ho, okra khatir `true` return karai hai.

### 使用场景

Input validate kare aur kai data type me missing/blank values pakre khatir `isEmpty` ke use kara (jaise form fields, API
payloads, configuration objects), jahan `null`, `undefined`, whitespace strings, khali collections, aur bina property
waala objects ke khali maana jaay.

> **给 TypeScript 用户的提示：**
>
> `isEmpty` boolean-returning utility hai (TypeScript type predicate nai), isliye e apne se types narrow nai karai; okra
> validation/branching khatir use kara, compile-time narrowing khatir nai.

### 优势

- `null` ate `undefined` ke khali-pan jaach khatir `true` maanai hai.
- Sirf whitespace waali string ke length jaache se pahile trim karke khali maanai hai.
- Aam container type (arrays, `Map`, `Set`) aur plain objects jekar apna enumerable properties nai ho, okra support
  karai hai.
- `hasOwnProperty` check ke istemaal se inherited properties ke ginti se bachai hai.
- Guard aur validation khatir theek simple boolean result (`true`/`false`) return karai hai.

## 用法

### 语法

函数：

- `isEmpty(value)`

参数：

- `value`: Khali-pan jaach khatir value.

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

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isEmpty(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>该文件于 6 February 2026 at 16:18:52 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>