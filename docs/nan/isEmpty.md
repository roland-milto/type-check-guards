# isEmpty

## 说明

Phòaⁿ-tēng chi̍t ê value sī-m̄-sī kong-khòng; tī `null`, `undefined`, kong-khòng/kan-na pe̍h-kong ê string, kong-khòng ê
array, kong-khòng ê `Map`/`Set`, á-sī bô chū-kī (own) kàu-kiàn (enumerable properties) ê object sî, hôe-sîng `true`.

### 使用场景

Iōng `isEmpty` lâi validation input, kap tī chōe-chióng data type tiong kiám-chhut bô/pe̍h ê value (chhin-chhiūⁿ form
fields, API payloads, configuration objects); tī chia `null`, `undefined`, kan-na pe̍h-kong ê string, kong-khòng ê
collections, kap bô kàu-kiàn ê objects lóng eng-kai sǹg kong-khòng.

> **给 TypeScript 用户的提示：**
>
> `isEmpty` sī chi̍t ê hôe-sîng boolean ê utility (m̄-sī TypeScript ê type predicate), só͘-í i bô-hoat tōa-kha̍k chū-kī
> lâi narrow types; iōng i lâi chò validation/branching, m̄-sī compile-time narrowing.

### 优势

- Kā `null` kap `undefined` tòng-sî chòe-chòe thàn `true` lâi kiám-cha kong-khòng.
- Tī kiám-cha chháng-tō͘ chêng, sīng-sian thèng-khì pe̍h-kong (trim), só͘-í chhēng pe̍h-kong ê chûi-ji̍t chūn-sî iā sǹg
  kong-khòng.
- Chí-chiâⁿ chhiong-iōng ê container lūi-hêng (array, `Map`, `Set`) kap bô chū-kī (own) kàu-kiàn (enumerable) sîng-chit
  ê phó͘-thong object.
- Iōng `hasOwnProperty` kiám-cha, bî免 sǹg-kàu kè-thêng (inherited) ê kàu-kiàn.
- Hôe-sîng chi̍t ê kán-tan ê boolean kiat-kó (`true`/`false`), si̍t-iōng tī guard kap validation.

## 用法

### 语法

函数：

- `isEmpty(value)`

参数：

- `value`: Beh kiám-cha sī-m̄-sī kong-khòng ê chi̍t ê value.

### 本地函数导入

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isEmpty(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>该文件于 6 February 2026 at 16:19:57 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>