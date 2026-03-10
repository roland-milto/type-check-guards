# areBinaries

## 说明

जाँच करै छै जे देल गेल मान वैध binary strings केर एकटा गैर-खाली array छै कि नहि, आ `true` तखने लौटबैत छै जखन सभ items
validation पास करै।

### 使用场景

जखन अहाँ कोनो unknown list (जइसे JSON, forms, वा APIs सँ) प्राप्त करैत छी आ parsing वा processing सँ पहिने ई सुनिश्चित
करबाक जरूरत हो जे ई binary strings केर एकटा गैर-खाली array छै, तखन `areBinaries` के उपयोग करू।

> **给 TypeScript 用户的提示：**
>
> Unknown input केँ numbers/BigInts मे binary strings convert करबाक पहिने validate करबाक लेल `areBinaries` के उपयोग करू;
> ई सुनिश्चित करै छै जे array गैर-खाली हो आ हर element एकटा वैध binary string हो।

### 优势

- एह जाँच करै छै जे कोनो मान एकटा गैर-खाली array छै जाहिमे हर element एकटा वैध binary string छै।
- एकटा सरल boolean परिणाम (`true`/`false`) लौटबैत छै जे guards, early returns, आ input validation लेल उपयुक्त छै।
- जे array मे कोनो non-binary entry रहै, तकरा अस्वीकार क’ downstream parsing errors सँ बचबैत छै।

## 用法

### 语法

函数：

- `areBinaries(array)`

参数：

- `array`: जकरा जाँचल जाए वाला मान।

### 本地函数导入

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // सही
console.log(areBinaries(b)); // गलत
console.log(areBinaries([])); // गलत
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBinaries(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>该文件于 31 January 2026 at 23:14:46 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>