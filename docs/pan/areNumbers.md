# areNumbers

## ਵਰਣਨ

`areNumbers` ਜਾਂਚਦਾ ਹੈ ਕਿ ਕੋਈ ਮੁੱਲ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੈ ਜਿਸਦੇ ਸਾਰੇ ਐਲਿਮੈਂਟ ਨੰਬਰ ਹਨ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਯੂਜ਼ਰ-ਦਿੱਤੇ ਜਾਂ API-ਦਿੱਤੇ ਡਾਟੇ ਨੂੰ ਵੈਧ ਕਰੋ ਤਾਂ ਜੋ ਕੁੱਲ, ਔਸਤ, ਜਾਂ ਹੋਰ ਅੰਕਗਣਿਤ ਏਗਰੀਗੇਸ਼ਨਾਂ ਦੀ ਗਣਨਾ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਯਕੀਨੀ
ਬਣੇ ਕਿ ਇਹ ਨੰਬਰਾਂ ਦਾ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਅਣਜਾਣ ਐਰੇਆਂ ਨੂੰ ਅੰਕਗਣਿਤ ਗਣਨਾਵਾਂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵੈਧ ਕਰਨ ਲਈ `areNumbers` ਵਰਤੋ; ਇਹ ਖਾਲੀ ਐਰੇਆਂ ਲਈ ਅਤੇ ਉਹਨਾਂ ਐਰੇਆਂ ਲਈ
> ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਕੋਈ ਵੀ ਗੈਰ-ਨੰਬਰ ਮੁੱਲ ਹੋਵੇ, `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਸਿਰਫ਼ ਉਸ ਵੇਲੇ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ ਇਨਪੁੱਟ ਇੱਕ ਗੈਰ-ਖਾਲੀ ਐਰੇ ਹੋਵੇ ਅਤੇ ਹਰ ਐਲਿਮੈਂਟ ਇੱਕ ਨੰਬਰ ਹੋਵੇ।
- ਖਾਲੀ ਐਰੇਆਂ ਅਤੇ ਐਰੇ ਨਾ ਹੋਣ ਵਾਲੇ ਇਨਪੁੱਟਾਂ ਨੂੰ ਰੱਦ ਕਰਕੇ ਗਲਤ ਸਕਾਰਾਤਮਕ ਨਤੀਜਿਆਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।
- ਰਨਟਾਈਮ ਗਲਤੀਆਂ ਤੋਂ ਬਚਣ ਲਈ ਅੰਕਗਣਿਤ ਕਾਰਵਾਈਆਂ (ਜਿਵੇਂ ਜੋੜਨਾ, ਔਸਤ ਕੱਢਣਾ) ਤੋਂ ਪਹਿਲਾਂ ਗਾਰਡ ਵਜੋਂ ਲਾਭਦਾਇਕ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areNumbers(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: ਨੰਬਰ ਐਲਿਮੈਂਟਾਂ ਲਈ ਜਾਂਚਿਆ ਜਾਣ ਵਾਲਾ ਐਰੇ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areNumbers(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areNumbers](‎../_analysis/areNumbers.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 13:05:35 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>