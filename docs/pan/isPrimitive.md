# isPrimitive

## ਵਰਣਨ

`isPrimitive` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਮੁੱਲ primitive ਹੈ ਜਾਂ ਨਹੀਂ (`null`, `undefined`, `boolean`, `number`,
`string`, `bigint`, `symbol`)।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

runtime 'ਤੇ inputs ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ (ਜਿਵੇਂ API payload fields, configuration values, ਜਾਂ user-provided data) ਤਾਂ ਜੋ
serialize ਕਰਨ, logging ਕਰਨ, ਜਾਂ primitive-ਵਾਲੀਆਂ ਹੀ operations ਲਾਗੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਯਕੀਨੀ ਬਣੇ ਕਿ ਮੁੱਲ primitive ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `unknown` inputs ਨੂੰ objects ਜਾਂ functions ਵਾਂਗ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ guard ਕਰਨ ਲਈ `isPrimitive` ਵਰਤੋ; ਇਹ primitives ਲਈ
`true` ਅਤੇ objects ਤੇ functions ਲਈ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਕਿਸੇ ਮੁੱਲ ਦੇ JavaScript primitive ਹੋਣ ਦੀ ਤੇਜ਼, allocation-free ਜਾਂਚ।
- `null` ਨੂੰ ਠੀਕ ਤਰ੍ਹਾਂ primitive ਮੰਨਦਾ ਹੈ (ਭਾਵੇਂ `typeof null` `"object"` ਹੁੰਦਾ ਹੈ)।
- object-ਵਾਲੀਆਂ ਹੀ operations ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ `unknown` ਮੁੱਲਾਂ ਨੂੰ narrow ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isPrimitive(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: primitive ਕਿਸਮ ਲਈ ਜਾਂਚਣ ਵਾਸਤੇ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isPrimitive(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isPrimitive](‎../_analysis/isPrimitive.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 23:57:18 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>