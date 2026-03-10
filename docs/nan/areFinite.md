# areFinite

## 说明

`areFinite` kiám-cha chi̍t ê value sī-m̄-sī chi̍t ê bô-khong ê array, iāu-koh i ê element lóng sī ū-hān ê sù-liāu; nā
sī, tō thài `true`, bô sī tō thài `false`.

### 使用场景

Tī chò kè-sǹg chêng, kiám-cha sù-liāu ê array (chhin-chhiūⁿ chart series, tọa-piau liat, chhí-liōng sample) sī-m̄-sī
lóng sī ū-hān ê sù-liāu, hō kiat-kó chí ū tī só͘-ū value lóng ū-hān ê sî-chūn chiah sī `true`.

> **给 TypeScript 用户的提示：**
>
> Tī lí su-iàu xác-jīn chi̍t ê array bô-khong, iāu-koh chí ū ū-hān ê sù-liāu ê sî-chūn, iōng `areFinite`; i tùi khong ê
> array, á-sī ū `NaN`/infinity ê array lóng ē thài `false`.

### 优势

- Tīng-tio̍h `true` chí ū tī input sī chi̍t ê bô-khong ê array, iāu-koh múi ê element lóng sī ū-hān ê sù-liāu.
- Thài-khì `Infinity`, `-Infinity`, kap `NaN`, in-ūi tùi múi ê element lóng iōng `isFinite` lâi kiám-cha.
- Thèng-khì chi̍t ê kán-tan ê boolean kiat-kó (`true`/`false`), hó iōng tī guard kap validation ê liû-chêng.

## 用法

### 语法

函数：

- `areFinite(array)`

参数：

- `array`: Beh kiám-cha ê array, beh xác-jīn i ê só͘-ū element lóng sī bô `Infinity`/`NaN` ê ū-hān sù-liāu.

### 本地函数导入

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // 真
console.log(areFinite(b)); // 假
console.log(areFinite(c)); // 假

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFinite(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFinite](../_analysis/areFinite.md)

<br>

---

<small>该文件于 30 January 2026 at 16:36:15 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>