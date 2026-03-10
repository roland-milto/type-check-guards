# isNaN

## 说明

判斷提供的 `value` 敢是 `number` 型別的 `NaN`，毋會共字串轉做數字。

### 使用场景

驗證無受信任抑是型別較鬆的輸入（親像 API payload、表單值、剖析過的 JSON），來偵測特殊的 `NaN` 值並明確處理；同時共非數字輸入當做毋是
`NaN`。

> **给 TypeScript 用户的提示：**
>
> 當你需要偵測特殊數值 `NaN`，同時確保輸入確實是 `number`（無字串轉數字）時，使用 `isNaN`。

### 优势

- 檢查一个值敢是 `NaN`，毋免共非數字（親像字串）強制轉做數字。
- 干焦對同時是 `number` 型別閣是 `NaN` 的值才會回傳 `true`。
- 對 `unknown` 輸入較安全，避免因為隱式轉換造成的誤判。

## 用法

### 语法

函数：

- `isNaN(value)`

参数：

- `value`: 欲檢查的值，看伊敢是 `number` 型別的 `NaN`。

### 本地函数导入

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // chin-si̍t
console.log(isNaN(b)); // bô-chin-si̍t
console.log(isNaN(c)); // bô-chin-si̍t

if (isNaN(a)) {
  // a sī chi̍t ê sô͘-jī, koh chòe-sī NaN
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

<small>该文件于 30 January 2026 at 15:47:10 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>