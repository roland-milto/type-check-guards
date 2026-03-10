# areDates

## ਵਰਣਨ

`areDates` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਐਰੇ ਭਰਿਆ ਹੋਇਆ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ ਸਿਰਫ਼ `Date` ਆਬਜੈਕਟ ਹਨ, ਅਤੇ `true` ਸਿਰਫ਼ ਤਦੋਂ
ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਸਾਰੇ ਐਲੀਮੈਂਟ ਵੈਧ ਤਾਰੀਖਾਂ ਹੋਣ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਅਣਜਾਣ ਇਨਪੁੱਟ (ਜਿਵੇਂ ਪਾਰਸ ਕੀਤਾ JSON, ਫਾਰਮ ਡਾਟਾ, API ਪੇਲੋਡ) ਨੂੰ ਤਾਰੀਖ-ਖਾਸ ਲੌਜਿਕ (ਜਿਵੇਂ ਸਮੇਂ ਅਨੁਸਾਰ ਸੋਰਟ ਕਰਨਾ, ਫਾਰਮੈਟਿੰਗ,
ਜਾਂ ਰੇਂਜ ਗਣਨਾ) ਚਲਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਵੈਧ ਕਰਨ ਲਈ `areDates` ਵਰਤੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `true` ਸਿਰਫ਼ ਉਹਨਾਂ ਗੈਰ-ਖਾਲੀ ਐਰੇਜ਼ ਲਈ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਿੱਥੇ ਹਰ ਐਲੀਮੈਂਟ `Date` ਹੈ; ਖਾਲੀ ਐਰੇਜ਼ ਲਈ `false` ਆਉਂਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਂਦਾ ਹੈ ਕਿ ਐਰੇ ਖਾਲੀ ਨਾ ਹੋਵੇ, ਫਿਰ ਹੀ ਇਸਦੇ ਸਮੱਗਰੀ ਦੀ ਵੈਧਤਾ ਜਾਂਚੀ ਜਾਵੇ, ਜਿਸ ਨਾਲ ਖਾਲੀ ਇਨਪੁੱਟ ਲਈ `true` ਆਉਣ ਤੋਂ
  ਬਚਾਵ ਹੁੰਦਾ ਹੈ।
- ਹਰ ਐਲੀਮੈਂਟ ਦੇ `Date` ਇੰਸਟੈਂਸ ਹੋਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰਦਾ ਹੈ, ਅਤੇ ਪਹਿਲੀ ਅਣਮਿਲਾਪ ਤੇ ਤੁਰੰਤ `false` ਵਾਪਸ ਕਰ ਦਿੰਦਾ ਹੈ।
- ਐਰੇ ਆਈਟਮਾਂ ਉੱਤੇ ਤਾਰੀਖ-ਖਾਸ ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਗਾਰਡ-ਸਟਾਈਲ ਚੈਕ ਵਜੋਂ ਲਾਭਦਾਇਕ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areDates(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: `Date` ਆਬਜੈਕਟਾਂ ਲਈ ਚੈਕ ਕੀਤਾ ਜਾਣ ਵਾਲਾ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // ਸੱਚ
console.log(areDates(b)); // ਝੂਠ
console.log(areDates(c)); // ਝੂਠ

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areDates(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areDates](‎../_analysis/areDates.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 15:31:50 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>