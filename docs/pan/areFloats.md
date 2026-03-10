# areFloats

## ਵਰਣਨ

`areFloats` ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਐਰੇ ਭਰਿਆ ਹੋਇਆ ਹੈ ਅਤੇ ਉਸਦੇ ਸਾਰੇ ਐਲੀਮੈਂਟ ਫਲੋਟ ਹਨ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`areFloats` ਨੂੰ ਓਦੋਂ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਇੱਕ `unknown[]` ਮਿਲਦਾ ਹੈ (ਜਿਵੇਂ JSON, ਕਵੈਰੀ ਪੈਰਾਮੀਟਰਾਂ, ਜਾਂ ਬਾਹਰੀ APIs ਤੋਂ) ਅਤੇ
ਤੁਹਾਨੂੰ ਇਹ ਯਕੀਨੀ ਬਣਾਉਣਾ ਹੋਵੇ ਕਿ ਇਹ ਇੱਕ ਭਰਿਆ ਹੋਇਆ ਐਰੇ ਹੈ ਜਿਸਦਾ ਹਰ ਆਈਟਮ ਫਲੋਟ ਹੈ, ਤਾਂ ਜੋ ਐਵਰੇਜਿੰਗ, ਇੰਟਰਪੋਲੇਸ਼ਨ, ਜਾਂ ਅੰਕੜਿਆਂ
ਵਾਲੀਆਂ ਗਣਨਾਵਾਂ ਵਰਗੀ ਨਿਊਮੈਰਿਕ ਲਾਜਿਕ ਚਲਾਈ ਜਾ ਸਕੇ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areFloats` ਨੂੰ `unknown[]` ਨੂੰ `number[]` (ਜਿਸ ਵਿੱਚ ਸਿਰਫ਼ ਫਲੋਟ ਹੋਣ) ਵਾਂਗ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਗਾਰਡ ਕਰਨ ਲਈ ਵਰਤੋ; ਇਹ ਖਾਲੀ
> ਐਰੇ ਲਈ ਅਤੇ ਕਿਸੇ ਵੀ ਨਾ-ਫਲੋਟ ਐਲੀਮੈਂਟ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- `true` ਸਿਰਫ਼ ਓਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਇਨਪੁੱਟ ਇੱਕ ਨਾ-ਖਾਲੀ ਐਰੇ ਹੋਵੇ ਅਤੇ ਹਰ ਐਲੀਮੈਂਟ ਫਲੋਟ ਹੋਵੇ।
- ਤੇਜ਼ੀ ਨਾਲ ਫੇਲ ਹੁੰਦਾ ਹੈ: ਜਿਵੇਂ ਹੀ ਕੋਈ ਨਾ-ਫਲੋਟ ਐਲੀਮੈਂਟ ਮਿਲਦਾ ਹੈ `false` ਵਾਪਸ ਕਰ ਦਿੰਦਾ ਹੈ।
- ਫਲੋਟ-ਖਾਸ ਗਣਨਾਵਾਂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਅਣਜਾਣ ਇਨਪੁੱਟ ਦੀ ਵੈਧਤਾ ਜਾਂਚਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areFloats(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਫਲੋਟ ਐਲੀਮੈਂਟਾਂ ਲਈ ਚੈੱਕ ਕਰਨ ਵਾਸਤੇ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // ਸੱਚ
console.log(areFloats(b)); // ਝੂਠ
console.log(areFloats(c)); // ਝੂਠ

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areFloats(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areFloats](‎../_analysis/areFloats.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 15:59:03 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>