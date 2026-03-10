# isSet

## 说明

判斷指定个值係毋係 `Set`。

### 使用场景

驗證來自外部來源个輸入（例如 JSON 解析、使用者輸入，抑係第三方 API），確保喺執行 `Set` 操作之前，該值係一個 `Set`。

> **给 TypeScript 用户的提示：**
>
> 用 `isSet` 先縮窄 `unknown` 值，正好去呼叫 `Set` 專用个 API，像係 `.add`、`.has` 或 `.size`。

### 优势

- 提供簡單个執行期檢查，來確認一個值係毋係 `Set`。
- 透過允許喺值毋係 `Set` 時提早分支處理，幫助避免型別錯誤。
- 對任何 `Set` 內容（空个抑係有資料个）都適用，並且一致回傳 `true`/`false`。

## 用法

### 语法

函数：

- `isSet(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a 係執行時係一個 Set
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isSet(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isSet](../_analysis/isSet.md)

<br>

---

<small>该文件于 30 January 2026 at 23:09:41 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>