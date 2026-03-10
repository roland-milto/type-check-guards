# isError

## ਵਰਣਨ

ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ `value` `Error` ਦੀ ਇੰਸਟੈਂਸ ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`isError` ਉਸ ਵੇਲੇ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਕੋਈ `unknown` ਮੁੱਲ ਮਿਲੇ (ਜਿਵੇਂ `catch` ਬਲਾਕ, ਕਿਸੇ ਕਾਲਬੈਕ, ਜਾਂ ਕਿਸੇ ਬਾਹਰੀ ਲਾਇਬ੍ਰੇਰੀ
ਤੋਂ) ਅਤੇ ਤੁਹਾਨੂੰ `message`, `name`, ਜਾਂ `stack` ਪੜ੍ਹਨ ਤੋਂ ਪਹਿਲਾਂ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਇਹ ਨਿਰਧਾਰਤ ਕਰਨਾ ਹੋਵੇ ਕਿ ਕੀ ਇਹ
`Error` ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `unknown` ਮੁੱਲਾਂ (ਜਿਵੇਂ `catch` ਤੋਂ) ਨੂੰ `Error` ਵਜੋਂ ਟ੍ਰੀਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਗਾਰਡ ਕਰਨ ਲਈ `isError` ਵਰਤੋ।

### ਫਾਇਦੇ

- ਇਹ ਜਾਂਚਣ ਲਈ ਕਿ ਕੋਈ ਮੁੱਲ `Error` ਦੀ ਇੰਸਟੈਂਸ ਹੈ ਜਾਂ ਨਹੀਂ, ਇੱਕ ਸੌਖੀ ਰਨਟਾਈਮ ਚੈਕ ਮੁਹੱਈਆ ਕਰਦਾ ਹੈ।
- `message` ਜਾਂ `stack` ਵਰਗੀਆਂ `Error` ਪ੍ਰਾਪਰਟੀਜ਼ ਤੱਕ ਪਹੁੰਚ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਅਣਜਾਣ ਇਨਪੁੱਟਸ ਨੂੰ ਨੈਰੋ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
- `catch`, ਬਾਹਰੀ APIs, ਜਾਂ ਬਿਨਾਂ ਟਾਈਪ ਵਾਲੇ ਸਰੋਤਾਂ ਤੋਂ ਆਏ ਮੁੱਲਾਂ ਨੂੰ ਹੈਂਡਲ ਕਰਦੇ ਸਮੇਂ ਰਨਟਾਈਮ ਐਕਸੈਪਸ਼ਨਾਂ ਦੇ ਖ਼ਤਰੇ ਨੂੰ
  ਘਟਾਉਂਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isError(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: `Error` ਟਾਈਪ ਦੇ ਖ਼ਿਲਾਫ਼ ਚੈਕ ਕਰਨ ਲਈ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isError(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isError](‎../_analysis/isError.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 6 February 2026 at 12:46:41 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>