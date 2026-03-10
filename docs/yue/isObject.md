# isObject

## 說明

判斷指定嘅 `value` 係咪 `object`（排除 `null`）。

### 使用場景

用 `isObject` 去驗證未知輸入（例如解析後嘅 JSON、API 回應、事件 payload），喺存取屬性之前先確保個值係物件而唔係 `null`。

> **俾 TypeScript 用戶嘅提示：**
>
> `isObject` 係一個 runtime guard，會回傳 boolean；佢唔會收窄到某個特定嘅物件形狀。當你需要更強嘅 typing
> 時，請配合額外檢查（例如檢查屬性是否存在）。

### 優勢

- 只會對非 `null` 而且 `typeof` 係 `"object"` 嘅值回傳 `true`。
- 避免常見嘅 JavaScript 陷阱：`null` 否則會被當成 object。
- 適用於純物件同內建物件實例（例如 `Date`、`RegExp`）。
- 簡單、快速嘅 runtime 檢查，適合用喺防禦式編程同輸入驗證。

## 用法

### 語法

函數：

- `isObject(value)`

參數：

- `value`: 要檢查係咪 `object` 嘅值。

### 本地函數匯入

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input 喺 runtime 係一個非 null 嘅物件
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isObject(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isObject](../_analysis/isObject.md)

<br>

---

<small>此檔案於 31 January 2026 at 00:26:28 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>