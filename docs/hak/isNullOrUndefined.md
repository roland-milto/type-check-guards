# isNullOrUndefined

## 说明

檢查指定个值係毋係 `null` 抑係 `undefined`。

### 使用场景

當你需要把 `null` 同 `undefined` 都當做「無值」个時節，就用 `isNullOrUndefined`，像係驗證可選輸入、正規化 API payloads，抑係在
dereference 一隻可能缺失个值之前先 guard 相關个 code paths。

> **给 TypeScript 用户的提示：**
>
> 在存取屬性抑係呼叫方法之前，用 `isNullOrUndefined` 來 guard 缺值；佢淨會在 `null` 同 `undefined` 時回傳 `true`。

### 优势

- 提供一隻清楚、做得過、又會再用个 guard，集中在一隻所在來檢測 `null` 同 `undefined`。
- 回傳一隻簡單个 boolean（`true`/`false`），在條件判斷同驗證裡頭當好組合使用。
- 在存取屬性抑係呼叫方法之前先檢查有無缺值，幫助避免常見个 runtime 錯誤。

## 用法

### 语法

函数：

- `isNullOrUndefined(value)`

参数：

- `value`: 愛檢查係毋係 `null` 抑係 `undefined` 个值。

### 本地函数导入

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // chhú-lí m̄-thâu ê chî
}

console.log(isNullOrUndefined(b)); // chin
console.log(isNullOrUndefined(c)); // bô
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNullOrUndefined(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>该文件于 31 January 2026 at 00:33:46 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>