# isTrue

## ਵਰਣਨ

`isTrue` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤੀ ਕਦਰ ਸਖ਼ਤੀ ਨਾਲ `true` ਦੇ ਬਰਾਬਰ ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`isTrue` ਨੂੰ flags, feature toggles, ਜਾਂ configuration ਕਦਰਾਂ ਦੀ ਤਸਦੀਕ ਲਈ ਵਰਤੋ ਜਿੱਥੇ ਸਿਰਫ਼ ਲਿਟਰਲ `true` ਹੀ ਮਨਜ਼ੂਰ ਹੋਣਾ
ਚਾਹੀਦਾ ਹੈ ਅਤੇ ਹੋਰ ਸਭ ਕੁਝ `false` ਵਜੋਂ ਹੀ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isTrue` ਨੂੰ ਉਦੋਂ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਸਿਰਫ਼ ਬੂਲੀਅਨ ਲਿਟਰਲ `true` ਹੀ ਮਨਜ਼ੂਰ ਕਰਨਾ ਹੋਵੇ, ਸਿਰਫ਼ truthy ਕਦਰਾਂ ਨਹੀਂ।

### ਫਾਇਦੇ

- ਬੂਲੀਅਨ ਲਿਟਰਲ `true` ਲਈ ਸਖ਼ਤ ਜਾਂਚ ਦਿੰਦਾ ਹੈ (ਕੋਈ coercion ਨਹੀਂ)।
- `true` ਨੂੰ `1`, `"true"`, ਜਾਂ `{}` ਵਰਗੀਆਂ truthy ਕਦਰਾਂ ਤੋਂ ਵੱਖਰਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
- ਸਧਾਰਣ, ਅਨੁਮਾਨਯੋਗ ਵਰਤਾਓ ਜੋ guards ਅਤੇ validation pipelines ਲਈ ਢੁੱਕਵਾਂ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isTrue(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਾਂਚਣ ਲਈ ਕਦਰ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // ਸੱਚ
const b = isTrue(1);         // ਝੂਠ
const c = isTrue("true");   // ਝੂਠ

if (isTrue(a)) {
  //‎ ਇੱਥੇ a ਸੱਚ ਹੈ
}
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isTrue(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isTrue](‎../_analysis/isTrue.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 13:45:49 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>