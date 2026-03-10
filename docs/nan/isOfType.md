# isOfType

## 说明

判斷指定的 `value` 是毋是符合某个型別字串；原始型別用 `typeof`，複雜型別用後備方式處理。

### 使用场景

透過檢查一個值是毋是符合預期的型別字串，來驗證並縮小 `unknown` 輸入（例如 API 回應、使用者輸入、解析過的 JSON），才進行型別相關的操作。

> **给 TypeScript 用户的提示：**
>
> 處理 `unknown` 值的時陣，會當用 `isOfType` 來照執行期型別做分支；伊會回傳 `true`/`false`，而且會明確看待 `null` 同
`undefined`。

### 优势

- 用直接 `typeof` 檢查原始型別，較緊較清楚。
- 會正確處理 `null` 同 `undefined`，這是單用 `typeof` 無法照預期分辨的。
- 支援較複雜或自訂的型別字串，會用 `getTypeOf` 做後備比對。
- 回傳簡單的布林結果（`true`/`false`），適合做 guard 同分支判斷。

## 用法

### 语法

函数：

- `isOfType(value, type)`

参数：

- `value`: 欲拿來對照 `type` 的值。
- `type`: 欲檢查對照的型別字串表示。

### 本地函数导入

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input tī sī chi̍t ê sù-jī tī chia
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input tī sī chi̍t ê jī-liāu tī chia
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isOfType(value, type)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isOfType](../_analysis/isOfType.md)

<br>

---

<small>该文件于 30 January 2026 at 17:05:09 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>