# isOneOfType

## ਵਰਣਨ

`isOneOfType` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ `value` ਦਿੱਤੀਆਂ ਕਿਸਮ ਸਟਰਿੰਗਾਂ ਵਿੱਚੋਂ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ ਜਾਂ
ਨਹੀਂ; ਜੇ ਕੋਈ ਵੀ ਮੇਲ ਮਿਲ ਜਾਵੇ ਤਾਂ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ, ਨਹੀਂ ਤਾਂ `false`।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਢਿੱਲੀ-ਟਾਈਪਡ ਜਾਂ ਬਾਹਰੀ ਡਾਟਾ (ਜਿਵੇਂ ਪਾਰਸ ਕੀਤਾ JSON, ਕਵੈਰੀ ਪੈਰਾਮੀਟਰ) ਦੀ ਤਸਦੀਕ ਕਰੋ—ਅੱਗੇ ਦੀ ਲੌਜਿਕ ਚਲਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਕਈ ਕਬੂਲਯੋਗ
ਰਨਟਾਈਮ ਕਿਸਮਾਂ (ਜਿਵੇਂ `number` ਜਾਂ `string`) ਦੀ ਇਜਾਜ਼ਤ ਦੇ ਕੇ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਜਦੋਂ ਤੁਸੀਂ ਰਨਟਾਈਮ ‘ਤੇ ਇਹ ਚੈੱਕ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ ਕਿ ਕੋਈ ਮੁੱਲ ਕਈ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਕਿਸਮਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਇੱਕ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ, ਤਾਂ
`isOneOfType` ਵਰਤੋਂ; ਜੇ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਕਿਸਮ ਮੇਲ ਖਾਂਦੀ ਹੋਵੇ ਤਾਂ ਇਹ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ, ਨਹੀਂ ਤਾਂ `false`।

### ਫਾਇਦੇ

- ਇੱਕੋ ਕਾਲ ਵਿੱਚ ਕਿਸੇ ਮੁੱਲ ਨੂੰ ਕਈ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਕਿਸਮਾਂ ਦੇ ਖ਼ਿਲਾਫ਼ ਚੈੱਕ ਕਰਦਾ ਹੈ, ਅਤੇ ਪਹਿਲੀ ਮੇਲ ਮਿਲਣ ‘ਤੇ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- `unknown` ਇਨਪੁੱਟਾਂ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ, ਜਿਸ ਕਰਕੇ ਇਹ ਰਨਟਾਈਮ ਬਾਊਂਡਰੀਆਂ ‘ਤੇ ਲਾਭਦਾਇਕ ਹੈ (ਜਿਵੇਂ ਬਾਹਰੀ ਡਾਟਾ, ਯੂਜ਼ਰ ਇਨਪੁੱਟ)।
- ਇਹ ਇੱਕ ਸਧਾਰਣ ਬੂਲੀਅਨ ਨਤੀਜਾ (`true`/`false`) ਦਿੰਦਾ ਹੈ ਜੋ ਸ਼ਰਤੀ ਲੌਜਿਕ ਅਤੇ ਅਗਾਊਂ ਰਿਟਰਨਾਂ ਨਾਲ ਚੰਗੀ ਤਰ੍ਹਾਂ ਜੋੜਿਆ ਜਾ ਸਕਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isOneOfType(value, types)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਉਹ ਮੁੱਲ ਜਿਸ ਨੂੰ ਨਿਰਧਾਰਤ ਕਿਸਮਾਂ ਦੇ ਮੁਕਾਬਲੇ ਚੈੱਕ ਕਰਨਾ ਹੈ।
- `types`: ਕਿਸਮ ਸਟਰਿੰਗਾਂ ਦੀ ਇੱਕ ਐਰੇ ਜੋ ਮੁੱਲ ਦੀ ਸੰਭਾਵਿਤ ਕਿਸਮਾਂ ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  //‎ input runtime te ik object ae
}

console.log(isOneOfType(3, ["number", "string"])); // sahi
console.log(isOneOfType("hello", ["number", "boolean"])); // galat

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isOneOfType(value, types)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isOneOfType](‎../_analysis/isOneOfType.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 6 February 2026 at 13:53:47 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>