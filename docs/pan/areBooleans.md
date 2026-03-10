# areBooleans

## ਵਰਣਨ

`areBooleans` ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ non-empty ਐਰੇ ਸਿਰਫ਼ boolean ਮੁੱਲਾਂ ਤੋਂ ਬਣਿਆ ਹੈ ਜਾਂ ਨਹੀਂ; ਜੇ ਹੈ ਤਾਂ `true` ਵਾਪਸ ਕਰਦਾ
ਹੈ, ਨਹੀਂ ਤਾਂ `false`।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਯੂਜ਼ਰ-ਦਿੱਤਾ ਜਾਂ ਬਾਹਰੀ ਡਾਟਾ (ਜਿਵੇਂ JSON payloads, query params, config arrays) ਨੂੰ ਵੈਲੀਡੇਟ ਕਰੋ ਤਾਂ ਜੋ ਇਹ ਯਕੀਨੀ ਬਣੇ ਕਿ ਇੱਕ
non-empty ਲਿਸਟ ਵਿੱਚ ਸਿਰਫ਼ booleans ਹਨ, ਫਿਰ boolean logic ਲਾਗੂ ਕਰੋ ਜਾਂ ਉਹਨਾਂ APIs ਨੂੰ ਪਾਸ ਕਰੋ ਜੋ `boolean[]` ਦੀ ਉਮੀਦ
ਕਰਦੀਆਂ ਹਨ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areBooleans` ਨੂੰ `unknown[]` ਨੂੰ `boolean[]` ਵਜੋਂ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰਨ ਲਈ ਵਰਤੋ; ਇਹ ਖਾਲੀ ਐਰੇਜ਼ ਲਈ `false` ਵਾਪਸ
> ਕਰਦਾ ਹੈ, ਇਸ ਲਈ ਜੇ ਖਾਲੀ ਲਿਸਟ ਮਨਜ਼ੂਰ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ ਤਾਂ ਉਸ ਕੇਸ ਨੂੰ ਖਾਸ ਤੌਰ ਤੇ ਹੈਂਡਲ ਕਰੋ।

### ਫਾਇਦੇ

- `true` ਸਿਰਫ਼ ਓਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਹਰ ਐਲਿਮੈਂਟ boolean ਹੋਵੇ ਅਤੇ ਇਨਪੁੱਟ ਇੱਕ non-empty ਐਰੇ ਹੋਵੇ।
- ਖਾਲੀ ਐਰੇਜ਼ ਨੂੰ ਰੱਦ ਕਰਕੇ ( `false` ਵਾਪਸ ਕਰਦਾ ਹੈ) false positives ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।
- boolean-ਕੇਵਲ ਓਪਰੇਸ਼ਨਾਂ ਤੋਂ ਪਹਿਲਾਂ runtime guard ਵਜੋਂ ਚੰਗਾ ਕੰਮ ਕਰਦਾ ਹੈ (ਜਿਵੇਂ `every`, `some`, logical reductions)।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areBooleans(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: boolean ਐਲਿਮੈਂਟਾਂ ਲਈ ਚੈੱਕ ਕੀਤਾ ਜਾਣ ਵਾਲਾ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areBooleans(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areBooleans](‎../_analysis/areBooleans.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 14:41:51 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>