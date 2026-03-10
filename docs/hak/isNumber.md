# isNumber

## 说明

`isNumber` 檢查一個值係毋係有限、非 `NaN` 个數字。

### 使用场景

做計算、儲存或者範圍檢查之前，先驗證來自毋可信來源（表單、query params、JSON payloads）个數字輸入，確保淨係有限數字會通過（
`true`），其他全部回傳 `false`。

> **给 TypeScript 用户的提示：**
>
> 做算術之前，用 `isNumber` 先驗證 `unknown` 值；佢會拒絕 `NaN`、`Infinity` 同 `-Infinity`。

### 优势

- 淨係對真正个 JavaScript 數字回傳 `true`（型別檢查加上拒絕 `NaN` 同無限大）。
- 防止常見个驗證 bug：`NaN`、`Infinity` 或 `-Infinity` 無意間當做數字通過。
- 當做未知輸入个 runtime guard 當好用（例如 JSON、使用者輸入、外部 API）。
- 簡單、快速，無副作用。

## 用法

### 语法

函数：

- `isNumber(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input係一個有效个有限數字
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNumber(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNumber](../_analysis/isNumber.md)

<br>

---

<small>该文件于 30 January 2026 at 13:09:04 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>