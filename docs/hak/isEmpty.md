# isEmpty

## 说明

判斷一個指定个值係毋係空；對 `null`、`undefined`、空/淨空白字串、空 array、空 `Map`/`Set`，抑係無自家可列舉屬性个 object 會回傳
`true`。

### 使用场景

用 `isEmpty` 來驗證輸入、偵測缺少/空白个值，適用多種資料型別（例如表單欄位、API payload、設定 object）；其中 `null`、`undefined`
、淨空白字串、空集合，還有無屬性个 object 都應該當做係空。

> **给 TypeScript 用户的提示：**
>
> `isEmpty` 係一個回傳 boolean 个工具（毋係 TypeScript type predicate），所以佢自家毋會縮窄型別；用佢來做驗證/分支判斷，毋係用來做編譯期个
> narrowing。

### 优势

- 對 `null` 同 `undefined` 當做係 `true`，用來final emptiness 檢查。
- 會先 trim 掉空白，正檢查長度，所以淨係空白个字串也算空。
- 支援常見容器型別（array、`Map`、`Set`）同無自家可列舉屬性个普通 object。
- 用 `hasOwnProperty` 檢查，避免算到繼承來个屬性。
- 回傳簡單个 boolean 結果（`true`/`false`），適合用在 guard 同驗證。

## 用法

### 语法

函数：

- `isEmpty(value)`

参数：

- `value`: 愛檢查係毋係空个值。

### 本地函数导入

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isEmpty(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>该文件于 6 February 2026 at 16:18:34 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>