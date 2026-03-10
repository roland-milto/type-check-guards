# isStream

## ਵਰਣਨ

`isStream` ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤੀ ਗਈ ਵੈਲਿਊ ਇੱਕ ਸਟ੍ਰੀਮ ਆਬਜੈਕਟ ਹੈ ਜਾਂ ਨਹੀਂ (Node.js ਸਟ੍ਰੀਮ-ਵਰਗੀ, `ReadableStream`, ਜਾਂ
`WritableStream`)।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਉਹ ਇਨਪੁੱਟ ਵੈਲੀਡੇਟ ਕਰੋ ਜੋ ਸਧਾਰਣ ਆਬਜੈਕਟ ਜਾਂ ਸਟ੍ਰੀਮ ਦੋਨੋਂ ਵਿੱਚੋਂ ਕੋਈ ਵੀ ਹੋ ਸਕਦੇ ਹਨ (ਜਿਵੇਂ ਫਾਈਲ ਅੱਪਲੋਡ, HTTP ਬਾਡੀਜ਼, ਜਾਂ
ਪ੍ਰੋਸੈਸਿੰਗ ਪਾਈਪਲਾਈਨਜ਼) ਅਤੇ ਵੈਲਿਊ ਸਟ੍ਰੀਮ ਹੈ ਜਾਂ ਨਹੀਂ ਦੇ ਆਧਾਰ 'ਤੇ ਲੌਜਿਕ ਨੂੰ ਬ੍ਰਾਂਚ ਕਰੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `unknown` ਨੂੰ ਸਟ੍ਰੀਮ ਮੈਥਡ ਕਾਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਨੈਰੋ ਕਰਨ ਲਈ `isStream` ਵਰਤੋ; ਇਹ Node.js ਸਟ੍ਰੀਮ-ਵਰਗੀਆਂ ਆਬਜੈਕਟਾਂ ਨੂੰ (
`pipe`/`on` ਰਾਹੀਂ) ਅਤੇ Web Streams (`ReadableStream`/`WritableStream`) ਨੂੰ ਪਛਾਣਦਾ ਹੈ ਜਦੋਂ ਉਹ ਗਲੋਬਲ ਮੌਜੂਦ ਹੋਣ।

### ਫਾਇਦੇ

- `pipe` ਤੇ `on` ਫੰਕਸ਼ਨਾਂ ਦੀ ਜਾਂਚ ਕਰਕੇ ਆਮ Node.js ਸਟ੍ਰੀਮ-ਵਰਗੀਆਂ ਆਬਜੈਕਟਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਪਛਾਣਦਾ ਹੈ।
- ਉਪਲਬਧ ਹੋਣ 'ਤੇ `ReadableStream` ਅਤੇ `WritableStream` ਨੂੰ ਪਛਾਣ ਕੇ Web Streams ਨੂੰ ਵੀ ਸਮਰਥਨ ਦਿੰਦਾ ਹੈ।
- ਗਾਰਡਾਂ ਅਤੇ ਬ੍ਰਾਂਚਿੰਗ ਲੌਜਿਕ ਲਈ ਉਚਿਤ ਇੱਕ ਸਧਾਰਣ ਬੂਲੀਅਨ ਨਤੀਜਾ (`true`/`false`) ਵਾਪਸ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isStream(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਾਂਚੀ ਜਾਣ ਵਾਲੀ ਵੈਲਿਊ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  //‎ nodeStream stream-wang vartda hai; tusi aam stream APIyan nu surakhit taur te vart sakde ho
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isStream(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isStream](‎../_analysis/isStream.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 23:42:31 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>