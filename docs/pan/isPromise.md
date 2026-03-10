# isPromise

## ਵਰਣਨ

ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤੀ ਗਈ ਵੈਲਯੂ `Promise` ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਅਣਜਾਣ ਇਨਪੁੱਟਾਂ ਨੂੰ `Promise` ਵਾਂਗ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ `isPromise` ਵਰਤੋ, ਜਿਵੇਂ ਕਿ ਪਲੱਗਇਨਾਂ, ਡਾਇਨਾਮਿਕ ਇੰਪੋਰਟਾਂ,
ਜਾਂ ਢਿੱਲੇ-ਟਾਈਪ ਵਾਲੀਆਂ APIs ਤੋਂ ਵਾਪਸ ਆਉਣ ਵਾਲੀਆਂ ਵੈਲਯੂਜ਼ ਨੂੰ ਹੈਂਡਲ ਕਰਦੇ ਸਮੇਂ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isPromise` `instanceof Promise` ਰਾਹੀਂ ਚੈੱਕ ਕਰਦਾ ਹੈ, ਇਸ ਲਈ ਇਹ ਸਿਰਫ਼ ਅਸਲੀ `Promise` ਇੰਸਟੈਂਸਾਂ ਲਈ ਹੀ `true` ਵਾਪਸ ਕਰਦਾ
> ਹੈ (ਜਨਰਲ thenables ਲਈ ਨਹੀਂ)।

### ਫਾਇਦੇ

- ਇਹ ਚੈੱਕ ਕਰਨ ਲਈ ਸੌਖਾ ਰਨਟਾਈਮ ਤਰੀਕਾ ਦਿੰਦਾ ਹੈ ਕਿ ਕੋਈ ਵੈਲਯੂ `Promise` ਹੈ ਜਾਂ ਨਹੀਂ।
- ਉਹ ਕੋਡ ਪਾਥਾਂ ਦੀ ਰੱਖਿਆ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ ਜਿਨ੍ਹਾਂ ਨੂੰ ਅਸਲੀ `Promise` ਇੰਸਟੈਂਸ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ, ਅਤੇ ਭਰੋਸੇਯੋਗ ਤੌਰ ‘ਤੇ
  `true` ਜਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਅਸਲੀ `Promise` ਇੰਸਟੈਂਸ ਦੀ ਸ਼ਰਤ ਲਾ ਕੇ “thenable” ਆਬਜੈਕਟਾਂ (ਜਿਵੇਂ, `{ then() {} }`) ਤੋਂ ਆਉਣ ਵਾਲੇ ਗਲਤ ਪਾਜ਼ਿਟਿਵ ਤੋਂ
  ਬਚਾਉਂਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isPromise(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਿਸ ਵੈਲਯੂ ਦੀ ਜਾਂਚ ਕਰਨੀ ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // ਸੱਚ
console.log(isPromise(b)); // ਝੂਠ
console.log(isPromise(123)); // ਝੂਠ
console.log(isPromise(null)); // ਝੂਠ

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isPromise(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isPromise](‎../_analysis/isPromise.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 23:53:53 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>