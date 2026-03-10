# isFinite

## ਵਰਣਨ

ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ `value` ਇੱਕ ਫਾਈਨਾਈਟ `number` ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਨਿਊਮੈਰਿਕ ਕੈਲਕੁਲੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਅਣਜਾਣ ਇਨਪੁੱਟ (ਜਿਵੇਂ JSON, ਫਾਰਮਾਂ, ਜਾਂ APIs ਤੋਂ) ਨੂੰ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ `isFinite` ਵਰਤੋ,
ਤਾਂ ਜੋ ਯਕੀਨੀ ਬਣੇ ਕਿ ਵੈਲਿਊ ਇੱਕ ਅਸਲੀ, ਫਾਈਨਾਈਟ ਨੰਬਰ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isFinite` ਸਿਰਫ਼ ਫਾਈਨਾਈਟ ਨੰਬਰਾਂ ਲਈ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ; ਇਹ `NaN`, `Infinity`, ਅਤੇ ਕਿਸੇ ਵੀ ਨੰਬਰ ਨਾ ਹੋਣ ਵਾਲੀ ਵੈਲਿਊ ਲਈ
`false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਭਰੋਸੇਯੋਗ ਫਾਈਨਾਈਟਨੈੱਸ ਚੈਕ ਲਈ ਬਿਲਟ-ਇਨ `Number.isFinite` ਵਰਤਦਾ ਹੈ।
- ਸਿਰਫ਼ ਫਾਈਨਾਈਟ ਨੰਬਰਾਂ ਲਈ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ; `NaN`, `Infinity`, ਅਤੇ ਨੰਬਰ ਨਾ ਹੋਣ ਵਾਲੇ ਇਨਪੁੱਟ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਸਧਾਰਣ, ਸਾਈਡ-ਇਫੈਕਟ-ਮੁਕਤ ਪ੍ਰੈਡੀਕੇਟ ਜੋ ਵੈਲੀਡੇਸ਼ਨ ਅਤੇ ਗਾਰਡਿੰਗ ਲਾਜ਼ਿਕ ਲਈ ਉਚਿਤ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isFinite(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਫਾਈਨਾਈਟਨੈੱਸ ਲਈ ਚੈਕ ਕਰਨ ਵਾਲੀ ਵੈਲਿਊ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
//‎ finiteNumbers eh: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  //‎ ithhe value ik finite number aa
  const doubled = value * 2;
  console.log(doubled);
}
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isFinite(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isFinite](‎../_analysis/isFinite.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 16:31:15 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>