# areStreams

## 说明

`areStreams` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਕੋਈ ਮੁੱਲ ਇੱਕ ਭਰੀ ਹੋਈ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰ ਤੱਤ ਇੱਕ `Stream` ਹੈ।

### 使用场景

ਯੂਜ਼ਰ ਵੱਲੋਂ ਦਿੱਤੀਆਂ ਜਾਂ ਡਾਇਨੈਮਿਕ ਤੌਰ 'ਤੇ ਬਣੀਆਂ ਕਲੇਕਸ਼ਨਾਂ (ਜਿਵੇਂ ਕਈ ਫਾਈਲ ਰੀਡ ਸਟ੍ਰੀਮ) ਦੀ ਜਾਂਚ ਕਰੋ, ਪਾਈਪ ਕਰਨ, ਰਿਜ਼ਿਊਮ ਕਰਨ,
ਜਾਂ ਹੋਰ ਤਰੀਕਿਆਂ ਨਾਲ ਉਨ੍ਹਾਂ 'ਤੇ ਗਰੁੱਪ ਵਜੋਂ ਕਾਰਵਾਈ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ।

> **给 TypeScript 用户的提示：**
>
> `areStreams` ਨੂੰ ਅਣਜਾਣ ਇਨਪੁੱਟ ਦੀ ਜਾਂਚ ਲਈ ਵਰਤੋ, ਇਸਨੂੰ `Stream[]` ਵਜੋਂ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ; ਇਹ `true` ਸਿਰਫ਼ ਤਦੋਂ ਵਾਪਸ ਕਰਦਾ
> ਹੈ ਜਦੋਂ ਮੁੱਲ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੋਵੇ ਅਤੇ ਹਰ ਤੱਤ ਇੱਕ `Stream` ਹੋਵੇ।

### 优势

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਇਨਪੁੱਟ ਇੱਕ ਭਰੀ ਹੋਈ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰ ਤੱਤ ਇੱਕ `Stream` ਹੈ।
- ਪ੍ਰੋਸੈਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਟ੍ਰੀਮ ਕਲੇਕਸ਼ਨਾਂ ਦੀ ਜਾਂਚ ਲਈ ਇੱਕ ਸਧਾਰਣ `true`/`false` ਗਾਰਡ ਦਿੰਦਾ ਹੈ।
- ਤੁਰੰਤ ਫੇਲ੍ਹ: ਜਿਵੇਂ ਹੀ ਕੋਈ ਗੈਰ-`Stream` ਤੱਤ ਮਿਲਦਾ ਹੈ, `false` ਵਾਪਸ ਕਰ ਦਿੰਦਾ ਹੈ।
- ਜਦੋਂ ਕੋਡ ਮੰਨਦਾ ਹੈ ਕਿ ਸਾਰੇ ਆਈਟਮ `Stream` ਇੰਸਟੈਂਸ ਹਨ, ਤਾਂ ਰਨਟਾਈਮ ਗਲਤੀਆਂ ਤੋਂ ਬਚਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।

## 用法

### 语法

函数：

- `areStreams(array)`

参数：

- `array`: ਉਹ ਐਰੇ ਜਿਸਦੀ ਜਾਂਚ Stream ਆਬਜੈਕਟਾਂ ਲਈ ਕੀਤੀ ਜਾਣੀ ਹੈ।

### 本地函数导入

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input Stream object ke bharal array hai
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areStreams(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areStreams](../_analysis/areStreams.md)

<br>

---

<small>该文件于 30 January 2026 at 23:34:06 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>