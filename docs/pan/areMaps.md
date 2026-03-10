# areMaps

## ਵਰਣਨ

`areMaps` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਐਰੇ ਖਾਲੀ ਨਹੀਂ ਹੈ ਅਤੇ ਇਸਦੇ ਸਾਰੇ ਤੱਤ `Map` ਦੀਆਂ ਇੰਸਟੈਂਸਾਂ ਹਨ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਅਣਜਾਣ ਇਨਪੁੱਟ (ਜਿਵੇਂ JSON ਪਾਰਸਿੰਗ, ਬਾਹਰੀ APIs, ਜਾਂ ਡਾਇਨਾਮਿਕ ਸਰੋਤਾਂ ਤੋਂ) ਨੂੰ `Map` ਆਬਜੈਕਟਾਂ ਦੀ ਗੈਰ-ਖਾਲੀ ਲਿਸਟ ਵਜੋਂ ਵਰਤਣ ਤੋਂ
ਪਹਿਲਾਂ ਵੈਧ ਕਰੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਖਾਲੀ ਐਰੇ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ; ਇਹ `true` ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਐਰੇ ਭਰਿਆ ਹੋਵੇ ਅਤੇ ਹਰ ਤੱਤ `Map` ਹੋਵੇ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਹਰ ਤੱਤ `Map` ਦੀ ਇੰਸਟੈਂਸ ਹੈ, ਅਤੇ `true` ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਪੂਰਾ ਐਰੇ ਚੈਕ ਪਾਸ ਕਰ ਲਵੇ।
- ਡਿਜ਼ਾਇਨ ਮੁਤਾਬਕ ਖਾਲੀ ਐਰੇ ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ “ਕੋਈ ਡਾਟਾ ਨਹੀਂ” ਨੂੰ ਗਲਤੀ ਨਾਲ ਵੈਧ ਇਨਪੁੱਟ ਮੰਨਣ ਤੋਂ ਬਚਾਵ ਹੁੰਦਾ ਹੈ।
- `Map`-ਖਾਸ ਓਪਰੇਸ਼ਨਾਂ (ਜਿਵੇਂ `.get()`, `.set()`, ਇਟਰੇਸ਼ਨ) ਨੂੰ ਕਲੇਕਸ਼ਨ 'ਤੇ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਗਾਰਡ ਵਜੋਂ ਲਾਭਦਾਇਕ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areMaps(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਚੈਕ ਕਰਨ ਲਈ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  //‎ items runtime te Map instances di non-empty array hon di guarantee aa
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  //‎ false aa: khali arrays vaste, ja arrays jinna vich koi vi non-Map value hove
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areMaps(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areMaps](‎../_analysis/areMaps.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 16:14:07 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>