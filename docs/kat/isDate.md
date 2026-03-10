# isDate

## აღწერა

`isDate` berilgen märtäbeniñ `Date` ekenin anıqlay, `Date` instansiyaları üşin `true`, basqa jağdaylarda `false`
qaytaradı.

### გამოყენების შემთხვევა

`Date` operatsiyaların (mäsälän, formatlav, salıstıruv, yaki `toISOString()` şaqıruv) atqarğannan burın belgisiz
märtäbelerdi (mäsälän, suranıw derekleri, konfiguratsiya märtäbeleri, yaki parse etilgen JSON) validatsiyalap, tipin
taraytuv.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> `isDate`-tı runtime-da `unknown`-dı `Date`-qa taraytuv üşin qullanıñız; ol tek nağız `Date` instansiyaları üşin `true`
> qaytaradı (date string-ler üşin emes).

### უპირატესობები

- Es təmin eda ğayrı runtime qorğav, teqşermege ki, märtäbe `Date`-dirme.
- Ol type xatalarnı aldın alır, validatsiyadan tek `Date` instansiyaları ötüvün təmin etip.
- Ol belgisiz kirislerdi (mäsälän, API payload-lar) `Date`-ğa arnaulı metodlardı qullanğannan burın validatsiyalav üşin
  paydalıdır.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isDate(value)`

პარამეტრები:

- `value`: `Date` tipi üşin teqşeriletin märtäbe.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // აქ input არის Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isDate(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isDate](../_analysis/isDate.md)

<br>

---

<small>ფაილი შეიქმნა 31 January 2026 at 15:46:34 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>