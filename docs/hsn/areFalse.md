# areFalse

## 说明

`areFalse` जाँचै छै कि देल गेल array मे सभ तत्व सख्ती सँ boolean `false` छै कि नहि।

### 使用场景

आगे बढ़बासँ पहिने feature flags, checks, या guard results केर सूची सभ `false` छै कि नहि, ई validate करू (जइसे, पक्का करब
कि कोनो blocking condition मौजूद नहि छै)।

> **给 TypeScript 用户的提示：**
>
> जखन अहाँक जरूरत हो कि array non-empty हो आओर ओहिमे खाली boolean मान `false` मात्र हो, तखन सख्त validation लेल
`areFalse` उपयोग करू।

### 优势

- यकीनी बनावै छै कि हर तत्व सख्ती सँ `false` छै (कोनो truthy/falsey coercion नहि)।
- `isFilledArray` द्वारा भरल array के जरूरत रखि कऽ non-array या खाली array लेल `false` लौटावै छै।
- दक्षता लेल पहिल गैर-`false` तत्व पर जल्दी रुकि जाइ छै।

## 用法

### 语法

函数：

- `areFalse(array)`

参数：

- `array`: जाँच करबाक लेल array, जाहिमे कोनो प्रकारक तत्व हो सकै छै।

### 本地函数导入

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // साँचो
const b = areFalse([false, true, false]);  // झूठो
const c = areFalse([false, "false", false]); // झूठो
const d = areFalse([]); // झूठो
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFalse(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFalse](../_analysis/areFalse.md)

<br>

---

<small>该文件于 31 January 2026 at 16:17:18 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>