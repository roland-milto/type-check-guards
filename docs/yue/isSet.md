# isSet

## 說明

判斷指定嘅值係咪 `Set`。

### 使用場景

驗證嚟自外部來源嘅輸入（例如 JSON 解析、用戶輸入、或者第三方 API），確保喺執行 `Set` 操作之前，個值係一個 `Set`。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `isSet` 喺呼叫 `.add`、`.has` 或 `.size` 呢類 `Set` 專用 API 之前，先將 `unknown` 值收窄。

### 優勢

- 提供一個簡單嘅執行時檢查，用嚟確認某個值係咪 `Set`。
- 當某個值唔係 `Set` 時，可以及早分支處理，幫助避免型別錯誤。
- 適用於任何 `Set` 內容（空嘅或者有資料嘅），並且一致噉回傳 `true`/`false`。

## 用法

### 語法

函數：

- `isSet(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a 喺執行時係一個 Set
  console.log(a.size);
}

console.log(isSet(b)); // 假
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isSet(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isSet](../_analysis/isSet.md)

<br>

---

<small>此檔案於 30 January 2026 at 23:11:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>