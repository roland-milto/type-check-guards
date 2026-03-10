# areNumerics

## 说明

`areNumerics` 檢查一個值係毋係毋空个陣列，而且所有元素都係數字。

### 使用场景

用 `areNumerics` 來驗證外部或者無型別个資料（例如 JSON payloads、query
parameters、表單輸入），喺計算總和、平均數或者其他數值運算之前先確認輸入係一個毋空个數字陣列；若毋係就回傳 `false`。

> **给 TypeScript 用户的提示：**
>
> 用 `areNumerics` 來守護 `unknown` 輸入，正當佢係數字陣列來用之前先檢查；對毋係陣列同毋空陣列，佢會回傳 `false`。

### 优势

- 淨係當輸入係一個毋空个陣列，佢个每一個元素都係數字个時節，先會回傳 `true`。
- 會當緊遽失敗：一發現有毋係數字个元素就停止檢查，回傳 `false`。
- 幫助你喺做數值運算之前，安全咁驗證未知輸入。

## 用法

### 语法

函数：

- `areNumerics(array)`

参数：

- `array`: 愛檢查係毋係全部都係數字元素个陣列。

### 本地函数导入

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // 係真
console.log(areNumerics(b)); // 係真
console.log(areNumerics(c)); // 係假
console.log(areNumerics(d)); // 係假
console.log(areNumerics(e)); // 係假

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNumerics(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>该文件于 6 February 2026 at 16:05:12 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>