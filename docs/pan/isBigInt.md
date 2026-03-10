# isBigInt

## ਵਰਣਨ

`isBigInt` ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ `bigint` ਟਾਈਪ ਦਾ ਹੈ ਜਾਂ ਨਹੀਂ; BigInt ਪ੍ਰਿਮਿਟਿਵ ਲਈ `true` ਅਤੇ ਹੋਰਥਾਂ `false` ਵਾਪਸ
ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਬਿਨਾਂ ਟਾਈਪ ਵਾਲੇ ਸਰੋਤਾਂ (ਜਿਵੇਂ JSON ਪਾਰਸਿੰਗ, ਯੂਜ਼ਰ ਇਨਪੁੱਟ, ਬਾਹਰੀ APIs) ਤੋਂ ਆਉਣ ਵਾਲੇ ਮੁੱਲਾਂ ਨੂੰ ਵੈਲੀਡੇਟ ਅਤੇ ਨੈਰੋ ਕਰੋ, ਤਾਂ
ਜੋ BigInt-ਖਾਸ ਗਣਨਾਵਾਂ ਕਰਨ ਜਾਂ ਉਨ੍ਹਾਂ ਨੂੰ ਸਿਰਫ਼ BigInt ਵਾਲੇ ਫੀਲਡਾਂ ਵਿੱਚ ਸਟੋਰ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਯਕੀਨੀ ਬਣਾਇਆ ਜਾ ਸਕੇ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> BigInt ਅੰਕਗਣਿਤ (ਜਿਵੇਂ `+`, `*`) ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ, ਜਿਸ ਲਈ BigInt ਓਪਰੇਂਡ ਲੋੜੀਂਦੇ ਹਨ, `unknown` ਨੂੰ `bigint` ਤੱਕ ਨੈਰੋ ਕਰਨ
> ਲਈ `isBigInt` ਵਰਤੋ।

### ਫਾਇਦੇ

- `bigint` ਪ੍ਰਿਮਿਟਿਵ ਟਾਈਪ ਲਈ ਇਕ ਸੌਖੀ ਤੇ ਭਰੋਸੇਯੋਗ ਰਨਟਾਈਮ ਜਾਂਚ ਦਿੰਦਾ ਹੈ।
- BigInt-ਮਾਤਰ ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ `unknown` ਮੁੱਲਾਂ ਨੂੰ ਨੈਰੋ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
- ਗਲਤ ਪਾਜ਼ਿਟਿਵ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ: ਆਮ ਨੰਬਰ, ਸਟਰਿੰਗਾਂ ਅਤੇ ਹੋਰ ਟਾਈਪਾਂ ਲਈ `false` ਵਾਪਸ ਆਉਂਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isBigInt(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਾਂਚਣ ਲਈ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // ਸੱਚ
console.log(isBigInt(10));  // ਝੂਠ
console.log(isBigInt("10")); // ਝੂਠ
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isBigInt(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isBigInt](‎../_analysis/isBigInt.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 23:32:56 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>