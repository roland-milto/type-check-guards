# isFilledArray

## ਵਰਣਨ

`value` ਨੂੰ ਚੈਕ ਕਰਦਾ ਹੈ ਕਿ ਕੀ ਇਹ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਐਲਿਮੈਂਟ ਵਾਲਾ ਐਰੇ ਹੈ, ਅਤੇ `true` ਜਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਇਨਕਮਿੰਗ ਡਾਟਾ (ਜਿਵੇਂ API ਪੇਲੋਡ, ਫਾਰਮ ਵੈਲਿਊਜ਼, ਕਨਫਿਗਰੇਸ਼ਨ) ਨੂੰ ਇਟਰੇਟ ਕਰਨ, ਪਹਿਲਾ ਐਲਿਮੈਂਟ ਐਕਸੈਸ ਕਰਨ, ਜਾਂ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਆਈਟਮ
ਦੀ ਲੋੜ ਵਾਲੀ ਲਾਜ਼ਿਕ ਲਗਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ `isFilledArray` ਵਰਤੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isFilledArray` ਇੱਕ ਰਨਟਾਈਮ ਗਾਰਡ ਹੈ ਜੋ ਬੂਲੀਅਨ ਵਾਪਸ ਕਰਦਾ ਹੈ; ਇਹ ਐਰੇ ਦੇ ਨਾ-ਖਾਲੀ ਹੋਣ ਦੀ ਪੁਸ਼ਟੀ ਤੋਂ ਇਲਾਵਾ ਐਲਿਮੈਂਟ ਟਾਈਪਾਂ
> ਨੂੰ ਹੋਰ ਨੈਰੋ ਨਹੀਂ ਕਰਦਾ।

### ਫਾਇਦੇ

- `Array.isArray` ਤੇ ਲੰਬਾਈ ਚੈਕ ਵਰਤ ਕੇ ਨਾ-ਖਾਲੀ ਐਰੇ ਲਈ ਸੌਖੀ ਤੇ ਤੇਜ਼ ਜਾਂਚ।
- ਜਦੋਂ ਕੋਡ ਮੰਨ ਲੈਂਦਾ ਹੈ ਕਿ ਐਰੇ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਐਲਿਮੈਂਟ ਹੈ, ਤਾਂ ਰਨਟਾਈਮ ਗਲਤੀਆਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।
- ਸਾਫ਼ ਬੂਲੀਅਨ ਨਤੀਜਾ: ਨਾ-ਖਾਲੀ ਐਰੇ ਲਈ `true` ਅਤੇ ਨਹੀਂ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isFilledArray(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਿਸ ਮੁੱਲ ਨੂੰ ਚੈਕ ਕਰਨਾ ਹੈ ਕਿ ਕੀ ਇਹ ਨਾ-ਖਾਲੀ ਐਰੇ ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  //‎ ਇਨਪੁੱਟ ਰਨਟਾਈਮ ਤੇ ਖਾਲੀ ਨਾ ਹੋਣ ਵਾਲੀ ਐਰੇ ਹੈ
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isFilledArray(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isFilledArray](‎../_analysis/isFilledArray.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 6 February 2026 at 11:48:22 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>