# arePrimitives

## 说明

`arePrimitives` 會評估一個提供个、非空个陣列內底，元素敢攏是原始型別。

### 使用场景

欲序列化、雜湊、記錄 log，抑是傳予絕對袂當收物件个 API 進前，先驗證傳入資料（親像 query parameters、CSV 一列个值、抑是一份
IDs/tags 清單）干焦包含原始值。

> **给 TypeScript 用户的提示：**
>
> 當你需要先確定一个 `unknown[]` 內底干焦有原始值（string, number, bigint, boolean, symbol, undefined, 或
> null），才進一步處理時，請用 `arePrimitives`。

### 优势

- 干焦 `true` 只有當逐个元素攏是原始值，做一个嚴格个守門員，確保陣列內底「無物件/函式」。
- 趕緊失敗：一發見有非原始元素，隨時回傳 `false`。
- 對非陣列佮空陣列嘛會回傳 `false`（透過 filled-array 檢查），避免無意間接受無效个輸入。

## 用法

### 语法

函数：

- `arePrimitives(array)`

参数：

- `array`: 欲檢查个陣列，看內底元素敢攏是原始型別。

### 本地函数导入

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // 真
const r2 = arePrimitives(b); // 真
const r3 = arePrimitives(c); // 假
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

<small>该文件于 31 January 2026 at 00:05:48 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>