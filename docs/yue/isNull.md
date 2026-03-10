# isNull

## 說明

判斷提供嘅 `value` 係咪 `null`。

### 使用場景

用 `isNull` 去驗證輸入或者 API payload 欄位：當 `null` 係一個有意義嘅 sentinel 值，而且必須同 `undefined` 或其他值用唔同方式處理嗰陣。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要分辨 `null` 同 `undefined` 以及其他 falsy 值嗰陣，用 `isNull`；佢只會喺 `null` 嘅情況先回傳 `true`。

### 優勢

- 提供一個精準嘅 `null` 檢查，唔會同 `undefined` 混埋一齊。
- 因為接受 `unknown`，所以對任何輸入類型都可靠咁運作。
- 簡單、快、冇副作用；只會回傳 `true` 或 `false`。

## 用法

### 語法

函數：

- `isNull(value)`

參數：

- `value`: 要檢查係咪 `null` 嘅值。

### 本地函數匯入

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // 係 true
console.log(isNull(b)); // 係 false

if (isNull(a)) {
  // 呢度 a 係 null
}
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isNull(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isNull](../_analysis/isNull.md)

<br>

---

<small>此檔案於 31 January 2026 at 15:41:29 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>