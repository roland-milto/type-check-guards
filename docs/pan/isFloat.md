# isFloat

## ਵਰਣਨ

`isFloat` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ `value` ਇੱਕ ਸੀਮਤ ਫਲੋਟਿੰਗ-ਪੌਇੰਟ ਨੰਬਰ ਹੈ ਜਾਂ ਨਹੀਂ (ਇੱਕ `number` ਜੋ ਪੂਰਨ ਅੰਕ ਨਹੀਂ
ਹੈ)।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਯੂਜ਼ਰ ਵੱਲੋਂ ਦਿੱਤੇ ਨਿਊਮੈਰਿਕ ਇਨਪੁੱਟ ਦੀ ਵੈਲੀਡੇਸ਼ਨ ਕਰੋ ਜਿੱਥੇ ਭਿੰਨਾਤਮਕ ਮੁੱਲ ਲੋੜੀਂਦੇ ਹਨ (ਜਿਵੇਂ ਕੀਮਤਾਂ, ਮਾਪ, ਦਰਾਂ) ਅਤੇ ਪੂਰਨ
ਅੰਕ, `NaN`, ਅਤੇ ਇਨਫਿਨਿਟੀਜ਼ ਨੂੰ ਰੱਦ ਕਰੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਜਦੋਂ ਤੁਹਾਨੂੰ ਸਿਰਫ਼ ਸੀਮਤ, ਗੈਰ-ਪੂਰਨ ਅੰਕਾਂ ਵਾਲੇ ਨਿਊਮੈਰਿਕ ਇਨਪੁੱਟ ਸਵੀਕਾਰ ਕਰਨੇ ਹੋਣ, ਤਾਂ `isFloat` ਵਰਤੋ; ਇਹ ਪੂਰਨ ਅੰਕਾਂ ਅਤੇ
> ਗੈਰ-ਸੀਮਤ ਨੰਬਰਾਂ ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਸਿਰਫ਼ ਸੀਮਤ, ਗੈਰ-ਪੂਰਨ ਅੰਕਾਂ ਵਾਲੇ ਨੰਬਰਾਂ ਲਈ ਹੀ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ (ਪੂਰਨ ਅੰਕ, `NaN`, `Infinity`, ਅਤੇ `-Infinity` ਨੂੰ
  ਬਾਹਰ ਰੱਖਦਾ ਹੈ)।
- ਕਿਸੇ ਵੀ ਇਨਪੁੱਟ ਕਿਸਮ (`unknown`) ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ `typeof value === "number"` ਚੈੱਕ ਕਰਕੇ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਨੈਰੋ ਕਰਦਾ
  ਹੈ।
- ਅਨੁਮਾਨਯੋਗ ਵਰਤਾਓ ਲਈ ਬਿਲਟ-ਇਨ ਨਿਊਮੈਰਿਕ ਗਾਰਡਜ਼ (`Number.isInteger`, `Number.isFinite`) ਵਰਤਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isFloat(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਉਹ ਮੁੱਲ ਜਿਸਦੀ ਜਾਂਚ ਕਰਨੀ ਹੈ ਕਿ ਕੀ ਇਹ ਫਲੋਟਿੰਗ-ਪੌਇੰਟ ਨੰਬਰ ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    //‎ value runtime te ik number ae; eh finite ae te integer nahi
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isFloat(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isFloat](‎../_analysis/isFloat.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 16:09:14 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>