# areErrors

## ਵਰਣਨ

ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ ਐਰੇ ਖਾਲੀ ਨਹੀਂ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ ਸਿਰਫ਼ `Error` ਆਬਜੈਕਟ ਹਨ, ਅਤੇ `true` ਜਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਇਹ ਵੈਲੀਡੇਟ ਕਰੋ ਕਿ ਰਨਟਾਈਮ ਵੱਲੋਂ ਦਿੱਤਾ ਗਿਆ `unknown[]` (ਜਿਵੇਂ ਇਕੱਠੀਆਂ ਨਾਕਾਮੀਆਂ, ਵੈਲੀਡੇਸ਼ਨ ਨਤੀਜੇ, ਜਾਂ ਡੀਸੀਰੀਅਲਾਈਜ਼ ਕੀਤਾ
ਡਾਟਾ) ਇਟਰੇਟ ਕਰਨ, ਲੌਗ ਕਰਨ, ਜਾਂ ਮੁੜ ਥ੍ਰੋ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ `Error` ਆਬਜੈਕਟਾਂ ਦੀ ਇੱਕ ਨਾ-ਖਾਲੀ ਲਿਸਟ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areErrors` ਸਿਰਫ਼ ਉਸ ਭਰੀ ਹੋਈ ਐਰੇ ਲਈ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰ ਆਈਟਮ ਇੱਕ `Error` ਹੋਵੇ; ਖਾਲੀ ਐਰੇ ਲਈ ਜਾਂ ਜੇ ਕੋਈ ਵੀ
> ਐਲਿਮੈਂਟ `Error` ਨਹੀਂ ਹੈ ਤਾਂ ਇਹ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਹਰ ਐਲਿਮੈਂਟ ਇੱਕ `Error` ਇੰਸਟੈਂਸ ਹੈ, ਜਿਸ ਨਾਲ ਸੁਰੱਖਿਅਤ ਐਰਰ ਹੈਂਡਲਿੰਗ ਅਤੇ ਲੌਗਿੰਗ ਸੰਭਵ ਹੁੰਦੀ ਹੈ।
- ਖਾਲੀ ਐਰੇਜ਼ ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਅਣਜਾਣੇ ਵਿੱਚ “ਕੋਈ ਐਰਰ ਨਹੀਂ” ਵਾਲੀਆਂ ਹਾਲਤਾਂ ਨੂੰ ਵੈਧ ਐਰਰ ਲਿਸਟ ਸਮਝਣ ਤੋਂ ਬਚਾਇਆ ਜਾਂਦਾ ਹੈ।
- `unknown[]` ਇਨਪੁੱਟਸ (ਜਿਵੇਂ APIs ਤੋਂ ਜਾਂ `catch` ਬਲੌਕਾਂ ਤੋਂ) ਨਾਲ ਨਿਪਟਦੇ ਸਮੇਂ ਇਹ ਰਨਟਾਈਮ ਗਾਰਡ ਵਜੋਂ ਚੰਗੀ ਤਰ੍ਹਾਂ ਕੰਮ ਕਰਦਾ
  ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areErrors(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: `Error` ਆਬਜੈਕਟਾਂ ਲਈ ਚੈੱਕ ਕਰਨ ਵਾਸਤੇ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  //‎ value Error objects دی اک غیر خالی array اے
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areErrors(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areErrors](‎../_analysis/areErrors.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 6 February 2026 at 12:35:05 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>