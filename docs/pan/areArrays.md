# areArrays

## ਵਰਣਨ

`areArrays` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਕੋਈ ਮੁੱਲ ਇੱਕ ਭਰੀ ਹੋਈ ਦੋ-ਪੱਖੀ ਐਰੇ ਹੈ ਜਿਸ ਦੇ ਸਾਰੇ ਆਈਟਮ ਐਰੇ ਹਨ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਕਤਾਰ/ਕਾਲਮ ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਟੇਬੂਲਰ ਜਾਂ ਮੈਟ੍ਰਿਕਸ-ਜਿਹੇ ਇਨਪੁੱਟ (ਜਿਵੇਂ CSV ਕਤਾਰਾਂ, ਗ੍ਰਿਡ ਡਾਟਾ, ਜਾਂ ਗਰੁੱਪ ਕੀਤੀਆਂ ਲਿਸਟਾਂ)
ਦੀ ਪੁਸ਼ਟੀ ਕਰਨ ਲਈ `areArrays` ਵਰਤੋ; ਜੇ ਇਨਪੁੱਟ ਐਰੇ ਨਹੀਂ ਹੈ, ਖਾਲੀ ਹੈ, ਜਾਂ ਕਿਸੇ ਵੀ ਨਾ-ਐਰੇ ਤੱਤ ਨੂੰ ਸ਼ਾਮਲ ਕਰਦਾ ਹੈ ਤਾਂ ਇਹ
`false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਜਦੋਂ ਤੁਹਾਨੂੰ ਇਹ ਯਕੀਨੀ ਬਣਾਉਣ ਦੀ ਲੋੜ ਹੋਵੇ ਕਿ ਕੋਈ ਮੁੱਲ ਨਾ-ਖਾਲੀ 2D ਐਰੇ ਹੈ ਅਤੇ ਹਰ ਕਤਾਰ ਇੱਕ ਐਰੇ ਹੈ, ਤਦ ਨੇਸਟਡ ਐਰੇਜ਼ ਵਿੱਚ
> ਇਟਰੇਟ ਕਰਨ ਜਾਂ ਇੰਡੈਕਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ `areArrays` ਵਰਤੋ।

### ਫਾਇਦੇ

- ਇਹ ਜਾਂਚਦਾ ਹੈ ਕਿ ਇਨਪੁੱਟ ਇੱਕ ਨਾ-ਖਾਲੀ ਦੋ-ਪੱਖੀ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰ ਤੱਤ ਇੱਕ ਐਰੇ ਹੈ।
- ਗਾਰਡਾਂ ਅਤੇ ਜਲਦੀ ਬਾਹਰ ਨਿਕਲਣ ਲਈ ਢੁੱਕਵਾਂ ਇੱਕ ਸਧਾਰਣ ਬੂਲੀਅਨ ਨਤੀਜਾ (`true`/`false`) ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਰਨਟਾਈਮ ਗਲਤੀਆਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ ਜਦੋਂ ਬਾਅਦ ਵਾਲਾ ਕੋਡ ਨੇਸਟਡ ਐਰੇ ਓਪਰੇਸ਼ਨਾਂ (ਜਿਵੇਂ ਕਤਾਰਾਂ ਨੂੰ ਮੈਪ ਕਰਨਾ) ਨੂੰ ਮੰਨ ਕੇ ਚੱਲਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areArrays(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਜਾਂਚ ਲਈ ਇਨਪੁੱਟ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  //‎ value ik 2D array hai jis vich elements vajo arrays ne
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areArrays(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areArrays](‎../_analysis/areArrays.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 6 February 2026 at 13:40:59 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>