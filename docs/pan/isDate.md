# isDate

## ਵਰਣਨ

`isDate` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤੀ ਗਈ ਵੈਲਿਊ `Date` ਹੈ ਜਾਂ ਨਹੀਂ; `Date` ਇੰਸਟੈਂਸ ਲਈ `true` ਅਤੇ ਹੋਰਥਾਂ `false` ਵਾਪਸ ਕਰਦਾ
ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਅਣਜਾਣ ਵੈਲਿਊਆਂ (ਜਿਵੇਂ ਰਿਕਵੈਸਟ ਡਾਟਾ, ਕਾਨਫਿਗ ਵੈਲਿਊਆਂ, ਜਾਂ ਪਾਰਸ ਕੀਤਾ JSON) ਨੂੰ `Date` ਓਪਰੇਸ਼ਨ (ਜਿਵੇਂ ਫਾਰਮੈਟਿੰਗ, ਤੁਲਨਾਵਾਂ,
ਜਾਂ `toISOString()` ਕਾਲ ਕਰਨਾ) ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਅਤੇ ਨੈਰੋ ਕਰੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਰਨਟਾਈਮ 'ਤੇ `unknown` ਨੂੰ `Date` ਤੱਕ ਨੈਰੋ ਕਰਨ ਲਈ `isDate` ਵਰਤੋ; ਇਹ ਸਿਰਫ਼ ਅਸਲੀ `Date` ਇੰਸਟੈਂਸ ਲਈ ਹੀ `true` ਵਾਪਸ ਕਰਦਾ
> ਹੈ (ਡੇਟ ਸਟ੍ਰਿੰਗਾਂ ਲਈ ਨਹੀਂ)।

### ਫਾਇਦੇ

- ਇਹ ਇਕ ਸੌਖਾ ਰਨਟਾਈਮ ਗਾਰਡ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਜਾਂਚਿਆ ਜਾ ਸਕੇ ਕਿ ਕੋਈ ਵੈਲਿਊ `Date` ਹੈ ਜਾਂ ਨਹੀਂ।
- ਇਹ ਯਕੀਨੀ ਬਣਾ ਕੇ ਕਿ ਸਿਰਫ਼ `Date` ਇੰਸਟੈਂਸ ਹੀ ਵੈਲੀਡੇਸ਼ਨ ਪਾਸ ਕਰਨ, ਟਾਈਪ ਐਰਰਾਂ ਤੋਂ ਬਚਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
- ਇਹ ਅਣਜਾਣ ਇਨਪੁੱਟਾਂ (ਜਿਵੇਂ API ਪੇਲੋਡ) ਨੂੰ ਡੇਟ-ਖਾਸ ਮੈਥਡ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ ਲਾਭਦਾਇਕ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isDate(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: `Date` ਟਾਈਪ ਲਈ ਚੈੱਕ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਵੈਲਿਊ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  //‎ ਇੱਥੇ input ਇੱਕ Date ਹੈ
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isDate(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isDate](‎../_analysis/isDate.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 15:47:18 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>