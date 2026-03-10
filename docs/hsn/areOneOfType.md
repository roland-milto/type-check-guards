# areOneOfType

## 说明

`areOneOfType` जाँच करै छै जे non-empty array केर सभ element निर्दिष्ट runtime types मे सँ कोनो एक type केर होइ कि नहि।

### 使用场景

आबय वाला data (जइसे parsed JSON) केँ validate करू जतय कोनो field non-empty array होय आ ओकर items ज्ञात primitive types
केर set तक सीमित होय; जखन array खाली होय या कोनो disallowed type होय तखन `false` return करू।

> **给 TypeScript 用户的提示：**
>
> ई function boolean return करै छै आ compile time पर array element types केँ narrow नहि करै छै; आगे processing सँ पहिने
> runtime validation step रूपेँ एकरा उपयोग करू।

### 优势

- ई सुनिश्चित करै छै जे array मे हर element कम सँ कम एक allowed runtime type सँ match करै, आ `true` तखनहि return करै जखन
  पूरा array pass करै।
- गलत input केँ जल्दी reject करै छै: `false` return करै छै जखन `array` या `types` खाली होइ या filled array नहि होइ।
- Mixed-type collection (जइसे numbers आ strings) केँ validate करबाक लेल एके call मे `areOneOfType` उपयोगी छै।

## 用法

### 语法

函数：

- `areOneOfType(array, types)`

参数：

- `array`: देल गेल types के विरुद्ध verify करबाक लेल elements केर एक array।
- `types`: जाँच करबाक लेल data types केँ represent करै वाला strings केर एक array।

### 本地函数导入

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areOneOfType(array, types)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>该文件于 31 January 2026 at 23:37:11 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>