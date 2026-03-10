# isBigInt

## 說明

`isBigInt` 會檢查指定值係咪 `bigint` 型別；如果係 BigInt 原始值就回傳 `true`，否則回傳 `false`。

### 使用場景

喺做 BigInt 專用計算，或者將值儲存入只接受 BigInt 嘅欄位之前，先驗證同收窄由無型別來源（例如 JSON 解析、用戶輸入、外部
APIs）嚟嘅值。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺做 BigInt 算術（例如 `+`、`*`）之前，用 `isBigInt` 將 `unknown` 收窄到 `bigint`，因為呢啲運算需要 BigInt 作為操作數。

### 優勢

- 提供一個簡單、可靠嘅 runtime 檢查，用嚟判斷 `bigint` 原始型別。
- 喺做只限 BigInt 嘅操作之前，幫你先將 `unknown` 值收窄。
- 避免誤判：一般數字、字串同其他型別都會回傳 `false`。

## 用法

### 語法

函數：

- `isBigInt(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // 係
console.log(isBigInt(10));  // 唔係
console.log(isBigInt("10")); // 唔係

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isBigInt(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>此檔案於 31 January 2026 at 23:33:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>