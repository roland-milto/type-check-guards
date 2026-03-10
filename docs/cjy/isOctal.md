# isOctal

## 说明

判斷一個值係毋係有效个八進制字面量字串（例如 `0o755`）。

### 使用场景

喺解析或轉換之前，驗證使用者輸入或設定值必須用八進制字面量字串表示（例如檔案權限模式像 `0o644`）。

> **给 TypeScript 用户的提示：**
>
> `isOctal` 係一個類型守衛（`value is string`）。當結果係 `true` 以後，TypeScript 會把檢查个變數收窄到 `string`。

### 优势

- 提供嚴格个類型守衛：只有當輸入係符合八進制字面量格式个字串時，先會回傳 `true`。
- 拒絕空字串同埋前後有空白（ASCII 控制字元/空格）个字串，減少意外匹配。
- 支援可選个正負號，對 `0o`/`0O` 前綴無分大小寫。
- 對非字串輸入較寬鬆：回傳 `false` 而毋係拋出例外。

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
  // a 搁这块儿是字符串
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

<small>该文件于 30 January 2026 at 14:44:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>