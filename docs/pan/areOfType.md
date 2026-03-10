# areOfType

## ਵਰਣਨ

چیک کردا اے کہ دِتے گئے `array` دے سارے عناصر مخصوص `type` دے نیں یا نہیں۔

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

`areOfType` نوں unknown input (مثلاً parsed JSON، API payloads، user input) نوں ویلیڈیٹ کرن لئی استعمال کرو، اس توں
پہلاں کہ تسی array دے ہر عنصر تے ٹائپ-خاص آپریشنز کرو۔

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> کیونکہ `areOfType` اک ٹائپ گارڈ اے، TypeScript `if (areOfType(...)) {}` بلاک دے اندر array نوں `Array<DataTypeOf<T>>`
> تک narrow کر دیندا اے۔

### ਫਾਇਦੇ

- TypeScript ٹائپ گارڈ مہیا کردا اے: جدوں ایہ `true` واپس کردا اے، تاں اِن پُٹ نوں `Array<DataTypeOf<T>>` تک محدود (
  narrow) کر دِتا جاندا اے۔
- ہر عنصر نوں منگے گئے runtime ٹائپ دے مطابق ویلیڈیٹ کردا اے، تے مکسڈ-ٹائپ arrays نوں پاس ہون توں روکے رکھدا اے۔
- جلدی فیل ہوندا اے: جیویں ہی کوئی نہ ملدا عنصر لبھے، فوراً `false` واپس کر دیندا اے۔
- ڈیزائن دے مطابق non-arrays تے خالی arrays نوں رد کردا اے (ایہ `isFilledArray` تے منحصر اے)۔

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areOfType(array, type)`

ਪੈਰਾਮੀਟਰ:

- `array`: چیک کرن لئی array۔
- `type`: array دے ہر عنصر نال میچ کرن لئی ٹائپ۔

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  //‎ values hun number[] aa
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // jhootha

```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areOfType(array, type)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areOfType](‎../_analysis/areOfType.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 30 January 2026 at 17:10:53 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>