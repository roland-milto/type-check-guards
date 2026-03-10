# getTypeOf

## 说明

`getTypeOf` 會對指定 ê 值轉還詳細、好讀 ê 類型標籤，包含更精細 ê 數字類型同特定 ê 物件種類。

### 使用场景

使用 `getTypeOf` 來統一輸入驗證同診斷个類型偵測——例如：拒絕 `nan`、淨接受 `integer` 做 ID、將 `decimal` 這兜數字字串同一般
`string` 分開處理，抑係記錄精準 ê 物件種類，像係 `date` 同 `regexp`。

> **给 TypeScript 用户的提示：**
>
> 轉還類型係 `DataTypeAsString | string`。當佢係一隻描述性標籤來看；做分支判斷个時節，做得同已知 ê 字面量比對，像係
`integer`、`float`、`nan`、`array`、`null` 同 `undefined`。

### 优势

- 比 JavaScript ê `typeof` 轉還較細緻 ê 類型字串，包含數字子類型，像係 `integer`、`float` 同 `nan`。
- 會明確分別 `null` 同 `undefined`，分別回報做 `null` 同 `undefined`。
- 會偵測常見 ê 數字字串格式，並回報做 `binary`、`octal`、`decimal` 或 `hexadecimal`，毋係單淨 `string`。
- 會認出陣列做 `array`，並使用 `Object.prototype.toString` 提供特定 ê 物件類型名（例如：`date`、`regexp`、`map`、`set`）。
- 對驗證、記錄（logging）同除錯（debugging）當有用，尤其係需要一致、好讀 ê 類型標籤个時節。

## 用法

### 语法

函数：

- `getTypeOf(value)`

参数：

- `value`: 愛判斷資料類型 ê 值。

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

// 例仔檢查
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

<small>该文件于 6 February 2026 at 13:06:36 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>