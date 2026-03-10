# isInteger

## 说明

निर्धारित करै छै जे देल गेल `value` एकटा सुरक्षित पूर्णांक नंबर छै कि नहि।

### 使用场景

अविश्वसनीय इनपुट (जइसे query params, JSON payloads, environment variables) के validate करू, ताकि एकरा array indices,
pagination, counters, वा database IDs लेल पूर्णांक रूपेँ उपयोग कएल जा सकै।

> **给 TypeScript 用户的提示：**
>
> अज्ञात इनपुट के संख्यात्मक पूर्णांक मानि क' उपयोग करबा सँ पहिने `isInteger` सँ validate करू; ई `true` तखने लौटाबै छै
> जखन `typeof value === "number"` आ `Number.isSafeInteger(value)` होइ छै।

### 优势

- टाइप आं संख्यात्मक सुरक्षा दुनू के जांच करै छै: `true` तखने लौटाबै छै जखन इनपुट एकटा नंबर आ सुरक्षित पूर्णांक होइ छै।
- संख्यात्मक coercion के आम गलती सँ बचाबै छै: "5" जइसन स्ट्रिंग सही रूप सँ `false` लौटाबै छै।
- गैर-पूर्णांक आ असुरक्षित पूर्णांक के अस्वीकार करै छै, जेकरा सँ ई IDs, counters, आ array indexing लेल उपयुक्त होइ छै।

## 用法

### 语法

函数：

- `isInteger(value)`

参数：

- `value`: पूर्णांक स्थिति लेल जांच करबाक मान।

### 本地函数导入

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // true
const b = isInteger(-100);   // true
const c = isInteger("5");    // false
const d = isInteger(5.5);    // false
const e = isInteger(null);   // false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isInteger(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isInteger](../_analysis/isInteger.md)

<br>

---

<small>该文件于 31 January 2026 at 00:50:09 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>