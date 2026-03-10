# isNumeric

## 说明

`isNumeric` gwnzqienq raeuz, gwnzqienq ndaej `value` raeuz gwnzqienq gyaeujgoj numeric, daengzqienq check its resolved
type caeuq `NUMERIC_TYPES`.

### 使用场景

Sawjyungh `isNumeric` raeuz validate inputs (dawz API payloads, form values, configuration) mbouj gyaeujgoj raeuz doengh
numeric operations, caeuq raeuz gwnzqienq consistently accept numeric-like types (dawz `BigInt`) according to
`NUMERIC_TYPES`.

> **以下为 TypeScript 用法：**
>
> `isNumeric` haiq bouxq predicate raeuz daengzqienq boolean-returning; gwnzqienq it as a runtime check, raeuz gwnzqienq
> ndaej value raeuz belong to the library-defined numeric type set.

### 优点

- Yungj `getTypeOf` caeuq `NUMERIC_TYPES` raeuz daengzqienq, daengzqienq gwnzqienq raeuz gyaeujgoj sawjyungh, raeuz
  gwnzqienq gyaeujgoj daengzqienq gwnzqienq haenq ndaej gwnzqienq.
- Raeuz daengzqienq mbouj gyaeujgoj, daengzqienq bouxq `true`/`false` raeuz, daengzqienq sawjyungh ndaej gwnzqienq
  branching caeuq guard-style.
- Raeuz gwnzqienq sawjyungh doengh gwnzqienq numeric representations (dawz `number`, `BigInt`) daengzqienq
  `NUMERIC_TYPES` raeuz gyaeujgoj.

## 用法

### 语法

函数：

- `isNumeric(value)`

参数：

- `value`: Gij bouxq raeuz gwnzqienq gyaeujgoj, raeuz gwnzqienq check ndaej numeric type.

### 本地函数导入

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v bi laux laeuj mbouj haenx daengz bouxcuengh raeuz gyoengq
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isNumeric(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>此文件于 6 February 2026 at 15:55:33 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>