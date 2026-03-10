# isObject

## ਵਰਣਨ

ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ `value` ਇੱਕ `object` ਹੈ ਜਾਂ ਨਹੀਂ (`null` ਤੋਂ ਇਲਾਵਾ)।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`isObject` ਨੂੰ ਅਣਜਾਣ inputs (ਜਿਵੇਂ parsed JSON, API responses, event payloads) ਨੂੰ properties ਤੱਕ ਪਹੁੰਚ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ
validate ਕਰਨ ਲਈ ਵਰਤੋ, ਤਾਂ ਜੋ ਇਹ ਯਕੀਨੀ ਬਣੇ ਕਿ ਮੁੱਲ ਇੱਕ object ਹੈ ਅਤੇ `null` ਨਹੀਂ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isObject` ਇੱਕ runtime guard ਹੈ ਜੋ boolean ਵਾਪਸ ਕਰਦਾ ਹੈ; ਇਹ ਕਿਸੇ ਖਾਸ object shape ਤੱਕ narrow ਨਹੀਂ ਕਰਦਾ। ਜਦੋਂ ਤੁਹਾਨੂੰ
> ਹੋਰ ਮਜ਼ਬੂਤ typing ਦੀ ਲੋੜ ਹੋਵੇ, ਤਾਂ ਇਸਨੂੰ ਵਾਧੂ checks (ਜਿਵੇਂ property ਦੀ ਮੌਜੂਦਗੀ) ਨਾਲ ਮਿਲਾ ਕੇ ਵਰਤੋ।

### ਫਾਇਦੇ

- ਸਿਰਫ਼ ਉਹਨਾਂ ਗੈਰ-`null` ਮੁੱਲਾਂ ਲਈ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਿਨ੍ਹਾਂ ਦਾ `typeof` `"object"` ਹੁੰਦਾ ਹੈ।
- ਆਮ JavaScript ਗਲਤੀ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ ਜਿੱਥੇ `null` ਨੂੰ ਨਹੀਂ ਤਾਂ object ਮੰਨ ਲਿਆ ਜਾਂਦਾ ਹੈ।
- ਸਧਾਰਣ objects ਅਤੇ built-in object instances (ਜਿਵੇਂ `Date`, `RegExp`) ਲਈ ਕੰਮ ਕਰਦਾ ਹੈ।
- ਸਰਲ, ਤੇਜ਼ runtime ਚੈਕ ਜੋ defensive programming ਅਤੇ input validation ਲਈ ਉਚਿਤ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isObject(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਉਹ ਮੁੱਲ ਜਿਸਦੀ ਜਾਂਚ ਕਰਨੀ ਹੈ ਕਿ ਕੀ ਇਹ `object` ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  //‎ input ਰਨਟਾਈਮ ਤੇ non-null object ਹੈ
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isObject(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isObject](‎../_analysis/isObject.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 00:19:53 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>