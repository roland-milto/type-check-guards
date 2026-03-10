# isNull

## 说明

判断提供个 `value` 是否为 `null`。

### 使用场景

用 `isNull` 来校验输入或者 API 载荷字段：当 `null` 是有意义个哨兵值，必须同 `undefined` 或其他值分开处理。

> **给 TypeScript 用户的提示：**
>
> 当侬需要区分 `null` 同 `undefined` 以及其他假值个辰光，用 `isNull`；伊只对 `null` 返回 `true`。

### 优势

- 提供对 `null` 个精确检查，勿要同 `undefined` 搞混。
- 因为接受 `unknown`，所以对任何输入类型都可靠好用。
- 简单、快、无副作用；只会返回 `true` 或 `false`。

## 用法

### 语法

函数：

- `isNull(value)`

参数：

- `value`: 要检查是不是 `null` 个值。

### 本地函数导入

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // 真
console.log(isNull(b)); // 假

if (isNull(a)) {
  // 迭搭里 a 是 null
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNull(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNull](../_analysis/isNull.md)

<br>

---

<small>该文件于 31 January 2026 at 15:41:22 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>