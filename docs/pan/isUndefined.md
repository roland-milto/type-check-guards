# isUndefined

## ਵਰਣਨ

ਚੈਕ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ `undefined` ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`isUndefined` ਨੂੰ ਵਿਕਲਪਿਕ ਇਨਪੁੱਟਸ ਨੂੰ ਗਾਰਡ ਕਰਨ, ਗੁੰਮ ਪ੍ਰਾਪਰਟੀਜ਼ ਨੂੰ ਡਿਟੈਕਟ ਕਰਨ, ਜਾਂ “ਨਹੀਂ ਦਿੱਤਾ” (`undefined`) ਅਤੇ
“ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ ਖਾਲੀ” (`null`) ਵਿਚਕਾਰ ਫਰਕ ਕਰਨ ਲਈ ਵਰਤੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isUndefined` ਨੂੰ ਉਸ ਵੇਲੇ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਖਾਸ ਤੌਰ 'ਤੇ `undefined` (ਨਾ ਕਿ `null`) ਨੂੰ ਡਿਟੈਕਟ ਕਰਨ ਦੀ ਲੋੜ ਹੋਵੇ। ਇਹ
> ਸੁਰੱਖਿਅਤ ਹੈ ਕਿਉਂਕਿ ਇਹ `typeof value === "undefined"` 'ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- `typeof` ਵਰਤ ਕੇ `undefined` ਲਈ ਸਾਫ਼ ਤੇ ਸਪਸ਼ਟ ਚੈਕ ਦਿੰਦਾ ਹੈ, ਨਾ-ਘੋਸ਼ਿਤ ਵੇਰੀਏਬਲਾਂ ਵਾਲੇ ਐਜ ਕੇਸਾਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।
- ਇੱਕ ਸਧਾਰਣ ਬੂਲੀਅਨ ਨਤੀਜਾ (`true`/`false`) ਵਾਪਸ ਕਰਦਾ ਹੈ ਜੋ ਗਾਰਡਜ਼, ਬ੍ਰਾਂਚਿੰਗ, ਅਤੇ ਵੈਲੀਡੇਸ਼ਨ ਲਾਜ਼ਿਕ ਲਈ ਢੁੱਕਵਾਂ ਹੈ।
- `undefined` ਨੂੰ ਹੋਰ “ਖਾਲੀ” ਮੁੱਲਾਂ ਜਿਵੇਂ `null`, `0`, `""`, ਜਾਂ `NaN` ਤੋਂ ਵੱਖਰਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isUndefined(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਚੈਕ ਕੀਤਾ ਜਾਣ ਵਾਲਾ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  //‎ ਇੱਥੇ x undefined ਹੈ
} else {
  //‎ ਇੱਥੇ x undefined ਨਹੀਂ ਹੈ
}

const a = isUndefined(undefined); // ਸੱਚ
const b = isUndefined(null);      // ਝੂਠ
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isUndefined(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isUndefined](‎../_analysis/isUndefined.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 14:04:01 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>