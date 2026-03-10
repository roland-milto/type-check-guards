# isNull

## 说明

पता लांदा ऐ कि दित्ती गई `value` `null` ऐ कि निं।

### 使用场景

`isNull` नूं इनपुट्स जां API payload फील्ड्स दी वैलिडेशन लेई इस्तेमाल करो, जिथे `null` इक मानीदार sentinel वैल्यू होवे
ते इसनूं `undefined` जां होर वैल्यूज़ तो वख तरीके नाल हैंडल करना लाज़मी होवे।

> **给 TypeScript 用户的提示：**
>
> `isNull` उस वेले इस्तेमाल करो जदों तुहानूं `null` नूं `undefined` ते होर falsy वैल्यूज़ तो वख करना होवे; एह सिर्फ
`null` लेई `true` वापस करदा ऐ।

### 优势

- `null` दे सटीक जांच दिंदा ऐ, ते इसनूं `undefined` दे नाल गड्ड-मड्ड निं करदा।
- हर किस्म दे इनपुट टाइप लेई भरोसेमंद कम्म करदा ऐ, क्यूंकि एह `unknown` नूं स्वीकार करदा ऐ।
- सादा, तेज़, ते बिना साइड-इफेक्ट; सिर्फ `true` जां `false` ही वापस करदा ऐ।

## 用法

### 语法

函数：

- `isNull(value)`

参数：

- `value`: `null` लेई जांचण वास्ते वैल्यू।

### 本地函数导入

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a इहाँ null अछि
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNull(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNull](../_analysis/isNull.md)

<br>

---

<small>该文件于 31 January 2026 at 15:39:30 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>