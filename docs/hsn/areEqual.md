# areEqual

## 说明

`areEqual` चैक करदा ऐ कि ऐरे दे सारे एलिमैंट इक दित्ती होई उम्मीद कीती क़ीमत दे बराबर ने कि नहीं, ते `true` सिरिफ ओह्नां
गैर-खाली ऐरेआं लई लौटांदा ऐ जिथे हर आइटम मैच करदा होवे।

### 使用场景

एह वैलिडेट करो कि लिस्ट विच सिरिफ इक ही मंज़ूरशुदा क़ीमत ऐ (मिसाल वजों, सारे status flags `true` ने, सारे roles
`"admin"` ने, या सारे numeric entries किसी लाज़मी constant दे बराबर ने) ते खाली इनपुट नूं गैर-मान्य (`false`) समझो।

> **给 TypeScript 用户的提示：**
>
> `areEqual` उस वक़्त इस्तेमाल करो जदों तुहानूं सख़्त all-items चैक चाहीदा होवे; एह खाली ऐरेआं लई ते किसी वी non-array
> या non-filled इनपुट लई `false` लौटांदा ऐ।

### 优势

- `true` सिरिफ ओह्दो वक़्त लौटांदा ऐ जदों हर इक एलिमैंट उम्मीद कीती क़ीमत नाल मैच करदा ऐ; नहीं तां `false` लौटांदा ऐ।
- फेल्स फास्ट: जिवें ही कोई गैर-मैचिंग एलिमैंट लभदा ऐ, चैक करना रोक दिंदा ऐ।
- गलत इनपुट तोں बचाव करदा ऐ, क्यूंकि जदों इनपुट भरी होई ऐरे न होवे तां `false` लौटांदा ऐ।

## 用法

### 语法

函数：

- `areEqual(value, expected)`

参数：

- `value`: ओह ऐरे जिसनूं चैक करना ऐ।
- `expected`: ओह एलिमैंट जिसदे नाल हर ऐरे आइटम दी तुलना करनी ऐ।

### 本地函数导入

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areEqual(value, expected)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areEqual](../_analysis/areEqual.md)

<br>

---

<small>该文件于 31 January 2026 at 23:50:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>