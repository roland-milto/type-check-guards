# isFinite

## 說明

判斷指定嘅 `value` 係咪一個有限嘅 `number`。

### 使用場景

喺做數值計算之前，用 `isFinite` 去驗證未知輸入（例如嚟自 JSON、表單或者 API），確保個值係真實而且有限嘅數字。

> **俾 TypeScript 用戶嘅提示：**
>
> `isFinite` 只會對有限數字回傳 `true`；對 `NaN`、`Infinity` 同任何非數字值回傳 `false`。

### 優勢

- 用內置嘅 `Number.isFinite` 去做可靠嘅有限性檢查。
- 只會對有限數字回傳 `true`；對 `NaN`、`Infinity` 同非數字輸入回傳 `false`。
- 簡單、無副作用嘅判斷函數，適合用嚟做驗證同守衛邏輯。

## 用法

### 語法

函數：

- `isFinite(value)`

參數：

- `value`: 要檢查係咪有限嘅值。

### 本地函數匯入

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers 係: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // 呢度 value 係一個有限數字
  const doubled = value * 2;
  console.log(doubled);
}
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isFinite(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isFinite](../_analysis/isFinite.md)

<br>

---

<small>此檔案於 30 January 2026 at 16:32:23 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>