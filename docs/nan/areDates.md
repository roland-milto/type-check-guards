# areDates

## 说明

`areDates` 會判斷一个指定的陣列敢有填滿而且內底攏是 `Date` 物件，只有當所有元素攏是有效日期的時陣才回傳 `true`。

### 使用场景

用 `areDates` 來驗證未知輸入（親像解析過的 JSON、表單資料、API payloads），才來執行日期專用的邏輯，像是照時間排序、格式化、抑是計算範圍。

> **给 TypeScript 用户的提示：**
>
> 干焦對無空的陣列、而且逐个元素攏是 `Date` 的時陣才回傳 `true`；空陣列會回傳 `false`。

### 优势

- 確保陣列佇驗證內容進前是無空的，避免空輸入回傳 `true`。
- 檢查逐个元素攏是 `Date` 實例，頭一个無符合就隨時回傳 `false`。
- 適合作為守門式檢查，才來對陣列項目做日期相關操作。

## 用法

### 语法

函数：

- `areDates(array)`

参数：

- `array`: 欲檢查內底敢有 `Date` 物件的陣列。

### 本地函数导入

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // 真
console.log(areDates(b)); // 假
console.log(areDates(c)); // 假

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areDates(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areDates](../_analysis/areDates.md)

<br>

---

<small>该文件于 31 January 2026 at 15:31:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>