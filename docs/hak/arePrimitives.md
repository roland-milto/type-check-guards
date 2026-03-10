# arePrimitives

## 说明

`arePrimitives` 會評估：提供个、非空个陣列裡背，係毋係所有元素都係原始型別。

### 使用场景

在序列化、雜湊、記錄日誌，抑係傳分毋會當收著物件个 API 之前，先驗證傳入資料（比論查詢參數、CSV 一列个值，抑係一串 ID/tag
清單）淨係包含原始值。

> **给 TypeScript 用户的提示：**
>
> 當你需要先確定一個 `unknown[]` 淨係包含原始值（string、number、bigint、boolean、symbol、undefined，抑係 null），正來做後續處理个時節，就用
`arePrimitives`。

### 优势

- 淨係當每隻元素都係原始值个時節正會回傳 `true`，做得著嚴格个守門員，確保陣列「無物件/無函式」。
- 會當遽遽失敗：一尋著非原始元素就即刻回傳 `false`。
- 對非陣列同空陣列（透過 filled-array 檢查）也會回傳 `false`，避免無意間接受無效輸入。

## 用法

### 语法

函数：

- `arePrimitives(array)`

参数：

- `array`: 愛檢查个陣列，確認裡背个元素係毋係原始型別。

### 本地函数导入

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // chhîn
const r2 = arePrimitives(b); // chhîn
const r3 = arePrimitives(c); // m̄-sī
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.arePrimitives(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>该文件于 31 January 2026 at 00:04:39 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>