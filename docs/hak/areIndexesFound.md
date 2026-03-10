# areIndexesFound

## 说明

`areIndexesFound` 會檢查一個值係毋係非空个陣列，且其中个元素全係有效个索引；若係就回傳 `true`，毋係就回傳 `false`。

### 使用场景

在使用者提供抑係外部資料（例如：解析過个 JSON）預期係一串索引个時節，先驗證佢，正拿來存取抑係切割陣列。

> **给 TypeScript 用户的提示：**
>
> 用 `areIndexesFound` 來驗證未知个輸入，正好拁佢个元素當做陣列索引來用；空陣列抑係包含毋係索引个值个陣列，佢會回傳
`false`。

### 优势

- 淨係當輸入係一個有填滿个陣列，還過每一個元素都係有效个索引个時節，正會回傳 `true`。
- 會當緊遽失敗：一遇著毋係索引个元素就黏時回傳 `false`。
- 當做守衛來用當合適：在拁值當做陣列位置抑係偏移量之前先檢查。

## 用法

### 语法

函数：

- `areIndexesFound(array)`

参数：

- `array`: 愛檢查係毋係符合索引規則个陣列。

### 本地函数导入

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // 這位，`a` 已經確認係一個有填滿嘅索引陣列。
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areIndexesFound(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>该文件于 31 January 2026 at 00:41:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>