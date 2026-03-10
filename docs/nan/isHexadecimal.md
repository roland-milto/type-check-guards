# isHexadecimal

## 说明

`isHexadecimal` kiám-chhà chi̍t ê gíng-tēng ê value sī-m̄-sī iú pit-su ê `0x`/`0X` chêng-thâu ê sip-liû-jī sîng-bûn
literal.

### 使用场景

Iōng `isHexadecimal` lâi kiám-chhà configuration values, API payload fields, á-sī CLI arguments, hit-sî chiah ê
chhîng-kiû tio̍h ēng sip-liû-jī sîng-bûn literal (chhin-chhiūⁿ IDs, masks, á-sī addresses) lâi thê-kiong, jî-chhiáⁿ
bô-thang iú chiuⁿ-pî ê pe̍h-khong.

> **给 TypeScript 用户的提示：**
>
> Tī lí su-iàu kiám-chhà iōng-chiá input á-sī serialized data sī giâm-kek ê sip-liû-jī literal sîng-bûn (lóng tio̍h kám
`0x`/`0X` chêng-thâu) chiah ē-sái parsing á-sī chhùi-hoán ê sî-chūn, ē-sái iōng `isHexadecimal`.

### 优势

- Kiám-chhà `value` sī sîng-bûn (string) koh phù-hap giâm-kek ê sip-liû-jī (hexadecimal) literal ke-kik (pit-su iú `0x`/
  `0X` chêng-thâu).
- Kì-choat iú chêng-thâu á-sī bóe-thâu ê pe̍h-khong (whitespace) ê sîng-bûn, pang-chān bî免 chhōe-chhōe chiap-siū iú
  pàng-khong ê input.
- Chí-chhî kó͘-sò͘ ê sign, jî-chhiáⁿ chêng-thâu kap jī-sò͘ bô hun tōa-sió (case-insensitive), hōe `true`/`false` hō͘-lâi
  chin-khak koh ū kì-tēng.

## 用法

### 语法

函数：

- `isHexadecimal(value)`

参数：

- `value`: Beh kiám-chhà ê chit ê value.

### 本地函数导入

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // chin
isHexadecimal("-0Xff"); // chin
isHexadecimal("1A2B"); // bô͘-chin (bô͘ khì-tâu)
isHexadecimal(" 0x1A2B"); // bô͘-chin (ū chêng-bīn ê khòng-peh)
isHexadecimal(0x1a2b); // bô͘-chin (m̄-sī chi̍t ê chûi-liāu)

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isHexadecimal(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>该文件于 31 January 2026 at 23:04:57 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>