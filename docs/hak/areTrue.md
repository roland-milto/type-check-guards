# areTrue

## 说明

檢查一個非空陣列係毋係淨係包含布林值 `true`。

### 使用场景

用 `areTrue` 來驗證一組前置條件或者功能旗標係毋係全部都啟用（全部值都係 `true`）先繼續，同時把空个或者格式毋正確个輸入當做未滿足（
`false`）。

> **给 TypeScript 用户的提示：**
>
> `areTrue` 對空陣列，還有包含任何毋係嚴格 `true` 个值个陣列，會回傳 `false`。

### 优势

- 淨係當每一個元素都嚴格係 `true` 而且陣列係非空个時節，先會回傳 `true`。
- 會快速失敗：一旦搵著有毋係 `true` 个值，就會即刻回傳 `false`。
- 會拒絕無效輸入（毋係陣列或者空陣列），會回傳 `false`。

## 用法

### 语法

函数：

- `areTrue(array)`

参数：

- `array`: 愛檢查係毋係全部都係 `true` 值个陣列。

### 本地函数导入

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areTrue(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areTrue](../_analysis/areTrue.md)

<br>

---

<small>该文件于 30 January 2026 at 13:51:15 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>