# areRegExes

## 说明

`areRegExes` yanzh ndaej aeu gwnz aeu laux aeu ndaej aeu filled array, daengz gyoengq miz gwnz aeu `RegExp` objects.

### 使用场景

Yanzh ndaej aeu configuration option (e.g., a list of allow/deny patterns) aeu gwnz aeu non-empty array aeu regular
expressions, mbouj aeu yongh gwnz aeu matching.

> **以下为 TypeScript 用法：**
>
> Yongh `areRegExes` raeuz ndaej narrow `unknown` gwnz `RegExp[]` mbouj aeu iterating rox composing patterns.

### 优点

- Mbaq gwnz ndaej aeu laux aeu mbouj aeu ndaej, daengz gyoengq miz gwnz aeu `RegExp` instance.
- Cungj mbouj aeu gwnz boux daengz aeu boole ("true"/"false") raeuz daengz gwnz ndaej yanzh user input rox
  configuration.
- Baej gwnz ndaej mbouj aeu runtime errors, goengq daengz code aeu laux aeu ndaej gwnz daengz gyoengq item daengz aeu
  ndaej regular-expression operations.

## 用法

### 语法

函数：

- `areRegExes(array)`

参数：

- `array`: Gwnz aeu ndaej yanzh.

### 本地函数导入

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns li laengz RegExp aenq ndaej
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areRegExes(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>此文件于 30 January 2026 at 23:27:49 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>