# isWeakMap

## 说明

निर्धारित करैत अछि जे देल गेल `value` `WeakMap` इंस्टेन्स अछि कि नहि।

### 使用场景

`isWeakMap` तखन उपयोग करू जखन अहाँ कोनो `unknown` मान स्वीकार करैत छी (जइसे, सार्वजनिक API, प्लगइन सिस्टम, वा डायनेमिक
कॉन्फिगरेशन सँ) आ `WeakMap`-विशेष व्यवहार उपयोग करबाक पहिने ई सत्यापित करय चाहैत छी जे ई `WeakMap` अछि।

> **给 TypeScript 用户的提示：**
>
> `isWeakMap` एकटा `instanceof WeakMap` जांच करैत अछि; ई एकटा रनटाइम गार्ड अछि जे खाली वास्तविक `WeakMap` इंस्टेन्स लेल
`true` लौटबैत अछि।

### 优势

- ए जांच करे खातिर सरल रनटाइम जांच कि कोनो मान `WeakMap` अछि कि नहि।
- `WeakMap` चाही एहन API सभक गलत इस्तेमाल रोकय मे मदद करैत अछि, किएक तँ ई फेंकबाक बदला `true`/`false` लौटबैत अछि।
- `unknown` इनपुट सभक संग काज करैत अछि, जेकरा सँ ई मॉड्यूल बाउंडरी पर सुविधा जनक अछि (जइसे, पार्सिंग, बाहरी डेटा, वा
  अनटाइप्ड कोड)।

## 用法

### 语法

函数：

- `isWeakMap(value)`

参数：

- `value`: जकर जांच करबाक अछि से मान।

### 本地函数导入

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a runtime me WeakMap hai
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isWeakMap(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>该文件于 30 January 2026 at 13:25:19 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>