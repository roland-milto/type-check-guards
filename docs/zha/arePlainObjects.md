# arePlainObjects

## 说明

ꯑꯦꯔꯦꯏꯗꯥ ꯂꯩꯕ ꯑꯦꯂꯦꯃꯦꯟꯠ ꯄꯨꯝꯅꯃꯛ ꯄ꯭ꯂꯦꯟ ꯑꯣꯕꯖꯦꯛꯠ ꯑꯣꯏꯕꯥ ꯍꯥꯏꯕꯥ ꯆꯦꯛ ꯇꯧꯏ, ꯑꯦꯂꯦꯃꯦꯟꯠ ꯈꯨꯗꯤꯡꯃꯛ ꯌꯥꯎꯔꯕꯥ ꯃꯇꯨꯡꯗꯥꯛ ꯈꯛꯇꯃꯛ `true` ꯍꯟꯗꯣꯛꯏ।

### 使用场景

ꯄꯥꯟꯗꯝ ꯑꯣꯏꯕꯥ ꯅꯠꯇ꯭ꯔꯒꯥ ꯇꯥꯏꯞ ꯂꯩꯇꯕꯥ ꯗꯦꯇꯥ (ꯈꯨꯗꯤꯡꯃꯛ: parsed JSON, API payloads, form submissions) ꯚꯦꯂꯤꯗꯦꯠ ꯇꯧꯅꯕꯥ, ꯅꯍꯥꯛꯅꯥ
ꯍꯥꯡꯗꯣꯛꯄꯥ ꯑꯦꯔꯦꯏ ꯑꯃꯥ ꯐꯪꯂꯦ ꯍꯥꯏꯕꯥ ꯑꯃꯁꯨꯡ ꯑꯦꯟꯇ꯭ꯔꯤ ꯈꯨꯗꯤꯡꯃꯛ ꯄ꯭ꯂꯦꯟ ꯑꯣꯕꯖꯦꯛꯠ ꯑꯣꯏꯕꯥ ꯍꯥꯏꯕꯥ ꯁꯤꯖꯤꯟꯅꯔꯤ, ꯏꯇꯔꯦꯠ ꯇꯧꯕꯥ ꯃꯃꯥꯡꯗꯥ ꯑꯃꯁꯨꯡ
ꯄ꯭ꯔꯣꯄꯔꯇꯤꯁꯤꯡ ꯄꯥꯔꯤꯕꯥ ꯃꯃꯥꯡꯗꯥ।

> **以下为 TypeScript 用法：**
>
> TypeScriptꯗꯥ `Record<string, unknown>[]` (ꯅꯠꯇ꯭ꯔꯒꯥ ꯍꯦꯟꯅꯥ ꯁ꯭ꯇ꯭ꯔꯤꯛꯇ ꯑꯣꯕꯖꯦꯛꯠ ꯁꯦꯄ) ꯑꯣꯏꯅꯥ ꯂꯧꯅꯕꯥ ꯃꯃꯥꯡꯗꯥ ꯑꯁꯦꯡꯕꯥ ꯏꯟꯄꯨꯠ ꯚꯦꯂꯤꯗꯦꯠ
> ꯇꯧꯅꯕꯥ `arePlainObjects` ꯁꯤꯖꯤꯟꯅꯧ।

### 优点

- ꯁꯤꯟꯄꯨꯠ ꯑꯦꯔꯦꯏꯗꯥ ꯂꯩꯕ ꯑꯦꯂꯦꯃꯦꯟꯠ ꯈꯨꯗꯤꯡꯃꯛ ꯄ꯭ꯂꯦꯟ ꯑꯣꯕꯖꯦꯛꯠ ꯑꯣꯏꯕꯥ ꯍꯥꯏꯕꯥ ꯁꯤꯖꯤꯟꯅꯔꯤ, ꯑꯥꯏꯇꯦꯝ ꯄꯨꯝꯅꯃꯛ ꯃꯦꯆ ꯇꯧꯕꯥ ꯃꯇꯨꯡꯗꯥꯛ ꯈꯛꯇꯃꯛ `true`
  ꯍꯟꯗꯣꯛꯏ।
- ꯑꯔꯥꯟꯕꯥ ꯏꯟꯄꯨꯠꯁꯤꯡ (ꯑꯦꯔꯦꯏ ꯅꯣꯏꯕꯥ ꯅꯠꯇꯦ ꯅꯠꯇ꯭ꯔꯒꯥ ꯍꯥꯡꯗꯣꯛꯄꯥ ꯑꯦꯔꯦꯏ) ꯍꯥꯏꯕꯥꯁꯤꯡ ꯍꯥꯏꯅꯥ `false` ꯍꯟꯗꯣꯛꯄꯥꯗꯨꯅꯥ ꯍꯥꯏꯅꯥ ꯌꯥꯎꯔꯤ।
- `Object.create(null)` ꯑꯣꯕꯖꯦꯛꯠꯁꯤꯡ ꯑꯃꯁꯨꯡ ꯑꯣꯕꯖꯦꯛꯠ-ꯂꯤꯇꯔꯦꯜ ꯑꯣꯕꯖꯦꯛꯠꯁꯤꯡ ꯑꯅꯤꯃꯛꯄꯨꯅꯤ ꯆꯥꯡꯕꯥ ꯄ꯭ꯂꯦꯟ ꯑꯣꯕꯖꯦꯛꯠ ꯑꯣꯏꯅꯥ ꯂꯧꯔꯤ।

## 用法

### 语法

函数：

- `arePlainObjects(array)`

参数：

- `array`: ꯄ꯭ꯂꯦꯟ ꯑꯣꯕꯖꯦꯛꯠ ꯑꯦꯂꯦꯃꯦꯟꯠꯁꯤꯡ ꯌꯥꯎꯔꯤꯕꯥ ꯍꯥꯏꯕꯥ ꯆꯦꯛ ꯇꯧꯅꯕꯥ ꯑꯦꯔꯦꯏ।

### 本地函数导入

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // true
const b = arePlainObjects([{}, Object.create(null)]); // true
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // false
const d = arePlainObjects([] as unknown[]); // false
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.arePlainObjects(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>此文件于 30 January 2026 at 16:57:06 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>