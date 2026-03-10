# areEqual

## 说明

`areEqual` chhâ-khì ê-sû (array) tiong só͘-ū ê ê-mn̂g sī-m̄-sī lóng kap chi̍t ê kî-thāi ê chhiūⁿ, chíūn `true` chíūn tī
bô-khong ê ê-sû, mā chiah-ê ê-mn̂g lóng chhiūⁿ.

### 使用场景

Kiám-cha chi̍t ê lia̍t-to̍k chíūn ū chi̍t ê hō͘-ún ê chhiūⁿ (pí-jū: só͘-ū ê status flags lóng sī `true`, só͘-ū ê roles
lóng sī `"admin"`, á-sī só͘-ū ê sù-liāu sî-sò͘ lóng kap chi̍t ê sui-iàu ê siông-sò͘ chhiūⁿ), mā kā khong ê ji̍p-jī
tòng-chò bô-ha̍k (`false`).

> **给 TypeScript 用户的提示：**
>
> Tī lí sui-iàu giâm-keh ê "all-items" chhâ-khì sî ēng `areEqual`; i tī khong ê-sû, í-kî bô-sī ê-sû á-sī bô "filled" ê
> ji̍p-jī lóng ē chíūn `false`.

### 优势

- Chíūn `true` tīng-tīng tīng sióng-sióng ê ê-mn̂g lóng kap kî-thāi ê chhiūⁿ; bô-sî tō chíūn `false`.
- Chhòng-khì chhâ: chhōe tio̍h bô kap chhiūⁿ ê ê-mn̂g tō thêng chhâ.
- Tùi bô-ha̍k ê ji̍p-jī hō͘ bô-hāi: ji̍p-jī nā m̄-sī ū ê ê-sû (filled array) tō chíūn `false`.

## 用法

### 语法

函数：

- `areEqual(value, expected)`

参数：

- `value`: Beh chhâ-khì ê ê-sû (array).
- `expected`: Beh kap ê-sû tiong múi ê ê-mn̂g pî-kàu ê ê-mn̂g.

### 本地函数导入

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areEqual(value, expected)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areEqual](../_analysis/areEqual.md)

<br>

---

<small>该文件于 31 January 2026 at 23:51:35 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>