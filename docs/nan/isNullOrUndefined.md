# isNullOrUndefined

## 说明

Kiám-chhà chi̍t ê chhi̍t sī-m̄-sī `null` á-sī `undefined`.

### 使用场景

Tī lí sui-iàu chiong `null` kap `undefined` lóng tòng-chò “bô chhi̍t” ê sî-chūn, iōng `isNullOrUndefined`; chhin-chhiūⁿ
kiám-giām optional inputs, chéng-lí API payloads, á-sī tī dereference chi̍t ê kiám-kàu ū-khó-lêng bô chhi̍t ê chhi̍t
chêng, lâi guard code paths.

> **给 TypeScript 用户的提示：**
>
> Iōng `isNullOrUndefined` lâi guard chhiúⁿ-tōa chêng-hêng ê chhi̍t, chiah thang tī chhù-lí properties á-sī hoán-chiàu
> methods chêng kiám-chhà; i kan-taⁿ tī `null` kap `undefined` chiah ē hoán `true`.

### 优势

- Tiong i chi̍t ê chheng-chhó, ē-tàng chài-iōng ê guard, lâi chi̍t chhù só͘-chāi kiám-chhà `null` kap `undefined`.
- Hóe-sîng chi̍t ê kán-tan ê boolean (`true`/`false`), hō͘ lâng tī tiâu-kiāⁿ kap kiám-giām tiong hó chò chhap-khì.
- Tī chhiúⁿ-tōa sîng-chōng chêng-hêng, chiong chhōe-bô chhi̍t ê chhiáⁿ-chi̍t chêng kiám-chhà, pang-chān bī免
  chhiong-chhiūⁿ ê runtime errors, chiah ē-tàng chhù-lí chhiúⁿ-tōa chêng-hêng chêng chhù-lí properties á-sī hoán-chiàu
  methods.

## 用法

### 语法

函数：

- `isNullOrUndefined(value)`

参数：

- `value`: Beh kiám-chhà ê chhi̍t, sī-m̄-sī `null` á-sī `undefined`.

### 本地函数导入

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // 處理無值
}

console.log(isNullOrUndefined(b)); // 真
console.log(isNullOrUndefined(c)); // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNullOrUndefined(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>该文件于 31 January 2026 at 00:34:43 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>