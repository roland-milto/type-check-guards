# areObjects

## 说明

`areObjects` 檢查一個提供个有填滿陣列係毋係淨包含物件。

### 使用场景

當你收著一個毋知底細个陣列（比方講從 JSON 解析抑係外部 APIs 來个），你需要確定佢毋係空个，還過每一個元素都係物件，正好開始迭代並存取物件屬性个時節，就用
`areObjects`。

> **给 TypeScript 用户的提示：**
>
> 用 `areObjects` 來驗證 `unknown[]`，正好當作物件來處理；對空陣列會回傳 `false`。

### 优势

- 單淨係當輸入係一個有填滿个陣列，還過每一個元素都係物件个時節，正會回傳 `true`。
- 一旦發現有毋係物件个元素，就會提早停止並回傳 `false`。
- 幫助在做物件專用操作之前，先驗證毋知底細个輸入。

## 用法

### 语法

函数：

- `areObjects(array)`

参数：

- `array`: 愛檢查係毋係都係物件元素个陣列。

### 本地函数导入

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value 係一個有塞滿个物件陣列
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areObjects(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areObjects](../_analysis/areObjects.md)

<br>

---

<small>该文件于 31 January 2026 at 00:08:50 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>