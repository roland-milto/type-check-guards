# areIntegers

## 说明

`areIntegers` एह तय करदा ऐ कि दित्ते गए array दे सारे तत्व पूर्णांक ने कि न्हीं; जे ने तां `true` लौटांदा ऐ, न्हीं तां
`false`।

### 使用场景

`areIntegers` नूं user-provided या बाहरी डेटा (जियां कि query parameters, JSON payloads, CSV rows) दी तस्दीक लेई
इस्तेमाल करो, जदूं तुहाडी logic नूं पूर्णांक values दी filled सूची चाहीदी होवे—जियां कि IDs, counters, pagination
offsets, या array indices।

> **给 TypeScript 用户的提示：**
>
> `areIntegers` नूं `unknown[]` इनपुटां लेई runtime guard वजों इस्तेमाल करो, उस तो पह्लां कि तुसां उनां नूं `number[]`
> समझो जिस विच सिरिफ पूर्णांक होण। जे एह `false` लौटावे, तां इनपुट या तां filled array न्हीं ऐ, या उस विच घट्टो-घट्ट इक
> गैर-पूर्णांक value मौजूद ऐ।

### 优势

- `true` सिरिफ ओह्दो वक़्त लौटांदा ऐ जदूं हर इक तत्व पूर्णांक होवे; न्हीं तां `false` लौटांदा ऐ।
- सिरिफ-पूर्णांक ऑपरेशन (जियां कि indexing, counts, IDs) करन तो पह्लां अनजाण इनपुट दी जाँच/तस्दीक करन च मदद करदा ऐ।
- झट फेल: जिवें ही कोई गैर-पूर्णांक तत्व लभे, चेक करना रोक दिंदा ऐ।

## 用法

### 语法

函数：

- `areIntegers(array)`

参数：

- `array`: ओ array जिसदी जाँच करनी ऐ कि ओह्दे विच पूर्णांक तत्व ने।

### 本地函数导入

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // साँचो
console.log(areIntegers(b)); // साँचो
console.log(areIntegers(c)); // झूठो

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areIntegers(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>该文件于 31 January 2026 at 00:58:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>