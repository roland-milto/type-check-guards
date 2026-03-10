# areOneOfType

## 说明

`areOneOfType` 會檢查一个無空个陣列內个所有元素，敢攏是指定个執行期型別其中之一。

### 使用场景

驗證傳入資料（例如解析後个 JSON）：其中一个欄位必須是無空个陣列，而且項目干焦允准一組已知个基本型別；若陣列是空个抑是包含任何毋允准个型別，就回傳
`false`。

> **给 TypeScript 用户的提示：**
>
> 這个函式回傳 boolean，佇編譯期無會縮窄陣列元素个型別；請當做執行期驗證一步，才閣做後續處理。

### 优势

- 確保陣列內逐个元素攏符合至少一个允准个執行期型別，干焦當歸个陣列攏通過時才回傳 `true`。
- 提早拒絕無效輸入：當 `array` 或 `types` 是空个抑是毋是有內容个陣列時，回傳 `false`。
- 適合用來驗證混合型別个集合（例如數字佮字串），一擺呼叫 `areOneOfType` 就會使。

## 用法

### 语法

函数：

- `areOneOfType(array, types)`

参数：

- `array`: 欲用提供个型別來檢查个元素陣列。
- `types`: 代表欲檢查个資料型別个字串陣列。

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

<small>该文件于 31 January 2026 at 23:37:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>