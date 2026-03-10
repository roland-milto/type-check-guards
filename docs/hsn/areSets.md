# areSets

## 说明

चेक करदा ऐ कि दित्ता गया गैर-खाली array सिरिफ़ `Set` instances रखदा ऐ कि नहीं; जे रखदा ऐ तां `true` वरना `false` लौटांदा
ऐ।

### 使用场景

किसे value (मिसाल वजों user input, JSON parsing, जां external APIs तोں) नूं process करन तोں पहिलां validate करो कि ओह
`Set` objects दी इक गैर-खाली array ऐ।

> **给 TypeScript 用户的提示：**
>
> `areSets` नूं unknown input नूं iterate करन तोں पहिलां validate करन लेई वर्तो अते हर element ते `Set` APIs (जिवें
`.size`, `.has`, `.add`) कॉल करो।

### 优势

- `true` सिरिफ़ ओह्दो वक़्त लौटांदा ऐ जदों इनपुट इक गैर-खाली array होवे अते हर element इक `Set` instance होवे।
- खाली arrays लेई गलत positive तोں बचांदा ऐ, क्यूँकि जदों array विच कोई element न होवे तां `false` लौटांदा ऐ।
- हर element ते `Set`-खास operations करन तोں पहिलां runtime guard वजों फायदेमंद ऐ।

## 用法

### 语法

函数：

- `areSets(array)`

参数：

- `array`: ओह array जिह्नूं `Set` instances लेई चेक कीता जाना ऐ।

### 本地函数导入

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a runtime mein Set instance ke array hai
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areSets(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areSets](../_analysis/areSets.md)

<br>

---

<small>该文件于 30 January 2026 at 23:13:47 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>