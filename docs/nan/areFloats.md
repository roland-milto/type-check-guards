# areFloats

## 说明

`areFloats` kiám-cha chi̍t ê gíng-tēng ê array sī-m̄-sī ū chhiong, iā kap i ê só͘-ū element lóng sī float.

### 使用场景

Tng lí siū tio̍h chi̍t ê `unknown[]` (chhin-chhiūⁿ lâi-chū JSON, query parameters, á-sī gōa-pō͘ APIs) ê sî, nā lí su-iàu
khak-tēng i sī chi̍t ê ū chhiong ê array, mā-chiah múi chi̍t ê item lóng sī float, chiah thang chò pîng-kun,
interpolation, á-sī thống-kè kè-sǹg chit-lūi ê sǹg-sut, tō ē-sái iōng `areFloats`.

> **给 TypeScript 用户的提示：**
>
> Iōng `areFloats` lâi chò `unknown[]` ê guard, chiah thang kā i tòng-chò sī chí ū float ê `number[]`; i tī khong array
> kap jīm-hô bô-sī float ê element lóng ē tńg `false`.

### 优势

- Chỉ tīng `true` khi input sī chi̍t ê bô-khong ê array, kap múi chi̍t ê element lóng sī float.
- Chhòng-kín thất-bāi: chhōe tio̍h bô-sī float ê element ê sî, tō liân-sòe tńg `false`.
- Pang-chān tī chò float si̍t-iōng ê kè-sǹg chîⁿ-chêng, lâi kiám-cha bô-khak-tēng ê input.

## 用法

### 语法

函数：

- `areFloats(array)`

参数：

- `array`: Beh kiám-cha siánn-mih float element ê array.

### 本地函数导入

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // chin
console.log(areFloats(b)); // bô-sī
console.log(areFloats(c)); // bô-sī

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFloats(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFloats](../_analysis/areFloats.md)

<br>

---

<small>该文件于 30 January 2026 at 15:58:36 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>