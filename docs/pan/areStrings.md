# areStrings

## ਵਰਣਨ

`areStrings` ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ ਕੀ ਇੱਕ ਐਰੇ ਗੈਰ-ਖਾਲੀ ਹੈ ਅਤੇ ਉਸਦੇ ਸਾਰੇ ਐਲਿਮੈਂਟ ਸਟਰਿੰਗ ਹਨ; ਸਿਰਫ਼ ਉਸ ਹਾਲਤ ਵਿੱਚ ਹੀ `true` ਵਾਪਸ
ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਬਾਹਰੀ ਜਾਂ ਯੂਜ਼ਰ ਵੱਲੋਂ ਦਿੱਤੇ ਡਾਟਾ (ਜਿਵੇਂ query params, JSON payloads, CSV fields) ਨੂੰ ਵੈਲੀਡੇਟ ਕਰੋ ਤਾਂ ਜੋ ਪ੍ਰੋਸੈਸ ਕਰਨ ਤੋਂ
ਪਹਿਲਾਂ ਤੁਹਾਡੇ ਕੋਲ ਸਟਰਿੰਗਾਂ ਦੀ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਲਿਸਟ ਹੋਵੇ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਸਟ੍ਰਿੰਗ-ਓਨਲੀ ਲੌਜਿਕ ਲਾਗੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਅਣਜਾਣ ਐਰੇਜ਼ ਨੂੰ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ `areStrings` ਵਰਤੋ; ਇਹ ਖਾਲੀ ਐਰੇਜ਼ ਲਈ `false` ਵਾਪਸ
> ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਹਰ ਐਲਿਮੈਂਟ ਇੱਕ ਸਟਰਿੰਗ ਹੈ ਅਤੇ ਮਿਲੇ-ਜੁਲੇ ਟਾਈਪ ਵਾਲੀਆਂ ਐਰੇਜ਼ ਨੂੰ `false` ਵਾਪਸ ਕਰਕੇ ਰੱਦ ਕਰ ਦਿੰਦਾ ਹੈ।
- ਖਾਲੀ ਐਰੇਜ਼ ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ, ਇਸ ਲਈ `true` ਸਿਰਫ਼ ਗੈਰ-ਖਾਲੀ ਸਟਰਿੰਗਾਂ ਦੀ ਲਿਸਟ ਨੂੰ ਹੀ ਦਰਸਾਉਂਦਾ ਹੈ।
- ਸਟ੍ਰਿੰਗ-ਓਨਲੀ ਓਪਰੇਸ਼ਨ (ਜਿਵੇਂ `trim`, `toLowerCase`) ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇੱਕ ਤੇਜ਼ ਰਨਟਾਈਮ ਗਾਰਡ ਵਜੋਂ ਲਾਭਦਾਇਕ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areStrings(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: Expected type `string[]`.

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  //‎ input runtime te ik non-empty string[] aa
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areStrings(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areStrings](‎../_analysis/areStrings.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 13:19:52 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>