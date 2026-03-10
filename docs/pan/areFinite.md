# areFinite

## ਵਰਣਨ

`areFinite` ਜਾਂਚਦਾ ਹੈ ਕਿ ਕੋਈ ਵੈਲਿਊ ਇੱਕ ਨਾ-ਖਾਲੀ ਐਰੇ ਹੈ ਜਿਸਦੇ ਐਲੀਮੈਂਟ ਸਾਰੇ ਸੀਮਿਤ ਨੰਬਰ ਹਨ ਕਿ ਨਹੀਂ; ਐਸਾ ਹੋਣ 'ਤੇ `true` ਅਤੇ
ਨਹੀਂ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਗਣਨਾਵਾਂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਨੰਬਰਿਕ ਇਨਪੁੱਟ ਐਰੇਜ਼ (ਜਿਵੇਂ ਚਾਰਟ ਸੀਰੀਜ਼, ਕੋਆਰਡੀਨੇਟ ਲਿਸਟਾਂ, ਮਾਪ ਸੈਂਪਲ) ਦੀ ਵੈਲੀਡੇਸ਼ਨ ਕਰੋ, ਤਾਂ ਜੋ
ਨਤੀਜਾ `true` ਸਿਰਫ਼ ਓਦੋਂ ਹੀ ਆਵੇ ਜਦੋਂ ਸਾਰੀਆਂ ਵੈਲਿਊਜ਼ ਸੀਮਿਤ ਨੰਬਰ ਹੋਣ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਜਦੋਂ ਤੁਹਾਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣਾ ਹੋਵੇ ਕਿ ਐਰੇ ਨਾ-ਖਾਲੀ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ ਸਿਰਫ਼ ਸੀਮਿਤ ਨੰਬਰ ਹਨ, ਤਾਂ `areFinite` ਵਰਤੋ; ਇਹ ਖਾਲੀ ਐਰੇ ਲਈ
> ਅਤੇ `NaN` ਜਾਂ ਇਨਫਿਨਿਟੀਜ਼ ਵਾਲੇ ਐਰੇ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- `true` ਸਿਰਫ਼ ਓਦੋਂ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਇਨਪੁੱਟ ਇੱਕ ਨਾ-ਖਾਲੀ ਐਰੇ ਹੋਵੇ ਅਤੇ ਹਰ ਐਲੀਮੈਂਟ ਇੱਕ ਸੀਮਿਤ ਨੰਬਰ ਹੋਵੇ।
- ਹਰ ਐਲੀਮੈਂਟ ਲਈ `isFinite` ਚੈਕਾਂ 'ਤੇ ਨਿਰਭਰ ਕਰਕੇ `Infinity`, `-Infinity`, ਅਤੇ `NaN` ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ।
- ਗਾਰਡਾਂ ਅਤੇ ਵੈਲੀਡੇਸ਼ਨ ਫ਼ਲੋਜ਼ ਲਈ ਢੁੱਕਵਾਂ ਇੱਕ ਸਧਾਰਣ ਬੂਲੀਅਨ ਨਤੀਜਾ (`true`/`false`) ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areFinite(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਉਹ ਐਰੇ ਜਿਸਦੀ ਜਾਂਚ ਕੀਤੀ ਜਾਣੀ ਹੈ ਕਿ ਇਸਦੇ ਸਾਰੇ ਐਲੀਮੈਂਟ ਸੀਮਿਤ ਹਨ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // ਸੱਚ
console.log(areFinite(b)); // ਝੂਠ
console.log(areFinite(c)); // ਝੂਠ

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areFinite(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areFinite](‎../_analysis/areFinite.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 16:36:37 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>