# areSymbols

## 说明

चैक करदा ऐ कि इनपुट इक भरी होई ऐरे ऐ जिसदे सारे एलिमैंट सिम्बल ने, ते `true` जां `false` वापस करदा ऐ।

### 使用场景

एह तस्दीक करो कि configuration फील्ड (मसलन, सिम्बलां दे रूप विच यूनिक कीज़ दी लिस्ट) इक गैर-खाली ऐरे ऐ जिस विच सिरिफ
सिम्बल ने, इसनूं ओह्नां APIs विच इस्तेमाल करन तोں पहिलां जिह्नां नूं `symbol[]` चाहीदा ऐ।

> **给 TypeScript 用户的提示：**
>
> `areSymbols` नूं अनजाण इनपुट दी तस्दीक लेई वर्तो, इसनूं `symbol[]` समझ के इस्तेमाल करन तोں पहिलां; एह गैर-ऐरे ते खाली
> ऐरे लेई `false` वापस करदा ऐ।

### 优势

- `true` सिरिफ ओह्दो वक़्त वापस करदा ऐ जदों इनपुट इक गैर-खाली ऐरे होवे ते हर एलिमैंट इक सिम्बल होवे।
- अंदरूनी filled-array चैक दे ज़रिए गैर-ऐरे ते खाली ऐरे नूं रद्द करके झूठे पॉज़िटिव्स तोں बचांदा ऐ।
- अग्गे प्रोसेसिंग तोں पहिलां सिरिफ-सिम्बल लिस्टां दी तस्दीक लेई runtime टाइप गार्ड वजों फायदेमंद ऐ।

## 用法

### 语法

函数：

- `areSymbols(array)`

参数：

- `array`: ओह ऐरे जिसनूं सिम्बल एलिमैंटां लेई चैक कीता जावैगा।

### 本地函数导入

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a रनटाइम पर सिरिफ़ सिम्बल-आरे है
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areSymbols(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>该文件于 30 January 2026 at 14:22:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>