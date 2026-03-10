# isOfType

## 說明

判斷指定嘅 `value` 係咪符合某個型別字串：原始型別用 `typeof`，複雜型別用後備機制處理。

### 使用場景

透過檢查某個值係咪符合預期嘅型別字串，去驗證同收窄 `unknown` 輸入（例如 API 回應、用戶輸入、解析後嘅 JSON），再做對應型別嘅操作。

> **俾 TypeScript 用戶嘅提示：**
>
> 處理 `unknown` 值嗰陣，可以用 `isOfType` 按執行期型別去做分支；佢會回傳 `true`/`false`，而且會明確噉處理 `null` 同
`undefined`。

### 優勢

- 用直接 `typeof` 去檢查原始型別，夠快又清晰。
- 可以正確處理 `null` 同 `undefined`，呢啲係淨用 `typeof` 做唔到按預期分辨嘅。
- 支援複雜或者自訂型別字串：會用 `getTypeOf` 做後備比較。
- 回傳簡單嘅布林結果（`true`/`false`），適合用嚟做 guard 同分支判斷。

## 用法

### 語法

函數：

- `isOfType(value, type)`

參數：

- `value`: 要用嚟同 `type` 對照測試嘅值。
- `type`: 要檢查嘅型別字串表示。

### 本地函數匯入

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // 呢度 input 係 number
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // 呢度 input 係 string
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isOfType(value, type)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isOfType](../_analysis/isOfType.md)

<br>

---

<small>此檔案於 30 January 2026 at 17:07:25 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>