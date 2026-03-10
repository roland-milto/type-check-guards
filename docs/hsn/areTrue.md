# areTrue

## 说明

चैक करदा ऐ कि गैर-खाली ऐरे विच सिरिफ बूलियन `true` वैल्यूज़ ही ने।

### 使用场景

`areTrue` नूं इस लई वर्तो कि जदों तुस प्रीकंडीशन्स या फीचर फ्लैग्स दा सेट वैलिडेट करना होवे कि सारे एनेबल्ड ने (सारियां
वैल्यूज़ `true` ने) तां अग्गे वधो, अते खाली या खराब इनपुट नूं न-पूरे (`false`) समझो।

> **给 TypeScript 用户的提示：**
>
> `areTrue` खाली ऐरे लई अते ओहना ऐरेआं लई `false` लौटांदा ऐ जिन्हां विच कोई वी वैल्यू सख़्ती नाल `true` न होवे।

### 优势

- `true` सिरिफ ओह्दो वक़्त लौटांदा ऐ जदों हर इक एलिमैंट सख़्ती नाल `true` होवे अते ऐरे गैर-खाली होवे।
- फेल-फास्ट: जिवें ही कोई गैर-`true` वैल्यू लभे, फौरन `false` लौटांदा ऐ।
- गलत इनपुट (ऐरे न होण या खाली ऐरे) नूं `false` लौटाके रद्द करदा ऐ।

## 用法

### 语法

函数：

- `areTrue(array)`

参数：

- `array`: ओह ऐरे जिस विच सारे `true` वैल्यूज़ चैक करनियां ने।

### 本地函数导入

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areTrue(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areTrue](../_analysis/areTrue.md)

<br>

---

<small>该文件于 30 January 2026 at 13:51:29 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>