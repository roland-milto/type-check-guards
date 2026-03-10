# areIndexesFound

## 说明

`areIndexesFound` kiám-chhâ chi̍t ê value sī-m̄-sī chi̍t ê bô-khong ê array, i ê element lóng sī ū-hāu ê index; sī ê sî
chhūn `true`, bô-sī tō chhūn `false`.

### 使用场景

Kiám-chhâ iōng-chiá thê-kiong á-sī gōa-lâi data (chhin-chhiūⁿ parse ê JSON) — sī beh tòng-chò index ê liat-piáu — chiah
thang iōng lâi access á-sī slice arrays.

> **给 TypeScript 用户的提示：**
>
> Iōng `areIndexesFound` lâi kiám-chhâ bîng-bô ê input, chiah thang kā i ê element tòng-chò array ê index; i tùi khong ê
> array kah ū bô-sī index ê value ê array lóng ē chhūn `false`.

### 优势

- Chíūn `true` tīng-sî input sī chi̍t ê ū chhiong ê array, koh chiah ê element lóng sī ū-hāu ê index.
- Kiám-chhâ chin khoài: chhōe tio̍h bô-sī index ê element tō liân-sî hoat `false`.
- Tī beh kā chiah ê value iōng chò array ê vị-tì (positions) á-sī offset chêng, chin ū iōng chò guard.

## 用法

### 语法

函数：

- `areIndexesFound(array)`

参数：

- `array`: Beh kiám-chhâ sī-m̄-sī phù-ha̍p index ê array.

### 本地函数导入

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // chin
console.log(areIndexesFound(b)); // m̄-sī
console.log(areIndexesFound(c)); // m̄-sī

if (areIndexesFound(a)) {
  // Chit-ê, `a` hō͘ jīn-chèng sī chi̍t ê ū chhiong-sit ê i̍k-só͘ ê phái-liat.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areIndexesFound(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>该文件于 31 January 2026 at 00:42:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>