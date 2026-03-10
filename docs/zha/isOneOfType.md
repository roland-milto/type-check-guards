# isOneOfType

## 说明

`isOneOfType` rox ndaej gwnz `value` miz mbouj gyaeuj rox daengz gwnz type strings cungj cungj; youq haenx miz gwnz rox
daengz gwnz, de mbouj gyaeuj `true`, mbouj miz de `false`.

### 使用场景

Rox ndaej validate data mbouj gyaeuj type gwnz (e.g., parsed JSON, query parameters) by allowing multiple acceptable
runtime types (such as `number` or `string`) before proceeding with further logic.

> **以下为 TypeScript 用法：**
>
> Yongh `isOneOfType` youq haenx mwngz yiu runtime check rox ndaej gwnz value miz mbouj gyaeuj rox daengz gwnz allowed
> types; miz gwnz rox daengz gwnz, de `true`, mbouj miz de `false`.

### 优点

- Mboq rox ndaej mbouj gwnz laux gyaeuj leiz, youq haenx mbouj gyaeuj ndei rox daengz gwnz bae; gyaeuj rox daengz gwnz
  laux, daengz gwnz gyaeuj miz, de mbouj gyaeuj `true`.
- Gij cungj cungj boux booleansaw, gyaeuj daengz gwnz gyaeuj ndei gwnz conditional logic raeuz early returns.
- Gij rox gwnz `unknown` inputs, youq haenx gij ndei yongh haenx runtime boundaries (e.g., external data, user input).

## 用法

### 语法

函数：

- `isOneOfType(value, types)`

参数：

- `value`: Gwnz ndaej rox, rox daengz gwnz leiz youq haenx mbouj gyaeuj.
- `types`: Miz mbouj gyaeuj array rox type strings, youq haenx gwnz leiz rox daengz gwnz value.

### 本地函数导入

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input laeuj mbouj gwnz daengz
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isOneOfType(value, types)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>此文件于 6 February 2026 at 13:59:34 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>