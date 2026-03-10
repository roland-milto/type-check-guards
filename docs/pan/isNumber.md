# isNumber

## ਵਰਣਨ

`isNumber` ਚੈਕ ਕਰਦਾ ਹੈ ਕਿ ਕੋਈ ਮੁੱਲ finite, non-`NaN` ਨੰਬਰ ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਗੈਰ-ਭਰੋਸੇਯੋਗ ਸਰੋਤਾਂ (ਫਾਰਮ, ਕਵੈਰੀ ਪੈਰਾਮਜ਼, JSON ਪੇਲੋਡ) ਤੋਂ ਆਏ ਨਿਊਮੈਰਿਕ ਇਨਪੁੱਟ ਨੂੰ ਗਣਨਾਵਾਂ, ਸਟੋਰੇਜ, ਜਾਂ ਰੇਂਜ ਚੈਕ ਤੋਂ
ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰੋ, ਤਾਂ ਜੋ ਸਿਰਫ਼ finite ਨੰਬਰ ਹੀ ਪਾਸ (`true`) ਹੋਣ ਅਤੇ ਬਾਕੀ ਸਭ ਲਈ `false` ਵਾਪਸ ਆਵੇ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਅੰਕਗਣਿਤ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ `unknown` ਮੁੱਲਾਂ ਨੂੰ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ `isNumber` ਵਰਤੋ; ਇਹ `NaN`, `Infinity`, ਅਤੇ `-Infinity` ਨੂੰ
> ਰੱਦ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਸਿਰਫ਼ ਅਸਲੀ JavaScript ਨੰਬਰਾਂ ਲਈ ਹੀ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ (ਟਾਈਪ ਚੈਕ ਨਾਲ ਨਾਲ `NaN` ਅਤੇ infinity ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ)।
- ਆਮ ਵੈਲੀਡੇਸ਼ਨ ਬੱਗਾਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ ਜਿੱਥੇ `NaN`, `Infinity`, ਜਾਂ `-Infinity` ਗਲਤੀ ਨਾਲ ਨੰਬਰ ਵਜੋਂ ਪਾਸ ਹੋ ਜਾਂਦੇ ਹਨ।
- ਅਣਜਾਣ ਇਨਪੁੱਟ (ਜਿਵੇਂ JSON, ਯੂਜ਼ਰ ਇਨਪੁੱਟ, ਬਾਹਰੀ APIs) ਲਈ ਰਨਟਾਈਮ ਗਾਰਡ ਵਜੋਂ ਚੰਗਾ ਕੰਮ ਕਰਦਾ ਹੈ।
- ਸਰਲ, ਤੇਜ਼, ਅਤੇ ਸਾਈਡ-ਇਫੈਕਟ ਤੋਂ ਮੁਕਤ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isNumber(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਚੈਕ ਕਰਨ ਲਈ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  //‎ input ik vaidh finite number ae
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isNumber(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isNumber](‎../_analysis/isNumber.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 13:10:36 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>