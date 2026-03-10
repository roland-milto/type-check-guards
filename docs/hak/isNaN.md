# isNaN

## 说明

判斷提供个 `value` 係毋係 `number` 類型个 `NaN`，毋會轉換字串。

### 使用场景

驗證毋可信或者類型鬆散个輸入（例如 API payloads、表單值、解析過个 JSON），用來偵測特殊个 `NaN` 值並明確處理，同時把非數字輸入當做毋係
`NaN`。

> **给 TypeScript 用户的提示：**
>
> 當你需要偵測特殊數值 `NaN`，同時確保輸入確實係 `number`（毋會做字串轉數字）个時節，使用 `isNaN`。

### 优势

- 檢查一個值係毋係 `NaN`，毋會強制把非數字（例如字串）轉做數字。
- 淨係對同時係 `number` 類型而且係 `NaN` 個值先會回傳 `true`。
- 對 `unknown` 輸入安全，避免因為隱式轉換造成假陽性。

## 用法

### 语法

函数：

- `isNaN(value)`

参数：

- `value`: 欲檢查个值，係毋係 `number` 類型个 `NaN`。

### 本地函数导入

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // true
console.log(isNaN(b)); // false
console.log(isNaN(c)); // false

if (isNaN(a)) {
  // a係數字，還過係特別个NaN
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNaN(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNaN](../_analysis/isNaN.md)

<br>

---

<small>该文件于 30 January 2026 at 15:46:08 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>