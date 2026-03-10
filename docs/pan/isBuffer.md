# isBuffer

## ਵਰਣਨ

ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ ਕੋਈ ਵੈਲਿਊ Node.js `Buffer` ਹੈ ਜਾਂ ਨਹੀਂ ਅਤੇ `true` ਜਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਰਨਟਾਈਮ 'ਤੇ ਇਨਪੁੱਟਾਂ (ਜਿਵੇਂ API ਪੇਲੋਡ, ਫਾਈਲ ਡਾਟਾ, ਜਾਂ ਮੈਸੇਜ ਬਫਰ) ਦੀ ਵੈਲੀਡੇਸ਼ਨ ਕਰੋ ਤਾਂ ਜੋ ਪ੍ਰੋਸੈਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਯਕੀਨੀ
ਬਣੇ ਕਿ ਵੈਲਿਊ `Buffer` ਹੈ, ਅਤੇ Node.js ਤੋਂ ਬਾਹਰ ਚਲਾਉਣ 'ਤੇ ਜਿੱਥੇ `Buffer` ਮੌਜੂਦ ਨਹੀਂ ਹੋ ਸਕਦਾ, ਭਰੋਸੇਯੋਗ ਤਰੀਕੇ ਨਾਲ `false`
ਮਿਲੇ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isBuffer` ਨੂੰ ਵਰਤ ਕੇ `unknown` ਵੈਲਿਊਜ਼ ਨੂੰ `Buffer` ਤੱਕ ਨੈਰੋ ਕਰੋ, ਫਿਰ Buffer-ਖਾਸ ਮੈਥਡ ਕਾਲ ਕਰੋ।

### ਫਾਇਦੇ

- `Buffer.isBuffer` ਵਰਤ ਕੇ Node.js `Buffer` ਇੰਸਟੈਂਸਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਪਛਾਣਦਾ ਹੈ।
- ਜਿੱਥੇ `Buffer` ਉਪਲਬਧ ਨਹੀਂ ਹੁੰਦਾ, ਉੱਥੇ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਰਨਟਾਈਮ ਗਲਤੀਆਂ ਤੋਂ ਬਚਾਵ ਹੁੰਦਾ ਹੈ।
- `unknown` ਇਨਪੁੱਟ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ, ਜਿਸ ਕਰਕੇ ਇਹ ਰਨਟਾਈਮ ਵੈਲੀਡੇਸ਼ਨ ਅਤੇ ਟਾਈਪ ਨੈਰੋਇੰਗ ਲਈ ਉਚਿਤ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isBuffer(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਟੈਸਟ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਵੈਲਿਊ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // ਸੱਚ
console.log(isBuffer(b)); // ਝੂਠ

if (isBuffer(a)) {
  //‎ ਇੱਥੇ a ਇੱਕ Buffer ਹੈ
  console.log(a.toString("utf8"));
}
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isBuffer(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isBuffer](‎../_analysis/isBuffer.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 16:32:51 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>