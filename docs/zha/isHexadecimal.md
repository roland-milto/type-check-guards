# isHexadecimal

## 说明

`isHexadecimal` raeuj daengz aen aeu value daengz aen aeu hexadecimal string literal rox, daengz aeu `0x`/`0X` prefix (
mandatory).

### 使用场景

Yongh `isHexadecimal` haej raeuj configuration value, API payload field, rox CLI argument ma byauq aeu cungj aen
hexadecimal string literal (daengz aenq, ID, mask, rox address) laux mbouj aeu whitespace aenq mbouj aenq raeuj aenq.

> **以下为 TypeScript 用法：**
>
> Yongh `isHexadecimal` haej naengz byauq raeuj user input rox serialized data daengz aen aeu strict hexadecimal literal
> string (daengz aeu `0x`/`0X` prefix) gwnz parsing rox converting.

### 优点

- Gijyenj raeuj aen aeu laux baeuz daengz aen aeu string, laux daengz aen aeu gaemj raeuj haej haenq haenq (hexadecimal)
  literal format rox (byauq aeu `0x`/`0X` prefix).
- Cihq gaenq string ma daengz aeu whitespace aenq mbouj aenq (leading) raeuj aenq (trailing), daengz aeu gyaeuj daengz
  mbouj aeu gwnz gwnz aeu input ma daengz aeu padding.
- Daengz aeu sign rox (optional) laux daengz mbouj gyaeuj case (case-insensitive) rox prefix laux digit, raeuj `true`/
  `false` daengz aeu gyaeuj gyaeuj.

## 用法

### 语法

函数：

- `isHexadecimal(value)`

参数：

- `value`: Aen aeu value daengz aeu raeuj.

### 本地函数导入

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (maeuz gwnz)
isHexadecimal(" 0x1A2B"); // false (gwnz gwnz)
isHexadecimal(0x1a2b); // false (mbouj aen ndei)
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isHexadecimal(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>此文件于 31 January 2026 at 23:02:07 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>