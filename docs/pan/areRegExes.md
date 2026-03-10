# areRegExes

## ਵਰਣਨ

`areRegExes` ਜਾਂਚਦਾ ਹੈ ਕਿ ਕੋਈ ਮੁੱਲ ਇੱਕ ਭਰਿਆ ਹੋਇਆ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ ਸਿਰਫ਼ `RegExp` ਆਬਜੈਕਟ ਹਨ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਕਿਸੇ ਕਨਫਿਗਰੇਸ਼ਨ ਵਿਕਲਪ (ਜਿਵੇਂ ਕਿ allow/deny ਪੈਟਰਨਜ਼ ਦੀ ਸੂਚੀ) ਨੂੰ ਮੈਚਿੰਗ ਲਈ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਵੈਲੀਡੇਟ ਕਰੋ ਕਿ ਉਹ ਰੈਗੂਲਰ
ਐਕਸਪ੍ਰੈਸ਼ਨਜ਼ ਦਾ ਇੱਕ ਨਾ-ਖਾਲੀ ਐਰੇ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਇਟਰੇਟ ਕਰਨ ਜਾਂ ਪੈਟਰਨਜ਼ ਨੂੰ ਕੰਪੋਜ਼ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ `unknown` ਨੂੰ `RegExp[]` ਤੱਕ ਨੈਰੋ ਕਰਨ ਲਈ `areRegExes` ਵਰਤੋ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਂਦਾ ਹੈ ਕਿ ਕੋਈ ਮੁੱਲ ਇੱਕ ਨਾ-ਖਾਲੀ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰ ਤੱਤ `RegExp` ਇੰਸਟੈਂਸ ਹੈ।
- ਯੂਜ਼ਰ ਇਨਪੁੱਟ ਜਾਂ ਕਨਫਿਗਰੇਸ਼ਨ ਦੀ ਵੈਲੀਡੇਸ਼ਨ ਲਈ ਇੱਕ ਸਧਾਰਣ ਬੂਲੀਅਨ ਗਾਰਡ (`true`/`false`) ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।
- ਰਨਟਾਈਮ ਗਲਤੀਆਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ ਜਦੋਂ ਬਾਅਦ ਵਾਲਾ ਕੋਡ ਮੰਨਦਾ ਹੈ ਕਿ ਸਾਰੇ ਆਈਟਮ ਰੈਗੂਲਰ-ਐਕਸਪ੍ਰੈਸ਼ਨ ਓਪਰੇਸ਼ਨਜ਼ ਨੂੰ ਸਪੋਰਟ ਕਰਦੇ ਹਨ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areRegExes(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਜਿਸ ਮੁੱਲ ਦੀ ਜਾਂਚ ਕੀਤੀ ਜਾਣੀ ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  //‎ ਇੱਥੇ patterns RegExp ਦੀ ਐਰੇ ਹੈ
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areRegExes(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areRegExes](‎../_analysis/areRegExes.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 23:20:49 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>