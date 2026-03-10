# isTrue

## 說明

`isTrue` 用嚟判斷指定值係咪嚴格等於 `true`。

### 使用場景

用 `isTrue` 去驗證 flags、feature toggles 或設定值（configuration values），當中只可以接受字面量 `true`，其他所有值都必須當做
`false`。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要只接受布林字面量 `true`，而唔係淨係接受 truthy 值嗰陣，用 `isTrue`。

### 優勢

- 提供對布林字面量 `true` 嘅嚴格檢查（唔會做型別強制轉換）。
- 幫你分辨 `true` 同一啲 truthy 值，例如 `1`、`"true"` 或 `{}`。
- 行為簡單、可預測，適合用喺 guard 同驗證流程（validation pipelines）。

## 用法

### 語法

函數：

- `isTrue(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // 真
const b = isTrue(1);         // 假
const c = isTrue("true");   // 假

if (isTrue(a)) {
  // 呢度 a 係真
}
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isTrue(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isTrue](../_analysis/isTrue.md)

<br>

---

<small>此檔案於 30 January 2026 at 13:46:53 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>