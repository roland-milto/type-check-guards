# areWeakSets

## ਵਰਣਨ

ਜਾਂਚਦਾ ਹੈ ਕਿ ਇਨਪੁੱਟ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰ ਤੱਤ ਇੱਕ `WeakSet` ਹੈ, ਅਤੇ ਸਿਰਫ਼ ਉਸੇ ਹਾਲਤ ਵਿੱਚ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਰਨਟਾਈਮ ਇਨਪੁੱਟ (ਜਿਵੇਂ APIs, ਕਨਫਿਗਰੇਸ਼ਨ, ਜਾਂ ਯੂਜ਼ਰ ਵੱਲੋਂ ਦਿੱਤਾ ਡਾਟਾ) ਨੂੰ ਵੈਧ ਕਰੋ ਤਾਂ ਜੋ ਅੱਗੇ ਵਧਣ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਡੇ ਕੋਲ
`WeakSet` ਇੰਸਟੈਂਸਾਂ ਦੀ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਸੂਚੀ ਹੋਵੇ, ਖਾਸ ਕਰਕੇ ਉਸ ਲੌਜਿਕ ਲਈ ਜੋ `WeakSet` ਦੇ ਵਿਹਾਰ ਉੱਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areWeakSets` ਨੂੰ ਅਣਜਾਣ ਇਨਪੁੱਟ ਨੂੰ `WeakSet[]` ਵਜੋਂ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਵੈਧ ਕਰਨ ਲਈ ਵਰਤੋ। ਇਹ ਖਾਲੀ ਐਰੇ ਅਤੇ ਗੈਰ-ਐਰੇ ਲਈ
`false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਇਨਪੁੱਟ ਐਰੇ ਦਾ ਹਰ ਤੱਤ ਇੱਕ `WeakSet` ਹੈ।
- ਖਾਲੀ ਐਰੇ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਗੁੰਮ ਡਾਟਾ ਉੱਤੇ ਅਣਜਾਣੇ ਵਿੱਚ “ਸਭ ਵੈਧ” ਨਤੀਜੇ ਤੋਂ ਬਚਾਵ ਹੁੰਦਾ ਹੈ।
- ਜਦੋਂ ਇਨਪੁੱਟ ਇੱਕ ਭਰੀ ਹੋਈ ਐਰੇ ਨਹੀਂ ਹੁੰਦੀ (ਜਿਸ ਵਿੱਚ `null` ਵੀ ਸ਼ਾਮਲ ਹੈ) ਤਾਂ `false` ਵਾਪਸ ਕਰਕੇ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਫੇਲ
  ਹੁੰਦਾ ਹੈ।
- `WeakSet` ਇੰਸਟੈਂਸਾਂ ਦੀ ਲੋੜ ਵਾਲੀਆਂ ਕਾਰਵਾਈਆਂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਗਾਰਡ ਵਜੋਂ ਲਾਭਦਾਇਕ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areWeakSets(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: `WeakSet` ਆਬਜੈਕਟਾਂ ਲਈ ਚੈੱਕ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  //‎ a WeakSet instanceਆਂ दी गैर-ਖਾਲੀ ਐਰੇ ਹੈ
}

console.log(areWeakSets(a)); // ਸੱਚ
console.log(areWeakSets(b)); // ਝੂਠ
console.log(areWeakSets(c)); // ਝੂਠ
console.log(areWeakSets(null as unknown)); // ਝੂਠ
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areWeakSets(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areWeakSets](‎../_analysis/areWeakSets.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 14:10:22 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>