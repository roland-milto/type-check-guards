# areBuffers

## ਵਰਣਨ

`areBuffers` ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ ਇੱਕ ਨਾ-ਖਾਲੀ, ਭਰਿਆ ਹੋਇਆ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰ ਤੱਤ `Buffer` ਹੈ; ਐਸਾ ਹੋਣ 'ਤੇ `true`
ਅਤੇ ਨਹੀਂ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਆਉਣ ਵਾਲੇ chunk ਐਰੇਜ਼ (ਜਿਵੇਂ streams, file uploads, ਜਾਂ network packets ਤੋਂ) ਨੂੰ ਵੈਧ ਕਰੋ ਤਾਂ ਜੋ concatenating, decoding,
ਜਾਂ ਉਨ੍ਹਾਂ ਨੂੰ cryptographic ਜਾਂ binary-processing ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਪਾਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਯਕੀਨੀ ਬਣੇ ਕਿ ਸਾਰੇ ਹਿੱਸੇ `Buffer`
ਇੰਸਟੈਂਸ ਹਨ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `unknown[]` ਨੂੰ `Buffer.concat` ਵਰਗੀਆਂ Buffer-ਖਾਸ APIs ਕਾਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵੈਧ ਕਰਨ ਲਈ `areBuffers` ਵਰਤੋ, ਤਾਂ ਜੋ ਫੰਕਸ਼ਨ
`true` ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਵਾਪਸ ਕਰੇ ਜਦੋਂ ਹਰ ਤੱਤ `Buffer` ਹੋਵੇ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਇਨਪੁੱਟ ਵਿੱਚ ਹਰ ਤੱਤ Node.js `Buffer` ਇੰਸਟੈਂਸ ਹੈ, ਅਤੇ `true` ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਪੂਰਾ
  ਐਰੇ ਮੇਲ ਖਾਂਦਾ ਹੋਵੇ।
- ਗੈਰ-ਵੈਧ ਇਨਪੁੱਟਾਂ ਨੂੰ ਜਲਦੀ ਰੱਦ ਕਰਦਾ ਹੈ ਕਿਉਂਕਿ ਇਹ ਨਾ-ਖਾਲੀ, ਭਰਿਆ ਹੋਇਆ ਐਰੇ ਲਾਜ਼ਮੀ ਕਰਦਾ ਹੈ; ਖਾਲੀ ਐਰੇ ਜਾਂ ਐਰੇ ਨਾ ਹੋਣ ਦੀ
  ਸਥਿਤੀ ਵਿੱਚ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਬਫ਼ਰ-ਕੇਵਲ ਓਪਰੇਸ਼ਨਾਂ (ਜਿਵੇਂ ਕਿ concatenation, hashing, binary protocols) ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਗਾਰਡ ਵਜੋਂ ਲਾਭਦਾਇਕ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areBuffers(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਬਫ਼ਰ ਇੰਸਟੈਂਸਾਂ ਲਈ ਜਾਂਚਿਆ ਜਾਣ ਵਾਲਾ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areBuffers(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areBuffers](‎../_analysis/areBuffers.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 16:26:46 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>