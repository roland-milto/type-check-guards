# isFalse

## ਵਰਣਨ

`isFalse` ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ boolean literal `false` ਦੇ ਬਿਲਕੁਲ ਬਰਾਬਰ ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਅਣਜਾਣ ਡਾਟਾ (ਜਿਵੇਂ JSON, query params, ਜਾਂ user input ਤੋਂ) ਦੀ ਤਸਦੀਕ ਕਰੋ ਜਿੱਥੇ ਸਿਰਫ਼ ਸਪਸ਼ਟ boolean ਮੁੱਲ `false` ਨੂੰ ਹੀ ਵੈਧ
ਫਲੈਗ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ, ਅਤੇ ਹੋਰ ਸਭ ਕੁਝ ਰੱਦ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isFalse` ਨੂੰ ਉਸ ਵੇਲੇ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਸਿਰਫ਼ literal `false` ਹੀ ਸਵੀਕਾਰ ਕਰਨਾ ਹੋਵੇ ਅਤੇ ਬਾਕੀ ਸਾਰੇ falsy ਮੁੱਲ ਰੱਦ ਕਰਨੇ
> ਹੋਣ; ਇਹ ਕੇਵਲ `value === false` ਲਈ ਹੀ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਬਿਨਾਂ coercion ਦੇ boolean literal `false` ਲਈ ਸਖ਼ਤ ਜਾਂਚ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।
- `false` ਨੂੰ ਹੋਰ falsy ਮੁੱਲਾਂ ਜਿਵੇਂ `0`, `""`, `null`, ਅਤੇ `undefined` ਤੋਂ ਵੱਖਰਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
- ਅਣਜਾਣ ਇਨਪੁੱਟ ਦੀ ਤਸਦੀਕ ਕਰਦੇ ਸਮੇਂ ਮਨਸ਼ਾ ਨੂੰ ਸਪਸ਼ਟ ਕਰਕੇ ਪੜ੍ਹਨਯੋਗਤਾ ਵਿੱਚ ਸੁਧਾਰ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isFalse(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਾਂਚਿਆ ਜਾਣ ਵਾਲਾ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  //‎ ਇੱਥੇ input ਬਿਲਕੁਲ false ਹੈ
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isFalse(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isFalse](‎../_analysis/isFalse.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 16:44:08 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>