# isNullOrUndefined

## 说明

Caeuq raemxnaemh gyoengqz daengzlaengz `null` rox `undefined`.

### 使用场景

Yongh `isNullOrUndefined` haenq raemxnaemh `null` daengz `undefined` daengzlaengz “mbouj miz gyoengqz”, roengz haenq
validating optional inputs, normalizing API payloads, rox guarding code paths before dereferencing a potentially missing
value.

> **以下为 TypeScript 用法：**
>
> Yongh `isNullOrUndefined` laengz gyaeuj raemxnaemh mbouj miz gyoengqz gyoengqz, daengzlaengz baeuj raemxnaemh gyaeuj
> ndei rox calling methods; it returns `true` only for `null` and `undefined`.

### 优点

- Daeuj cungj, daengzlaengz raeuzsaeuj gyaeuj raemxnaemh `null` daengz `undefined` daengzlaengz mbouj ndei rox.
- Doiq raeuzsaeuj boux booleen (`true`/`false`) ndei, daengzlaengz aeu roengz haenq raeuzsaeuj gyaeuj laengz conditions
  daengz validations.
- Baej raemxnaemh raeuzsaeuj gyaeuj mbouj miz gyoengqz, daengzlaengz baeuj raemxnaemh runtime errors by checking for
  missing values before accessing properties or calling methods.

## 用法

### 语法

函数：

- `isNullOrUndefined(value)`

参数：

- `value`: Gyoengqz daengzlaengz baeuj raemxnaemh raemxnaemh `null` rox `undefined`.

### 本地函数导入

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // 处理缺失值
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isNullOrUndefined(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>此文件于 31 January 2026 at 00:35:57 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>