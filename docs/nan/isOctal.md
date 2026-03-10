# isOctal

## 说明

判斷一個值敢是有效个八進位字面量字串（例如 `0o755`）。

### 使用场景

在解析抑是轉換之前，驗證使用者輸入抑是設定值，這兜值必須用八進位字面量字串來表示（例如檔案權限模式像 `0o644`）。

> **给 TypeScript 用户的提示：**
>
> `isOctal` 是一個型別守衛（`value is string`）。當結果是 `true` 了後，TypeScript 會摎檢查个變數縮窄做 `string`。

### 优势

- 提供嚴格个型別守衛：只有當輸入是符合八進位字面量格式个字串時才會回傳 `true`。
- 拒絕空字串佮有前後空白（ASCII 控制字元/空白）个字串，減少無意間个匹配。
- 支援可選个正負號，而且對 `0o`/`0O` 前綴無分大小寫。
- 對非字串輸入較寬鬆：回傳 `false`，毋會擲出例外。

## 用法

### 语法

函数：

- `isOctal(value)`

参数：

- `value`: 欲檢查个值。

### 本地函数导入

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // 真
console.log(isOctal(b)); // 真
console.log(isOctal(c)); // 假
console.log(isOctal(d)); // 假

if (isOctal(a)) {
  // a 佇遮是字串
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isOctal(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isOctal](../_analysis/isOctal.md)

<br>

---

<small>该文件于 30 January 2026 at 15:42:21 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>