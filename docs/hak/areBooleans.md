# areBooleans

## 说明

`areBooleans` 檢查一個指定个毋係空个陣列係毋係淨包含 boolean 值；係个話回傳 `true`，毋係个話回傳 `false`。

### 使用场景

驗證使用者提供抑係外部資料（例如 JSON payload、query params、config arrays），確保一個毋係空个清單淨包含 boolean，正來套用
boolean 邏輯，抑係傳分期待 `boolean[]` 个 API。

> **给 TypeScript 用户的提示：**
>
> 用 `areBooleans` 來驗證 `unknown[]`，正好當佢係 `boolean[]` 來用；佢對空陣列會回傳 `false`，所以若係允許空清單，愛明確處理該種情況。

### 优势

- 淨係當每隻元素都係 boolean 而且輸入係一個毋係空个陣列時，正會回傳 `true`。
- 透過拒絕空陣列（回傳 `false`）來避免誤判。
- 當做執行期守衛，用在只接受 boolean 个操作之前（例如 `every`、`some`、邏輯歸約）當當好。

## 用法

### 语法

函数：

- `areBooleans(array)`

参数：

- `array`: 愛檢查係毋係 boolean 元素个陣列。

### 本地函数导入

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBooleans(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>该文件于 30 January 2026 at 14:40:20 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>