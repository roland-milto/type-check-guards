# isFinite

## 说明

Dekhe hai ki diya gaya `value` finite `number` hai ya nai.

### 使用场景

Numeric calculations kare se pehle unknown input (jaise JSON, forms, ya APIs se) validate kare khatir `isFinite` ka
istemal karo, taaki value asal, finite number rahe.

> **给 TypeScript 用户的提示：**
>
> `isFinite` sirf finite numbers khatir `true` return kare hai; `NaN`, `Infinity`, aur koi bhi non-number value khatir
`false` return kare hai.

### 优势

- Finiteness check khatir built-in `Number.isFinite` ka istemal kare hai, bharosemand tareeke se.
- Sirf finite numbers khatir `true` return kare hai; `NaN`, `Infinity`, aur non-number inputs khatir `false` return kare
  hai.
- Sada, side-effect-free predicate, validation aur guarding logic khatir munasib.

## 用法

### 语法

函数：

- `isFinite(value)`

参数：

- `value`: Finiteness check kare khatir value.

### 本地函数导入

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers इ: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // इहाँ value एक ठोस (finite) संख्या हइ
  const doubled = value * 2;
  console.log(doubled);
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFinite(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFinite](../_analysis/isFinite.md)

<br>

---

<small>该文件于 30 January 2026 at 16:30:07 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>