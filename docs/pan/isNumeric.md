# isNumeric

## ਵਰਣਨ

`isNumeric` ਦਿੱਤੇ ਗਏ `value` ਨੂੰ `NUMERIC_TYPES` ਦੇ ਮੁਕਾਬਲੇ ਉਸਦੀ resolved type ਚੈਕ ਕਰਕੇ ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਕੀ ਉਹ ਅੰਕੀ
ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਅੰਕੀ ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਨਪੁੱਟਾਂ (ਜਿਵੇਂ API payloads, ਫਾਰਮ ਮੁੱਲ, ਕਨਫਿਗਰੇਸ਼ਨ) ਦੀ ਵੈਧਤਾ ਜਾਂਚਣ ਲਈ `isNumeric` ਵਰਤੋ, ਅਤੇ
`NUMERIC_TYPES` ਦੇ ਅਨੁਸਾਰ ਅੰਕੀ-ਜਿਹੀਆਂ ਕਿਸਮਾਂ (ਜਿਵੇਂ `BigInt`) ਨੂੰ ਇਕਸਾਰ ਤਰੀਕੇ ਨਾਲ ਸਵੀਕਾਰ ਕਰੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isNumeric` ਇੱਕ ਬੂਲੀਅਨ-ਵਾਪਸ ਕਰਨ ਵਾਲਾ predicate ਹੈ; ਇਸਨੂੰ runtime ਚੈਕ ਵਜੋਂ ਵਰਤੋ ਕਿ ਕੀ ਕੋਈ ਮੁੱਲ ਲਾਇਬ੍ਰੇਰੀ-ਪਰਿਭਾਸ਼ਿਤ ਅੰਕੀ
> ਕਿਸਮਾਂ ਦੇ ਸੈੱਟ ਵਿੱਚ ਆਉਂਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਅੰਕੀ ਪਛਾਣ ਵਾਲੀ ਲਾਜ਼ਿਕ ਨੂੰ ਕੇਂਦਰੀਕ੍ਰਿਤ ਕਰਨ ਅਤੇ ਕੋਡਬੇਸ ਭਰ ਵਿੱਚ ਚੈਕਾਂ ਨੂੰ ਇਕਸਾਰ ਰੱਖਣ ਲਈ `getTypeOf` ਨਾਲ `NUMERIC_TYPES`
  ਵਰਤਦਾ ਹੈ।
- ਸੌਖੀ ਬ੍ਰਾਂਚਿੰਗ ਅਤੇ ਗਾਰਡ-ਸਟਾਈਲ ਵਰਤੋਂ ਲਈ ਇੱਕ ਸਧਾਰਣ ਬੂਲੀਅਨ (`true`/`false`) ਵਾਪਸ ਕਰਦਾ ਹੈ।
- `NUMERIC_TYPES` ਵੱਲੋਂ ਪਰਿਭਾਸ਼ਿਤ ਮੁਤਾਬਕ ਕਈ ਅੰਕੀ ਰੂਪਾਂ (ਜਿਵੇਂ `number`, `BigInt`) ਨੂੰ ਸਮਰਥਨ ਦਿੰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isNumeric(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਅੰਕੀ ਕਿਸਮ ਲਈ ਚੈਕ ਕਰਨ ਵਾਸਤੇ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    //‎ v nu library de type rules anusaar numeric mannia janda hai
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isNumeric(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isNumeric](‎../_analysis/isNumeric.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 6 February 2026 at 15:54:00 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>