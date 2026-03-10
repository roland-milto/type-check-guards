# isWeakSet

## ਵਰਣਨ

ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ `value` ਆਬਜੈਕਟਾਂ ਦਾ `WeakSet` ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਜਦੋਂ ਤੁਸੀਂ ਬਿਨਾਂ ਟਾਈਪ ਵਾਲਾ ਇਨਪੁੱਟ (ਜਿਵੇਂ ਬਾਹਰੀ APIs, ਡਾਇਨਾਮਿਕ ਕਨਫਿਗਰੇਸ਼ਨ, ਜਾਂ `unknown` ਮੁੱਲ) ਸਵੀਕਾਰ ਕਰ ਰਹੇ ਹੋ ਅਤੇ
`WeakSet`-ਖਾਸ ਓਪਰੇਸ਼ਨ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਤਸਦੀਕ ਕਰਨੀ ਹੋਵੇ ਕਿ ਇਹ `WeakSet` ਹੈ, ਤਾਂ `isWeakSet` ਵਰਤੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਰਨਟਾਈਮ 'ਤੇ `unknown` ਮੁੱਲ ਨੂੰ `WeakSet<object>` ਤੱਕ ਨੈਰੋ ਕਰਨ ਲਈ `isWeakSet` ਵਰਤੋ; ਧਿਆਨ ਰਹੇ ਕਿ `WeakSet` ਵਿੱਚ ਸਿਰਫ਼
> ਆਬਜੈਕਟ ਰੈਫਰੈਂਸ ਹੀ ਹੋ ਸਕਦੇ ਹਨ।

### ਫਾਇਦੇ

- ਇਹ ਸੌਖੀ ਰਨਟਾਈਮ ਜਾਂਚ ਦਿੰਦਾ ਹੈ ਕਿ ਕੋਈ ਮੁੱਲ `WeakSet` ਹੈ ਜਾਂ ਨਹੀਂ।
- ਸਿਰਫ਼ `WeakSet` ਇੰਸਟੈਂਸਾਂ ਨੂੰ ਹੀ ਉਸੇ ਤਰ੍ਹਾਂ ਟ੍ਰੀਟ ਕਰਕੇ ਟਾਈਪ ਗਲਤੀਆਂ ਤੋਂ ਬਚਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
- ਕਿਸੇ ਵੀ `unknown` ਇਨਪੁੱਟ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਸਾਫ਼ ਬੂਲੀਅਨ ਨਤੀਜਾ (`true`/`false`) ਵਾਪਸ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isWeakSet(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਿਸ ਮੁੱਲ ਦੀ ਜਾਂਚ ਕਰਨੀ ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // ਸੱਚ
console.log(isWeakSet(b)); // ਝੂਠ

if (isWeakSet(a)) {
  //‎ a ਰਨਟਾਈਮ 'ਤੇ WeakSet ਹੈ
}
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isWeakSet(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isWeakSet](‎../_analysis/isWeakSet.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 14:18:46 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>