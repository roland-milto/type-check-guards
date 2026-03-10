# areSymbols

## ਵਰਣਨ

ਚੈਕ ਕਰਦਾ ਹੈ ਕਿ ਇਨਪੁੱਟ ਇੱਕ filled ਐਰੇ ਹੈ ਜਿਸਦੇ ਸਾਰੇ ਐਲੀਮੈਂਟ ਸਿੰਬਲ ਹਨ, ਅਤੇ `true` ਜਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਇਹ ਤਸਦੀਕ ਕਰੋ ਕਿ ਇੱਕ configuration ਫੀਲਡ (ਜਿਵੇਂ ਕਿ ਸਿੰਬਲਾਂ ਵਜੋਂ ਦਰਸਾਈਆਂ unique keys ਦੀ ਲਿਸਟ) ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ
ਸਿਰਫ਼ ਸਿੰਬਲ ਹਨ, ਇਸਨੂੰ ਉਹਨਾਂ APIs ਵਿੱਚ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਜਿਨ੍ਹਾਂ ਨੂੰ `symbol[]` ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areSymbols` ਨੂੰ unknown ਇਨਪੁੱਟ ਦੀ ਤਸਦੀਕ ਲਈ ਵਰਤੋ, ਇਸਨੂੰ `symbol[]` ਵਜੋਂ ਟ੍ਰੀਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ; ਇਹ non-arrays ਅਤੇ ਖਾਲੀ
> ਐਰੇਜ਼ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- `true` ਸਿਰਫ਼ ਓਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਇਨਪੁੱਟ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੋਵੇ ਅਤੇ ਹਰ ਐਲੀਮੈਂਟ ਇੱਕ ਸਿੰਬਲ ਹੋਵੇ।
- ਅੰਦਰੂਨੀ filled-array ਚੈਕ ਰਾਹੀਂ non-arrays ਅਤੇ ਖਾਲੀ ਐਰੇਜ਼ ਨੂੰ ਰੱਦ ਕਰਕੇ ਗਲਤ ਪਾਜ਼ਿਟਿਵ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।
- ਅੱਗੇ ਪ੍ਰੋਸੈਸਿੰਗ ਤੋਂ ਪਹਿਲਾਂ ਸਿਰਫ਼-ਸਿੰਬਲ ਲਿਸਟਾਂ ਦੀ ਤਸਦੀਕ ਲਈ runtime type guard ਵਜੋਂ ਲਾਭਦਾਇਕ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areSymbols(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਸਿੰਬਲ ਐਲੀਮੈਂਟਾਂ ਲਈ ਚੈਕ ਕੀਤਾ ਜਾਣ ਵਾਲਾ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  //‎ a runtime te sirf symbol wali array aa
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areSymbols(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areSymbols](‎../_analysis/areSymbols.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 14:23:17 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>