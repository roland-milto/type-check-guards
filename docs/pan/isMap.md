# isMap

## ਵਰਣਨ

ਦਿੱਤੀ ਗਈ `value` ਦੇ `Map` ਹੋਣ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ; ਜੇ ਹੈ ਤਾਂ `true` ਅਤੇ ਨਹੀਂ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`isMap` ਨੂੰ ਉਸ ਵੇਲੇ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਕੋਈ `unknown` ਵੈਲਿਊ ਮਿਲੇ (ਜਿਵੇਂ JSON ਪਾਰਸਿੰਗ, ਬਾਹਰੀ APIs, ਜਾਂ ਯੂਜ਼ਰ ਇਨਪੁੱਟ ਤੋਂ)
ਅਤੇ `Map` ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਯਕੀਨੀ ਬਣਾਉਣਾ ਹੋਵੇ ਕਿ ਇਹ `Map` ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isMap` ਇੱਕ ਰਨਟਾਈਮ ਗਾਰਡ ਹੈ ਜੋ ਵੈਲਿਊ `Map` ਹੋਣ ਤੇ `true` ਅਤੇ ਨਹੀਂ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ; `Map` APIs ਕਾਲ ਕਰਨ ਤੋਂ
> ਪਹਿਲਾਂ `unknown` ਨੂੰ ਨੈਰੋ ਕਰਨ ਲਈ ਇਸਦਾ ਇਸਤੇਮਾਲ ਕਰੋ।

### ਫਾਇਦੇ

- ਇਹ ਤੇਜ਼ ਰਨਟਾਈਮ ਚੈਕ ਦਿੰਦਾ ਹੈ ਕਿ ਕੋਈ ਵੈਲਿਊ `Map` ਹੈ ਜਾਂ ਨਹੀਂ।
- `get`, `set`, ਅਤੇ `has` ਵਰਗੀਆਂ `Map` ਮੈਥਡਾਂ ਦੀ ਲੋੜ ਵਾਲੇ ਕੋਡ ਪਾਥਾਂ ਨੂੰ ਗਾਰਡ ਕਰਕੇ ਟਾਈਪ ਐਰਰਾਂ ਤੋਂ ਬਚਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
- `unknown` ਇਨਪੁੱਟਾਂ ਨੂੰ ਹੈਂਡਲ ਕਰਦੇ ਸਮੇਂ ਇਹ ਹਲਕੇ-ਫੁਲਕੇ ਵੈਲੀਡੇਸ਼ਨ ਕਦਮ ਵਜੋਂ ਚੰਗਾ ਕੰਮ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isMap(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਚੈਕ ਕਰਨ ਲਈ ਵੈਲਿਊ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isMap(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isMap](‎../_analysis/isMap.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 16:29:19 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>