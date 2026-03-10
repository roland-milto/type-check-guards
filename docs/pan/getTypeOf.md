# getTypeOf

## ਵਰਣਨ

`getTypeOf` ਦਿੱਤੇ ਗਏ ਮੁੱਲ ਲਈ ਵਿਸਥਾਰਤ, ਮਨੁੱਖ-ਪੜ੍ਹਨਯੋਗ ਟਾਈਪ ਲੇਬਲ ਵਾਪਸ ਕਰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਸੁਧਰੇ ਹੋਏ ਅੰਕੀ ਟਾਈਪ ਅਤੇ ਖਾਸ ਆਬਜੈਕਟ
ਕਿਸਮਾਂ ਸ਼ਾਮਲ ਹਨ।

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

ਇਨਪੁੱਟ ਵੈਲੀਡੇਸ਼ਨ ਅਤੇ ਡਾਇਗਨੋਸਟਿਕਸ ਵਿੱਚ ਟਾਈਪ ਡਿਟੈਕਸ਼ਨ ਨੂੰ ਨਾਰਮਲਾਈਜ਼ ਕਰਨ ਲਈ `getTypeOf` ਵਰਤੋ—ਉਦਾਹਰਨ ਵਜੋਂ `nan` ਨੂੰ ਰੱਦ ਕਰਨ
ਲਈ, ਸਿਰਫ਼ `integer` IDਜ਼ ਨੂੰ ਸਵੀਕਾਰ ਕਰਨ ਲਈ, `decimal` ਵਰਗੀਆਂ ਅੰਕੀ ਸਟਰਿੰਗਾਂ ਨੂੰ ਸਧਾਰਨ `string` ਤੋਂ ਵੱਖਰਾ ਟ੍ਰੀਟ ਕਰਨ ਲਈ,
ਜਾਂ `date` ਅਤੇ `regexp` ਵਰਗੀਆਂ ਸਟੀਕ ਆਬਜੈਕਟ ਕਿਸਮਾਂ ਨੂੰ ਲੌਗ ਕਰਨ ਲਈ।

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> ਰਿਟਰਨ ਟਾਈਪ `DataTypeAsString | string` ਹੈ। ਇਸਨੂੰ ਵਰਣਨਾਤਮਕ ਲੇਬਲ ਵਜੋਂ ਹੀ ਵਰਤੋ; ਬ੍ਰਾਂਚਿੰਗ ਕਰਦੇ ਸਮੇਂ `integer`, `float`,
`nan`, `array`, `null`, ਅਤੇ `undefined` ਵਰਗੇ ਜਾਣੇ-ਪਛਾਣੇ ਲਿਟਰਲਾਂ ਨਾਲ ਤੁਲਨਾ ਕਰੋ।

### ਫਾਇਦੇ

- JavaScript ਦੇ `typeof` ਨਾਲੋਂ ਵਧੇਰੇ ਬਰੀਕ ਟਾਈਪ ਸਟਰਿੰਗ ਵਾਪਸ ਕਰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ `integer`, `float`, ਅਤੇ `nan` ਵਰਗੇ ਅੰਕੀ
  ਉਪ-ਟਾਈਪ ਵੀ ਸ਼ਾਮਲ ਹਨ।
- `null` ਅਤੇ `undefined` ਨੂੰ ਖੁੱਲ੍ਹੇ ਤੌਰ 'ਤੇ `null` ਅਤੇ `undefined` ਵਜੋਂ ਵੱਖਰਾ ਕਰਦਾ ਹੈ।
- ਆਮ ਅੰਕੀ ਸਟਰਿੰਗ ਫਾਰਮੈਟਾਂ ਨੂੰ ਪਛਾਣਦਾ ਹੈ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਸਧਾਰਨ `string` ਦੀ ਥਾਂ `binary`, `octal`, `decimal`, ਜਾਂ
  `hexadecimal` ਵਜੋਂ ਦਰਸਾਉਂਦਾ ਹੈ।
- ਐਰੇਜ਼ ਨੂੰ `array` ਵਜੋਂ ਵੀ ਪਛਾਣਦਾ ਹੈ ਅਤੇ `Object.prototype.toString` ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਖਾਸ ਆਬਜੈਕਟ ਟਾਈਪ ਨਾਮ (ਜਿਵੇਂ `date`,
  `regexp`, `map`, `set`) ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।
- ਵੈਲੀਡੇਸ਼ਨ, ਲੌਗਿੰਗ, ਅਤੇ ਡੀਬੱਗਿੰਗ ਲਈ ਬਹੁਤ ਲਾਭਦਾਇਕ ਹੈ ਜਿੱਥੇ ਇਕਸਾਰ, ਮਨੁੱਖ-ਪੜ੍ਹਨਯੋਗ ਟਾਈਪ ਲੇਬਲਾਂ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `getTypeOf(value)`

ਪੈਰਾਮੀਟਰ:

- `value`: ਉਹ ਮੁੱਲ ਜਿਸ ਲਈ ਡਾਟਾ ਟਾਈਪ ਨਿਰਧਾਰਤ ਕਰਨੀ ਹੈ।

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

//‎ ਮਿਸਾਲੀ ਜਾਂਚਾਂ
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.getTypeOf(value)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [getTypeOf](‎../_analysis/getTypeOf.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 6 February 2026 at 13:13:59 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>