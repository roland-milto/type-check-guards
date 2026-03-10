# areUndefined

## ਵਰਣਨ

`areUndefined` ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤੀ ਗਈ ਐਰੇ ਵਿੱਚ ਹਰ ਤੱਤ `undefined` ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਇਹ ਵੈਧ ਕਰੋ ਕਿ ਵਿਕਲਪਿਕ ਨਤੀਜਿਆਂ ਦੀ ਸੂਚੀ ਵਿੱਚ ਕੋਈ ਅਸਲ ਮੁੱਲ ਨਹੀਂ (ਸਿਰਫ `undefined`), ਉਦਾਹਰਨ ਵਜੋਂ lookup ਮੈਪਿੰਗ ਤੋਂ ਬਾਅਦ
ਜਿੱਥੇ ਗੁੰਮ ਐਂਟਰੀਆਂ ਨੂੰ `undefined` ਵਜੋਂ ਦਰਸਾਇਆ ਜਾਂਦਾ ਹੈ, ਅਤੇ ਤੁਸੀਂ ਪੁਸ਼ਟੀ ਕਰਨੀ ਚਾਹੁੰਦੇ ਹੋ ਕਿ ਸਾਰੇ lookup ਅਸਫਲ ਰਹੇ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areUndefined` ਨੂੰ ਤਦ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਇਹ ਦਾਅਵਾ ਕਰਨਾ ਹੋਵੇ ਕਿ ਇੱਕ `unknown[]` ਵਿੱਚ ਸਿਰਫ `undefined` ਮੁੱਲ ਹਨ; ਅੰਦਰੂਨੀ
`isFilledArray` ਚੈਕ ਕਰਕੇ ਇਹ ਖਾਲੀ ਐਰੇਆਂ ਅਤੇ ਗੈਰ-ਐਰੇ/ਅਵੈਧ ਇਨਪੁੱਟ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- `isFilledArray` ਰਾਹੀਂ ਭਰੀ ਹੋਈ ਐਰੇ ਦੀ ਲੋੜ ਰੱਖ ਕੇ, ਗੈਰ-ਐਰੇਆਂ ਅਤੇ ਖਾਲੀ ਐਰੇਆਂ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਹਰ ਤੱਤ `undefined` ਹੈ, ਸਿਰਫ ਕੁਝ ਨਹੀਂ, ਜਿਸ ਨਾਲ ਮਨੋਰਥ ਸਪਸ਼ਟ ਹੁੰਦਾ ਹੈ।
- ਅਣਜਾਣ ਇਨਪੁੱਟ ਕਲੇਕਸ਼ਨਾਂ ਦੀ ਵੈਧਤਾ ਜਾਂਚਦੇ ਸਮੇਂ guard-ਸਟਾਈਲ predicate ਵਜੋਂ ਲਾਭਦਾਇਕ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areUndefined(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: `undefined` ਤੱਤਾਂ ਲਈ ਜਾਂਚਣ ਵਾਲੀ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // ਸੱਚ
const r2 = areUndefined(b); // ਝੂਠ
const r3 = areUndefined(c); // ਝੂਠ

//‎ ਨੋਟ: ਖਾਲੀ ਐਰੇਆਂ ਲਈ ਝੂਠ ਵਾਪਸ ਕਰਦਾ ਹੈ
const r4 = areUndefined([]); // ਝੂਠ

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areUndefined(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areUndefined](‎../_analysis/areUndefined.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 13:57:24 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>