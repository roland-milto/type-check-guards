# areStreams

## ਵਰਣਨ

`areStreams` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਕੋਈ ਵੈਲਯੂ ਇੱਕ ਭਰੀ ਹੋਈ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰ ਐਲੀਮੈਂਟ ਇੱਕ `Stream` ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਯੂਜ਼ਰ ਵੱਲੋਂ ਦਿੱਤੀਆਂ ਜਾਂ ਡਾਇਨੈਮਿਕ ਤੌਰ 'ਤੇ ਬਣੀਆਂ ਕਲੇਕਸ਼ਨਾਂ (ਜਿਵੇਂ ਕਿ ਕਈ ਫਾਈਲ ਰੀਡ ਸਟ੍ਰੀਮ) ਨੂੰ ਪਾਈਪ ਕਰਨ, ਰਿਜ਼ਿਊਮ ਕਰਨ ਜਾਂ
ਗਰੁੱਪ ਵਜੋਂ ਹੋਰ ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areStreams` ਨੂੰ ਅਣਜਾਣ ਇਨਪੁੱਟ ਨੂੰ `Stream[]` ਵਜੋਂ ਟ੍ਰੀਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ ਵਰਤੋ; ਇਹ `true` ਸਿਰਫ਼ ਤਦ ਹੀ ਵਾਪਸ
> ਕਰਦਾ ਹੈ ਜਦੋਂ ਵੈਲਯੂ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੋਵੇ ਅਤੇ ਹਰ ਐਲੀਮੈਂਟ ਇੱਕ `Stream` ਹੋਵੇ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਇਨਪੁੱਟ ਇੱਕ ਭਰੀ ਹੋਈ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰ ਐਲੀਮੈਂਟ ਇੱਕ `Stream` ਹੈ।
- ਪ੍ਰੋਸੈਸਿੰਗ ਤੋਂ ਪਹਿਲਾਂ ਸਟ੍ਰੀਮ ਕਲੇਕਸ਼ਨਾਂ ਦੀ ਵੈਲੀਡੇਸ਼ਨ ਲਈ ਸਧਾਰਣ `true`/`false` ਗਾਰਡ ਦਿੰਦਾ ਹੈ।
- ਤੁਰੰਤ ਫੇਲ ਹੁੰਦਾ ਹੈ: ਜਿਵੇਂ ਹੀ ਕੋਈ ਗੈਰ-`Stream` ਐਲੀਮੈਂਟ ਮਿਲਦਾ ਹੈ `false` ਵਾਪਸ ਕਰ ਦਿੰਦਾ ਹੈ।
- ਜਦੋਂ ਕੋਡ ਮੰਨ ਲੈਂਦਾ ਹੈ ਕਿ ਸਾਰੇ ਆਈਟਮ `Stream` ਇੰਸਟੈਂਸ ਹਨ, ਤਾਂ ਰਨਟਾਈਮ ਐਰਰਾਂ ਤੋਂ ਬਚਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areStreams(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਉਹ ਐਰੇ ਜਿਸਦੀ ਜਾਂਚ Stream ਆਬਜੈਕਟਾਂ ਲਈ ਕਰਨੀ ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  //‎ input Stream objects दी भरी होई array ऐ
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areStreams(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areStreams](‎../_analysis/areStreams.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 23:35:11 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>