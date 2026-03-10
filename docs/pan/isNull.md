# isNull

## ਵਰਣਨ

ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ `value` `null` ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`isNull` ਨੂੰ ਇਨਪੁੱਟਾਂ ਜਾਂ API ਪੇਲੋਡ ਫੀਲਡਾਂ ਦੀ ਤਸਦੀਕ ਲਈ ਵਰਤੋ ਜਿੱਥੇ `null` ਇੱਕ ਅਰਥਪੂਰਨ sentinel ਮੁੱਲ ਹੈ ਅਤੇ ਇਸਨੂੰ
`undefined` ਜਾਂ ਹੋਰ ਮੁੱਲਾਂ ਨਾਲੋਂ ਵੱਖ ਤਰੀਕੇ ਨਾਲ ਹੈਂਡਲ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isNull` ਨੂੰ ਤਦੋਂ ਵਰਤੋ ਜਦੋਂ ਤੁਹਾਨੂੰ `null` ਨੂੰ `undefined` ਅਤੇ ਹੋਰ falsy ਮੁੱਲਾਂ ਤੋਂ ਵੱਖ ਕਰਨਾ ਹੋਵੇ; ਇਹ ਸਿਰਫ਼ `null` ਲਈ
> ਹੀ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- `null` ਲਈ ਇਕ ਸਹੀ ਜਾਂਚ ਦਿੰਦਾ ਹੈ, ਬਿਨਾਂ ਇਸਨੂੰ `undefined` ਨਾਲ ਗਲਤ ਮਿਲਾਏ।
- ਕਿਸੇ ਵੀ ਇਨਪੁੱਟ ਟਾਈਪ ਲਈ ਭਰੋਸੇਯੋਗ ਤਰੀਕੇ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ ਕਿਉਂਕਿ ਇਹ `unknown` ਨੂੰ ਸਵੀਕਾਰ ਕਰਦਾ ਹੈ।
- ਸਰਲ, ਤੇਜ਼, ਅਤੇ ਸਾਈਡ-ਇਫੈਕਟ ਤੋਂ ਮੁਕਤ; ਸਿਰਫ਼ `true` ਜਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isNull(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: `null` ਲਈ ਜਾਂਚਣ ਵਾਸਤੇ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // ਸੱਚ
console.log(isNull(b)); // ਝੂਠ

if (isNull(a)) {
  //‎ ਇੱਥੇ a null ਹੈ
}
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isNull(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isNull](‎../_analysis/isNull.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 15:40:27 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>