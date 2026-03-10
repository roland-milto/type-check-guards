# areJson

## 说明

Gwnz daengz rox baeuj neix daengz laengz JSON strings, gaejgoj `true` gwnz daengz array miz rox laengz daengz rox baeuj
daengz laengz valid JSON; mbouj gwnz, gaejgoj `false`.

### 使用场景

Gwnz incoming data (dox, from query params, environment variables, rox external APIs) gwnz daengz mwngz yiengh array rox
baeuj JSON-encoded strings, raeuj yiengh mbouj yiengh empty arrays rox baeuj miz non-JSON entries.

> **以下为 TypeScript 用法：**
>
> Yongh `areJson` gwnz daengz ndaw `unknown[]` daengz laengz JSON strings gwnz daengz baeuj parsing (dox, yongh
`JSON.parse`).

### 优点

- Gaejgoj `true` caeuq laengz daengz rox baeuj neix daengz laengz JSON string; mbouj gwnz, gaejgoj `false`.
- Raeuj raemx: gwnz daengz rox baeuj miz non-JSON element, lajmbwnj gwnz.
- Cingjyiq daengz: mbouj yiengh array gwnz daengz, gaejgoj `false` deih input mbouj miz rox.

## 用法

### 语法

函数：

- `areJson(array)`

参数：

- `array`: Array rox baeuj gwnz daengz rox baeuj miz JSON string elements.

### 本地函数导入

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // true
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // false
const empty = areJson([]); // false

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areJson(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areJson](../_analysis/areJson.md)

<br>

---

<small>此文件于 30 January 2026 at 16:18:21 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>