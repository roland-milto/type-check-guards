# isArray

## 说明

`isArray` kiem-cha chi̍t ê gîng-thi̍t value sī-m̄-sī array, sī ê chêng-hông thòi-chhut `true`, m̄-sī thì thòi-chhut
`false`.

### 使用场景

Kiem-giám bû-ti unknown data (lì-ru parsed JSON á-sī API responses), chhîⁿ-chhâ kám-kak value sī array chiah ē-sái
iterating, indexing, á-sī chhám-chhâ `.length`.

> **给 TypeScript 用户的提示：**
>
> Tóng-nî yiu array ê runtime kiem-cha sî, yong `isArray`; i thòi-chhut boolean, kap `unknown` value chò call yě
> an-chhûn.

### 优势

- Siong yong built-in `Array.isArray` lai zuo ho̍k-sìn ê array chhám-chhâ kám-kak, chhù-khì chhâi realm (chhūn-chhi̍t,
  i.e. iframes) ê chêng-hông.
- Thòi-chhut chi̍t ê kám-kak giản-tan ê boolean kiat-kó (`true`/`false`), phù-hap chò guard kap branching logic.
- Tùi jīm-ho input type lóng ē-sái, in-ūi parameter sī `unknown`.

## 用法

### 语法

函数：

- `isArray(value)`

参数：

- `value`: Yiu kiem-cha ê chhi̍t.

### 本地函数导入

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input 係執行時係一個陣列
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isArray(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isArray](../_analysis/isArray.md)

<br>

---

<small>该文件于 6 February 2026 at 11:30:34 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>