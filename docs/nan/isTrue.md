# isTrue

## 说明

`isTrue` 判斷一个指定 ê 值敢是嚴格等於 `true`。

### 使用场景

用 `isTrue` 來驗證旗標、功能切換（feature toggles）、抑是設定值；佇這款情境，干焦字面值 `true` 才應該予接受，其他攏愛當做
`false`。

> **给 TypeScript 用户的提示：**
>
> 當你需要只接受布林字面值 `true`，毋是單純 truthy ê 值時，使用 `isTrue`。

### 优势

- 提供對布林字面值 `true` ê 嚴格檢查（無強制轉型）。
- 幫助區分 `true` kap 像 `1`、`"true"`、抑是 `{}` 這款 truthy ê 值。
- 簡單、可預測 ê 行為，適合用佇 guard kap 驗證流程。

## 用法

### 语法

函数：

- `isTrue(value)`

参数：

- `value`: 欲檢查 ê 值。

### 本地函数导入

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // chin
const b = isTrue(1);         // bô sī
const c = isTrue("true");   // bô sī

if (isTrue(a)) {
  // a tī chia sī chin
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

<small>该文件于 30 January 2026 at 13:45:32 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>