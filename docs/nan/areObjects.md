# areObjects

## 说明

`areObjects` 檢查提供的滿的陣列內底敢攏是物件。

### 使用场景

當你收著一个未知的陣列（比論講，對 JSON 解析抑是外部 API 來的），而且需要確定伊毋是空的、逐个元素攏是物件，才欲開始迭代並存取物件屬性時，就用
`areObjects`。

> **给 TypeScript 用户的提示：**
>
> 用 `areObjects` 來驗證 `unknown[]`，才來共項目當做物件處理；空的陣列會回傳 `false`。

### 优势

- 干焦輸入是滿的陣列，而且逐个元素攏是物件的時陣，才會回傳 `true`。
- 一旦揣著毋是物件的元素，就會提早停止並回傳 `false`。
- 佇進行物件專用的操作進前，會當幫贊驗證未知的輸入。

## 用法

### 语法

函数：

- `areObjects(array)`

参数：

- `array`: 欲檢查內底敢有物件元素的陣列。

### 本地函数导入

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value sī chi̍t ê ū chhiong ê bāng-á, lóng sī o̍h-chi̍t
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

<small>该文件于 31 January 2026 at 00:09:41 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>