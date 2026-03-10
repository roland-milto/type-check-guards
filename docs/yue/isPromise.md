# isPromise

## 說明

判斷指定嘅值係咪 `Promise`。

### 使用場景

當你要喺將未知輸入當成 `Promise` 處理之前做驗證，例如處理由 plugins、dynamic imports，或者型別比較鬆散嘅 API 返回嘅值嗰陣，用
`isPromise` 就啱晒。

> **俾 TypeScript 用戶嘅提示：**
>
> `isPromise` 係用 `instanceof Promise` 去檢查，所以只會對真正嘅 `Promise` 實例返回 `true`（唔包括一般 thenables）。

### 優勢

- 提供一個簡單嘅執行期檢查，用嚟判斷某個值係咪 `Promise`。
- 幫你保護需要真正 `Promise` 實例嘅程式路徑，並且可預測噉返回 `true` 或 `false`。
- 透過要求必須係實際嘅 `Promise` 實例，避免對「thenable」物件（例如 `{ then() {} }`）出現誤判。

## 用法

### 語法

函數：

- `isPromise(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // 係
console.log(isPromise(b)); // 唔係
console.log(isPromise(123)); // 唔係
console.log(isPromise(null)); // 唔係

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isPromise(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isPromise](../_analysis/isPromise.md)

<br>

---

<small>此檔案於 30 January 2026 at 23:54:57 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>