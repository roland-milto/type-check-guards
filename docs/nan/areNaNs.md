# areNaNs

## 说明

`areNaNs` kiám-cha array lāi ê só͘-ū iû-sò͘ sī-m̄-sī lóng sī `NaN`, chiah tī múi ê iû-sò͘ lóng sī `NaN` ê sî-chūn chiah
thèng-sī `true`.

### 使用场景

Kiám-giām ji̍p-lâi ê data, tī hia `NaN` hō͘ iōng chòe sentinel value, jî lí su-iàu khak-tēng choân-bō͘ array lóng
chûn-chhi̍t sī `NaN` (chhiūⁿ kiám-chhà chi̍t chù all-missing ê sô͘-jī series).

> **给 TypeScript 用户的提示：**
>
> Tī lí sui-iàu kiám-giām chi̍t ê array kám lóng sī sô͘-jī ê `NaN` (bô string-to-number coercion) ê sî-chūn, ē-sái iōng
`areNaNs`.

### 优势

- Tīng-sī `true` chiah tī chhōe-kàu múi ê iû-sò͘ lóng sī `NaN` (giâm-keh ê choân-bō͘ iû-sò͘ kiám-cha).
- Bô ē kā chhù-lí chòe-sîng (string) kiông-chè chòe sô͘-jī; chhiūⁿ "NaN" chit khoán chhi̍t sîng iáu sī bô-`NaN`, hō͘
  kiat-kó `false`.
- Tùi bô chhiong-sit ê array ē thèng-sī `false`, hō͘ bô ē tī khong ê input siōng-chiap `true`.

## 用法

### 语法

函数：

- `areNaNs(array)`

参数：

- `array`: Beh kiám-cha siōng-bīn sī-m̄-sī `NaN` ê array.

### 本地函数导入

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // chin
const b = areNaNs([NaN, 1, NaN]); // bô chin
const c = areNaNs([NaN, "NaN", NaN]); // bô chin
const d = areNaNs([NaN, null, NaN]); // bô chin
const e = areNaNs([] as unknown[]); // bô chin
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNaNs(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>该文件于 30 January 2026 at 15:52:37 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>