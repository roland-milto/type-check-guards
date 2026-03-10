# isBoolean

## ਵਰਣਨ

ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਮੁੱਲ `boolean` ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਬਾਹਰੀ ਜਾਂ ਬਿਨਾਂ ਟਾਈਪ ਵਾਲੇ ਡਾਟੇ (ਜਿਵੇਂ, environment variables, JSON payloads, query parameters) ਦੀ ਤਸਦੀਕ ਕਰੋ ਤਾਂ ਜੋ ਸ਼ਰਤੀ
ਲਾਜ਼ਿਕ ਵਿੱਚ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਯਕੀਨੀ ਬਣੇ ਕਿ ਮੁੱਲ `boolean` ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `unknown` ਨੂੰ `boolean` ਤੱਕ ਨੈਰੋ ਕਰਨ ਲਈ, ਬੂਲੀਅਨ ਓਪਰੇਸ਼ਨ ਲਗਾਉਣ ਤੋਂ ਪਹਿਲਾਂ `isBoolean` ਵਰਤੋ।

### ਫਾਇਦੇ

- `typeof` ਵਰਤ ਕੇ ਸੌਖੀ ਤੇ ਤੇਜ਼ ਰਨਟਾਈਮ ਜਾਂਚ।
- ਬੂਲੀਅਨ-ਖਾਸ ਲਾਜ਼ਿਕ ਤੋਂ ਪਹਿਲਾਂ ਅਣਜਾਣ ਇਨਪੁੱਟ ਦੀ ਤਸਦੀਕ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
- ਇੱਕ ਭਰੋਸੇਯੋਗ `boolean` ਨਤੀਜਾ (`true`/`false`) ਵਾਪਸ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isBoolean(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਿਸ ਮੁੱਲ ਦੀ ਜਾਂਚ ਕਰਨੀ ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  //‎ ਇੱਥੇ input boolean ਹੈ
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isBoolean(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isBoolean](‎../_analysis/isBoolean.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 14:37:27 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>