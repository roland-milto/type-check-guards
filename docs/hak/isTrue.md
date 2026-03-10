# isTrue

## 说明

`isTrue` 判斷一個指定个值係毋係嚴格等於 `true`。

### 使用场景

用 `isTrue` 來驗證旗標、功能開關、抑係設定值；只接受字面值 `true`，其他全部都愛當做 `false`。

> **给 TypeScript 用户的提示：**
>
> 當你需要淨接受布林字面值 `true`，毋係單淨接受 truthy 值个時節，用 `isTrue`。

### 优势

- 提供對布林字面值 `true` 个嚴格檢查（無強制轉型）。
- 幫助分清 `true` 同像 `1`、`"true"`、抑係 `{}` 這兜 truthy 值。
- 簡單、可預測个行為，適合用在 guard 同驗證流程。

## 用法

### 语法

函数：

- `isTrue(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // zhin
const b = isTrue(1);         // mo zhin
const c = isTrue("true");   // mo zhin

if (isTrue(a)) {
  // a zoi zhin hi
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isTrue(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isTrue](../_analysis/isTrue.md)

<br>

---

<small>该文件于 30 January 2026 at 13:42:25 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>