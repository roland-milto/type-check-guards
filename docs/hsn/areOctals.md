# areOctals

## 说明

`areOctals` तय करै छै जे देल गेल मान एकटा खाली नहि होयवला array छै कि नहि, जे valid octal strings सँ बनल हो।

### 使用场景

`areOctals` के उपयोग करु user input, configuration values, वा API payloads validate करय मे जेकरा मे octal literals (जइसे
file permission modes `0o755`) होनाइ जरूरी हो, आ अहाँ खाली arrays वा कोनो invalid entry केँ `false` लौटाकऽ reject करय
चाहैत छी।

> **给 TypeScript 用户的提示：**
>
> `areOctals` के उपयोग करु जे अहाँक पास एकटा खाली नहि होयवला `unknown[]` होय आ हर entry एकटा valid octal string हो,
> convert करय सँ पहिने (जइसे `Number(...)` वा custom parsing द्वारा)।

### 优势

- यो जाँच करै छै जे कोनो मान एकटा खाली नहि होयवला array छै जकर हर element एकटा octal string छै, आ `true` तखनहि लौटाबै छै
  जखन सभ item पास करै।
- जल्दी fail करै छै: जइने कोनो non-octal element भेटै, तइने `false` लौटाबै छै।
- Parsing करय वा octal string केँ convert करय सँ पहिने guard रूपेँ उपयोगी, जे runtime error आ input handling मे असंगति
  सँ बचाबै।

## 用法

### 语法

函数：

- `areOctals(array)`

参数：

- `array`: जाँचल जाए वाला मान।

### 本地函数导入

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value octal string ke non-empty array hai
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areOctals(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areOctals](../_analysis/areOctals.md)

<br>

---

<small>该文件于 30 January 2026 at 14:55:28 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>