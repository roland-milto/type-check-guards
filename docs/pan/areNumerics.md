# areNumerics

## ਵਰਣਨ

`areNumerics` ਚੈਕ ਕਰਦਾ ਹੈ ਕਿ ਕੋਈ ਵੈਲਿਊ ਇੱਕ ਨਾ-ਖਾਲੀ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ ਸਾਰੇ ਐਲੀਮੈਂਟ ਨਿਊਮੈਰਿਕ ਹਨ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`areNumerics` ਨੂੰ ਬਾਹਰੀ ਜਾਂ ਅਣ-ਟਾਈਪਡ ਡਾਟਾ (ਜਿਵੇਂ JSON payloads, query parameters, form input) ਨੂੰ sums, averages ਜਾਂ ਹੋਰ
ਨਿਊਮੈਰਿਕ ਓਪਰੇਸ਼ਨਾਂ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ ਵਰਤੋ, ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਇਨਪੁੱਟ ਇੱਕ ਨਾ-ਖਾਲੀ ਨਿਊਮੈਰਿਕ ਐਰੇ ਹੈ ਅਤੇ ਨਹੀਂ
ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `unknown` ਇਨਪੁੱਟ ਨੂੰ ਨਿਊਮੈਰਿਕ ਐਰੇ ਸਮਝ ਕੇ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਗਾਰਡ ਕਰਨ ਲਈ `areNumerics` ਵਰਤੋ; ਇਹ ਗੈਰ-ਐਰੇ ਅਤੇ ਖਾਲੀ ਐਰੇ ਲਈ
`false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- `true` ਸਿਰਫ਼ ਓਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਇਨਪੁੱਟ ਇੱਕ ਨਾ-ਖਾਲੀ ਐਰੇ ਹੋਵੇ ਅਤੇ ਹਰ ਐਲੀਮੈਂਟ ਨਿਊਮੈਰਿਕ ਹੋਵੇ।
- ਤੇਜ਼ੀ ਨਾਲ ਫੇਲ ਹੁੰਦਾ ਹੈ: ਜਿਵੇਂ ਹੀ ਕੋਈ ਗੈਰ-ਨਿਊਮੈਰਿਕ ਐਲੀਮੈਂਟ ਮਿਲਦਾ ਹੈ, ਚੈਕ ਕਰਨਾ ਰੋਕ ਦਿੰਦਾ ਹੈ ਅਤੇ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਨਿਊਮੈਰਿਕ ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਅਣਜਾਣ ਇਨਪੁੱਟ ਨੂੰ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਵੈਲੀਡੇਟ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areNumerics(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਨਿਊਮੈਰਿਕ ਐਲੀਮੈਂਟਾਂ ਲਈ ਚੈਕ ਕਰਨ ਵਾਸਤੇ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // ਸੱਚ
console.log(areNumerics(b)); // ਸੱਚ
console.log(areNumerics(c)); // ਝੂਠ
console.log(areNumerics(d)); // ਝੂਠ
console.log(areNumerics(e)); // ਝੂਠ

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areNumerics(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areNumerics](‎../_analysis/areNumerics.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 6 February 2026 at 16:06:50 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>