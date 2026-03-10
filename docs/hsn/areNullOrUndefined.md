# areNullOrUndefined

## 说明

जाँच करै छै जे देल गेल array मे सभटा तत्व `null` या `undefined` अछि कि नहि।

### 使用场景

प्रोसेसिंग छोड़बाक वा “कोनो मान नहि देल गेल” स्थिति देखाबै सँ पहिने, वैकल्पिक field सभक सूची मे कोनो वास्तविक मान नहि (
खाली `null`/`undefined`) अछि कि नहि, से validate करू।

> **给 TypeScript 用户的提示：**
>
> `areNullOrUndefined` तखन उपयोग करू जखन अहाँकेँ जाँच करबाक जरूरत हो जे array मे खाली गायब मान (`null`/`undefined`) अछि।
> ध्यान राखू जे ई खाली array लेल `false` लौटावै छै।

### 优势

- `true` तभैं लौटावै छै जखन हर तत्व `null` या `undefined` होइ।
- खाली array लेल `false` लौटावै छै, जइसँ “कोनो डेटा नहि” आ “सभटा मान गायब” केर बीच फरक बुझाइत अछि।
- `unknown[]` संग काज करै छै, जइसँ type narrow करबाक पहिने उपयोग करब सुरक्षित अछि।

## 用法

### 语法

函数：

- `areNullOrUndefined(array)`

参数：

- `array`: जाँच करबाक लेल array।

### 本地函数导入

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNullOrUndefined(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>该文件于 31 January 2026 at 00:29:58 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>