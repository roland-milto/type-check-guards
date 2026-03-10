# isOctal

## 说明

Cingj ndaej aen value laengz miz aen oktael literal string ma hoz (daengz `0o755`).

### 使用场景

Cingj user input rux configuration values ma daengz aeuq raeuj oktael literal string (daengz aen example, file
permission modes laengz `0o644`) gwnz ndaej parsing rux converting.

> **以下为 TypeScript 用法：**
>
> `isOctal` aen type guard (`value is string`). Daengz miz aen `true` result, TypeScript raeuj narrowing variable ma
> daengz cingj laengz `string`.

### 优点

- Teq cungj aeuq raeuj: raeuj `true` daengz ndaej mbouj gwnz haenq input laengz aen string ma daengz gyaeuj oktael
  literal format.
- Cingj gaij string vuengz ndaej laengz string ma daengz miz leading/trailing whitespace (ASCII control/space), gyaeuj
  gwnz aeuq daengz mbouj hoz laengz accidental matches.
- Cungj optional sign laengz case-insensitive deih `0o`/`0O` prefix.
- Deih non-string inputs, raeuj `false` ndaej mbouj gwnz haenq throw.

## 用法

### 语法

函数：

- `isOctal(value)`

参数：

- `value`: Gij value ma daengz aeuq cingj.

### 本地函数导入

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // true
console.log(isOctal(b)); // true
console.log(isOctal(c)); // false
console.log(isOctal(d)); // false

if (isOctal(a)) {
  // a li string nai
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isOctal(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isOctal](../_analysis/isOctal.md)

<br>

---

<small>此文件于 30 January 2026 at 15:44:16 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>