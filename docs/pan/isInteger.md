# isInteger

## ਵਰਣਨ

ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ `value` ਇੱਕ ਸੇਫ਼ ਇੰਟੀਜਰ ਨੰਬਰ ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਗੈਰ-ਭਰੋਸੇਯੋਗ ਇਨਪੁੱਟ (ਜਿਵੇਂ ਕਿ query params, JSON payloads, environment variables) ਨੂੰ ਐਰੇ ਇੰਡੈਕਸਾਂ, pagination, ਕਾਊਂਟਰਾਂ
ਜਾਂ ਡਾਟਾਬੇਸ IDs ਲਈ ਇੰਟੀਜਰ ਵਜੋਂ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਅਣਜਾਣ ਇਨਪੁੱਟ ਨੂੰ ਅੰਕੀ ਇੰਟੀਜਰ ਵਜੋਂ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ `isInteger` ਵਰਤੋ; ਇਹ `true` ਸਿਰਫ਼ ਓਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ
> ਹੈ ਜਦੋਂ `typeof value === "number"` ਅਤੇ `Number.isSafeInteger(value)` ਹੋਵੇ।

### ਫਾਇਦੇ

- ਟਾਈਪ ਤੇ ਅੰਕੀ ਸੁਰੱਖਿਆ ਦੋਵੇਂ ਚੈੱਕ ਕਰਦਾ ਹੈ: `true` ਸਿਰਫ਼ ਓਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਇਨਪੁੱਟ ਇੱਕ ਨੰਬਰ ਹੋਵੇ ਅਤੇ ਸੇਫ਼ ਇੰਟੀਜਰ
  ਹੋਵੇ।
- ਅੰਕੀ ਕੋਅਰਸ਼ਨ ਨਾਲ ਹੋਣ ਵਾਲੀਆਂ ਆਮ ਗਲਤੀਆਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ: "5" ਵਰਗੀਆਂ ਸਟਰਿੰਗਾਂ ਲਈ ਠੀਕ ਤਰ੍ਹਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਗੈਰ-ਇੰਟੀਜਰ ਅਤੇ ਅਸੁਰੱਖਿਅਤ ਇੰਟੀਜਰਾਂ ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ, ਜਿਸ ਕਰਕੇ ਇਹ IDs, ਕਾਊਂਟਰਾਂ ਅਤੇ ਐਰੇ ਇੰਡੈਕਸਿੰਗ ਲਈ ਢੁੱਕਵਾਂ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isInteger(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਇੰਟੀਜਰ ਸਥਿਤੀ ਲਈ ਚੈੱਕ ਕਰਨ ਵਾਸਤੇ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // ਸੱਚ
const b = isInteger(-100);   // ਸੱਚ
const c = isInteger("5");    // ਝੂਠ
const d = isInteger(5.5);    // ਝੂਠ
const e = isInteger(null);   // ਝੂਠ

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isInteger(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isInteger](‎../_analysis/isInteger.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 00:51:00 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>