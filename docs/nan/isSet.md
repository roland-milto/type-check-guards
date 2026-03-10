# isSet

## 说明

判斷指定个值敢是一个 `Set`。

### 使用场景

驗證來自外部來源个輸入（比論 JSON 解析、使用者輸入、抑是第三方 API），確保一个值是 `Set` 了後，才來進行 `Set` 操作。

> **给 TypeScript 用户的提示：**
>
> 用 `isSet` 來縮窄 `unknown` 值了後，才去呼叫 `Set` 專用个 API，親像 `.add`、`.has`、抑是 `.size`。

### 优势

- 提供簡單个執行時檢查，來確認一个值敢是 `Set`。
- 允許提早分支處理，當一个值毋是 `Set` 時，會當幫助避免型別錯誤。
- 對任何 `Set` 內容（空个抑是有資料个）攏適用，並且一致回傳 `true`/`false`。

## 用法

### 语法

函数：

- `isSet(value)`

参数：

- `value`: 欲檢查个值。

### 本地函数导入

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a tī runtime sī chi̍t ê Set
  console.log(a.size);
}

console.log(isSet(b)); // bô
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

<small>该文件于 30 January 2026 at 23:10:33 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>