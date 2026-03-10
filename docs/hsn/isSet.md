# isSet

## 说明

निर्धारित करेला कि देहल मान `Set` हइ कि नहि।

### 使用场景

बाहरी स्रोत (जइसे JSON parsing, user input, चाहे third-party APIs) से इनपुट के सत्यापित करीं ताकि `Set` ऑपरेशन करे से
पहिले मान `Set` होखे।

> **给 TypeScript 用户的提示：**
>
> `unknown` मान के संकुचित (narrow) करे खातिर `isSet` के उपयोग करीं, `Set`-विशिष्ट API जइसे `.add`, `.has`, चाहे `.size`
> के कॉल करे से पहिले।

### 优势

- एगो सरल रनटाइम जाँच देला जे पुष्टि करेला कि कोनो मान `Set` हइ कि नहि।
- टाइप त्रुटि से बचावे में मदद करेला, काहेकि जब मान `Set` नहि होखे त जल्दी शाखाबंदी (branching) करे के सुविधा देला।
- कउनो भी `Set` सामग्री (खाली चाहे भरल) के साथ काम करेला आ लगातार `true`/`false` लौटावेला।

## 用法

### 语法

函数：

- `isSet(value)`

参数：

- `value`: जाँच करे खातिर मान।

### 本地函数导入

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a runtime par Set hai
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isSet(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isSet](../_analysis/isSet.md)

<br>

---

<small>该文件于 30 January 2026 at 23:09:58 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>