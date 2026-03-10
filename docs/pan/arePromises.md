# arePromises

## ਵਰਣਨ

`arePromises` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਕੀ ਐਰੇ ਦੇ ਸਾਰੇ ਐਲਿਮੈਂਟ `Promise` ਇੰਸਟੈਂਸ ਹਨ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਇਹ ਵੈਲੀਡੇਟ ਕਰੋ ਕਿ ਡਾਇਨੈਮਿਕ ਤੌਰ 'ਤੇ ਬਣੀ ਜਾਂ ਬਾਹਰੋਂ ਦਿੱਤੀ ਲਿਸਟ ਵਿੱਚ ਸਿਰਫ਼ promises ਹੀ ਹਨ, ਉਨ੍ਹਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਨ ਤੋਂ
ਪਹਿਲਾਂ (ਉਦਾਹਰਨ ਵਜੋਂ `Promise.all` ਨਾਲ)।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `Promise.all` ਜਾਂ ਹੋਰ ਸਿਰਫ਼ promise ਵਾਲੀਆਂ ਓਪਰੇਸ਼ਨਾਂ ਨੂੰ ਕਾਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ `unknown[]` ਨੂੰ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ
`arePromises` ਵਰਤੋ; ਇਹ ਖਾਲੀ ਐਰੇਜ਼ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਤੁਸੀਂ promise-ਖਾਸ ਲਾਜਿਕ ਨਾਲ ਅੱਗੇ ਵਧਣ ਤੋਂ ਪਹਿਲਾਂ ਹਰ ਐਲਿਮੈਂਟ ਇੱਕ `Promise` ਹੈ।
- ਨਾ-ਭਰੀਆਂ ਐਰੇਜ਼ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਖਾਲੀ ਇਨਪੁੱਟ ਲਈ ਅਸਪਸ਼ਟ ਨਤੀਜੇ ਤੋਂ ਬਚਾਵ ਹੁੰਦਾ ਹੈ।
- ਬਾਹਰੀ ਸਰੋਤਾਂ ਤੋਂ ਆਏ `unknown[]` ਨਾਲ ਕੰਮ ਕਰਦੇ ਸਮੇਂ ਰਨਟਾਈਮ ਗਾਰਡ ਵਜੋਂ ਲਾਭਦਾਇਕ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `arePromises(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: `Promise` ਇੰਸਟੈਂਸਾਂ ਲਈ ਚੈੱਕ ਕਰਨ ਵਾਸਤੇ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  //‎ values runtime vich Promise instances di array hai
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.arePromises(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [arePromises](‎../_analysis/arePromises.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 23:49:27 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>