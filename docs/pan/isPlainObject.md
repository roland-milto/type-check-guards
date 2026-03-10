# isPlainObject

## ਵਰਣਨ

ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ `value` ਸਧਾਰਣ ਆਬਜੈਕਟ ਹੈ ਜਾਂ ਨਹੀਂ; ਜੇ ਹੈ ਤਾਂ `true`, ਨਹੀਂ ਤਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਇਹ ਵੈਲੀਡੇਟ ਕਰੋ ਕਿ ਕੋਈ `unknown` ਇਨਪੁੱਟ (ਜਿਵੇਂ ਕਿ parsed JSON, ਬਾਹਰੀ ਡਾਟਾ, ਜਾਂ ਫੰਕਸ਼ਨ ਆਰਗੁਮੈਂਟਸ) ਕੁੰਜੀਆਂ ਪੜ੍ਹਨ ਜਾਂ ਇਸਨੂੰ
ਟਾਈਪ ਕੀਤੇ ਕਨਫਿਗਰੇਸ਼ਨ ਆਬਜੈਕਟ ਵਿੱਚ ਮੈਪ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਧਾਰਣ ਆਬਜੈਕਟ ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isPlainObject` `unknown` ਨੂੰ ਰਿਕਾਰਡ-ਵਾਂਗ ਆਬਜੈਕਟ ਵਜੋਂ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਨੈਰੋ ਕਰਨ ਲਈ ਲਾਭਦਾਇਕ ਹੈ; ਇਹ ਸਿਰਫ਼ ਉਹਨਾਂ ਮੁੱਲਾਂ ਲਈ
`true` ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਿਨ੍ਹਾਂ ਦਾ ਅੰਦਰੂਨੀ ਟੈਗ `[object Object]` ਹੁੰਦਾ ਹੈ।

### ਫਾਇਦੇ

- ਇਹ ਜਾਂਚਣ ਲਈ ਕਿ ਕੋਈ ਮੁੱਲ ਸਧਾਰਣ ਆਬਜੈਕਟ (ਯਾਨੀ, `Object` / `{}`) ਹੈ ਜਾਂ ਨਹੀਂ, ਇੱਕ ਸੌਖੀ ਤੇ ਭਰੋਸੇਯੋਗ ਜਾਂਚ ਦਿੰਦਾ ਹੈ, ਅਤੇ
  `true` ਜਾਂ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- ਸਧਾਰਣ ਆਬਜੈਕਟਾਂ ਨੂੰ ਐਰੇਜ਼, ਫੰਕਸ਼ਨਾਂ, `null`, ਅਤੇ ਹੋਰ ਗੈਰ-ਸਧਾਰਣ ਆਬਜੈਕਟ ਕਿਸਮਾਂ ਤੋਂ ਵੱਖਰਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
- TypeScript ਵਿੱਚ ਟਾਈਪ ਗਾਰਡ ਵਜੋਂ ਲਾਭਦਾਇਕ ਹੈ, ਤਾਂ ਜੋ ਆਬਜੈਕਟ ਪ੍ਰਾਪਰਟੀਜ਼ ਐਕਸੈੱਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ `unknown` ਮੁੱਲਾਂ ਨੂੰ ਨੈਰੋ
  ਕੀਤਾ ਜਾ ਸਕੇ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isPlainObject(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਸਧਾਰਣ ਆਬਜੈਕਟ ਹੋਣ ਦੀ ਸਥਿਤੀ ਲਈ ਟੈਸਟ ਕਰਨ ਵਾਲਾ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  //‎ ਇੱਥੇ input ਇੱਕ ਸਧਾਰਣ ਆਬਜੈਕਟ ਹੈ
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // ਸਹੀ
console.log(isPlainObject([])); // ਗਲਤ
console.log(isPlainObject(null)); // ਗਲਤ
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isPlainObject(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isPlainObject](‎../_analysis/isPlainObject.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 6 February 2026 at 12:19:10 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>