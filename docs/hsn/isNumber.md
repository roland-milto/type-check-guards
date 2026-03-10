# isNumber

## 说明

`isNumber` चेक करदा ऐ के कोई वैल्यू फाइनाइट, गैर-`NaN` नंबर ऐ के नहीं।

### 使用场景

बेविश्वास सोर्सां (फॉर्म्स, क्वेरी पैराम्स, JSON पेलोड्स) तोں आए न्यूमेरिक इनपुट नूं कैलकुलेशन्स, स्टोरेज, जां रेंज
चेक्स तोں پہلاں वैलिडेट करो, तां के सिरिफ फाइनाइट नंबर पास (`true`) होण अते बाकी हर चीज़ `false` वापस करे।

> **给 TypeScript 用户的提示：**
>
> `isNumber` नूं `unknown` वैल्यूज़ दी वैलिडेशन लेई अरिथमैटिक करन तोں پہلاں ਵਰतो; एह `NaN`, `Infinity`, अते `-Infinity`
> नूं रद्द करदा ऐ।

### 优势

- `true` सिरिफ असली JavaScript नंबरां लेई वापस करदा ऐ (टाइप चेक नाल `NaN` अते इन्फिनिटी नूं रद्द करदा ऐ)।
- आम वैलिडेशन बगां तोں बचांदा ऐ जित्थे `NaN`, `Infinity`, जां `-Infinity` गलती नाल नंबर समझ के पास हो जांदे न।
- अनजाण इनपुट (जिवें JSON, यूज़र इनपुट, बाहरी APIs) लेई रनटाइम गार्ड वजों चंगी तरह कम करदा ऐ।
- सादा, तेज़, अते बिना साइड-इफेक्ट दे।

## 用法

### 语法

函数：

- `isNumber(value)`

参数：

- `value`: चेक करन लेई वैल्यू।

### 本地函数导入

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input ek valid finite number hai
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNumber(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNumber](../_analysis/isNumber.md)

<br>

---

<small>该文件于 30 January 2026 at 13:09:23 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>