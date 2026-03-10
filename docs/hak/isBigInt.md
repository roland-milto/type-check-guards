# isBigInt

## 说明

`isBigInt` 會檢查指定个值係毋係 `bigint` 型別；BigInt 原始值會回傳 `true`，其他情況回傳 `false`。

### 使用场景

在做 BigInt 專用計算，抑係存入淨係接受 BigInt 个欄位之前，先驗證同縮窄從無型別來源（例如 JSON 解析、使用者輸入、外部 API）來个值。

> **给 TypeScript 用户的提示：**
>
> 用 `isBigInt` 先將 `unknown` 縮窄做 `bigint`，正做 BigInt 算術（例如 `+`、`*`）之前；這兜運算需要 BigInt 操作數。

### 优势

- 提供簡單、可靠个執行期檢查，用來判斷 `bigint` 原始型別。
- 幫助在做淨係 BigInt 才做得个操作之前，先將 `unknown` 值縮窄。
- 避免誤判：一般數字、字串同其他型別會回傳 `false`。

## 用法

### 语法

函数：

- `isBigInt(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // true
console.log(isBigInt(10));  // false
console.log(isBigInt("10")); // false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBigInt(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>该文件于 31 January 2026 at 23:31:52 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>