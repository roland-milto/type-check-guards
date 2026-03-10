# isMap

## 說明

檢查指定嘅 `value` 係咪 `Map`；如果係就回傳 `true`，否則回傳 `false`。

### 使用場景

當你收到一個 `unknown` 值（例如嚟自 JSON 解析、外部 API、或者用戶輸入），而你需要喺做 `Map` 操作之前確保佢係 `Map`，就用
`isMap`。

> **俾 TypeScript 用戶嘅提示：**
>
> `isMap` 係一個執行時 guard：當個值係 `Map` 就回傳 `true`，否則回傳 `false`；用佢喺呼叫 `Map` API 之前先將 `unknown` 收窄。

### 優勢

- 提供一個快速嘅執行時檢查，用嚟判斷一個值係咪 `Map`。
- 透過守護需要用到 `Map` 方法（例如 `get`、`set`、`has`）嘅程式路徑，幫你避免型別錯誤。
- 處理 `unknown` 輸入嗰陣，作為輕量嘅驗證步驟好好用。

## 用法

### 語法

函數：

- `isMap(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isMap(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isMap](../_analysis/isMap.md)

<br>

---

<small>此檔案於 31 January 2026 at 16:42:40 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>