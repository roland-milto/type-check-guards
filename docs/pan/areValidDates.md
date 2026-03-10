# areValidDates

## ਵਰਣਨ

ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਕੋਈ ਐਰੇ ਨਾ-ਖਾਲੀ ਹੈ ਅਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਵੈਧ `Date` ਔਬਜੈਕਟਾਂ ਤੋਂ ਬਣਿਆ ਹੋਇਆ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਤਾਰੀਖ-ਅਧਾਰਿਤ ਕਾਰਵਾਈਆਂ (ਸੋਰਟਿੰਗ, ਰੇਂਜ ਚੈਕ, ਫਾਰਮੈਟਿੰਗ) ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਯੂਜ਼ਰ-ਦਿੱਤੀਆਂ ਜਾਂ API-ਦਿੱਤੀਆਂ ਐਰੇਜ਼ ਨੂੰ ਵੈਲੀਡੇਟ ਕਰਨ
ਲਈ `areValidDates` ਵਰਤੋ, ਤਾਂ ਜੋ ਇਹ ਯਕੀਨੀ ਬਣੇ ਕਿ ਸਾਰੀਆਂ ਐਂਟਰੀਆਂ ਅਸਲੀ, ਵੈਧ `Date` ਔਬਜੈਕਟ ਹਨ ਅਤੇ ਲਿਸਟ ਖਾਲੀ ਨਹੀਂ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areValidDates` ਖਾਲੀ ਐਰੇ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ; ਇਸਨੂੰ ਵੈਲੀਡੇਸ਼ਨ ਕਦਮ ਵਜੋਂ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਐਰੇ ਦਾ
> ਨਾ-ਖਾਲੀ ਹੋਣਾ ਹੀ ਮਨੋਰਥ ਹੈ।

### ਫਾਇਦੇ

- `true` ਸਿਰਫ਼ ਓਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਹਰ ਐਲਿਮੈਂਟ ਇੱਕ ਵੈਧ `Date` ਇੰਸਟੈਂਸ ਹੋਵੇ (ਜਿਵੇਂ `new Date('invalid')` ਵਰਗੀਆਂ ਅਵੈਧ
  ਤਾਰੀਖਾਂ ਨਹੀਂ)।
- ਖਾਲੀ ਇਨਪੁੱਟ ਨੂੰ `false` ਵਾਪਸ ਕਰਕੇ ਰੱਦ ਕਰਦਾ ਹੈ, ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਤੁਸੀਂ ਸਿਰਫ਼ ਮਾਇਨੇਦਾਰ, ਨਾ-ਖਾਲੀ ਤਾਰੀਖਾਂ ਦੀਆਂ
  ਲਿਸਟਾਂ ਹੀ ਕਬੂਲ ਕਰੋ।
- ਇੱਕ ਸਧਾਰਣ ਬੂਲੀਅਨ ਗਾਰਡ-ਸਟਾਈਲ ਚੈਕ ਦਿੰਦਾ ਹੈ ਜੋ ਹੋਰ ਵੈਲੀਡੇਸ਼ਨਾਂ ਨਾਲ ਆਸਾਨੀ ਨਾਲ ਜੋੜਿਆ ਜਾ ਸਕਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areValidDates(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਚੈਕ ਕਰਨ ਲਈ ਐਰੇ, ਜਿਸ ਵਿੱਚ ਸੰਭਵ ਹੈ ਕਿ `Date` ਔਬਜੈਕਟ ਸ਼ਾਮਲ ਹੋਣ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // ਸੱਚ
console.log(areValidDates(b)); // ਝੂਠ
console.log(areValidDates(c)); // ਝੂਠ
console.log(areValidDates(d)); // ਝੂਠ

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areValidDates(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areValidDates](‎../_analysis/areValidDates.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 14:33:26 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>