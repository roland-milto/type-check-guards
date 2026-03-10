# isOneOfType

## 说明

`isOneOfType` निर्धारित करैत अछि जे देल गेल `value` उपलब्ध कराओल टाइप स्ट्रिंग सभमे सँ कम सँ कम एकटा सँ मेल खाइत अछि कि
नहि; जँ कोनो मिलान भेटैत अछि तँ `true` आ नहि तँ `false` घुरबैत अछि।

### 使用场景

ढीला-टाइप कएल गेल वा बाहरी डाटा (जइसे parsed JSON, query parameters) केँ वैलिडेट करू, जइमे आगाँक लॉजिक पर बढ़बाक पहिने
बहुते स्वीकार्य रनटाइम टाइप (जइसे `number` वा `string`) केँ अनुमति देल जाइत अछि।

> **给 TypeScript 用户的提示：**
>
> `isOneOfType` तखन उपयोग करू जखन अहाँ चाहैत छी जे रनटाइम पर जाँच होअय जे कोनो मान किछु मान्य टाइप सभमे सँ कोनो एकटा सँ
> मेल खाइत अछि; जँ कम सँ कम एकटा टाइप मेल खाइत अछि तँ ई `true` घुरबैत अछि, नहि तँ `false`।

### 优势

- एउटै कलमा बहुते मान्य टाइप सभक विरुद्ध मान जाँचैत अछि, पहिल मिलान पर `true` घुरबैत अछि।
- `unknown` इनपुट सभक संग काज करैत अछि, जेकरा कारण ई रनटाइम बाउंडरी (जइसे बाहरी डाटा, यूजर इनपुट) पर उपयोगी अछि।
- सादा बूलियन नतीजा (`true`/`false`) जे कंडीशनल लॉजिक आ early return सभक संग नीक जुरि जाइत अछि।

## 用法

### 语法

函数：

- `isOneOfType(value, types)`

参数：

- `value`: निर्दिष्ट टाइप सभक विरुद्ध जाँच करबाक लेल मान।
- `types`: मानक संभावित टाइप सभक प्रतिनिधित्व करैत टाइप स्ट्रिंग सभक एरे।

### 本地函数导入

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input runtime me object hai
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

<small>该文件于 31 January 2026 at 23:43:37 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>