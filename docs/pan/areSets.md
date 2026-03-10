# areSets

## ਵਰਣਨ

ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਸਿਰਫ਼ `Set` ਇੰਸਟੈਂਸਾਂ ਹੀ ਰੱਖਦਾ ਹੈ ਕਿ ਨਹੀਂ; ਜੇ ਰੱਖਦਾ ਹੈ ਤਾਂ `true` ਨਹੀਂ ਤਾਂ `false`
ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਪ੍ਰੋਸੈਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਵੈਲੀਡੇਟ ਕਰੋ ਕਿ ਕੋਈ ਵੈਲਯੂ (ਜਿਵੇਂ ਯੂਜ਼ਰ ਇਨਪੁੱਟ, JSON ਪਾਰਸਿੰਗ, ਜਾਂ ਬਾਹਰੀ APIs ਤੋਂ) `Set` ਆਬਜੈਕਟਾਂ
ਦਾ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਹਰ ਐਲੀਮੈਂਟ ਉੱਤੇ `Set` APIs (ਜਿਵੇਂ `.size`, `.has`, `.add`) ਕਾਲ ਕਰਨ ਅਤੇ ਇਟਰੇਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਅਣਜਾਣ ਇਨਪੁੱਟ ਨੂੰ ਵੈਲੀਡੇਟ
> ਕਰਨ ਲਈ `areSets` ਵਰਤੋ।

### ਫਾਇਦੇ

- `true` ਸਿਰਫ਼ ਓਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਇਨਪੁੱਟ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੋਵੇ ਅਤੇ ਹਰ ਐਲੀਮੈਂਟ ਇੱਕ `Set` ਇੰਸਟੈਂਸ ਹੋਵੇ।
- ਖਾਲੀ ਐਰੇ ਲਈ ਗਲਤ ਸਕਾਰਾਤਮਕ ਨਤੀਜਿਆਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ ਕਿਉਂਕਿ ਜਦੋਂ ਐਰੇ ਵਿੱਚ ਕੋਈ ਐਲੀਮੈਂਟ ਨਹੀਂ ਹੁੰਦਾ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਹਰ ਐਲੀਮੈਂਟ ਉੱਤੇ `Set`-ਖਾਸ ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਰਨਟਾਈਮ ਗਾਰਡ ਵਜੋਂ ਲਾਭਦਾਇਕ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areSets(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: `Set` ਇੰਸਟੈਂਸਾਂ ਲਈ ਚੈੱਕ ਕੀਤਾ ਜਾਣ ਵਾਲਾ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  //‎ a runtime te Set de instanceāṁ dā array hai
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areSets(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areSets](‎../_analysis/areSets.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 23:14:49 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>