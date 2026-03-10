# getTypeOf

## 說明

`getTypeOf` 會為指定值回傳詳細、易讀嘅型別標籤，包括更細分嘅數值型別同特定物件種類。

### 使用場景

用 `getTypeOf` 去統一輸入驗證同診斷嘅型別偵測——例如拒絕 `nan`、只接受 `integer` 作為 ID、將 `decimal` 呢類數字字串同普通
`string` 分開處理，或者記錄精確嘅物件種類例如 `date` 同 `regexp`。

> **俾 TypeScript 用戶嘅提示：**
>
> 回傳型別係 `DataTypeAsString | string`。當佢係描述性標籤咁用；做分支判斷時，可以同已知字面量例如 `integer`、`float`、`nan`、
`array`、`null` 同 `undefined` 作比較。

### 優勢

- 回傳比 JavaScript 嘅 `typeof` 更細緻嘅型別字串，包括數值子類型例如 `integer`、`float` 同 `nan`。
- 清楚分辨 `null` 同 `undefined`，並明確回報為 `null` 同 `undefined`。
- 可以偵測常見嘅數字字串格式，並回報為 `binary`、`octal`、`decimal` 或 `hexadecimal`，而唔係普通嘅 `string`。
- 亦會將陣列識別為 `array`，並使用 `Object.prototype.toString` 提供更具體嘅物件型別名稱（例如 `date`、`regexp`、`map`、
  `set`）。
- 對需要一致、易讀型別標籤嘅驗證、記錄（logging）同除錯（debugging）非常有用。

## 用法

### 語法

函數：

- `getTypeOf(value)`

參數：

- `value`: 要判斷其資料型別嘅值。

### 本地函數匯入

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

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.getTypeOf(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>此檔案於 6 February 2026 at 13:15:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>