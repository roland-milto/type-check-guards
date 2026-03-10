# areIndexesFound

## 说明

`areIndexesFound` चेक करदा ऐ कि कोई value इक गैर-खाली array ऐ जिदे सारे elements वैध indexes नें, वैध होण ते `true` ते
वरना `false` लौटांदा ऐ।

### 使用场景

User-provided या बाहरी data (जिवें parsed JSON) नूं validate करो, जेहड़ा indexes दी list होण दी उम्मीद होवे, इस तोں
पहिलां कि ओह्नूं arrays access करन या slice करन लई इस्तेमाल कीता जावे।

> **给 TypeScript 用户的提示：**
>
> `areIndexesFound` नूं unknown input validate करन लई इस्तेमाल करो, इस तोں पहिलां कि ओह्दे elements नूं array indexes
> वजों treat कीता जावे; एह खाली arrays ते non-index values वाले arrays लई `false` लौटांदा ऐ।

### 优势

- `true` सिरिफ ओह्दो वक़्त लौटांदा ऐ जदों इनपुट इक भरी होई array होवे ते हर element इक वैध index होवे।
- जल्दी फेल होंदा ऐ: ज्यों ही कोई non-index element मिलदा ऐ, `false` लौटांदा ऐ।
- Array positions या offsets वजों values इस्तेमाल करन तोں पहिलां guard वजों फायदेमंद ऐ।

## 用法

### 语法

函数：

- `areIndexesFound(array)`

参数：

- `array`: Index compliance लई चेक करन आस्तै array।

### 本地函数导入

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // इहाँ, `a` के पक्का कइल गइल बा कि ई इंडेक्सन के भरल एरे बा।
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areIndexesFound(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>该文件于 31 January 2026 at 00:42:07 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>