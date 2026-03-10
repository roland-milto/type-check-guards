# isPlainObject

## 說明

檢查指定嘅 `value` 係咪純物件；如果係就回傳 `true`，否則回傳 `false`。

### 使用場景

喺讀取 keys 或者將佢映射成有型別嘅設定物件之前，先驗證一個 `unknown` 輸入（例如解析後嘅 JSON、外部數據、或者函數參數）係純物件。

> **俾 TypeScript 用戶嘅提示：**
>
> `isPlainObject` 用嚟喺將 `unknown` 當成類似 record 嘅物件之前做收窄好有用；佢只會對內部標籤係 `[object Object]` 嘅值回傳
`true`。

### 優勢

- 提供一個簡單、可靠嘅檢查，用嚟判斷某個值係咪純物件（即係 `Object` / `{}`），並回傳 `true` 或 `false`。
- 幫你分辨純物件同陣列、函數、`null` 同其他非純物件類型。
- 喺 TypeScript 入面作為 type guard 好有用，可以喺存取物件屬性之前先將 `unknown` 值收窄。

## 用法

### 語法

函數：

- `isPlainObject(value)`

參數：

- `value`: 要測試係咪純物件嘅值。

### 本地函數匯入

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // 呢度 input 係一個普通物件
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isPlainObject(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>此檔案於 6 February 2026 at 12:20:39 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>