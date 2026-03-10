# areOctals

## ਵਰਣਨ

`areOctals` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ ਵੈਧ ਆਕਟਲ ਸਟਰਿੰਗਾਂ ਦਾ ਇੱਕ ਨਾ-ਖਾਲੀ ਐਰੇ ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਜਦੋਂ ਯੂਜ਼ਰ ਇਨਪੁੱਟ, ਕਨਫਿਗਰੇਸ਼ਨ ਮੁੱਲਾਂ, ਜਾਂ API ਪੇਲੋਡ ਦੀ ਵੈਲੀਡੇਸ਼ਨ ਕਰਨੀ ਹੋਵੇ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਆਕਟਲ ਲਿਟਰਲ (ਉਦਾਹਰਨ ਵਜੋਂ ਫਾਈਲ
ਪਰਮਿਸ਼ਨ ਮੋਡ ਜਿਵੇਂ `0o755`) ਹੋਣ ਲਾਜ਼ਮੀ ਹਨ, ਅਤੇ ਤੁਸੀਂ ਖਾਲੀ ਐਰੇ ਜਾਂ ਕਿਸੇ ਵੀ ਅਵੈਧ ਐਂਟਰੀ ਨੂੰ `false` ਵਾਪਸ ਕਰਕੇ ਰੱਦ ਕਰਨਾ
ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ `areOctals` ਵਰਤੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areOctals` ਵਰਤੋ ਤਾਂ ਜੋ ਕਨਵਰਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ (ਉਦਾਹਰਨ ਵਜੋਂ `Number(...)` ਜਾਂ ਕਸਟਮ ਪਾਰਸਿੰਗ ਰਾਹੀਂ) ਇਹ ਯਕੀਨੀ ਬਣਾਇਆ ਜਾ ਸਕੇ
> ਕਿ ਤੁਹਾਡੇ ਕੋਲ ਇੱਕ ਨਾ-ਖਾਲੀ `unknown[]` ਹੈ ਜਿਸ ਵਿੱਚ ਹਰ ਐਂਟਰੀ ਇੱਕ ਵੈਧ ਆਕਟਲ ਸਟਰਿੰਗ ਹੈ।

### ਫਾਇਦੇ

- ਇਹ ਜਾਂਚਦਾ ਹੈ ਕਿ ਕੋਈ ਮੁੱਲ ਇੱਕ ਨਾ-ਖਾਲੀ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰ ਤੱਤ ਇੱਕ ਆਕਟਲ ਸਟਰਿੰਗ ਹੈ, ਅਤੇ `true` ਸਿਰਫ਼ ਓਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ
  ਜਦੋਂ ਸਾਰੇ ਆਈਟਮ ਪਾਸ ਹੋ ਜਾਣ।
- ਤੁਰੰਤ ਫੇਲ੍ਹ: ਜਿਵੇਂ ਹੀ ਕੋਈ ਨਾ-ਆਕਟਲ ਤੱਤ ਮਿਲਦਾ ਹੈ, `false` ਵਾਪਸ ਕਰ ਦਿੰਦਾ ਹੈ।
- ਆਕਟਲ ਸਟਰਿੰਗਾਂ ਨੂੰ ਪਾਰਸ ਜਾਂ ਕਨਵਰਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਗਾਰਡ ਵਜੋਂ ਲਾਭਦਾਇਕ, ਤਾਂ ਜੋ ਰਨਟਾਈਮ ਗਲਤੀਆਂ ਅਤੇ ਅਸੰਗਤ ਇਨਪੁੱਟ ਹੈਂਡਲਿੰਗ ਤੋਂ
  ਬਚਿਆ ਜਾ ਸਕੇ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areOctals(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਜਾਂਚਿਆ ਜਾਣ ਵਾਲਾ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  //‎ value ikk na-khaali array ae jo octal strings di ae
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areOctals(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areOctals](‎../_analysis/areOctals.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 14:57:49 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>