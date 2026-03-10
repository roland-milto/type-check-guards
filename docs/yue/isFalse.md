# isFalse

## 說明

`isFalse` 會檢查指定值係咪同布林字面量 `false` 嚴格相等。

### 使用場景

驗證未知數據（例如嚟自 JSON、query params 或用戶輸入），當中只應該將明確嘅布林值 `false` 視為有效旗標，而其他所有值都應該拒絕。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你只需要接受字面量 `false`，並拒絕所有其他 falsy 值時就用 `isFalse`；佢只會喺 `value === false` 時回傳 `true`。

### 優勢

- 提供對布林字面量 `false` 嘅嚴格檢查，唔會做型別強制轉換。
- 幫你分清 `false` 同其他 falsy 值，例如 `0`、`""`、`null` 同 `undefined`。
- 透過喺驗證未知輸入時明確表達意圖，提升可讀性。

## 用法

### 語法

函數：

- `isFalse(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // 呢度嘅 input 係完全等於 false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isFalse(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isFalse](../_analysis/isFalse.md)

<br>

---

<small>此檔案於 31 January 2026 at 16:45:09 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>