# isOneOfType

## 说明

`isOneOfType` phán-toān tsi̍t ê `value` sī-m̄-sī kap chí-sîng ê lūi-hîng chū-jī li̍t-piáu tiong ê siōng-sióng tsi̍t ê
phù-hap; nā ū jīm-hô tsi̍t ê phù-hap tō huân-lâi `true`, bô ê huân-lâi `false`.

### 使用场景

Iōng lâi kiám-cha lūi-hîng bô-kò͘-tēng á-sī gōa-pō͘ ê su-ji̍p (chhin-chhiūⁿ parse ê JSON, query parameters), hō͘ i
ē-tàng iōng chē chióng ē-tàng chiap-siū ê ūn-hêng sî lūi-hîng (chhin-chhiūⁿ `number` á-sī `string`) liáu-āu chiah
kiàn-sîng kè-sio̍k ê lô-jî.

> **给 TypeScript 用户的提示：**
>
> Tī lí siūnn beh tī ūn-hêng sî kiám-cha tsi̍t ê chhi̍t sī-m̄-sī phù-hap jīm-hô chē ê ē-tàng ê lūi-hîng sî, iōng
`isOneOfType`; nā ū siōng-sióng tsi̍t ê lūi-hîng phù-hap tō huân-lâi `true`, bô ê huân-lâi `false`.

### 优势

- Tsi̍t pái kiò-tshia̍h tō ē-sái kā tsi̍t ê tsit-ê chhi̍t chhōe chē ê ē-tàng ê lūi-hîng, tī tē-it ê phù-hap sî tō
  huân-lâi `true`.
- Ē-sái kap `unknown` ê su-ji̍p chò-hué, hō͘ i tī ūn-hêng sî ê pîn-kài (chhin-chhiūⁿ gōa-pō͘ su-ji̍p, iōng-chiá su-ji̍p)
  chin ū iōng.
- I thèng-kiong tsi̍t ê kán-tan ê bû-lîng-káng kiat-kó (`true`/`false`), kap tiâu-kiānn lô-jî kah tshut-sî huân-lâi (
  early returns) chin hó tshù-lí.

## 用法

### 语法

函数：

- `isOneOfType(value, types)`

参数：

- `value`: Beh hō͘ i kap siat-tēng ê lūi-hîng chò pî-kàu ê chhi̍t.
- `types`: Tsi̍t ê lūi-hîng chûi-li̍t ê chūn-liāu, lí-ūi chhōe chhut chhi̍t ê khàu-lū ê lūi-hîng.

### 本地函数导入

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input 佇執行時是一个物件
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isOneOfType(value, types)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>该文件于 6 February 2026 at 13:53:32 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>