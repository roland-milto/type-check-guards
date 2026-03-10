# areRegExes

## 说明

`areRegExes` जाँचै छै जे कोनो मान एकटा भरल array छै आओर ओहि मे खाली `RegExp` objects अछि।

### 使用场景

कोनो configuration option (जइसे allow/deny patterns केर सूची) के validate करू जे ओ एकटा गैर-खाली regular expressions केर
array छै, ओकरा matching लेल उपयोग करबा सँ पहिने।

> **给 TypeScript 用户的提示：**
>
> `areRegExes` के उपयोग करू ताकि iterate करबा या patterns compose करबा सँ पहिने `unknown` के `RegExp[]` मे narrow कएल जा
> सकै।

### 优势

- यकीनी बनावै छै जे मान एकटा गैर-खाली array छै जतय हर element एकटा `RegExp` instance छै।
- User input या configuration के validate करबाक लेल एकटा सरल boolean guard (`true`/`false`) दै छै।
- बाद के code जखन मानि लै छै जे सभ item regular-expression operations support करै छै, तखन runtime error सँ बचाबै मे मदद
  करै छै।

## 用法

### 语法

函数：

- `areRegExes(array)`

参数：

- `array`: जाँचल जाए वाला मान।

### 本地函数导入

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  //‎ ihaan patterns RegExp ke array baa
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areRegExes(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>该文件于 30 January 2026 at 23:18:50 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>