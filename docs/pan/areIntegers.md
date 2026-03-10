# areIntegers

## ਵਰਣਨ

`areIntegers` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤੇ ਐਰੇ ਦੇ ਸਾਰੇ ਐਲਿਮੈਂਟ ਪੂਰਨ ਅੰਕ ਹਨ ਜਾਂ ਨਹੀਂ; ਜੇ ਹਨ ਤਾਂ `true` ਅਤੇ ਨਹੀਂ ਤਾਂ
`false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`areIntegers` ਨੂੰ ਯੂਜ਼ਰ ਵੱਲੋਂ ਦਿੱਤੇ ਜਾਂ ਬਾਹਰੀ ਡਾਟਾ (ਜਿਵੇਂ query parameters, JSON payloads, CSV rows) ਦੀ ਵੈਲੀਡੇਸ਼ਨ ਲਈ
ਵਰਤੋ, ਜਦੋਂ ਤੁਹਾਡੀ ਲੌਜਿਕ ਨੂੰ IDs, ਕਾਊਂਟਰ, pagination offsets, ਜਾਂ ਐਰੇ ਇੰਡੈਕਸਾਂ ਵਰਗੀਆਂ ਪੂਰਨ ਅੰਕ ਮੁੱਲਾਂ ਦੀ filled ਲਿਸਟ ਦੀ
ਲੋੜ ਹੋਵੇ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areIntegers` ਨੂੰ `unknown[]` ਇਨਪੁੱਟਾਂ ਲਈ ਰਨਟਾਈਮ ਗਾਰਡ ਵਜੋਂ ਵਰਤੋ, ਇਸ ਤੋਂ ਪਹਿਲਾਂ ਕਿ ਤੁਸੀਂ ਉਹਨਾਂ ਨੂੰ ਸਿਰਫ਼ ਪੂਰਨ ਅੰਕਾਂ
> ਵਾਲੇ `number[]` ਵਜੋਂ ਟ੍ਰੀਟ ਕਰੋ। ਜੇ ਇਹ `false` ਵਾਪਸ ਕਰੇ, ਤਾਂ ਇਨਪੁੱਟ ਜਾਂ ਤਾਂ filled ਐਰੇ ਨਹੀਂ ਹੈ ਜਾਂ ਇਸ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ
> ਗੈਰ-ਪੂਰਨ ਅੰਕ ਮੁੱਲ ਮੌਜੂਦ ਹੈ।

### ਫਾਇਦੇ

- `true` ਸਿਰਫ਼ ਓਦੋਂ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਹਰ ਐਲਿਮੈਂਟ ਇੱਕ ਪੂਰਨ ਅੰਕ (integer) ਹੋਵੇ; ਨਹੀਂ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਪੂਰਨ ਅੰਕਾਂ ਵਾਲੀਆਂ ਹੀ ਕਾਰਵਾਈਆਂ (ਜਿਵੇਂ ਇੰਡੈਕਸਿੰਗ, ਗਿਣਤੀਆਂ, IDs) ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਅਣਜਾਣ ਇਨਪੁੱਟ ਦੀ ਜਾਂਚ/ਵੈਲੀਡੇਸ਼ਨ ਵਿੱਚ ਮਦਦ
  ਕਰਦਾ ਹੈ।
- ਤੁਰੰਤ ਫੇਲ੍ਹ: ਜਿਵੇਂ ਹੀ ਕੋਈ ਗੈਰ-ਪੂਰਨ ਅੰਕ ਐਲਿਮੈਂਟ ਮਿਲਦਾ ਹੈ, ਚੈੱਕ ਕਰਨਾ ਰੋਕ ਦਿੰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areIntegers(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਪੂਰਨ ਅੰਕ ਐਲਿਮੈਂਟਾਂ ਲਈ ਚੈੱਕ ਕਰਨ ਵਾਸਤੇ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // ਸੱਚ
console.log(areIntegers(b)); // ਸੱਚ
console.log(areIntegers(c)); // ਝੂਠ

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areIntegers(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areIntegers](‎../_analysis/areIntegers.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 00:59:58 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>