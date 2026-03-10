# areObjects

## 說明

`areObjects` 會檢查提供嘅已填充陣列係咪只包含物件。

### 使用場景

當你收到一個未知陣列（例如由 JSON 解析或外部 API 而嚟），而你需要確保佢唔係空陣列，並且每個元素都係物件，先至去迭代同存取物件屬性嗰陣，就用
`areObjects`。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areObjects` 去驗證 `unknown[]`，先至當入面嘅項目係物件；對於空陣列佢會回傳 `false`。

### 優勢

- 只會喺輸入係一個已填充嘅陣列，而且每個元素都係物件嘅情況下先回傳 `true`。
- 一發現有非物件元素就會提早停止並回傳 `false`。
- 有助喺進行針對物件嘅操作之前，先驗證未知輸入。

## 用法

### 語法

函數：

- `areObjects(array)`

參數：

- `array`: 要檢查其元素係咪物件嘅陣列。

### 本地函數匯入

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value 係一個裝滿咗物件嘅陣列
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areObjects(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areObjects](../_analysis/areObjects.md)

<br>

---

<small>此檔案於 31 January 2026 at 00:11:08 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>