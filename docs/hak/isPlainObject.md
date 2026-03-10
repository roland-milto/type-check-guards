# isPlainObject

## 说明

Kiám-chha yit ê gîng-kiat ê `value` sî-m̄-sî chûn-sû object; sî ê sî-chûn trả về `true`, m̄-sî ê sî-chûn trả về `false`.

### 使用场景

Kiám-chhà yit ê `unknown` input (chhin-chhiūⁿ parse ê JSON, gōa-pō͘ data, á-sî function arguments) sî-m̄-sî chûn-sû
object, chiah thang thak keys á-sî kā i mapping chò yit ê ū type ê configuration object.

> **给 TypeScript 用户的提示：**
>
> `isPlainObject` sî iōng lâi hō͘ `unknown` chò chhái chhìn (narrowing) chiah thang當做 record-lî ê object; i chí-ūi tī
> nâ-sî chhi̍t-chi̍t chhi̍t-chi̍t ê internal tag sî `[object Object]` ê sî-chûn chiah trả về `true`.

### 优势

- Tiong-kiung yit-koi sîm-pûn, kó-khi̍t ê kiám-chha, chhám-sî chhâ-khì yit ê chhi̍t-chi̍t chhi̍t-chi̍t sî-m̄-sî chûn-sû
  ê object (tio̍h-sî `Object` / `{}`), pûn-lâi trả về `true` á-sî `false`.
- Pang-chō̤ phîn-pia̍t chûn-sû object kap array, function, `null`, í-ki̍p kî-tha m̄-sî chûn-sû object ê lûi-hêng.
- Tī TypeScript li̍p-mi̍t, chò type guard hîn iōng, chhám-sî chhâ-khì `unknown` ê chhi̍t-chi̍t chhi̍t-chi̍t chhái chhìn,
  chhái chhìn liáu chiah thang chhám-sî chhâ-khì object ê properties.

## 用法

### 语法

函数：

- `isPlainObject(value)`

参数：

- `value`: Iōng lâi chhì-giám sî-m̄-sî chûn-sû object ê chhi̍t-chi̍t chhi̍t-chi̍t.

### 本地函数导入

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input 係一隻普通个物件（plain object）
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // 係真
console.log(isPlainObject([])); // 係假
console.log(isPlainObject(null)); // 係假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isPlainObject(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>该文件于 6 February 2026 at 12:17:45 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>