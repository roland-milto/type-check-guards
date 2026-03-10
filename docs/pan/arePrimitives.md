# arePrimitives

## ਵਰਣਨ

`arePrimitives` ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤੀ ਗਈ, ਗੈਰ-ਖਾਲੀ ਐਰੇ ਦੇ ਸਾਰੇ ਐਲਿਮੈਂਟ ਪ੍ਰਿਮਿਟਿਵ ਟਾਈਪ ਹਨ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਆਉਣ ਵਾਲੇ ਡਾਟਾ (ਜਿਵੇਂ ਕਿ query parameters, CSV row values, ਜਾਂ IDs/tags ਦੀ ਲਿਸਟ) ਨੂੰ serialize ਕਰਨ, hash ਕਰਨ, log ਕਰਨ,
ਜਾਂ ਉਹਨਾਂ APIs ਨੂੰ ਪਾਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰੋ ਜਿਨ੍ਹਾਂ ਨੂੰ ਆਬਜੈਕਟ ਨਹੀਂ ਮਿਲਣੇ ਚਾਹੀਦੇ, ਤਾਂ ਜੋ ਇਹ ਯਕੀਨੀ ਬਣੇ ਕਿ ਇਸ ਵਿੱਚ
ਸਿਰਫ਼ ਪ੍ਰਿਮਿਟਿਵ ਵੈਲਯੂਜ਼ ਹੀ ਹਨ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `arePrimitives` ਓਦੋਂ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਇਹ ਯਕੀਨੀ ਬਣਾਉਣਾ ਹੋਵੇ ਕਿ `unknown[]` ਵਿੱਚ ਸਿਰਫ਼ ਪ੍ਰਿਮਿਟਿਵ ਵੈਲਯੂਜ਼ (string,
> number, bigint, boolean, symbol, undefined, ਜਾਂ null) ਹੀ ਹਨ, ਅੱਗੇ ਪ੍ਰੋਸੈਸਿੰਗ ਤੋਂ ਪਹਿਲਾਂ।

### ਫਾਇਦੇ

- ਸਿਰਫ਼ ਓਦੋਂ ਹੀ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਹਰ ਐਲਿਮੈਂਟ ਪ੍ਰਿਮਿਟਿਵ ਵੈਲਯੂ ਹੋਵੇ, ਜਿਸ ਨਾਲ ਇਹ “ਕੋਈ ਆਬਜੈਕਟ/ਫੰਕਸ਼ਨ ਨਹੀਂ” ਵਾਲੀਆਂ
  ਐਰੇਜ਼ ਲਈ ਸਖ਼ਤ ਗਾਰਡ ਬਣ ਜਾਂਦਾ ਹੈ।
- ਫੇਲ ਫਾਸਟ: ਜਿਵੇਂ ਹੀ ਕੋਈ ਗੈਰ-ਪ੍ਰਿਮਿਟਿਵ ਐਲਿਮੈਂਟ ਮਿਲਦਾ ਹੈ, ਤੁਰੰਤ `false` ਵਾਪਸ ਕਰ ਦਿੰਦਾ ਹੈ।
- ਨਾਨ-ਐਰੇਜ਼ ਅਤੇ ਖਾਲੀ ਐਰੇਜ਼ ਲਈ ਵੀ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ (filled-array ਚੈਕ ਰਾਹੀਂ), ਜਿਸ ਨਾਲ ਗਲਤੀ ਨਾਲ ਗਲਤ ਇਨਪੁੱਟ ਕਬੂਲ ਹੋਣ ਤੋਂ
  ਬਚਾਵ ਹੁੰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `arePrimitives(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਪ੍ਰਿਮਿਟਿਵ ਟਾਈਪ ਦੇ ਐਲਿਮੈਂਟਾਂ ਲਈ ਚੈਕ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // ਸੱਚ
const r2 = arePrimitives(b); // ਸੱਚ
const r3 = arePrimitives(c); // ਝੂਠ
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.arePrimitives(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [arePrimitives](‎../_analysis/arePrimitives.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 00:06:04 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>