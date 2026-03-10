# arePlainObjects

## 说明

ਜਾਂਚਦਾ ਹੈ ਕਿ ਕੀ ਐਰੇ ਦੇ ਸਾਰੇ ਤੱਤ ਸਾਦੇ ਆਬਜੈਕਟ ਹਨ, ਅਤੇ `true` ਸਿਰਫ਼ ਤਦੋਂ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਹਰ ਤੱਤ ਯੋਗ ਹੋਵੇ।

### 使用场景

ਬਾਹਰੀ ਜਾਂ ਬਿਨਾਂ ਟਾਈਪ ਵਾਲੇ ਡਾਟੇ (ਜਿਵੇਂ ਪਾਰਸ ਕੀਤਾ JSON, API ਪੇਲੋਡ, ਫਾਰਮ ਸਬਮਿਸ਼ਨ) ਨੂੰ ਵੈਧ ਕਰੋ ਤਾਂ ਜੋ ਇਹ ਯਕੀਨੀ ਬਣੇ ਕਿ
ਤੁਹਾਨੂੰ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਮਿਲਿਆ ਹੈ ਜਿਸਦੀ ਹਰ ਐਂਟਰੀ ਇੱਕ ਸਾਦਾ ਆਬਜੈਕਟ ਹੈ, ਪ੍ਰਾਪਰਟੀਜ਼ ਪੜ੍ਹਨ ਅਤੇ ਇਟਰੇਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ।

> **给 TypeScript 用户的提示：**
>
> TypeScript ਵਿੱਚ ਅਣਜਾਣ ਇਨਪੁੱਟ ਨੂੰ `Record<string, unknown>[]` (ਜਾਂ ਹੋਰ ਸਖ਼ਤ ਆਬਜੈਕਟ ਸ਼ੇਪ) ਵਜੋਂ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਵੈਧ ਕਰਨ
> ਲਈ `arePlainObjects` ਵਰਤੋ।

### 优势

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਇਨਪੁੱਟ ਐਰੇ ਦਾ ਹਰ ਤੱਤ ਇੱਕ ਸਾਦਾ ਆਬਜੈਕਟ ਹੈ, ਅਤੇ `true` ਸਿਰਫ਼ ਤਦੋਂ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਸਾਰੇ ਆਈਟਮ ਮੇਲ
  ਖਾਂਦੇ ਹੋਣ।
- ਗਲਤ ਇਨਪੁੱਟਾਂ ਨੂੰ ਜਲਦੀ ਰੱਦ ਕਰਦਾ ਹੈ (ਗੈਰ-ਐਰੇ ਜਾਂ ਖਾਲੀ ਐਰੇ) `false` ਵਾਪਸ ਕਰਕੇ।
- ਆਬਜੈਕਟ-ਲਿਟਰਲ ਆਬਜੈਕਟਾਂ ਅਤੇ `Object.create(null)` ਆਬਜੈਕਟਾਂ ਦੋਵਾਂ ਨੂੰ ਵੈਧ ਸਾਦੇ ਆਬਜੈਕਟ ਮੰਨਦਾ ਹੈ।

## 用法

### 语法

函数：

- `arePlainObjects(array)`

参数：

- `array`: ਉਹ ਐਰੇ ਜਿਸਦੀ ਜਾਂਚ ਸਾਦੇ ਆਬਜੈਕਟ ਤੱਤਾਂ ਲਈ ਕੀਤੀ ਜਾਣੀ ਹੈ।

### 本地函数导入

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // सही
const b = arePlainObjects([{}, Object.create(null)]); // सही
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // गलत
const d = arePlainObjects([] as unknown[]); // गलत

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.arePlainObjects(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>该文件于 30 January 2026 at 16:25:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>