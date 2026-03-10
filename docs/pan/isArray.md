# isArray

## ਵਰਣਨ

`isArray` ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ ਐਰੇ ਹੈ ਜਾਂ ਨਹੀਂ ਅਤੇ ਜੇ ਹੈ ਤਾਂ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ, ਨਹੀਂ ਤਾਂ `false`।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਅਣਜਾਣ ਡਾਟਾ (ਜਿਵੇਂ, ਪਾਰਸ ਕੀਤਾ JSON ਜਾਂ API ਰਿਸਪਾਂਸ) ਦੀ ਤਸਦੀਕ ਕਰੋ ਤਾਂ ਜੋ ਇਟਰੇਟ ਕਰਨ, ਇੰਡੈਕਸ ਕਰਨ ਜਾਂ `.length` ਐਕਸੈਸ ਕਰਨ ਤੋਂ
ਪਹਿਲਾਂ ਇਹ ਯਕੀਨੀ ਬਣਾਇਆ ਜਾ ਸਕੇ ਕਿ ਮੁੱਲ ਇੱਕ ਐਰੇ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਜਦੋਂ ਤੁਹਾਨੂੰ ਐਰੇ ਲਈ ਰਨਟਾਈਮ ਚੈਕ ਦੀ ਲੋੜ ਹੋਵੇ ਤਾਂ `isArray` ਵਰਤੋ; ਇਹ ਬੂਲੀਅਨ ਵਾਪਸ ਕਰਦਾ ਹੈ ਅਤੇ `unknown` ਮੁੱਲਾਂ ਨਾਲ ਕਾਲ
> ਕਰਨਾ ਸੁਰੱਖਿਅਤ ਹੈ।

### ਫਾਇਦੇ

- ਵੱਖ-ਵੱਖ ਰੀਅਲਮਾਂ (ਜਿਵੇਂ, iframes) ਵਿੱਚ ਭਰੋਸੇਯੋਗ ਐਰੇ ਪਛਾਣ ਲਈ ਬਿਲਟ-ਇਨ `Array.isArray` ਵਰਤਦਾ ਹੈ।
- ਗਾਰਡਾਂ ਅਤੇ ਬ੍ਰਾਂਚਿੰਗ ਲੌਜਿਕ ਲਈ ਢੁੱਕਵਾਂ ਸਧਾਰਣ ਬੂਲੀਅਨ ਨਤੀਜਾ (`true`/`false`) ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਕਿਸੇ ਵੀ ਇਨਪੁੱਟ ਟਾਈਪ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ ਕਿਉਂਕਿ ਪੈਰਾਮੀਟਰ `unknown` ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isArray(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਾਂਚਿਆ ਜਾਣ ਵਾਲਾ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  //‎ input runtime te ik array ae
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isArray(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isArray](‎../_analysis/isArray.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 6 February 2026 at 11:31:38 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>