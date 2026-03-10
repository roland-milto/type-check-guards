# areBigInts

## ਵਰਣਨ

`areBigInts` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਕੋਈ ਵੈਲਿਊ ਸਿਰਫ਼ `bigint` ਵੈਲਿਊਆਂ ਵਾਲੀ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਅਣਜਾਣ ਇਨਪੁੱਟ (ਜਿਵੇਂ ਪਾਰਸ ਕੀਤਾ JSON-ਜਿਹਾ ਡਾਟਾ, API ਪੇਲੋਡ, ਜਾਂ `unknown` ਟਾਈਪ ਕੀਤੇ ਫੰਕਸ਼ਨ ਪੈਰਾਮੀਟਰ) ਨੂੰ ਪ੍ਰੋਸੈਸ ਕਰਨ ਤੋਂ
ਪਹਿਲਾਂ ਇਹ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਵੈਲੀਡੇਟ ਕਰੋ ਕਿ ਇਹ `bigint` ਵੈਲਿਊਆਂ ਦੀ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੈ; `true` ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ
ਸਾਰੇ ਐਲੀਮੈਂਟ `bigint` ਹੋਣ, ਨਹੀਂ ਤਾਂ `false`।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਅਣਜਾਣ ਇਨਪੁੱਟ ਉੱਤੇ `bigint`-ਕੇਵਲ ਓਪਰੇਸ਼ਨ (ਜਿਵੇਂ ਅੰਕਗਣਿਤ, ਤੁਲਨਾਵਾਂ) ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਰਨਟਾਈਮ ਗਾਰਡ ਵਜੋਂ `areBigInts` ਵਰਤੋ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਹਰ ਐਲੀਮੈਂਟ `bigint` ਹੈ, ਅਤੇ `true` ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਪੂਰੀ ਐਰੇ ਮੇਲ ਖਾਂਦੀ ਹੋਵੇ।
- ਡਿਜ਼ਾਇਨ ਮੁਤਾਬਕ ( `isFilledArray` ਰਾਹੀਂ) ਗੈਰ-ਐਰੇ ਅਤੇ ਖਾਲੀ ਐਰੇ ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਗਲਤ ਇਨਪੁੱਟਾਂ ਦੀ ਅਣਜਾਣੇ ਵਿੱਚ
  ਸਵੀਕਾਰਤਾ ਤੋਂ ਬਚਾਅ ਹੁੰਦਾ ਹੈ।
- ਫਾਸਟ ਫੇਲ: ਜਿਵੇਂ ਹੀ ਕੋਈ ਗੈਰ-`bigint` ਐਲੀਮੈਂਟ ਮਿਲਦਾ ਹੈ, ਤੁਰੰਤ `false` ਵਾਪਸ ਕਰ ਦਿੰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areBigInts(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਚੈੱਕ ਕਰਨ ਲਈ ਵੈਲਿਊ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // ਸੱਚ
console.log(areBigInts(b)); // ਝੂਠ
console.log(areBigInts(c)); // ਝੂਠ
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areBigInts(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areBigInts](‎../_analysis/areBigInts.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 23:27:04 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>