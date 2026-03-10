# isNullOrUndefined

## 說明

檢查指定嘅值係咪 `null` 或 `undefined`。

### 使用場景

當你需要將 `null` 同 `undefined` 都當成「冇值」去處理時就用 `isNullOrUndefined`，例如驗證可選輸入、正規化 API payload，或者喺
dereference 一個可能缺失嘅值之前先 guard 住相關嘅 code path。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺存取屬性或呼叫方法之前，用 `isNullOrUndefined` 去 guard 住缺失值；佢只會喺 `null` 同 `undefined` 嘅情況先回傳 `true`。

### 優勢

- 提供一個清晰、可重用嘅 guard，集中喺同一個地方偵測 `null` 同 `undefined`。
- 回傳一個簡單嘅 boolean（`true`/`false`），方便喺條件判斷同驗證入面組合使用。
- 喺存取屬性或呼叫方法之前先檢查有冇缺失值，幫你避免常見嘅 runtime 錯誤。

## 用法

### 語法

函數：

- `isNullOrUndefined(value)`

參數：

- `value`: 要檢查係咪 `null` 或 `undefined` 嘅值。

### 本地函數匯入

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // 處理缺失值
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isNullOrUndefined(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>此檔案於 31 January 2026 at 00:35:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>