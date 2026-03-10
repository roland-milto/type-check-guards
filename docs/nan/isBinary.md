# isBinary

## 说明

`isBinary` phán-toàn chi̍t ê chhi̍t sī-m̄-sī binary ê chù-li̍p (ē-sái ū `0b`/`0B` prefix), jî-chhiáⁿ hôe-sîng `true`
á-sī `false`.

### 使用场景

Kiám-cha iōng-chiá thê-kiong ê chù-li̍p (chhin-chhiūⁿ form fields, CLI args, config values), hō͘ in kám-tit in chí ū
binary digits, kî-tāi ē-sái ū `0b`/`0B` prefix, chiah chài kiâⁿ-chiap ê chhú-lí.

> **给 TypeScript 用户的提示：**
>
> Chài parsing á-sī kā chù-li̍p chò `BigInt`/`Number` chîn, ē-sái iōng `isBinary` chò type guard, lâi bî免 bô-ha̍p-lí ê
> input.

### 优势

- Thang-chi̍ap jī-jîn chù-li̍p ê binary chù-li̍p, ū iáu bô `0b`/`0B` ê prefix lóng ē-sái.
- Kì-cho̍k khong ê chù-li̍p kah ū thâu/bóe ê whitespace (ASCII ≤ 32) ê chù-li̍p.
- Hôe-sîng `true`/`false` bô ē thâu-chhut exception, só͘-í tùi bô-kak-tēng ê input khah an-choân.

## 用法

### 语法

函数：

- `isBinary(value)`

参数：

- `value`: Beh kiám-cha ê chhi̍t.

### 本地函数导入

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // 真
const b = isBinary("1010");   // 真
const c = isBinary("0b1020"); // 假
const d = isBinary(0b1010);     // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBinary(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBinary](../_analysis/isBinary.md)

<br>

---

<small>该文件于 31 January 2026 at 23:10:46 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>