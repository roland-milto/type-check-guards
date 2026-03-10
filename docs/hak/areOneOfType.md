# areOneOfType

## 说明

`areOneOfType` 會檢查一個非空陣列內个所有元素，係毋係屬於指定个其中一種執行期型別。

### 使用场景

驗證傳入資料（例如：解析過个 JSON），其中一個欄位必須係非空陣列，而且項目只允許一組已知个基本型別；當陣列係空个，抑係包含任何毋允許个型別時，回傳
`false`。

> **给 TypeScript 用户的提示：**
>
> 這個函式回傳一個 boolean，佢毋會喺編譯期縮窄陣列元素个型別；請當佢係執行期驗證步驟，用在後續處理之前。

### 优势

- 確保陣列內个每一隻元素都符合至少一種允許个執行期型別，淨在整個陣列都通過个時節正會回傳 `true`。
- 提早拒絕無效輸入：當 `array` 或 `types` 係空个、抑係毋係有內容个陣列時，回傳 `false`。
- 適合用來驗證混合型別个集合（例如：數字同字串），一擺呼叫 `areOneOfType` 就做得。

## 用法

### 语法

函数：

- `areOneOfType(array, types)`

参数：

- `array`: 一個陣列，內底係愛拿來對照所提供型別个元素。
- `types`: 一個字串陣列，代表愛檢查對照个資料型別。

### 本地函数导入

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areOneOfType(array, types)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>该文件于 31 January 2026 at 23:36:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>