# isNullOrUndefined

## 说明

जांचेला कि देहल मान `null` बा कि `undefined`।

### 使用场景

जब रउआ `null` आ `undefined` दुनो के “कोनो मान नइखे” मान के चले के चाहीं, तब `isNullOrUndefined` के इस्तेमाल करीं—जइसे
optional input validate करे में, API payload normalize करे में, या dereference करे से पहिले ओह code path के guard करे
में जहाँ मान गायब हो सकेला।

> **给 TypeScript 用户的提示：**
>
> `isNullOrUndefined` के इस्तेमाल करीं ताकि property access करे या method call करे से पहिले missing value से बचल जा सके;
> ई खाली `null` आ `undefined` खातिरे `true` लौटावेला।

### 优势

- `null` आ `undefined` के एके जगह पर चिन्है खातिर साफ, दोबारा इस्तेमाल होए वाला गार्ड देला।
- एक ठो सादा boolean (`true`/`false`) लौटावेला जे शर्त आ validation में जोड़ल आसान बा।
- property access करे या method call करे से पहिले गायब value के जांच के आम runtime गलती से बचे में मदद करेला।

## 用法

### 语法

函数：

- `isNullOrUndefined(value)`

参数：

- `value`: `null` या `undefined` खातिर जांचे वाला मान।

### 本地函数导入

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // गुम मान के संभालो
}

console.log(isNullOrUndefined(b)); // सही
console.log(isNullOrUndefined(c)); // गलत

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNullOrUndefined(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>该文件于 31 January 2026 at 00:34:00 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>