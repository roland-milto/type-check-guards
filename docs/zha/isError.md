# isError

## 说明

Check aenq `value` daengz haenq miz gwnz laux baeuj aenq `Error` instance.

### 使用场景

Yongh `isError` daengz haenq youq ndei daengz haenq raemx aenq `unknown` value (daengz haenq from `catch` block,
callback, rox external library) laux, youq ndei aenq youq safe laux gyaeuj haenq miz gwnz laux baeuj aenq `Error` mbouj,
daengz haenq ndaej raemx `message`, `name`, rox `stack`.

> **以下为 TypeScript 用法：**
>
> Yongh `isError` laux guard `unknown` value (daengz haenq from `catch`) youq ndei, daengz haenq aenq `Error` laux
> doengh.

### 优点

- Tig cungj aenq raeuj laux daengz haenq miz gwnz laux baeuj aenq `Error` instance.
- Bouxcoz youq ndei gyaeuj mbouj rox de input, daengz haenq ndaej raemx `Error` de property daengz `message` rox
  `stack`.
- Gyaeuj haenq gyaeuj haenq laux risk de runtime exception, daengz haenq youq `catch`, external API, rox mbouj miz type
  de source de value.

## 用法

### 语法

函数：

- `isError(value)`

参数：

- `value`: Aenq value daengz haenq check, doengh `Error` type.

### 本地函数导入

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isError(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isError](../_analysis/isError.md)

<br>

---

<small>此文件于 6 February 2026 at 12:47:50 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>