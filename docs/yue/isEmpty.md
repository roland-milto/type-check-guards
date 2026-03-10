# isEmpty

## 說明

判斷指定值係咪空：對 `null`、`undefined`、空/只含空白嘅字串、空陣列、空 `Map`/`Set`，或者冇任何自有可枚舉屬性嘅物件，會回傳
`true`。

### 使用場景

用 `isEmpty` 去驗證輸入，同埋跨多種資料類型偵測缺失/空白值（例如表單欄位、API payload、設定物件），當中 `null`、`undefined`
、只含空白嘅字串、空集合，同埋冇屬性嘅物件都應該當做空。

> **俾 TypeScript 用戶嘅提示：**
>
> `isEmpty` 係一個回傳布林值嘅工具（唔係 TypeScript 嘅 type predicate），所以佢本身唔會幫你收窄型別；用嚟做驗證/分支判斷，而唔係做編譯期型別收窄。

### 優勢

- 喺檢查空唔空嘅時候，會將 `null` 同 `undefined` 當做 `true`（即係空）。
- 會先 `trim` 再檢查長度，所以只包含空白字元嘅字串都會當做空。
- 支援常見容器類型（陣列、`Map`、`Set`）同埋冇任何自有可枚舉屬性嘅純物件。
- 用 `hasOwnProperty` 檢查，避免計到繼承返嚟嘅屬性。
- 回傳簡單嘅布林結果（`true`/`false`），適合用喺 guard 同驗證。

## 用法

### 語法

函數：

- `isEmpty(value)`

參數：

- `value`: 要檢查係咪空嘅值。

### 本地函數匯入

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isEmpty(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>此檔案於 6 February 2026 at 16:21:43 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>