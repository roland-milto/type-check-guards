# isString

## ਵਰਣਨ

`isString` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ string ਹੈ ਜਾਂ ਨਹੀਂ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਯੂਜ਼ਰ ਇਨਪੁੱਟ, API payload ਫੀਲਡਾਂ, ਜਾਂ configuration ਮੁੱਲਾਂ ਨੂੰ runtime 'ਤੇ ਵੈਲੀਡੇਟ ਕਰੋ ਤਾਂ ਜੋ string ਓਪਰੇਸ਼ਨ (ਜਿਵੇਂ
trimming, splitting, case conversion) ਲਾਗੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਯਕੀਨੀ ਬਣਾਇਆ ਜਾ ਸਕੇ ਕਿ ਮੁੱਲ string ਹੈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `isString` ਨੂੰ `unknown` ਜਾਂ ਢਿੱਲੇ ਤੌਰ 'ਤੇ typed ਮੁੱਲਾਂ ਦੀ ਤਸਦੀਕ ਲਈ ਵਰਤੋ, string ਮੈਥਡ ਕਾਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ; ਇਹ `true`
> ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਦੋਂ `typeof value === "string"`।

### ਫਾਇਦੇ

- `typeof` ਵਰਤ ਕੇ ਸੌਖੀ ਤੇ ਤੇਜ਼ ਜਾਂਚ।
- ਇੱਕ ਭਰੋਸੇਯੋਗ boolean ਨਤੀਜਾ ਵਾਪਸ ਕਰਦਾ ਹੈ: strings ਲਈ `true`, ਨਹੀਂ ਤਾਂ `false`।
- ਖਾਲੀ ਅਤੇ ਗੈਰ-ਖਾਲੀ ਦੋਹਾਂ strings ਲਈ ਕੰਮ ਕਰਦਾ ਹੈ।
- string-ਖਾਸ ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਹਲਕਾ runtime guard ਵਜੋਂ ਲਾਭਦਾਇਕ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isString(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: string ਕਿਸਮ ਲਈ ਟੈਸਟ ਕੀਤਾ ਜਾਣ ਵਾਲਾ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  //‎ ਇੱਥੇ input ਇੱਕ ਸਟਰਿੰਗ ਹੈ
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isString(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isString](‎../_analysis/isString.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 13:15:12 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>