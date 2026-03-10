# getTypeOf

## 说明

`getTypeOf` 會針對一個值回傳詳細、予人看得懂的型別標籤，包含較精細的數字型別佮特定的物件種類。

### 使用场景

用 `getTypeOf` 來統一輸入驗證佮診斷的型別偵測——比方講，拒絕 `nan`、只接受 `integer` 的 ID、將 `decimal` 這款數字字串佮一般的
`string` 分開處理，抑是記錄精確的物件種類，親像 `date` kah `regexp`。

> **给 TypeScript 用户的提示：**
>
> 回傳型別是 `DataTypeAsString | string`。請當做描述性的標籤來用；需要分支判斷的時，會當去比對已知的字面值，親像 `integer`、
`float`、`nan`、`array`、`null`、`undefined`。

### 优势

- 會回傳比 JavaScript 的 `typeof` 閣較細緻的型別字串，包含數字的子型別，親像 `integer`、`float`、`nan`。
- 會明確區別 `null` kah `undefined`，分別回報做 `null` kah `undefined`。
- 伊會偵測常見的數字字串格式，並且回報做 `binary`、`octal`、`decimal`、`hexadecimal`，毋是單純的 `string`。
- 嘛會認出陣列做 `array`，而且用 `Object.prototype.toString` 來提供特定的物件型別名（例：`date`、`regexp`、`map`、`set`）。
- 對驗證、記錄（logging）、除錯（debugging）真有用，尤其是需要一致、予人看得懂的型別標籤的時陣。

## 用法

### 语法

函数：

- `getTypeOf(value)`

参数：

- `value`: 欲判斷資料型別的值。

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

// 範例檢查
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.getTypeOf(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>该文件于 6 February 2026 at 13:13:30 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>