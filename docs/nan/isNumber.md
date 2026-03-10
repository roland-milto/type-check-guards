# isNumber

## 说明

`isNumber` 檢查一個值敢是有限、非 `NaN` 个數字。

### 使用场景

佇計算、儲存、抑是做範圍檢查以前，先驗證來自無信任來源（表單、query params、JSON payloads）个數字輸入，確保干焦有限數字會通過（
`true`），其他攏會回傳 `false`。

> **给 TypeScript 用户的提示：**
>
> 用 `isNumber` 先驗證 `unknown` 值才來做算術；伊會排除 `NaN`、`Infinity`、`-Infinity`。

### 优势

- 干焦會回傳 `true`，只針對真正个 JavaScript 數字（型別檢查加上排除 `NaN` 同無限大）。
- 防止常見个驗證 bug：`NaN`、`Infinity`、`-Infinity` 無意間當做數字通過。
- 當做未知輸入（比如 JSON、使用者輸入、外部 API）个執行期 guard 真好用。
- 簡單、緊、無副作用。

## 用法

### 语法

函数：

- `isNumber(value)`

参数：

- `value`: 欲檢查个值。

### 本地函数导入

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input 是一个有效的有限数字
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

<small>该文件于 30 January 2026 at 13:10:07 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>