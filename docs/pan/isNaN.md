# isNaN

## ਵਰਣਨ

ਸਟ੍ਰਿੰਗਾਂ ਨੂੰ ਬਦਲੇ ਬਿਨਾਂ, ਦਿੱਤੇ ਗਏ `value` ਬਾਰੇ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਕੀ ਇਹ `number` ਕਿਸਮ ਦਾ `NaN` ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਗੈਰ-ਭਰੋਸੇਯੋਗ ਜਾਂ ਢਿੱਲੀ ਟਾਈਪ ਵਾਲੇ ਇਨਪੁੱਟ (ਜਿਵੇਂ API payloads, ਫਾਰਮ ਮੁੱਲ, parsed JSON) ਦੀ ਤਸਦੀਕ ਕਰੋ ਤਾਂ ਜੋ ਖਾਸ `NaN` ਮੁੱਲ
ਨੂੰ ਪਛਾਣ ਕੇ ਉਸਨੂੰ ਖੁੱਲ੍ਹੇ ਤੌਰ ਤੇ ਹੈਂਡਲ ਕੀਤਾ ਜਾ ਸਕੇ, ਅਤੇ ਗੈਰ-ਨੰਬਰ ਇਨਪੁੱਟ ਨੂੰ `NaN` ਨਾ ਮੰਨਿਆ ਜਾਵੇ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਜਦੋਂ ਤੁਹਾਨੂੰ ਖਾਸ ਸੰਖਿਆਤਮਕ ਮੁੱਲ `NaN` ਨੂੰ ਪਛਾਣਣ ਦੀ ਲੋੜ ਹੋਵੇ ਅਤੇ ਇਹ ਯਕੀਨੀ ਬਣਾਉਣਾ ਹੋਵੇ ਕਿ ਇਨਪੁੱਟ ਵਾਕਈ `number` ਹੈ (ਕੋਈ
> string-to-number conversion ਨਹੀਂ), ਤਾਂ `isNaN` ਵਰਤੋ।

### ਫਾਇਦੇ

- ਬਿਨਾਂ ਗੈਰ-ਨੰਬਰਾਂ (ਜਿਵੇਂ ਸਟਰਿੰਗਾਂ) ਨੂੰ ਨੰਬਰਾਂ ਵਿੱਚ ਬਦਲੇ, ਜਾਂਚਦਾ ਹੈ ਕਿ ਕੋਈ ਮੁੱਲ `NaN` ਹੈ ਕਿ ਨਹੀਂ।
- ਸਿਰਫ਼ ਉਹਨਾਂ ਮੁੱਲਾਂ ਲਈ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ ਜੋ `number` ਕਿਸਮ ਦੇ ਵੀ ਹਨ ਅਤੇ `NaN` ਵੀ ਹਨ।
- `unknown` ਇਨਪੁੱਟ ਲਈ ਸੁਰੱਖਿਅਤ ਹੈ ਅਤੇ ਅਪਰੋਖ ਤਬਦੀਲੀਆਂ ਤੋਂ ਆਉਣ ਵਾਲੇ ਗਲਤ ਸਕਾਰਾਤਮਕ ਨਤੀਜਿਆਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isNaN(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਉਹ ਮੁੱਲ ਜਿਸਦੀ ਜਾਂਚ ਕਰਨੀ ਹੈ ਕਿ ਕੀ ਇਹ `number` ਕਿਸਮ ਦਾ `NaN` ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // ਸੱਚ
console.log(isNaN(b)); // ਝੂਠ
console.log(isNaN(c)); // ਝੂਠ

if (isNaN(a)) {
  //‎ a ਇਕ ਨੰਬਰ ਹੈ ਤੇ ਖਾਸ ਤੌਰ ਤੇ NaN ਹੈ
}
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isNaN(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isNaN](‎../_analysis/isNaN.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 15:47:31 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>