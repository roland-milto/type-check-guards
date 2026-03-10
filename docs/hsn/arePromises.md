# arePromises

## 说明

`arePromises` tai kare hai ke array me sab element `Promise` instances hai yā nahī.

### 使用场景

Yaqīn kar ke dynamically banāyā gail yā bāhar se diyā gail list me sirf promises hai, unke jor ke (jaise `Promise.all`
se) pahle.

> **给 TypeScript 用户的提示：**
>
> `arePromises` ke istemāl se `unknown[]` ke validate kar, `Promise.all` yā dūsrā promise-only operations bulāwe se
> pahle; yo khālī arrays lāe `false` wapas kare hai.

### 优势

- Yaqiin banāwe hai ke har element `Promise` hai, is se pahle ke tū promise-khās logic lāgū kare.
- Khālī array lāe `false` wapas kare hai, is se khālī input lāe mubham natīje ruk jāwe hai.
- Bāharī srot se āwe `unknown[]` ke sāth kām karte waqt runtime guard ke taur par faidemand hai.

## 用法

### 语法

函数：

- `arePromises(array)`

参数：

- `array`: `Promise` instances lāe check kare khātir array.

### 本地函数导入

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values runtime me Promise instance ke array hai
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.arePromises(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [arePromises](../_analysis/arePromises.md)

<br>

---

<small>该文件于 30 January 2026 at 23:48:35 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>