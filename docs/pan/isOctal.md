# isOctal

## ਵਰਣਨ

ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਕੋਈ ਮੁੱਲ ਵੈਧ ਆਕਟਲ ਲਿਟਰਲ ਸਟਰਿੰਗ ਹੈ ਜਾਂ ਨਹੀਂ (ਜਿਵੇਂ `0o755`)।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਯੂਜ਼ਰ ਇਨਪੁੱਟ ਜਾਂ ਕਨਫਿਗਰੇਸ਼ਨ ਮੁੱਲਾਂ ਦੀ ਵੈਲੀਡੇਸ਼ਨ ਕਰੋ ਜੋ ਆਕਟਲ ਲਿਟਰਲ ਸਟਰਿੰਗ ਵਜੋਂ ਦਰਸਾਏ ਜਾਣ ਲਾਜ਼ਮੀ ਹਨ (ਉਦਾਹਰਨ ਲਈ, ਫਾਈਲ
ਪਰਮਿਸ਼ਨ ਮੋਡ ਜਿਵੇਂ `0o644`) ਪਾਰਸ ਕਰਨ ਜਾਂ ਕਨਵਰਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isOctal` ਇੱਕ ਟਾਈਪ ਗਾਰਡ ਹੈ (`value is string`)। `true` ਨਤੀਜੇ ਤੋਂ ਬਾਅਦ, TypeScript ਜਾਂਚੇ ਗਏ ਵੇਰੀਏਬਲ ਨੂੰ `string` ਤੱਕ
> ਨੈਰੋ ਕਰ ਦਿੰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਸਖ਼ਤ ਟਾਈਪ ਗਾਰਡ ਦਿੰਦਾ ਹੈ: `true` ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਇਨਪੁੱਟ ਇੱਕ ਸਟਰਿੰਗ ਹੋਵੇ ਜੋ ਆਕਟਲ ਲਿਟਰਲ ਫਾਰਮੈਟ ਨਾਲ ਮੇਲ
  ਖਾਂਦੀ ਹੋਵੇ।
- ਖਾਲੀ ਸਟਰਿੰਗਾਂ ਅਤੇ ਅੱਗੇ/ਪਿੱਛੇ ਵ੍ਹਾਈਟਸਪੇਸ (ASCII ਕੰਟਰੋਲ/ਸਪੇਸ) ਵਾਲੀਆਂ ਸਟਰਿੰਗਾਂ ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਅਣਜਾਣੇ ਮੇਲ ਘੱਟ
  ਹੁੰਦੇ ਹਨ।
- ਵਿਕਲਪਿਕ ਸਾਈਨ ਨੂੰ ਸਹਾਰਦਾ ਹੈ ਅਤੇ `0o`/`0O` ਪ੍ਰੀਫਿਕਸ ਲਈ ਕੇਸ-ਇਨਸੈਂਸਿਟਿਵ ਹੈ।
- ਗੈਰ-ਸਟ੍ਰਿੰਗ ਇਨਪੁੱਟ ਲਈ `false` ਵਾਪਸ ਕਰਕੇ ਲੀਨਿਅੰਟ ਰਹਿੰਦਾ ਹੈ, ਥ੍ਰੋ ਕਰਨ ਦੀ ਬਜਾਏ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isOctal(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਾਂਚਿਆ ਜਾਣ ਵਾਲਾ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // ਸੱਚ
console.log(isOctal(b)); // ਸੱਚ
console.log(isOctal(c)); // ਝੂਠ
console.log(isOctal(d)); // ਝੂਠ

if (isOctal(a)) {
  //‎ ਇੱਥੇ a ਸਤਰ ਹੈ
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isOctal(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isOctal](‎../_analysis/isOctal.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 15:42:49 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>