# isOneOfType

## 说明

`isOneOfType` 會判斷指定个 `value` 係毋係至少符合提供个型別字串其中一個；若係有任何一個符合就回傳 `true`，無就回傳
`false`。

### 使用场景

用多種可接受个執行期型別（像係 `number` 或 `string`）來驗證較鬆散型別抑係外部資料（例如解析後个 JSON、查詢參數），再繼續後續邏輯。

> **给 TypeScript 用户的提示：**
>
> 當你想做執行期檢查，確認一隻值符合幾種允許个型別其中一種時，就用 `isOneOfType`；只要至少有一種型別符合就回傳 `true`，無就回傳
`false`。

### 优势

- 一擺就檢查一隻值係毋係符合多種允許个型別，頭一個符合就會回傳 `true`。
- 做得處理 `unknown` 輸入，對執行期邊界（例如外部資料、使用者輸入）當有用。
- 結果係簡單个布林值（`true`/`false`），好同條件邏輯同提早回傳配合使用。

## 用法

### 语法

函数：

- `isOneOfType(value, types)`

参数：

- `value`: 愛拿來同指定型別比對个值。
- `types`: 一個型別字串陣列，代表該值可能个型別。

### 本地函数导入

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input 係執行時係一隻物件
}

console.log(isOneOfType(3, ["number", "string"])); // 真
console.log(isOneOfType("hello", ["number", "boolean"])); // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isOneOfType(value, types)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>该文件于 31 January 2026 at 23:43:23 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>