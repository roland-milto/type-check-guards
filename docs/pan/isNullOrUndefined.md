# isNullOrUndefined

## ਵਰਣਨ

ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ `null` ਜਾਂ `undefined` ਹੈ ਕਿ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`isNullOrUndefined` ਨੂੰ ਉਸ ਵੇਲੇ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ `null` ਅਤੇ `undefined` ਦੋਵਾਂ ਨੂੰ “ਕੋਈ ਮੁੱਲ ਨਹੀਂ” ਵਜੋਂ ਟ੍ਰੀਟ ਕਰਨ ਦੀ ਲੋੜ
ਹੋਵੇ, ਜਿਵੇਂ ਕਿ ਵਿਕਲਪਿਕ ਇਨਪੁੱਟਸ ਦੀ ਵੈਲੀਡੇਸ਼ਨ, API ਪੇਲੋਡਸ ਨੂੰ ਨਾਰਮਲਾਈਜ਼ ਕਰਨਾ, ਜਾਂ ਕਿਸੇ ਸੰਭਾਵਤ ਤੌਰ ‘ਤੇ ਗੁੰਮ ਮੁੱਲ ਨੂੰ
ਡੀਰੈਫਰੈਂਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕੋਡ ਪਾਥਸ ਨੂੰ ਗਾਰਡ ਕਰਨਾ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isNullOrUndefined` ਨੂੰ ਪ੍ਰਾਪਰਟੀਜ਼ ਐਕਸੈੱਸ ਕਰਨ ਜਾਂ ਮੈਥਡ ਕਾਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਗੁੰਮ ਮੁੱਲਾਂ ਤੋਂ ਬਚਾਅ ਲਈ ਵਰਤੋ; ਇਹ ਸਿਰਫ਼
`null` ਅਤੇ `undefined` ਲਈ ਹੀ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਇੱਕ ਹੀ ਥਾਂ ‘ਤੇ `null` ਅਤੇ `undefined` ਨੂੰ ਪਛਾਣਣ ਲਈ ਸਾਫ਼ ਤੇ ਦੁਬਾਰਾ ਵਰਤਣਯੋਗ ਗਾਰਡ ਦਿੰਦਾ ਹੈ।
- ਇੱਕ ਸਧਾਰਣ ਬੂਲੀਅਨ (`true`/`false`) ਵਾਪਸ ਕਰਦਾ ਹੈ ਜੋ ਸ਼ਰਤਾਂ ਅਤੇ ਵੈਲੀਡੇਸ਼ਨਾਂ ਵਿੱਚ ਆਸਾਨੀ ਨਾਲ ਜੋੜਿਆ ਜਾ ਸਕਦਾ ਹੈ।
- ਪ੍ਰਾਪਰਟੀਜ਼ ਐਕਸੈੱਸ ਕਰਨ ਜਾਂ ਮੈਥਡ ਕਾਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਗੁੰਮ ਮੁੱਲਾਂ ਦੀ ਜਾਂਚ ਕਰਕੇ ਆਮ ਰਨਟਾਈਮ ਗਲਤੀਆਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isNullOrUndefined(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: `null` ਜਾਂ `undefined` ਲਈ ਜਾਂਚਿਆ ਜਾਣ ਵਾਲਾ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  //‎ ਗੁੰਮ ਮੁੱਲ ਨੂੰ ਸੰਭਾਲੋ
}

console.log(isNullOrUndefined(b)); // ਸੱਚ
console.log(isNullOrUndefined(c)); // ਝੂਠ

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isNullOrUndefined(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isNullOrUndefined](‎../_analysis/isNullOrUndefined.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 00:34:53 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>