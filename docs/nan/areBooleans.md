# areBooleans

## 说明

`areBooleans` kiám-cha chi̍t ê gí-bêng ê bô-khong array sī-m̄-sī kan-na ū boolean chiàu, nā sī tio̍h tńg `true`，bô sī
tńg `false`.

### 使用场景

Kiám-cha iōng-chiá thâu-kèⁿ ê á-sù hō͘ lâi ê data (lī-jū: JSON payloads, query params, config arrays)，kám-chhái chi̍t ê
bô-khong li̍t-tó͘ lóng sī boolean，chiah thang iōng boolean logic, á-sī chhōa hō͘ chiah ê API (kî-thāi `boolean[]`).

> **给 TypeScript 用户的提示：**
>
> Iōng `areBooleans` lâi chhàm-chiám `unknown[]` chêng, chiah thang kā i當做 `boolean[]`; i對 bô-khong array ē tńg
`false`，só͘-í nā bô-khong ê li̍t-tó͘ mā beh hō͘ i ê, tio̍h hián-bêng chhú-lí hit ê tình-hóng.

### 优势

- Tīng-tīng tīng-sī chiah ē tńg `true`，chí-kàu só͘-ū ê iûⁿ-sò͘ lóng sī boolean, iā chhiáⁿ input sī chi̍t ê bô-khong ê
  array.
- Thang phòng-chí giả-chiàⁿ ê positive，in-ūi khì-chi̍t bô-khong ê array (tńg `false`).
- Chòe-chòe sī chi̍t ê runtime guard，tī chò boolean-only ê thao-chok chêng (lī-jū: `every`, `some`, logical reductions).

## 用法

### 语法

函数：

- `areBooleans(array)`

参数：

- `array`: Beh kiám-cha sī-m̄-sī lóng sī boolean iûⁿ-sò͘ ê array.

### 本地函数导入

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBooleans(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>该文件于 30 January 2026 at 14:41:27 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>