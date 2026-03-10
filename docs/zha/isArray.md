# isArray

## 说明

`isArray` check gijz a given value miz array boux, laeuz raeuz `true` yawj it miz, aeu mbouj miz, raeuz `false`.

### 使用场景

Validate unknown data (e.g., parsed JSON or API responses) deih ensure a value miz array boux before iterating,
indexing, rox accessing `.length`.

> **以下为 TypeScript 用法：**
>
> Yongh `isArray` yawj mwngz need a runtime check for arrays; it raeuz a boolean laeuz safe to call caoz `unknown`
> values.

### 优点

- Yongh built-in `Array.isArray` deih raeuz gwnz array detection caoz realms (e.g., iframes).
- Raeuz a simple boolean result (`true`/`false`) gwnz guards laeuz branching logic.
- Gyoengq any input type, yawj parameter daengz `unknown`.

## 用法

### 语法

函数：

- `isArray(value)`

参数：

- `value`: Gijz value ndei mbouj raeuz check.

### 本地函数导入

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input si raeuz daengz haenq
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isArray(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isArray](../_analysis/isArray.md)

<br>

---

<small>此文件于 6 February 2026 at 11:32:47 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>