# areErrors

## 说明

Kiám-cha chi̍t ê array sī-bô bô khòng, koh chhûn-chāi ê lóng sī `Error` objects, hō͘ i返-hôe `true` á-sī `false`.

### 使用场景

Tī iterating, log, á-sī rethrow chìn-chêng, kiám-cha runtime cung-kip ê `unknown[]` (thí-lū: chhōe-kàu ê thất-bāi,
validation kiat-kó, á-sī deserialized data) sī-bô chi̍t ê bô khòng ê `Error` objects lia̍t-toaⁿ.

> **给 TypeScript 用户的提示：**
>
> `areErrors` chí-ū tī array ū chhiong-sit, koh múi chi̍t ê item lóng sī `Error` ê sî-chūn chiah ē返-hôe `true`; nā sī
> khòng array á-sī ū jīm-hô chi̍t ê iûⁿ-sò͘ m̄-sī `Error`, tō ē返-hôe `false`.

### 优势

- Kakī-tēng sióng-sī chhōe-kàu múi chi̍t ê iûⁿ-sò͘ lóng sī `Error` ê instance, hō͘ chhù-lí lỗi-chhō͘ kap log chòe-khì
  khah an-chôan.
- Kì-choat khòng ê array, phòng-chí bô-kò͘-ì ê “bô lỗi-chhō͘” chêng-hêng hō͘ lâng tòng-chò sī ū-hāu ê lỗi-chhō͘
  lia̍t-toaⁿ.
- Tùi `unknown[]` ê input (thí-lū: lâi-chū API á-sī `catch` block) chò runtime guard sî chin hó ēng.

## 用法

### 语法

函数：

- `areErrors(array)`

参数：

- `array`: Beh kiám-cha ê array, sī-bô ū `Error` objects.

### 本地函数导入

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value sī chi̍t ê bô-khong ê Error o̍k-chi̍p ê chū-liāu
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areErrors(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areErrors](../_analysis/areErrors.md)

<br>

---

<small>该文件于 6 February 2026 at 12:34:47 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>