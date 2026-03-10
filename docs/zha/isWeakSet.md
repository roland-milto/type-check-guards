# isWeakSet

## 说明

Gijyunh haenh raeuz gwnz daengz aen `value` aeuq miz aen `WeakSet` (miz aen doengh) bae.

### 使用场景

Yongh `isWeakSet` de youq raeuz gwnz daengz aen input aeuq boux miz type (daengz aen from external APIs, dynamic
configuration, rox `unknown` values) laengz, raeuz gwnz daengz aen youq gijyunh haenh raeuz gwnz daengz aen `WeakSet`
cingq, cingq ndaej yongh `WeakSet`-specific operations.

> **以下为 TypeScript 用法：**
>
> Yongh `isWeakSet` youq ndaej haenh raeuz gwnz daengz aen `unknown` value aeuq miz aen `WeakSet<object>` youq runtime;
> raeuz gwnz daengz aen `WeakSet` aeuq ndaej miz aen doengh (object references) cingq.

### 优点

- Daeuj cungj youq gijyunh haenh raeuz gwnz daengz aen aeuq miz aen `WeakSet` bae.
- Bouxcoz youq `WeakSet` raeuz gwnz daengz aen `WeakSet` bae, haenh raeuz gwnz daengz aen doengh aeuq bouxgoj leihcuj,
  youq ndaej fangkaiq loengz leihcuj.
- Daeuj cungj youq gijyunh haenh raeuz gwnz daengz aen `unknown` input, raeuz gwnz daengz aen bouxgoj gijyunh aeuq miz
  aen boolean (`true`/`false`).

## 用法

### 语法

函数：

- `isWeakSet(value)`

参数：

- `value`: Aen aeuq miz aen youq gijyunh.

### 本地函数导入

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a runtime la WeakSet a si
}
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isWeakSet(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>此文件于 30 January 2026 at 14:20:02 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>