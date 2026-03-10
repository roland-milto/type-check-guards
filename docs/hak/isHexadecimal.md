# isHexadecimal

## 说明

`isHexadecimal` 檢查一隻指定个值係毋係有強制 `0x`/`0X` 前綴个十六進位字串字面量。

### 使用场景

用 `isHexadecimal` 來驗證設定值、API payload 欄位，抑係 CLI 參數：這兜值一定愛用十六進位字串字面量提供（例如 IDs、masks、抑係
addresses），而且毋使有前後空白。

> **给 TypeScript 用户的提示：**
>
> 當你需要在解析抑係轉換之前，先驗證使用者輸入抑係序列化資料係嚴格个十六進位字面量字串（包含 `0x`/`0X` 前綴）時，使用
`isHexadecimal`。

### 优势

- 驗證一隻值係毋係字串，還過符合嚴格个十六進位字面量格式（一定愛有 `0x`/`0X` 前綴）。
- 拒絕有前頭抑尾頭空白个字串，幫助避免無意間接受有補空白个輸入。
- 支援可選个正負號，前綴同數字大小寫無分，會穩定回傳 `true`/`false`。

## 用法

### 语法

函数：

- `isHexadecimal(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (mò̤ prefix)
isHexadecimal(" 0x1A2B"); // false (yù-thèu phî-sṳ)
isHexadecimal(0x1a2b); // false (m̀-hai yit-ê sṳ-ngièn)
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isHexadecimal(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>该文件于 31 January 2026 at 22:58:47 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>