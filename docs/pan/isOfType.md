# isOfType

## ਵਰਣਨ

ਦਿੱਤੇ ਗਏ `value` ਦੇ ਕਿਸੇ ਨਿਰਧਾਰਤ ਟਾਈਪ ਸਟਰਿੰਗ ਨਾਲ ਮੇਲ ਖਾਣ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ, primitives ਲਈ `typeof` ਅਤੇ ਜਟਿਲ ਟਾਈਪਾਂ ਲਈ
fallback ਵਰਤ ਕੇ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`unknown` ਇਨਪੁੱਟਾਂ (ਜਿਵੇਂ API ਜਵਾਬ, ਯੂਜ਼ਰ ਇਨਪੁੱਟ, parsed JSON) ਨੂੰ ਵੈਲੀਡੇਟ ਅਤੇ narrow ਕਰੋ—ਟਾਈਪ-ਖਾਸ ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ
ਪਹਿਲਾਂ ਇਹ ਚੈਕ ਕਰਕੇ ਕਿ ਮੁੱਲ ਉਮੀਦ ਕੀਤੀ ਟਾਈਪ ਸਟਰਿੰਗ ਦਾ ਹੈ ਜਾਂ ਨਹੀਂ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `unknown` ਮੁੱਲਾਂ ਨਾਲ ਕੰਮ ਕਰਦੇ ਸਮੇਂ runtime ਟਾਈਪਾਂ ਦੇ ਆਧਾਰ 'ਤੇ branching ਕਰਨ ਲਈ `isOfType` ਵਰਤੋ; ਇਹ `true`/`false` ਵਾਪਸ
> ਕਰਦਾ ਹੈ ਅਤੇ `null` ਤੇ `undefined` ਨੂੰ ਖਾਸ ਤੌਰ 'ਤੇ ਟ੍ਰੀਟ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਤੇਜ਼ੀ ਤੇ ਸਪਸ਼ਟਤਾ ਲਈ primitives ਨੂੰ ਸਿੱਧੇ `typeof` ਰਾਹੀਂ ਚੈਕ ਕਰਦਾ ਹੈ।
- `null` ਅਤੇ `undefined` ਨੂੰ ਠੀਕ ਤਰੀਕੇ ਨਾਲ ਹੈਂਡਲ ਕਰਦਾ ਹੈ, ਜਿਨ੍ਹਾਂ ਨੂੰ ਕੇਵਲ `typeof` ਨਾਲ ਮਨਚਾਹੇ ਤਰੀਕੇ ਨਾਲ ਵੱਖਰਾ ਨਹੀਂ ਕੀਤਾ
  ਜਾ ਸਕਦਾ।
- `getTypeOf` ਦੀ ਵਰਤੋਂ ਕਰਕੇ fallback ਤੁਲਨਾ ਰਾਹੀਂ ਜਟਿਲ ਜਾਂ ਕਸਟਮ ਟਾਈਪ ਸਟਰਿੰਗਾਂ ਨੂੰ ਸਹਿਯੋਗ ਦਿੰਦਾ ਹੈ।
- guards ਅਤੇ branching ਲਈ ਉਚਿਤ ਸਧਾਰਣ boolean ਨਤੀਜਾ (`true`/`false`) ਵਾਪਸ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isOfType(value, type)`

ਪੈਰਾਮੀਟਰ:

- `value`: `type` ਦੇ ਮੁਕਾਬਲੇ ਟੈਸਟ ਕਰਨ ਲਈ ਮੁੱਲ।
- `type`: ਜਿਸ ਦੇ ਮੁਕਾਬਲੇ ਚੈਕ ਕਰਨਾ ਹੈ, ਉਸ ਟਾਈਪ ਦੀ ਸਟਰਿੰਗ ਰੂਪ-ਰੇਖਾ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  //‎ ਇੱਥੇ input ਇੱਕ ਨੰਬਰ ਹੈ
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  //‎ ਇੱਥੇ input ਇੱਕ ਸਟਰਿੰਗ ਹੈ
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isOfType(value, type)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isOfType](‎../_analysis/isOfType.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 17:05:43 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>