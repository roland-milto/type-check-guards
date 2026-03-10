# areFilledArrays

## ਵਰਣਨ

`areFilledArrays` ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ ਦੋ-ਆਯਾਮੀ ਐਰੇ ਖਾਲੀ ਨਹੀਂ ਹੈ ਅਤੇ ਇਸ ਦੇ ਸਾਰੇ ਸਬਐਰੇ ਖਾਲੀ ਨਹੀਂ ਹਨ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਟੇਬੁਲਰ ਜਾਂ ਮੈਟ੍ਰਿਕਸ-ਟਾਈਪ ਇਨਪੁੱਟ (ਜਿਵੇਂ CSV ਰੋਜ਼, ਗ੍ਰਿਡ ਡਾਟਾ, ਗਰੂਪ ਕੀਤੇ ਨਤੀਜੇ) ਨੂੰ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ `areFilledArrays` ਵਰਤੋ
ਤਾਂ ਜੋ ਤੁਸੀਂ ਸੁਰੱਖਿਅਤ ਤੌਰ ‘ਤੇ ਮੰਨ ਸਕੋ ਕਿ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਸਬਐਰੇ ਮੌਜੂਦ ਹੈ ਅਤੇ ਕੋਈ ਵੀ ਸਬਐਰੇ ਖਾਲੀ ਨਹੀਂ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਜਦੋਂ ਤੁਹਾਨੂੰ ਇਹ ਯਕੀਨੀ ਬਣਾਉਣਾ ਹੋਵੇ ਕਿ 2D ਐਰੇ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਰੋ ਹੋਵੇ ਅਤੇ ਹਰ ਰੋ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਐਲੀਮੈਂਟ ਹੋਵੇ, ਤਦ
> ਇਟਰੇਟ ਕਰਨ ਜਾਂ ਇੰਡੈਕਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ `areFilledArrays` ਵਰਤੋ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਬਾਹਰੀ ਐਰੇ ਖਾਲੀ ਨਾ ਹੋਵੇ ਅਤੇ ਹਰ ਅੰਦਰੂਨੀ ਐਰੇ ਵੀ ਖਾਲੀ ਨਾ ਹੋਵੇ, ਅਤੇ `true` ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ
  ਹੈ ਜਦੋਂ ਦੋਵੇਂ ਸ਼ਰਤਾਂ ਪੂਰੀਆਂ ਹੋਣ।
- ਸਬਐਰੇਜ਼ ਦੇ ਅੰਦਰ ਕਿਸੇ ਵੀ ਐਲੀਮੈਂਟ ਟਾਈਪ (ਜਿਵੇਂ ਨੰਬਰ, ਸਟਰਿੰਗਾਂ, ਆਬਜੈਕਟ, ਨੇਸਟਡ ਐਰੇਜ਼) ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ ਕਿਉਂਕਿ ਇਹ ਸਿਰਫ਼ ਐਰੇ
  ਦੇ “ਭਰੇ ਹੋਏ” ਹੋਣ ਦੀ ਸਥਿਤੀ ਚੈੱਕ ਕਰਦਾ ਹੈ, ਐਲੀਮੈਂਟ ਦੀ ਸਮੱਗਰੀ ਨਹੀਂ।
- ਇੱਕ ਸਧਾਰਣ ਬੂਲੀਅਨ ਨਤੀਜਾ (`true`/`false`) ਦਿੰਦਾ ਹੈ ਜੋ ਦੋ-ਆਯਾਮੀ ਡਾਟਾ ਪ੍ਰੋਸੈਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਗਾਰਡ ਵਜੋਂ ਉਚਿਤ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areFilledArrays(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਚੈੱਕ ਕਰਨ ਲਈ ਦੋ-ਆਯਾਮੀ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // ਸੱਚ
console.log(areFilledArrays(b)); // ਸੱਚ
console.log(areFilledArrays(c)); // ਸੱਚ
console.log(areFilledArrays(d)); // ਝੂਠ
console.log(areFilledArrays(e)); // ਝੂਠ
console.log(areFilledArrays(f)); // ਝੂਠ

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areFilledArrays(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areFilledArrays](‎../_analysis/areFilledArrays.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 6 February 2026 at 11:58:23 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>