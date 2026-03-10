# isArray

## 说明

`isArray` 會檢查指定的值是否為陣列；若是則回傳 `true`，否則回傳 `false`。

### 使用场景

驗證未知資料（例如解析後的 JSON 或 API 回應），在迭代、索引或存取 `.length` 之前，先確保該值是陣列。

> **给 TypeScript 用户的提示：**
>
> 當你需要在執行期檢查是否為陣列時使用 `isArray`；它會回傳布林值，且可安全地用於 `unknown` 值。

### 优势

- 使用內建的 `Array.isArray` 來可靠偵測陣列，跨 realm（例如 iframes）也適用。
- 回傳簡單的布林結果（`true`/`false`），適合用做 guard 與分支邏輯。
- 因為參數是 `unknown`，所以可用於任何輸入型別。

## 用法

### 语法

函数：

- `isArray(value)`

参数：

- `value`: 欲檢查的值。

### 本地函数导入

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input 是運行時个陣列
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isArray(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isArray](../_analysis/isArray.md)

<br>

---

<small>该文件于 6 February 2026 at 11:31:21 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>