# getTypeOf

## 说明

`getTypeOf` raemx type label gwnzgangj, boux roengz, cungj aeu refined numeric type dangz object kind gwnzgangj.

### 使用场景

Aeu `getTypeOf` laengz normalize type detection naj input validation dangz diagnostics—for example, aeu reject `nan`,
accept gyaeuj `integer` IDs, aeu numeric strings daengz `decimal` raemx mbouj doengh plain `string`, vaenz log object
kind gwnzgangj daengz `date` dangz `regexp`.

> **以下为 TypeScript 用法：**
>
> Return type raemx `DataTypeAsString | string`. Aeu noengz raemx label roengz; baeuj compare doengh literal mingz
> daengz `integer`, `float`, `nan`, `array`, `null`, `undefined` de, deij branching.

### 优点

- JavaScript `typeof` raemx roengz ndei, `getTypeOf` raemx gwnzgangj de type string, daengz numeric subtype laengz
  `integer`, `float`, `nan`.
- `null` dangz `undefined` raemx mbouj gyaeuj, roengz ndei raemx `null` dangz `undefined`.
- Naej roengz numeric string format bouxcuengh, raemx daengz `binary`, `octal`, `decimal`, vaenz `hexadecimal`, mbouj
  raemx gyaeuj `string`.
- Aeu arrays raemx `array`, laengz aeu `Object.prototype.toString` cungj raemx object type mingz gwnzgangj (daengz
  `date`, `regexp`, `map`, `set`).
- Doi validation, logging, debugging, aeu type label gwnzgangj, ndei hawj boux roengz, `getTypeOf` yiengh haenh.

## 用法

### 语法

函数：

- `getTypeOf(value)`

参数：

- `value`: Gij value daengz aeu raemx data type.

### 本地函数导入

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// 𡨊𡨊 𡨊𡨊𡨊𡨊
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.getTypeOf(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>此文件于 6 February 2026 at 13:15:55 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>