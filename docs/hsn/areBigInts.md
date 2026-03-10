# areBigInts

## 说明

`areBigInts` निर्धारित करै छै जे कोनो मान non-empty array छै कि नहि, आ ओहि मे केवल `bigint` मान सभे छै कि नहि।

### 使用场景

अनजान input (जइसे, parsed JSON-like data, API payloads, वा `unknown` टाइप कएल function parameters) के validate करू ताकि
processing सँ पहिने ई सुनिश्चित भ' सकै जे ई `bigint` मान सभक non-empty array छै; `true` तखने लौटाबै छै जखन सभ तत्त्व
`bigint` होइ, नहि तँ `false`।

> **给 TypeScript 用户的提示：**
>
> अनजान input पर `bigint`-मात्र ऑपरेशन (जइसे, arithmetic, comparisons) करबा सँ पहिने runtime guard के रूप मे
`areBigInts` के उपयोग करू।

### 优势

- हर तत्त्व `bigint` होइ के सुनिश्चित करै छै, आ `true` तखने लौटाबै छै जखन पूरा array मेल खाइत छै।
- डिजाइन अनुसार non-array आ खाली array के अस्वीकार करै छै (`isFilledArray` के माध्यम सँ), जे गलत input के अनजाने स्वीकार
  होय सँ बचाबै छै।
- फास्ट फेल: जइसे ही कोनो non-`bigint` तत्त्व भेटैत छै, `false` लौटाबै छै।

## 用法

### 语法

函数：

- `areBigInts(array)`

参数：

- `array`: जाँच करबाक मान।

### 本地函数导入

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // सही
console.log(areBigInts(b)); // गलत
console.log(areBigInts(c)); // गलत
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBigInts(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>该文件于 31 January 2026 at 23:26:08 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>