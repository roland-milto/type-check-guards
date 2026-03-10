# isEmpty

## ਵਰਣਨ

ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤੀ ਗਈ value ਖਾਲੀ ਹੈ ਜਾਂ ਨਹੀਂ, ਅਤੇ `null`, `undefined`, ਖਾਲੀ/whitespace strings, ਖਾਲੀ arrays,
ਖਾਲੀ `Map`/`Set`, ਜਾਂ ਉਹ objects ਜਿਨ੍ਹਾਂ ਦੀਆਂ ਆਪਣੀਆਂ enumerable properties ਨਹੀਂ ਹਨ, ਲਈ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਕਈ data types ਵਿੱਚ inputs ਨੂੰ validate ਕਰਨ ਅਤੇ missing/blank values ਨੂੰ ਪਛਾਣਣ ਲਈ `isEmpty` ਵਰਤੋ (ਜਿਵੇਂ form fields, API
payloads, configuration objects), ਜਿੱਥੇ `null`, `undefined`, whitespace strings, ਖਾਲੀ collections, ਅਤੇ ਬਿਨਾਂ properties
ਵਾਲੇ objects ਨੂੰ ਖਾਲੀ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isEmpty` ਇੱਕ boolean ਵਾਪਸ ਕਰਨ ਵਾਲੀ utility ਹੈ (TypeScript type predicate ਨਹੀਂ), ਇਸ ਲਈ ਇਹ ਆਪਣੇ ਆਪ types ਨੂੰ narrow
> ਨਹੀਂ ਕਰਦੀ; ਇਸਨੂੰ compile-time narrowing ਦੀ ਬਜਾਏ validation/branching ਲਈ ਵਰਤੋ।

### ਫਾਇਦੇ

- ਖਾਲੀਪਨ ਦੀ ਜਾਂਚ ਲਈ `null` ਅਤੇ `undefined` ਨੂੰ `true` ਮੰਨਦਾ ਹੈ।
- ਲੰਬਾਈ ਚੈੱਕ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ trim ਕਰਕੇ ਸਿਰਫ਼ whitespace ਵਾਲੀਆਂ strings ਨੂੰ ਖਾਲੀ ਮੰਨਦਾ ਹੈ।
- ਆਮ container ਕਿਸਮਾਂ (arrays, `Map`, `Set`) ਅਤੇ ਉਹ plain objects ਜਿਨ੍ਹਾਂ ਦੀਆਂ ਆਪਣੀਆਂ enumerable properties ਨਹੀਂ
  ਹੁੰਦੀਆਂ, ਨੂੰ ਸਹਿਯੋਗ ਦਿੰਦਾ ਹੈ।
- `hasOwnProperty` ਚੈੱਕ ਵਰਤ ਕੇ inherited properties ਨੂੰ ਗਿਣਣ ਤੋਂ ਬਚਦਾ ਹੈ।
- guards ਅਤੇ validation ਲਈ ਢੁੱਕਵਾਂ ਸਧਾਰਣ boolean ਨਤੀਜਾ (`true`/`false`) ਵਾਪਸ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isEmpty(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਖਾਲੀਪਨ ਲਈ ਚੈੱਕ ਕਰਨ ਵਾਲੀ value।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isEmpty(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isEmpty](‎../_analysis/isEmpty.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 6 February 2026 at 16:20:13 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>