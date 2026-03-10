# isWeakSet

## 说明

देल गइल `value` के तय करेला कि ऊ ऑब्जेक्टन के `WeakSet` बा कि ना।

### 使用场景

जब रउआ बिना टाइप वाला इनपुट (जइसे बाहरी API, डायनामिक कॉन्फिगरेशन, भा `unknown` मान) स्वीकार करत होखीं आ इस्तेमाल से
पहिले ई पक्का करे के जरूरत होखे कि ऊ `WeakSet` बा, तब `WeakSet`-विशेष ऑपरेशन इस्तेमाल करे से पहिले `isWeakSet` के
इस्तेमाल करीं।

> **给 TypeScript 用户的提示：**
>
> रनटाइम पर `unknown` मान के `WeakSet<object>` में संकुचित (narrow) करे खातिर `isWeakSet` के इस्तेमाल करीं; ध्यान रहे कि
`WeakSet` में खाली ऑब्जेक्ट रेफरेंस ही रखल जा सकेला।

### 优势

- एह जांचे खातिर एगो सरल रनटाइम जांच देला कि कवनो मान `WeakSet` बा कि ना।
- `WeakSet` के उदाहरणन के ही ओइसने मान के टाइप गलती से बचावे में मदद करेला।
- कवनो `unknown` इनपुट पर काम करेला आ साफ बूलियन नतीजा (`true`/`false`) लौटावेला।

## 用法

### 语法

函数：

- `isWeakSet(value)`

参数：

- `value`: जांचल जाए वाला मान।

### 本地函数导入

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a runtime me WeakSet hai
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isWeakSet(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>该文件于 30 January 2026 at 14:15:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>