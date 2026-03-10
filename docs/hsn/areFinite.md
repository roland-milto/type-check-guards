# areFinite

## 说明

`areFinite` जाँचै छै जे कोनो value एकटा खाली नहि होइ वाला array छै कि नहि, आ ओकर element सभ finite number छै कि नहि; एहन
होइ पर `true` आ नहि तऽ `false` लौटाबै छै।

### 使用场景

Calculation करबाक पहिने numeric input array (जइसे chart series, coordinate list, measurement sample) केँ validate करू,
ताकि result `true` तखने होइ जखन सभ value finite number होइ।

> **给 TypeScript 用户的提示：**
>
> जखन अहाँक जरूरत होइ जे array खाली नहि होइ आ ओहिमे खाली finite number होइ, तखन `areFinite` उपयोग करू; ई empty array लेल
> आ `NaN` वा infinity सभ समेटने array लेल `false` लौटाबै छै।

### 优势

- `true` तभैं लौटाबै छै जखन इनपुट एकटा खाली नहि होइ वाला array होइ आ हर element एकटा finite number होइ।
- हर element लेल `isFinite` check पर भरोसा कए कऽ `Infinity`, `-Infinity`, आ `NaN` केँ reject करै छै।
- Guard आ validation flow लेल उपयुक्त एकटा सरल boolean result (`true`/`false`) दै छै।

## 用法

### 语法

函数：

- `areFinite(array)`

参数：

- `array`: Array जेकरा जाँचल जाएत जे ओकर सभ element finite छै कि नहि।

### 本地函数导入

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // true
console.log(areFinite(b)); // false
console.log(areFinite(c)); // false

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFinite(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFinite](../_analysis/areFinite.md)

<br>

---

<small>该文件于 30 January 2026 at 16:35:09 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>