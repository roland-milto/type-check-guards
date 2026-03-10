# areSymbols

## 说明

Kiám-tsa input sī-m̄-sī tsi̍t ê ū chhiong-si̍t (filled) ê array, i ê element lóng sī symbol, koh huân-lâi `true` á-sī
`false`.

### 使用场景

Kiám-tsa tsi̍t ê configuration field (pí-jū: iōng symbol lâi piáu-sī ê unique keys li̍t-to͘) sī tsi̍t ê bô-khong array,
koh i lāi-bīn lóng sī symbol, tsiah thang tī siū-iōng i ê APIs (siu-khiû `symbol[]`) chêng-tsìn iōng i.

> **给 TypeScript 用户的提示：**
>
> Iōng `areSymbols` lâi kiám-tsa bô-khak-tēng ê input, tsiah thang kā i tòng-tsò `symbol[]`; tùi bô sī array kap khong ê
> array, i ē huân-lâi `false`.

### 优势

- Tīng-tsò `true` tsiah tīng-sî input sī tsi̍t ê bô-khong ê array, koh iáu-koh tsit-ê element lóng sī symbol.
- Thang bî免 chhut-hiān giả-chiàⁿ ê positive, in-uī thóng-kòe lāi-pōo ê filled-array kiám-tsa lâi kiat-tīng bô sī array
  kap khong ê array.
- Tōa ū iōng tī runtime type guard, ē-sái tī kè-siong chhú-lí tsiánn-tsiánn kiám-tsa sī-m̄-sī tsuán symbol ê li̍t-to͘.

## 用法

### 语法

函数：

- `areSymbols(array)`

参数：

- `array`: Beh kiám-tsa sī-m̄-sī lóng sī symbol element ê array.

### 本地函数导入

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a 是一个运行时只有 symbol 的数组
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areSymbols(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>该文件于 30 January 2026 at 14:22:59 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>