# areDates

## 说明

`areDates` 判斷一個指定个陣列係毋係有填滿，且淨包含 `Date` 物件；只有當所有元素都係有效日期時正會回傳 `true`。

### 使用场景

用 `areDates` 來驗證未知輸入（例如：解析過个 JSON、表單資料、API payloads），在執行日期相關邏輯之前（像係按時間排序、格式化、抑係計算範圍）。

> **给 TypeScript 用户的提示：**
>
> 淨對毋係空个陣列、且每一個元素都係 `Date` 時回傳 `true`；空陣列會回傳 `false`。

### 优势

- 確保陣列在驗證內容之前係毋係空个，避免對空輸入回傳 `true`。
- 驗證每一個元素都係 `Date` 實例，第一個毋符合就會即刻回傳 `false`。
- 做為守衛式檢查當先，方便對陣列項目執行日期相關操作。

## 用法

### 语法

函数：

- `areDates(array)`

参数：

- `array`: 愛檢查係毋係 `Date` 物件个陣列。

### 本地函数导入

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // true
console.log(areDates(b)); // false
console.log(areDates(c)); // false

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

<small>该文件于 31 January 2026 at 15:30:25 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>