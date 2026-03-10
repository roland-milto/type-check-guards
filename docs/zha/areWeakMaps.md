# areWeakMaps

## 说明

`areWeakMaps` cek mbouj cek: value miz mbouj miz non-empty array, laengz roxneix element doengh miz `WeakMap`; gyaeuj
miz deih raeuz daengz raeuz `true`, mbouj gyaeuj miz deih raeuz `false`.

### 使用场景

Validate runtime data (biemq: parsed JSON, plugin inputs, hozloengh typed configuration), caeuq haenq raeuz gwnz haenq
non-empty array miz `WeakMap` instances, caeuq haenq raeuz iterating laengz call `WeakMap` methods; yienghhwnj miz
element mbouj hai `WeakMap` hozloengh array mbouj miz (empty) deih, raeuz daengz raeuz `false`.

> **以下为 TypeScript 用法：**
>
> Yongh `areWeakMaps` laeuz validate unknown input, caeuq haenq raeuz gwnz haenq non-empty `WeakMap[]`; cungj array
> mbouj miz (empty) deih, raeuz daengz raeuz `false`.

### 优点

- Baeq roxneix cungj array deih ma daengz doengh miz `WeakMap` instance.
- Cungj array mbouj miz (empty) deih, daengz raeuz `false`, gaenjz raeuz mbouj gwnz “mbouj miz data” laengz gwnz input
  youqyoengh.
- Yienghhwnj gwnz guard, caeuq haenq raeuz doengh gwnz doengh miz `WeakMap`-specific operations bae roxneix item.

## 用法

### 语法

函数：

- `areWeakMaps(array)`

参数：

- `array`: Cungj array deih, yongh laeuz cek `WeakMap` instances.

### 本地函数导入

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list sih a non-empty array of WeakMap instances
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // mbouj a non-empty WeakMap[]
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areWeakMaps(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>此文件于 30 January 2026 at 13:40:34 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>