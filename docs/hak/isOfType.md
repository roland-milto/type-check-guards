# isOfType

## 说明

判斷指定个 `value` 係毋係符合某个型別字串：基本型別用 `typeof`，複雜型別用後備方式處理。

### 使用场景

透過檢查值係毋係預期个型別字串，來驗證同縮窄 `unknown` 輸入（例如 API 回應、使用者輸入、解析過个 JSON），再進行型別相關个操作。

> **给 TypeScript 用户的提示：**
>
> 處理 `unknown` 值个時節，做 runtime 型別分支可以用 `isOfType`；佢會回傳 `true`/`false`，而且會明確處理 `null` 同
`undefined`。

### 优势

- 透過直接用 `typeof` 檢查基本型別，速度快又清楚。
- 正確處理 `null` 同 `undefined`，單靠 `typeof` 無法照預期分辨。
- 支援複雜或自訂型別字串，會用 `getTypeOf` 做後備比較。
- 回傳簡單个布林結果（`true`/`false`），適合做 guard 同分支判斷。

## 用法

### 语法

函数：

- `isOfType(value, type)`

参数：

- `value`: 欲拿來同 `type` 比對个值。
- `type`: 欲檢查个型別字串表示。

### 本地函数导入

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input 係數字，這位
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input 係字串，這位
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

<small>该文件于 30 January 2026 at 16:59:47 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>