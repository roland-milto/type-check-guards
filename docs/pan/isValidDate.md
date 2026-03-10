# isValidDate

## ਵਰਣਨ

`isValidDate` ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ ਇੱਕ ਵੈਧ `Date` ਆਬਜੈਕਟ ਹੈ ਜਾਂ ਨਹੀਂ, ਅਤੇ ਸਿਰਫ਼ ਅਸਲੀ, ਗੈਰ-ਅਵੈਧ ਤਾਰੀਖਾਂ ਲਈ ਹੀ
`true` ਵਾਪਸ ਕਰਦਾ ਹੈ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਯੂਜ਼ਰ ਇਨਪੁੱਟ ਜਾਂ API ਡਾਟਾ ਦੀ ਤਸਦੀਕ ਕਰੋ ਜਿਸ ਵਿੱਚ ਤਾਰੀਖਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ, ਤਾਂ ਜੋ date calculations, formatting, ਜਾਂ
comparisons ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਯਕੀਨੀ ਬਣੇ ਕਿ ਮੁੱਲ ਇੱਕ ਅਸਲੀ `Date` ਇੰਸਟੈਂਸ ਹੈ ਅਤੇ ਅਵੈਧ ਤਾਰੀਖ ਨਹੀਂ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> `unknown` ਵਜੋਂ ਟਾਈਪ ਕੀਤੇ ਮੁੱਲਾਂ 'ਤੇ `Date` methods (ਜਿਵੇਂ, `toISOString`, `getTime`) ਕਾਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ `isValidDate`
> ਵਰਤੋ, ਤਾਂ ਜੋ ਇਹ ਯਕੀਨੀ ਬਣੇ ਕਿ ਉਹ ਵੈਧ `Date` ਆਬਜੈਕਟ ਹਨ।

### ਫਾਇਦੇ

- ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਮੁੱਲ ਇੱਕ `Date` ਇੰਸਟੈਂਸ ਹੈ, ਸਿਰਫ਼ date-ਵਰਗੀ ਸਟਰਿੰਗ ਜਾਂ ਨੰਬਰ ਨਹੀਂ।
- ਇਹ `NaN` ਟਾਈਮ ਮੁੱਲਾਂ ਦੀ ਜਾਂਚ ਕਰਕੇ ਅਵੈਧ ਤਾਰੀਖਾਂ (ਜਿਵੇਂ, `new Date("invalid")`) ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ।
- ਸਧਾਰਣ boolean guard ਜੋ conditionals ਅਤੇ validation pipelines ਵਿੱਚ ਵਰਤਣਾ ਆਸਾਨ ਹੈ।
- ਇਨਪੁੱਟ ਦੀ ਪਹਿਲਾਂ ਤਸਦੀਕ ਕਰਕੇ date methods ਕਾਲ ਕਰਨ ਵੇਲੇ runtime errors ਤੋਂ ਬਚਾਅ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `isValidDate(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਜਾਂਚਿਆ ਜਾਣ ਵਾਲਾ ਮੁੱਲ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  //‎ input ik vaidh Date instance ae
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.isValidDate(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [isValidDate](‎../_analysis/isValidDate.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 16:52:19 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>