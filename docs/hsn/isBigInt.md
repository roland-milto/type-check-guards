# isBigInt

## 说明

`isBigInt` जाँचेला कि दिहल गइल वैल्यू के टाइप `bigint` बा कि ना, BigInt प्रिमिटिव खातिर `true` आ बाकी सब खातिर `false`
लौटावेला।

### 使用场景

अनटाइप्ड स्रोत से आवे वाला वैल्यू (जइसे, JSON parsing, user input, external APIs) के validate आ narrow करीं, ताकि
BigInt-विशेष गणना करे या BigInt-खाली फील्ड में स्टोर करे से पहिले पक्का हो सके।

> **给 TypeScript 用户的提示：**
>
> `unknown` के `bigint` में narrow करे खातिर BigInt arithmetic (जइसे, `+`, `*`) करे से पहिले `isBigInt` के इस्तेमाल
> करीं, काहेकि एहमें BigInt operands जरूरी होखेलें।

### 优势

- `bigint` प्रिमिटिव टाइप खातिर एक सरल, भरोसेमंद रनटाइम जाँच देला।
- BigInt-खाली ऑपरेशन करे से पहिले `unknown` वैल्यू के संकुचित (narrow) करे में मदद करेला।
- गलत पॉजिटिव से बचाव करेला: साधारण नंबर, स्ट्रिंग, आ अउरी टाइप `false` लौटावेलें।

## 用法

### 语法

函数：

- `isBigInt(value)`

参数：

- `value`: जाँच करे खातिर वैल्यू।

### 本地函数导入

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // true
console.log(isBigInt(10));  // false
console.log(isBigInt("10")); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBigInt(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>该文件于 31 January 2026 at 23:32:06 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>