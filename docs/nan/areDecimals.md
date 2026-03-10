# areDecimals

## 说明

Kiám-cha array lāi só͘-ū iû-so͘ sī-m̄-sī si̍p-chìn-sò͘ (decimal) ê sò͘-jī, iā beh hō͘ array sī ū chhiong ê, liân-sî hō͘
`true` á-sī `false`.

### 使用场景

Kiám-cha iōng-chiá thèng-kiong ê li̍t-toaⁿ (chhin-chhiūⁿ CSV liat á-sī piáu-toaⁿ su-ji̍p), hō͘ array m̄-sī khòng ê, koh
kok-ê hāng-mu̍h lóng sī decimal chi̍t ê chhiat-chi̍t, chiah lâi chhái-kái á-sī kè-sǹg.

> **给 TypeScript 用户的提示：**
>
> Tī lí sui-iàu chi̍t ê kuài-khòai boolean kiám-cha, hō͘ `unknown[]` m̄-sī khòng ê, koh só͘-ū iû-so͘ lóng sī decimal ê
> piáu-sī, tō ēng `areDecimals`.

### 优势

- Kakī-tēng su-ji̍p ê su-liāu sī chi̍t ê ū chhiong ê array chiah lâi kiám-cha hāng-mu̍h, bē hō͘ khòng ê li̍t-toaⁿ hō͘
  lâng bô-ìng chhiú-jiap.
- Tùi kok-ê iû-so͘ tōng-chi̍t ēng `isDecimal` lâi kiám-cha, só͘-í ū hûn-ha̍p á-sī bô-ha̍p ê chhiat-chi̍t tō ēng liâm-sî
  `false` kiat-kó.
- Thèng-kiong chi̍t ê kán-tan ê boolean kiat-kó (`true`/`false`), siūn-piān chò guard kap chōng-sî thèng-chí (
  early-return) ê kiám-cha liû-chêng.

## 用法

### 语法

函数：

- `areDecimals(array)`

参数：

- `array`: Beh kiám-cha ê array.

### 本地函数导入

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // 真
console.log(areDecimals(b)); // 假
console.log(areDecimals(c)); // 假
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areDecimals(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>该文件于 31 January 2026 at 15:58:20 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>