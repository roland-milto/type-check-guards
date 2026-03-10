# isBigInt

## 说明

`isBigInt` 會檢查指定个值敢是 `bigint` 型別；若是 BigInt 原始值就回傳 `true`，無就是 `false`。

### 使用场景

佇無型別來源（例如 JSON 解析、使用者輸入、外部 API）來个值，先驗證佮縮窄，才來做 BigInt 專用計算，抑是存入只接受 BigInt 个欄位。

> **给 TypeScript 用户的提示：**
>
> 用 `isBigInt` 先共 `unknown` 縮窄做 `bigint`，才來做 BigInt 算術（例如 `+`、`*`），因為這需要 BigInt 做運算元。

### 优势

- 提供簡單、可靠个執行期檢查，來判斷 `bigint` 原始型別。
- 幫助佇做 BigInt 才用得个操作進前，先共 `unknown` 值縮窄。
- 避免誤判：一般數字、字串佮其他型別攏會回傳 `false`。

## 用法

### 语法

函数：

- `isBigInt(value)`

参数：

- `value`: 欲檢查个值。

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

console.log(isBigInt(10n)); // chin
console.log(isBigInt(10));  // m̄-sī
console.log(isBigInt("10")); // m̄-sī
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

<small>该文件于 31 January 2026 at 23:32:39 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>