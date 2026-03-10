# isBoolean

## 说明

Cingjdingh gwnz ndaej, caeuq ndaej raemx gwnz laengh `boolean` mbouj.

### 使用场景

Raemx gwnz daengz daih raemx mbouj rox raemx (daengz: environment variables, JSON payloads, query parameters) caeuq
ndaej cingjdingh caeuq ndaej laengh `boolean` mbouj, caeuq ndaej yungz youq conditional logic.

> **以下为 TypeScript 用法：**
>
> Yungz `isBoolean` raemx gwnz, daengz `unknown` ndaej gyaeuj `boolean` caeuq ndaej yungz booleansawj.

### 优点

- Yungz `typeof` raemx gwnz gyoengq daeuj haenx daengz.
- Bouxcoz youq gwnz ndaej mbouj rox raemx gwnz, caeuq ndaej raemx gwnz bouxcoz youq loih booleansawj.
- Daeuj raemx gwnz `boolean` youz gyaeuj ( `true`/`false` ).

## 用法

### 语法

函数：

- `isBoolean(value)`

参数：

- `value`: Caeuq ndaej raemx gwnz.

### 本地函数导入

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input de mbouj booleen deih
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isBoolean(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>此文件于 30 January 2026 at 14:38:34 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>