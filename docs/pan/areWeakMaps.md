# areWeakMaps

## ਵਰਣਨ

`areWeakMaps` ਜਾਂਚਦਾ ਹੈ ਕਿ ਕੋਈ ਵੈਲਯੂ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰ ਐਲਿਮੈਂਟ `WeakMap` ਹੈ; ਸਿਰਫ਼ ਉਸ ਹਾਲਤ ਵਿੱਚ `true`
ਵਾਪਸ ਕਰਦਾ ਹੈ ਅਤੇ ਨਹੀਂ ਤਾਂ `false`।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਰਨਟਾਈਮ ਡਾਟਾ (ਜਿਵੇਂ ਪਾਰਸ ਕੀਤਾ JSON, ਪਲੱਗਇਨ ਇਨਪੁੱਟ, ਜਾਂ ਢਿੱਲੀ ਟਾਈਪ ਵਾਲੀ ਕਨਫਿਗਰੇਸ਼ਨ) ਨੂੰ ਵੈਧ ਕਰੋ ਤਾਂ ਜੋ ਇਹ ਯਕੀਨੀ ਬਣੇ ਕਿ ਇਹ
`WeakMap` ਇੰਸਟੈਂਸਾਂ ਦੀ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੈ, ਇਟਰੇਟ ਕਰਨ ਅਤੇ `WeakMap` ਮੈਥਡ ਕਾਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ; ਜੇ ਕਿਸੇ ਵੀ ਐਲਿਮੈਂਟ `WeakMap`
ਨਹੀਂ ਹੈ ਜਾਂ ਐਰੇ ਖਾਲੀ ਹੈ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਅਣਜਾਣ ਇਨਪੁੱਟ ਨੂੰ ਗੈਰ-ਖਾਲੀ `WeakMap[]` ਵਜੋਂ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਵੈਧ ਕਰਨ ਲਈ `areWeakMaps` ਵਰਤੋ; ਇਹ ਖਾਲੀ ਐਰੇ ਲਈ `false` ਵਾਪਸ
> ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਦਿੱਤੀ ਗਈ ਐਰੇ ਦਾ ਹਰ ਐਲਿਮੈਂਟ `WeakMap` ਇੰਸਟੈਂਸ ਹੈ।
- ਖਾਲੀ ਐਰੇ ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ “ਕੋਈ ਡਾਟਾ ਨਹੀਂ” ਨੂੰ ਗਲਤੀ ਨਾਲ ਵੈਧ ਇਨਪੁੱਟ ਮੰਨਣ ਤੋਂ ਬਚਾਵ ਹੁੰਦਾ ਹੈ।
- ਸਾਰੇ ਆਈਟਮਾਂ ਉੱਤੇ `WeakMap`-ਖਾਸ ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਗਾਰਡ ਵਜੋਂ ਲਾਭਦਾਇਕ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areWeakMaps(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: `WeakMap` ਇੰਸਟੈਂਸਾਂ ਲਈ ਚੈੱਕ ਕਰਨ ਵਾਸਤੇ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  //‎ list WeakMap de instanceāṁ dā non-empty array hai
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  //‎ non-empty WeakMap[] nahīṁ hai
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areWeakMaps(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areWeakMaps](‎../_analysis/areWeakMaps.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 13:38:51 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>