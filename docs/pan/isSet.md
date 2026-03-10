# isSet

## ਵਰਣਨ

ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ `Set` ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਬਾਹਰੀ ਸਰੋਤਾਂ ਤੋਂ ਆਉਣ ਵਾਲੇ ਇਨਪੁੱਟ (ਜਿਵੇਂ JSON ਪਾਰਸਿੰਗ, ਯੂਜ਼ਰ ਇਨਪੁੱਟ, ਜਾਂ ਤੀਜੇ-ਪੱਖੀ APIs) ਦੀ ਤਸਦੀਕ ਕਰੋ ਤਾਂ ਜੋ `Set`
ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਯਕੀਨੀ ਬਣੇ ਕਿ ਮੁੱਲ `Set` ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isSet` ਨੂੰ ਵਰਤੋ ਤਾਂ ਜੋ `unknown` ਮੁੱਲਾਂ ਨੂੰ `Set`-ਖਾਸ APIs ਜਿਵੇਂ `.add`, `.has`, ਜਾਂ `.size` ਕਾਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਨੈਰੋ
> ਕੀਤਾ ਜਾ ਸਕੇ।

### ਫਾਇਦੇ

- ਇਹ ਸੌਖੀ ਰਨਟਾਈਮ ਜਾਂਚ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਪੁਸ਼ਟੀ ਹੋ ਸਕੇ ਕਿ ਕੋਈ ਮੁੱਲ `Set` ਹੈ।
- ਜਦੋਂ ਕੋਈ ਮੁੱਲ `Set` ਨਾ ਹੋਵੇ ਤਾਂ ਪਹਿਲਾਂ ਹੀ ਬ੍ਰਾਂਚਿੰਗ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦੇ ਕੇ ਟਾਈਪ ਗਲਤੀਆਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।
- ਕਿਸੇ ਵੀ `Set` ਸਮੱਗਰੀ (ਖਾਲੀ ਜਾਂ ਭਰੀ ਹੋਈ) ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਲਗਾਤਾਰ `true`/`false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isSet(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਾਂਚ ਕਰਨ ਲਈ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  //‎ a runtime te Set aa
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isSet(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isSet](‎../_analysis/isSet.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 23:10:50 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>