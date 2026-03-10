# isEmpty

## 说明

判斷畀定嘅值係咪空：對 `null`、`undefined`、空/淨空白字串、空陣列、空 `Map`/`Set`，或者冇自有可枚舉屬性嘅物件會回傳 `true`。

### 使用场景

用 `isEmpty` 嚟驗證輸入同搵出缺失/空白值，適用於多種資料型別（例如表單欄位、API payload、設定物件），喺呢啲情況 `null`、
`undefined`、淨空白字串、空集合同冇屬性嘅物件都應該當做空。

> **给 TypeScript 用户的提示：**
>
> `isEmpty` 係一個回傳布林值嘅工具（唔係 TypeScript 嘅 type predicate），所以佢本身唔會幫你縮窄型別；用嚟做驗證/分支判斷多過用嚟做編譯期縮窄。

### 优势

- 喺判斷空唔空嗰陣，會將 `null` 同 `undefined` 當做 `true`（即係空）。
- 會先 trim 咗先檢查長度，所以淨係得空白嘅字串都會當做空。
- 支援常見容器型別（陣列、`Map`、`Set`）同埋冇自有可枚舉屬性嘅普通物件。
- 用 `hasOwnProperty` 檢查，避免計到繼承返嚟嘅屬性。
- 回傳簡單嘅布林結果（`true`/`false`），適合用喺 guard 同驗證。

## 用法

### 语法

函数：

- `isEmpty(value)`

参数：

- `value`: 要檢查係咪空嘅值。

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

<small>该文件于 6 February 2026 at 16:17:45 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>