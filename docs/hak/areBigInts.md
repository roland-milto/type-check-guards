# areBigInts

## 说明

`areBigInts` 判斷一個值係毋係一個非空陣列，而且入面淨係包含 `bigint` 值。

### 使用场景

驗證未知輸入（例如：解析後个類 JSON 資料、API payload，或者型別標做 `unknown` 个函式參數），確保佢係一個非空、而且元素全部係
`bigint` 值个陣列先進行處理；淨係當所有元素都係 `bigint` 先回傳 `true`，否則回傳 `false`。

> **给 TypeScript 用户的提示：**
>
> 喺對未知輸入做淨 `bigint` 操作（例如：算術、比較）之前，用 `areBigInts` 做執行期 guard。

### 优势

- 確保逐個元素都係 `bigint`，淨係當整個陣列全部符合先會回傳 `true`。
- 按設計拒絕非陣列同空陣列（透過 `isFilledArray`），避免唔小心接受無效輸入。
- 快速失敗：一發現有非 `bigint` 元素就即刻回傳 `false`。

## 用法

### 语法

函数：

- `areBigInts(array)`

参数：

- `array`: 要檢查个值。

### 本地函数导入

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // chhin
console.log(areBigInts(b)); // m̀-sī
console.log(areBigInts(c)); // m̀-sī
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBigInts(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>该文件于 31 January 2026 at 23:25:57 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>