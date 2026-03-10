# isBoolean

## 说明

पता लगांदा ऐ कि दित्ता गया मूल्य `boolean` ऐ कि नेईं।

### 使用场景

बाहरी जां बिना-टाइप डेटा (जिवें, environment variables, JSON payloads, query parameters) दी जांच करो तां जो शर्तीय लॉजिक
विच इस्तेमाल करन तोऽ पैह्लें मूल्य `boolean` होवे।

> **给 TypeScript 用户的提示：**
>
> बूलियन ऑपरेशन लगाण तोऽ पैह्लें `unknown` नूं `boolean` तक सीमित करन लेई `isBoolean` दा इस्तेमाल करो।

### 优势

- `typeof` दा इस्तेमाल करियै सादा ते तेज़ रनटाइम चेक।
- बूलियन-खास लॉजिक तोऽ पैह्लें अनजाण इनपुट दी जांच करन च मदद करदा।
- इक भरोसेमंद `boolean` नतीजा (`true`/`false`) वापस करदा।

## 用法

### 语法

函数：

- `isBoolean(value)`

参数：

- `value`: जिह्दी जांच करनी ऐ ओह मूल्य।

### 本地函数导入

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  //‎ input इहाँ boolean अछि
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBoolean(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>该文件于 30 January 2026 at 14:36:36 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>