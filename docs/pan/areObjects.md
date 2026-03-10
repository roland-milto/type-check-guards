# areObjects

## ਵਰਣਨ

`areObjects` ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤੀ ਗਈ ਭਰੀ ਹੋਈ ਐਰੇ ਵਿੱਚ ਸਿਰਫ਼ ਆਬਜੈਕਟ ਹੀ ਹਨ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`areObjects` ਨੂੰ ਓਦੋਂ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਕੋਈ ਅਣਜਾਣ ਐਰੇ ਮਿਲੇ (ਜਿਵੇਂ JSON ਪਾਰਸਿੰਗ ਜਾਂ ਬਾਹਰੀ APIs ਤੋਂ) ਅਤੇ ਤੁਹਾਨੂੰ ਇਟਰੇਟ ਕਰਨ
ਅਤੇ ਆਬਜੈਕਟ ਪ੍ਰਾਪਰਟੀਜ਼ ਐਕਸੈੱਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਯਕੀਨੀ ਬਣਾਉਣਾ ਹੋਵੇ ਕਿ ਇਹ ਖਾਲੀ ਨਹੀਂ ਹੈ ਅਤੇ ਹਰ ਐਲਿਮੈਂਟ ਇੱਕ ਆਬਜੈਕਟ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areObjects` ਨੂੰ `unknown[]` ਦੀ ਵੈਲੀਡੇਸ਼ਨ ਲਈ ਵਰਤੋ, ਆਈਟਮਾਂ ਨੂੰ ਆਬਜੈਕਟ ਵਜੋਂ ਟ੍ਰੀਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ; ਖਾਲੀ ਐਰੇ ਲਈ ਇਹ `false`
> ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਸਿਰਫ਼ ਓਦੋਂ ਹੀ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਇਨਪੁੱਟ ਇੱਕ ਭਰੀ ਹੋਈ ਐਰੇ ਹੋਵੇ ਅਤੇ ਹਰ ਐਲਿਮੈਂਟ ਇੱਕ ਆਬਜੈਕਟ ਹੋਵੇ।
- ਜਿਵੇਂ ਹੀ ਕੋਈ ਗੈਰ-ਆਬਜੈਕਟ ਐਲਿਮੈਂਟ ਮਿਲਦਾ ਹੈ, ਤੁਰੰਤ ਰੁਕ ਜਾਂਦਾ ਹੈ ਅਤੇ `false` ਵਾਪਸ ਕਰ ਦਿੰਦਾ ਹੈ।
- ਆਬਜੈਕਟ-ਖਾਸ ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਅਣਜਾਣ ਇਨਪੁੱਟ ਦੀ ਵੈਲੀਡੇਸ਼ਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areObjects(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਆਬਜੈਕਟ ਐਲਿਮੈਂਟਾਂ ਲਈ ਚੈੱਕ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  //‎ value ik bhari hoyi objects di array ae
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areObjects(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areObjects](‎../_analysis/areObjects.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 00:10:00 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>