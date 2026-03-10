# areTrue

## 说明

檢查一个無空的陣列敢有干焦包含布林值 `true`。

### 使用场景

使用 `areTrue` 來驗證一組前置條件抑是功能旗標敢攏有啟用（攏是 `true`）才繼續，閣會共空的抑是格式毋對的輸入當做無滿足（
`false`）。

> **给 TypeScript 用户的提示：**
>
> `areTrue` 對空陣列，佮包含任何毋是嚴格 `true` 的值的陣列，攏會回傳 `false`。

### 优势

- 干焦陣陣當逐个元素攏嚴格是 `true` 而且陣列無空的時陣，才會回傳 `true`。
- 緊煞：一發現有毋是 `true` 的值，就會隨時回傳 `false`。
- 回絕無效的輸入（毋是陣列抑是空陣列），會回傳 `false`。

## 用法

### 语法

函数：

- `areTrue(array)`

参数：

- `array`: 欲檢查是不是攏是 `true` 值的陣列。

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

<small>该文件于 30 January 2026 at 13:52:05 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>