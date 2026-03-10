# arePlainObjects

## ਵਰਣਨ

ਜਾਂਚਦਾ ਹੈ ਕਿ ਕੀ ਐਰੇ ਦੇ ਸਾਰੇ ਐਲਿਮੈਂਟ ਸਧਾਰਣ ਆਬਜੈਕਟ ਹਨ, ਅਤੇ `true` ਸਿਰਫ਼ ਤਦ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਹਰ ਐਲਿਮੈਂਟ ਯੋਗ ਹੋਵੇ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਬਾਹਰੀ ਜਾਂ ਬਿਨਾਂ ਟਾਈਪ ਵਾਲੇ ਡਾਟਾ (ਜਿਵੇਂ ਪਾਰਸ ਕੀਤਾ JSON, API payloads, ਫਾਰਮ submissions) ਦੀ ਤਸਦੀਕ ਕਰੋ ਤਾਂ ਜੋ ਇਹ ਯਕੀਨੀ ਬਣੇ
ਕਿ ਤੁਹਾਨੂੰ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਮਿਲਿਆ ਹੈ ਜਿਸਦੀ ਹਰ ਐਂਟਰੀ ਇੱਕ ਸਧਾਰਣ ਆਬਜੈਕਟ ਹੈ, ਫਿਰ ਹੀ ਉਸ 'ਤੇ iterate ਕਰਕੇ properties ਪੜ੍ਹੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> TypeScript ਵਿੱਚ ਅਣਜਾਣ ਇਨਪੁੱਟ ਨੂੰ `Record<string, unknown>[]` (ਜਾਂ ਹੋਰ ਸਖ਼ਤ ਆਬਜੈਕਟ ਸ਼ੇਪ) ਵਜੋਂ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਉਸਦੀ
> ਤਸਦੀਕ ਕਰਨ ਲਈ `arePlainObjects` ਵਰਤੋ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਇਨਪੁੱਟ ਐਰੇ ਦਾ ਹਰ ਐਲਿਮੈਂਟ ਇੱਕ ਸਧਾਰਣ ਆਬਜੈਕਟ ਹੈ, ਅਤੇ `true` ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਸਾਰੇ
  ਆਈਟਮ ਮੇਲ ਖਾਂਦੇ ਹੋਣ।
- ਗਲਤ ਇਨਪੁੱਟ (ਐਰੇ ਨਾ ਹੋਣਾ ਜਾਂ ਖਾਲੀ ਐਰੇ) ਨੂੰ ਜਲਦੀ ਰੱਦ ਕਰਦਾ ਹੈ ਅਤੇ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਆਬਜੈਕਟ-ਲਿਟਰਲ ਆਬਜੈਕਟਾਂ ਅਤੇ `Object.create(null)` ਵਾਲੇ ਆਬਜੈਕਟਾਂ ਦੋਹਾਂ ਨੂੰ ਵੈਧ ਸਧਾਰਣ ਆਬਜੈਕਟ ਮੰਨਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `arePlainObjects(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਉਹ ਐਰੇ ਜਿਸਦੀ ਜਾਂਚ ਸਧਾਰਣ ਆਬਜੈਕਟ ਐਲਿਮੈਂਟਾਂ ਲਈ ਕੀਤੀ ਜਾਣੀ ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // ਸੱਚ
const b = arePlainObjects([{}, Object.create(null)]); // ਸੱਚ
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // ਝੂਠ
const d = arePlainObjects([] as unknown[]); // ਝੂਠ
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.arePlainObjects(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [arePlainObjects](‎../_analysis/arePlainObjects.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 16:55:23 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>