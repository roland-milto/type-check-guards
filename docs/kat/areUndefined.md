# areUndefined

## აღწერა

`areUndefined` ამოწმებს, არის თუ არა მოწოდებულ მასივში ყოველი ელემენტი `undefined`.

### გამოყენების შემთხვევა

დაავალიდეთ, რომ არასავალდებულო შედეგების სია არ შეიცავს რეალურ მნიშვნელობებს (მხოლოდ `undefined`), მაგალითად,
lookup-ების map-ის შემდეგ, სადაც გამოტოვებული ჩანაწერები წარმოდგენილია როგორც `undefined`, და გსურთ დაადასტუროთ, რომ
ყველა lookup წარუმატებელი იყო.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `areUndefined`, როცა გჭირდებათ დაადასტუროთ, რომ `unknown[]` შეიცავს მხოლოდ `undefined` მნიშვნელობებს; ის
> აბრუნებს `false`-ს ცარიელი მასივებისა და არამასივ/არასწორი შეყვანებისთვის შიდა `isFilledArray` შემოწმების გამო.

### უპირატესობები

- `isFilledArray`-ის მეშვეობით შევსებული მასივის მოთხოვნით, არამასივებისა და ცარიელი მასივებისთვის აბრუნებს `false`-ს.
- უზრუნველყოფს, რომ ყოველი ელემენტი იყოს `undefined` და არა მხოლოდ ზოგიერთი, რაც განზრახვას მკაფიოდ აჩვენებს.
- გამოსადეგია როგორც guard-სტილის პრედიკატი უცნობი შეყვანის კოლექციების ვალიდაციისას.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `areUndefined(array)`

პარამეტრები:

- `array`: მასივი, რომელიც უნდა შემოწმდეს `undefined` ელემენტებზე.

### ფუნქციის ლოკალური იმპორტი

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// შენიშვნა: ცარიელი მასივებისთვის აბრუნებს false-ს
const r4 = areUndefined([]); // false
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.areUndefined(array)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 13:56:35 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>