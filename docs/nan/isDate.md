# isDate

## 说明

`isDate` phán-tēng chi̍t ê hō͘ lâi ê chhi̍t-chiáⁿ sī-m̄-sī `Date`, tī `Date` instances sî hō͘ `true`, kî-tha ê
chêng-hêng hō͘ `false`.

### 使用场景

Tī chò `Date` thao-chok (chhin-chhiūⁿ formatting, comparisons, á-sī kiò `toISOString()`) chìn-chêng, sióng-sian
kiám-chhà kap narrow bô-khak-tēng ê chhi̍t-chiáⁿ (chhin-chhiūⁿ request data, config values, á-sī parsed JSON).

> **给 TypeScript 用户的提示：**
>
> Sái-iōng `isDate` lâi tī runtime hō͘ `unknown` narrow kàu `Date`; i kan-taⁿ tī chin-chèng ê `Date` instances chiah ē
> trả `true` (m̄-sī date strings).

### 优势

- I tēng-kiong chi̍t ê kán-tan ê runtime guard lâi kiám-chhà chi̍t ê chhi̍t-chiáⁿ sī-m̄-sī `Date`.
- I pang-chān hō͘ lí bîan-khì type errors, in-ūi i hō͘ chí-ū `Date` ê instances chiah ē thong-kòe validation.
- I chin ū-iōng tī kiám-chhà bô-khak-tēng ê input (chhin-chhiūⁿ API payloads) chêng-sî, chiah lâi sái-iōng date-specific
  ê methods.

## 用法

### 语法

函数：

- `isDate(value)`

参数：

- `value`: Beh kiám-chhà ê chhi̍t-chiáⁿ, beh khòaⁿ i sī-m̄-sī `Date` type.

### 本地函数导入

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input tī sī Date chit-ūi
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isDate(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isDate](../_analysis/isDate.md)

<br>

---

<small>该文件于 31 January 2026 at 15:47:00 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>