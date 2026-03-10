# areIndexesFound

## ਵਰਣਨ

`areIndexesFound` ਜਾਂਚਦਾ ਹੈ ਕਿ ਕੋਈ ਵੈਲਿਊ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੈ ਜਿਸਦੇ ਸਾਰੇ ਐਲੀਮੈਂਟ ਵੈਧ ਇੰਡੈਕਸ ਹਨ ਕਿ ਨਹੀਂ; ਜੇ ਹਨ ਤਾਂ `true`
ਅਤੇ ਨਹੀਂ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਯੂਜ਼ਰ ਵੱਲੋਂ ਦਿੱਤੇ ਜਾਂ ਬਾਹਰੀ ਡਾਟਾ (ਜਿਵੇਂ ਪਾਰਸ ਕੀਤਾ JSON) ਦੀ ਤਸਦੀਕ ਕਰੋ, ਜਿਸ ਤੋਂ ਉਮੀਦ ਹੈ ਕਿ ਉਹ ਇੰਡੈਕਸਾਂ ਦੀ ਲਿਸਟ ਹੋਵੇ, ਤਾਂ
ਜੋ ਐਰੇਜ਼ ਨੂੰ ਐਕਸੈੱਸ ਜਾਂ ਸਲਾਈਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਸਨੂੰ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਵਰਤਿਆ ਜਾ ਸਕੇ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਅਣਜਾਣ ਇਨਪੁੱਟ ਨੂੰ ਐਰੇ ਇੰਡੈਕਸ ਵਜੋਂ ਟ੍ਰੀਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਉਸਦੀ ਵੈਧਤਾ ਜਾਂਚਣ ਲਈ `areIndexesFound` ਵਰਤੋ; ਇਹ ਖਾਲੀ ਐਰੇ ਲਈ ਅਤੇ
> ਗੈਰ-ਇੰਡੈਕਸ ਵੈਲਿਊਜ਼ ਵਾਲੀਆਂ ਐਰੇਜ਼ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਇਹ `true` ਸਿਰਫ਼ ਓਦੋਂ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਇਨਪੁੱਟ ਇੱਕ ਭਰੀ ਹੋਈ ਐਰੇ ਹੋਵੇ ਅਤੇ ਹਰ ਐਲੀਮੈਂਟ ਇੱਕ ਵੈਧ ਇੰਡੈਕਸ ਹੋਵੇ।
- ਤੇਜ਼ੀ ਨਾਲ ਫੇਲ ਹੁੰਦਾ ਹੈ: ਜਿਵੇਂ ਹੀ ਕੋਈ ਗੈਰ-ਇੰਡੈਕਸ ਐਲੀਮੈਂਟ ਮਿਲਦਾ ਹੈ, ਤੁਰੰਤ `false` ਵਾਪਸ ਕਰ ਦਿੰਦਾ ਹੈ।
- ਐਰੇ ਪੋਜ਼ੀਸ਼ਨਾਂ ਜਾਂ ਆਫਸੈੱਟ ਵਜੋਂ ਵੈਲਿਊਜ਼ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਗਾਰਡ ਵਜੋਂ ਲਾਭਦਾਇਕ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areIndexesFound(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਇੰਡੈਕਸ ਅਨੁਕੂਲਤਾ ਲਈ ਚੈੱਕ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  //‎ ਇੱਥੇ, `a` ਨੂੰ ਇੰਡੈਕਸਾਂ ਦੀ ਭਰੀ ਹੋਈ ਐਰੇ ਹੋਣ ਦੀ ਪੁਸ਼ਟੀ ਕੀਤੀ ਗਈ ਹੈ।
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areIndexesFound(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areIndexesFound](‎../_analysis/areIndexesFound.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 01:03:47 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>