# areNullOrUndefined

## აღწერა

ამოწმებს, არის თუ არა მოცემულ მასივში ყველა ელემენტი `null` ან `undefined`.

### გამოყენების შემთხვევა

დაამოწმეთ, რომ არასავალდებულო ველების სია არ შეიცავს რეალურ მნიშვნელობებს (მხოლოდ `null`/`undefined`), სანამ გადაწყვეტთ
დამუშავების გამოტოვებას ან „მნიშვნელობები არ არის მოწოდებული“ მდგომარეობის ჩვენებას.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `areNullOrUndefined`, როცა გჭირდებათ გადაამოწმოთ, რომ მასივი შეიცავს მხოლოდ გამოტოვებულ მნიშვნელობებს (
`null`/`undefined`). გაითვალისწინეთ, რომ ცარიელი მასივისთვის ის აბრუნებს `false`-ს.

### უპირატესობები

- `true`-ს აბრუნებს მხოლოდ მაშინ, როცა ყოველი ელემენტი არის `null` ან `undefined`.
- ცარიელი მასივებისთვის აბრუნებს `false`-ს, რაც ეხმარება გაარჩიოს „მონაცემები არ არის“ და „ყველა მნიშვნელობა აკლია“.
- მუშაობს `unknown[]`-თან, ამიტომ უსაფრთხოა გამოყენება ტიპების დაზუსტებამდე.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `areNullOrUndefined(array)`

პარამეტრები:

- `array`: შესამოწმებელი მასივი.

### ფუნქციის ლოკალური იმპორტი

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.areNullOrUndefined(array)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>ფაილი შეიქმნა 31 January 2026 at 00:30:12 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>