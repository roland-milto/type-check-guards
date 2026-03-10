# areNullOrUndefined

## ਵਰਣਨ

ਦਿੱਤੇ ਐਰੇ ਵਿੱਚ ਸਾਰੇ ਤੱਤ `null` ਜਾਂ `undefined` ਹਨ ਜਾਂ ਨਹੀਂ, ਇਹ ਜਾਂਚਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਇਹ ਵੈਲੀਡੇਟ ਕਰੋ ਕਿ ਵਿਕਲਪਿਕ ਫੀਲਡਾਂ ਦੀ ਸੂਚੀ ਵਿੱਚ ਕੋਈ ਅਸਲ ਮੁੱਲ ਨਹੀਂ (ਸਿਰਫ਼ `null`/`undefined`) ਹਨ, ਤਾਂ ਜੋ ਪ੍ਰੋਸੈਸਿੰਗ ਛੱਡਣ
ਜਾਂ “ਕੋਈ ਮੁੱਲ ਨਹੀਂ ਦਿੱਤੇ” ਵਾਲੀ ਸਥਿਤੀ ਦਿਖਾਉਣ ਦਾ ਫੈਸਲਾ ਕੀਤਾ ਜਾ ਸਕੇ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areNullOrUndefined` ਨੂੰ ਓਦੋਂ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਇਹ ਤਸਦੀਕ ਕਰਨੀ ਹੋਵੇ ਕਿ ਐਰੇ ਵਿੱਚ ਸਿਰਫ਼ ਗੁੰਮ ਮੁੱਲ (`null`/`undefined`) ਹੀ
> ਹਨ। ਧਿਆਨ ਰਹੇ ਕਿ ਖਾਲੀ ਐਰੇ ਲਈ ਇਹ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਸਿਰਫ਼ ਓਦੋਂ ਹੀ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਹਰ ਤੱਤ `null` ਜਾਂ `undefined` ਹੋਵੇ।
- ਖਾਲੀ ਐਰੇ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ “ਡਾਟਾ ਨਹੀਂ” ਅਤੇ “ਸਾਰੇ ਗੁੰਮ ਮੁੱਲ” ਵਿੱਚ ਫਰਕ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।
- `unknown[]` ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ, ਇਸ ਕਰਕੇ ਟਾਈਪਾਂ ਨੂੰ ਨੈਰੋ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵਰਤਣਾ ਸੁਰੱਖਿਅਤ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areNullOrUndefined(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਚੈੱਕ ਕਰਨ ਲਈ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
//‎ allMissing === ਸੱਚ

const containsValue = areNullOrUndefined([null, "value", undefined]);
//‎ containsValue === ਝੂਠ

const empty = areNullOrUndefined([]);
//‎ empty === ਝੂਠ
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areNullOrUndefined(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areNullOrUndefined](‎../_analysis/areNullOrUndefined.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 00:30:57 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>