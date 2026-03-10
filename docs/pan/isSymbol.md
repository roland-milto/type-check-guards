# isSymbol

## ਵਰਣਨ

`isSymbol` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ `symbol` ਕਿਸਮ ਦਾ ਹੈ ਜਾਂ ਨਹੀਂ; symbols ਲਈ `true` ਅਤੇ ਹੋਰਥਾਂ `false` ਵਾਪਸ
ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਕਿਸੇ `unknown` ਮੁੱਲ ਨੂੰ unique identifier, registry key, ਜਾਂ objects ਅਤੇ maps ਵਿੱਚ computed property key ਵਜੋਂ ਵਰਤਣ ਤੋਂ
ਪਹਿਲਾਂ ਇਹ ਵੈਲੀਡੇਟ ਕਰੋ ਕਿ ਉਹ `symbol` ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> symbol-ਸੰਬੰਧਿਤ ਫੰਕਸ਼ਨ ਕਾਲ ਕਰਨ ਜਾਂ ਇਸਨੂੰ computed property key ਵਜੋਂ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ `unknown` ਨੂੰ `symbol` ਤੱਕ narrow
> ਕਰਨ ਲਈ `isSymbol` ਵਰਤੋ।

### ਫਾਇਦੇ

- JavaScript ਦੇ `symbol` primitive type ਲਈ ਇਕ ਸਾਦੀ ਤੇ ਭਰੋਸੇਯੋਗ runtime ਜਾਂਚ ਮੁਹੱਈਆ ਕਰਦਾ ਹੈ।
- symbol-ਖਾਸ APIs ਵਰਤਣ ਜਾਂ ਇਸਨੂੰ keys ਵਜੋਂ ਸਟੋਰ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ `unknown` ਮੁੱਲਾਂ ਨੂੰ narrow ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
- `typeof` ਵਰਤ ਕੇ false positives ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ, ਜੋ `symbol` ਮੁੱਲਾਂ ਨੂੰ ਪਛਾਣਣ ਦਾ canonical ਤਰੀਕਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isSymbol(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਾਂਚਿਆ ਜਾਣ ਵਾਲਾ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  //‎ ਇੱਥੇ input ਇੱਕ symbol ਹੈ
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isSymbol(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isSymbol](‎../_analysis/isSymbol.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 14:28:14 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>