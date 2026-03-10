# areOneOfType

## ਵਰਣਨ

`areOneOfType` ਜਾਂਚਦਾ ਹੈ ਕਿ ਨਾ-ਖਾਲੀ ਐਰੇ ਦੇ ਸਾਰੇ ਤੱਤ ਦਿੱਤੀਆਂ ਗਈਆਂ ਰਨਟਾਈਮ ਟਾਈਪਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਇੱਕ ਦੇ ਹਨ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਆਉਂਦੇ ਡਾਟਾ (ਜਿਵੇਂ ਪਾਰਸ ਕੀਤਾ JSON) ਦੀ ਵੈਲੀਡੇਸ਼ਨ ਕਰੋ ਜਿੱਥੇ ਕਿਸੇ ਫੀਲਡ ਦਾ ਮੁੱਲ ਇੱਕ ਨਾ-ਖਾਲੀ ਐਰੇ ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ ਅਤੇ ਉਸਦੇ ਆਈਟਮ
ਜਾਣੇ-ਪਛਾਣੇ ਪ੍ਰਿਮਿਟਿਵ ਟਾਈਪਾਂ ਦੇ ਸੈੱਟ ਤੱਕ ਸੀਮਿਤ ਹਨ; ਜੇ ਐਰੇ ਖਾਲੀ ਹੋਵੇ ਜਾਂ ਕਿਸੇ ਵੀ ਨਾ-ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਟਾਈਪ ਨੂੰ ਸ਼ਾਮਲ ਕਰਦਾ ਹੋਵੇ
ਤਾਂ `false` ਵਾਪਸ ਕਰੋ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਇਹ ਫੰਕਸ਼ਨ ਇੱਕ boolean ਵਾਪਸ ਕਰਦਾ ਹੈ ਅਤੇ ਕੰਪਾਇਲ ਟਾਈਮ 'ਤੇ ਐਰੇ ਦੇ ਤੱਤਾਂ ਦੇ ਟਾਈਪ ਨੂੰ ਨੈਰੋ ਨਹੀਂ ਕਰਦਾ; ਅੱਗੇ ਦੀ ਪ੍ਰੋਸੈਸਿੰਗ ਤੋਂ
> ਪਹਿਲਾਂ ਇਸਨੂੰ ਰਨਟਾਈਮ ਵੈਲੀਡੇਸ਼ਨ ਕਦਮ ਵਜੋਂ ਵਰਤੋ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਂਦਾ ਹੈ ਕਿ ਐਰੇ ਦੇ ਹਰ ਤੱਤ ਦਾ ਰਨਟਾਈਮ ਟਾਈਪ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਟਾਈਪ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੋਵੇ, ਅਤੇ `true` ਸਿਰਫ਼
  ਉਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਪੂਰਾ ਐਰੇ ਪਾਸ ਹੋ ਜਾਵੇ।
- ਗਲਤ ਇਨਪੁੱਟ ਨੂੰ ਜਲਦੀ ਰੱਦ ਕਰਦਾ ਹੈ: ਜਦੋਂ `array` ਜਾਂ `types` ਖਾਲੀ ਹੋਣ ਜਾਂ ਭਰਿਆ ਹੋਇਆ ਐਰੇ ਨਾ ਹੋਣ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਮਿਕਸਡ-ਟਾਈਪ ਕਲੇਕਸ਼ਨਾਂ (ਜਿਵੇਂ ਨੰਬਰ ਅਤੇ ਸਟਰਿੰਗਾਂ) ਦੀ ਜਾਂਚ ਲਈ ਇੱਕੋ `areOneOfType` ਕਾਲ ਨਾਲ ਲਾਭਦਾਇਕ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areOneOfType(array, types)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਦਿੱਤੇ ਗਏ ਟਾਈਪਾਂ ਦੇ ਮੁਕਾਬਲੇ ਜਾਂਚਣ ਲਈ ਤੱਤਾਂ ਦਾ ਇੱਕ ਐਰੇ।
- `types`: ਜਾਂਚ ਲਈ ਡਾਟਾ ਟਾਈਪਾਂ ਨੂੰ ਦਰਸਾਉਂਦੀਆਂ ਸਟਰਿੰਗਾਂ ਦਾ ਇੱਕ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areOneOfType(array, types)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areOneOfType](‎../_analysis/areOneOfType.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 23:38:12 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>