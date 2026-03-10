# isPrimitive

## 說明

`isPrimitive` 用嚟判斷指定值係咪原始型別（`null`, `undefined`, `boolean`, `number`, `string`, `bigint`, `symbol`）。

### 使用場景

喺執行時驗證輸入（例如 API payload 欄位、設定值、或者用戶提供嘅資料），確保個值係原始型別，先至去序列化、記錄
log、或者套用只適用於原始型別嘅操作。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺將 `unknown` 輸入當成物件或者函數去處理之前，用 `isPrimitive` 做 guard；對原始型別會回傳 `true`，對物件同函數會回傳
`false`。

### 優勢

- 快速、唔需要分配記憶體嘅檢查，用嚟判斷一個值係咪 JavaScript 原始型別。
- 正確噉將 `null` 視為原始型別（就算 `typeof null` 係 `"object"`）。
- 幫你喺做只適用於物件嘅操作之前，先收窄 `unknown` 值嘅型別。

## 用法

### 語法

函數：

- `isPrimitive(value)`

參數：

- `value`: 要檢查係咪原始型別嘅值。

### 本地函數匯入

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isPrimitive(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>此檔案於 30 January 2026 at 23:58:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>