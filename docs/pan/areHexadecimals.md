# areHexadecimals

## ਵਰਣਨ

ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ ਐਰੇ ਦੇ ਸਾਰੇ ਐਲਿਮੈਂਟ ਹੈਕਸਾਡੈਸੀਮਲ ਸਟਰਿੰਗਜ਼ ਹਨ ਜਾਂ ਨਹੀਂ, ਅਤੇ `true` ਸਿਰਫ਼ ਗੈਰ-ਖਾਲੀ ਐਰੇਜ਼ ਲਈ ਵਾਪਸ ਕਰਦਾ ਹੈ
ਜਿੱਥੇ ਹਰ ਆਈਟਮ ਵੈਧ ਹੋਵੇ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`areHexadecimals` ਨੂੰ ਯੂਜ਼ਰ ਇਨਪੁੱਟ ਜਾਂ ਬਾਹਰੀ ਡਾਟਾ (ਜਿਵੇਂ IDs, ਚੈਕਸਮਜ਼, ਜਾਂ ਅੱਗੇ '#' ਤੋਂ ਬਿਨਾਂ ਕਲਰ ਕੋਡਜ਼) ਨੂੰ ਹੈਕਸਾਡੈਸੀਮਲ
ਪਾਰਸਿੰਗ ਜਾਂ ਹੋਰ ਪ੍ਰੋਸੈਸਿੰਗ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ ਵਰਤੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areHexadecimals` ਨੂੰ ਅਣਜਾਣ ਇਨਪੁੱਟ ਨੂੰ ਪਾਰਸ ਜਾਂ ਕਨਵਰਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ ਵਰਤੋ (ਉਦਾਹਰਨ ਵਜੋਂ,
`parseInt(value, 16)` ਤੋਂ ਪਹਿਲਾਂ ਜਾਂ BigInt ਕਨਵਰਜ਼ਨ ਤੋਂ ਪਹਿਲਾਂ)।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਹਰ ਐਲਿਮੈਂਟ ਇੱਕ ਹੈਕਸਾਡੈਸੀਮਲ ਸਟਰਿੰਗ ਹੈ ਅਤੇ `true` ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਸਾਰੇ ਆਈਟਮ ਮੇਲ
  ਖਾਂਦੇ ਹੋਣ।
- ਡਿਜ਼ਾਇਨ ਮੁਤਾਬਕ ਖਾਲੀ ਐਰੇਜ਼ ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ, ਗੁੰਮ ਇਨਪੁੱਟ ਡਾਟਾ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਇੱਕ ਸਧਾਰਣ ਬੂਲੀਅਨ ਨਤੀਜਾ (`true`/`false`) ਦਿੰਦਾ ਹੈ ਜੋ ਗਾਰਡਜ਼ ਅਤੇ ਅਗਾਂਹ-ਵਾਪਸੀ ਵੈਲੀਡੇਸ਼ਨ ਲਈ ਢੁੱਕਵਾਂ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areHexadecimals(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਹੈਕਸਾਡੈਸੀਮਲ ਸਟਰਿੰਗ ਐਲਿਮੈਂਟਸ ਲਈ ਚੈੱਕ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areHexadecimals(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areHexadecimals](‎../_analysis/areHexadecimals.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 23:07:26 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>