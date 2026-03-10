# areEqual

## ਵਰਣਨ

`areEqual` ਚੈਕ ਕਰਦਾ ਹੈ ਕਿ ਐਰੇ ਦੇ ਸਾਰੇ ਐਲਿਮੈਂਟ ਦਿੱਤੀ ਹੋਈ ਉਮੀਦ ਕੀਤੀ ਵੈਲਿਊ ਦੇ ਬਰਾਬਰ ਹਨ ਜਾਂ ਨਹੀਂ, ਅਤੇ `true` ਸਿਰਫ਼ ਨਾ-ਖਾਲੀ
ਐਰੇ ਲਈ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਿੱਥੇ ਹਰ ਆਈਟਮ ਮੇਲ ਖਾਂਦੀ ਹੋਵੇ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਇਹ ਵੈਲੀਡੇਟ ਕਰੋ ਕਿ ਲਿਸਟ ਵਿੱਚ ਸਿਰਫ਼ ਇੱਕ ਹੀ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਵੈਲਿਊ ਹੈ (ਜਿਵੇਂ, ਸਾਰੇ status flags `true` ਹਨ, ਸਾਰੇ roles `"admin"`
ਹਨ, ਜਾਂ ਸਾਰੀਆਂ ਗਿਣਤੀ ਵਾਲੀਆਂ ਐਂਟਰੀਆਂ ਕਿਸੇ ਲਾਜ਼ਮੀ ਕਾਂਸਟੈਂਟ ਦੇ ਬਰਾਬਰ ਹਨ) ਅਤੇ ਖਾਲੀ ਇਨਪੁੱਟ ਨੂੰ ਅਵੈਧ (`false`) ਮੰਨਦੇ ਹੋਏ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areEqual` ਓਦੋਂ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਸਖ਼ਤ all-items ਚੈਕ ਦੀ ਲੋੜ ਹੋਵੇ; ਇਹ ਖਾਲੀ ਐਰੇ ਲਈ ਅਤੇ ਕਿਸੇ ਵੀ non-array ਜਾਂ non-filled
> ਇਨਪੁੱਟ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- `true` ਸਿਰਫ਼ ਓਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਹਰ ਐਲਿਮੈਂਟ ਉਮੀਦ ਕੀਤੀ ਵੈਲਿਊ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੋਵੇ; ਨਹੀਂ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਤੇਜ਼ੀ ਨਾਲ ਫੇਲ ਹੁੰਦਾ ਹੈ: ਜਿਵੇਂ ਹੀ ਕੋਈ ਨਾ-ਮਿਲਦਾ ਐਲਿਮੈਂਟ ਮਿਲੇ, ਚੈਕ ਕਰਨਾ ਰੋਕ ਦਿੰਦਾ ਹੈ।
- ਗਲਤ ਇਨਪੁੱਟ ਤੋਂ ਬਚਾਅ ਕਰਦਾ ਹੈ: ਜਦੋਂ ਇਨਪੁੱਟ ਭਰੀ ਹੋਈ ਐਰੇ ਨਾ ਹੋਵੇ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areEqual(value, expected)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਚੈਕ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਐਰੇ।
- `expected`: ਉਹ ਐਲਿਮੈਂਟ ਜਿਸ ਨਾਲ ਹਰ ਐਰੇ ਆਈਟਮ ਦੀ ਤੁਲਨਾ ਕਰਨੀ ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areEqual(value, expected)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areEqual](‎../_analysis/areEqual.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 23:51:47 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>