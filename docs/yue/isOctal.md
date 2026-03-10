# isOctal

## 說明

判斷一個值係咪有效嘅八進制字面量字串（例如 `0o755`）。

### 使用場景

喺解析或轉換之前，驗證用戶輸入或設定值必須以八進制字面量字串表示（例如檔案權限模式 `0o644`）。

> **俾 TypeScript 用戶嘅提示：**
>
> `isOctal` 係一個型別守衛（`value is string`）。喺結果為 `true` 之後，TypeScript 會將被檢查嘅變數收窄為 `string`。

### 優勢

- 提供嚴格嘅型別守衛：只會喺輸入係符合八進制字面量格式嘅字串時先回傳 `true`。
- 拒絕空字串同埋帶有前後空白（ASCII 控制字元/空格）嘅字串，減少意外匹配。
- 支援可選正負號，而且對 `0o`/`0O` 前綴唔分大小寫。
- 對非字串輸入較寬鬆：回傳 `false` 而唔係拋出錯誤。

## 用法

### 語法

函數：

- `isOctal(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // 係
console.log(isOctal(b)); // 係
console.log(isOctal(c)); // 唔係
console.log(isOctal(d)); // 唔係

if (isOctal(a)) {
  // 呢度 a 係 string
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isOctal(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isOctal](../_analysis/isOctal.md)

<br>

---

<small>此檔案於 30 January 2026 at 15:44:12 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>