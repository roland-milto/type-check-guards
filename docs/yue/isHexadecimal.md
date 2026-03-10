# isHexadecimal

## 說明

`isHexadecimal` 會檢查指定值係咪一個帶有必須 `0x`/`0X` 前綴嘅十六進制字串字面量。

### 使用場景

用 `isHexadecimal` 去驗證配置值、API payload 欄位，或者 CLI 參數：佢哋必須以十六進制字串字面量形式提供（例如 ID、mask 或
address），而且唔可以包含前後空白。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要喺解析或轉換之前，將用戶輸入或者序列化數據驗證為嚴格嘅十六進制字面量字串（包括 `0x`/`0X` 前綴）時，就用
`isHexadecimal`。

### 優勢

- 驗證一個值係咪字串，並且符合嚴格嘅十六進制字面量格式（必須有 `0x`/`0X` 前綴）。
- 拒絕帶有前置或尾隨空白嘅字串，幫助避免意外接受有填充空白嘅輸入。
- 支援可選正負號，而且對前綴同數字唔分大小寫，會可預期噉返回 `true`/`false`。

## 用法

### 語法

函數：

- `isHexadecimal(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false（冇前綴）
isHexadecimal(" 0x1A2B"); // false（前面有空白字元）
isHexadecimal(0x1a2b); // false（唔係字串）
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isHexadecimal(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>此檔案於 31 January 2026 at 23:02:06 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>