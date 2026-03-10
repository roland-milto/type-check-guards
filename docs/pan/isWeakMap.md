# isWeakMap

## ਵਰਣਨ

ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ `value` ਇੱਕ `WeakMap` ਇੰਸਟੈਂਸ ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`isWeakMap` ਨੂੰ ਤਦ ਵਰਤੋ ਜਦੋਂ ਤੁਸੀਂ ਕੋਈ `unknown` ਵੈਲਿਊ ਸਵੀਕਾਰ ਕਰਦੇ ਹੋ (ਜਿਵੇਂ ਕਿਸੇ ਪਬਲਿਕ API, ਪਲੱਗਇਨ ਸਿਸਟਮ, ਜਾਂ ਡਾਇਨਾਮਿਕ
ਕਨਫਿਗਰੇਸ਼ਨ ਤੋਂ) ਅਤੇ `WeakMap`-ਖਾਸ ਵਿਹਾਰ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਤਸਦੀਕ ਕਰਨ ਦੀ ਲੋੜ ਹੋਵੇ ਕਿ ਇਹ ਇੱਕ `WeakMap` ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isWeakMap` ਇੱਕ `instanceof WeakMap` ਚੈੱਕ ਕਰਦਾ ਹੈ; ਇਹ ਇੱਕ ਰਨਟਾਈਮ ਗਾਰਡ ਹੈ ਜੋ ਸਿਰਫ਼ ਅਸਲ `WeakMap` ਇੰਸਟੈਂਸਾਂ ਲਈ ਹੀ `true`
> ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਇਹ ਚੈੱਕ ਕਰਨ ਲਈ ਸਧਾਰਣ ਰਨਟਾਈਮ ਜਾਂਚ ਕਿ ਕੋਈ ਵੈਲਿਊ `WeakMap` ਹੈ ਜਾਂ ਨਹੀਂ।
- `WeakMap` ਦੀ ਲੋੜ ਵਾਲੀਆਂ APIs ਦੇ ਗਲਤ ਇਸਤੇਮਾਲ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ ਕਿਉਂਕਿ ਇਹ throw ਕਰਨ ਦੀ ਬਜਾਏ `true`/`false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- `unknown` ਇਨਪੁੱਟਾਂ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਮੋਡੀਊਲ ਬਾਊਂਡਰੀਆਂ 'ਤੇ ਇਹ ਸੁਵਿਧਾਜਨਕ ਬਣ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ parsing, ਬਾਹਰੀ ਡਾਟਾ,
  ਜਾਂ untyped ਕੋਡ)।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isWeakMap(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਚੈੱਕ ਕਰਨ ਲਈ ਵੈਲਿਊ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  //‎ a runtime te WeakMap aa
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isWeakMap(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isWeakMap](‎../_analysis/isWeakMap.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 13:26:25 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>