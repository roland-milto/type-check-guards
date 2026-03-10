# isRegEx

## 说明

Cingjdingh aen mbouj mbouj gij ndaej cungj de value aen `RegExp` instance.

### 使用场景

Cingjdingh user cungj hoz dynamic values (daengz configuration, API payloads, plugin inputs) caeuq, caeuq yongh raeuz
aen regular expression.

> **以下为 TypeScript 用法：**
>
> Yongh `isRegEx` lai narrowing `unknown` (hoj union) values, caeuq yongh RegExp-specific properties hoz methods; gij
> baeuj `true` cingj aen values aen `RegExp` de instances.

### 优点

- Tawngz cungjienj de yuntime type guard, yongh daengz ndaej mbouj mbouj aen `RegExp`.
- Cojqfwenq gwnzloengh: code yiengh `RegExp` (daengz mbouj mbouj call `test`, `exec`, hoz raeuz `source`) laengh, mbouj
  hawj faenhloengh.
- Cojqfwenq gwnzloengh regex literals caeuq laengh `new RegExp(...)` saengq ndaej de instances.
- Baej ndaej rox roengz boolean (`true`/`false`), mbouj aen regex inputs laengh mbouj hoz throw.

## 用法

### 语法

函数：

- `isRegEx(value)`

参数：

- `value`: Gij ndaej check de value.

### 本地函数导入

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input cujlaengz RegExp neix
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isRegEx(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>此文件于 30 January 2026 at 23:31:49 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>