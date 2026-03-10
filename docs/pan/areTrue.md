# areTrue

## ਵਰਣਨ

ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ ਖਾਲੀ ਨਾ ਹੋਣ ਵਾਲੇ ਐਰੇ ਵਿੱਚ ਸਿਰਫ਼ ਬੂਲੀਅਨ `true` ਮੁੱਲ ਹੀ ਹਨ ਕਿ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`areTrue` ਨੂੰ ਇਸ ਗੱਲ ਦੀ ਤਸਦੀਕ ਲਈ ਵਰਤੋ ਕਿ ਪ੍ਰੀਕੰਡੀਸ਼ਨਜ਼ ਜਾਂ ਫੀਚਰ ਫਲੈਗਜ਼ ਦਾ ਸੈੱਟ ਪੂਰੀ ਤਰ੍ਹਾਂ ਐਨੇਬਲ ਹੈ (ਸਾਰੇ ਮੁੱਲ `true`
ਹਨ) ਤਦੋਂ ਹੀ ਅੱਗੇ ਵਧਿਆ ਜਾਵੇ, ਅਤੇ ਖਾਲੀ ਜਾਂ ਗਲਤ ਬਣੇ ਇਨਪੁੱਟ ਨੂੰ ਪੂਰਾ ਨਾ ਮੰਨਿਆ ਜਾਵੇ (`false`)।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `areTrue` ਖਾਲੀ ਐਰੇ ਲਈ ਅਤੇ ਉਹਨਾਂ ਐਰੇਜ਼ ਲਈ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਕੋਈ ਵੀ ਮੁੱਲ ਸਖ਼ਤੀ ਨਾਲ `true` ਨਹੀਂ ਹੈ, `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਸਿਰਫ਼ ਓਦੋਂ ਹੀ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਹਰ ਐਲਿਮੈਂਟ ਸਖ਼ਤੀ ਨਾਲ `true` ਹੋਵੇ ਅਤੇ ਐਰੇ ਖਾਲੀ ਨਾ ਹੋਵੇ।
- ਫੇਲ ਫਾਸਟ: ਜਿਵੇਂ ਹੀ ਕੋਈ ਗੈਰ-`true` ਮੁੱਲ ਮਿਲਦਾ ਹੈ ਤੁਰੰਤ `false` ਵਾਪਸ ਕਰ ਦਿੰਦਾ ਹੈ।
- ਗਲਤ ਇਨਪੁੱਟ (ਐਰੇ ਨਾ ਹੋਣ ਜਾਂ ਖਾਲੀ ਐਰੇ) ਨੂੰ `false` ਵਾਪਸ ਕਰਕੇ ਰੱਦ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areTrue(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਸਾਰੇ `true` ਮੁੱਲਾਂ ਲਈ ਚੈੱਕ ਕਰਨ ਵਾਸਤੇ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areTrue(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areTrue](‎../_analysis/areTrue.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 13:52:22 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>