# areFalse

## აღწერა

`areFalse` ამოწმებს, არის თუ არა მოწოდებულ მასივში ყველა ელემენტი მკაცრად ბულური `false`.

### გამოყენების შემთხვევა

დაავალიდირეთ, რომ feature flag-ების, შემოწმებების ან guard-ის შედეგების სია მთლიანად `false`-ია გაგრძელებამდე (მაგ.,
დაადასტურეთ, რომ ბლოკირებადი პირობები არ არსებობს).

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `areFalse`, როცა გჭირდებათ მკაცრი ვალიდაცია, რომ მასივი არ არის ცარიელი და შეიცავს მხოლოდ ბულურ
> მნიშვნელობას `false`.

### უპირატესობები

- ყოველი ელემენტის მკაცრად `false`-ად ყოფნას უზრუნველყოფს (არ ხდება truthy/falsey კოერცია).
- `isFilledArray`-ით შევსებული მასივის მოთხოვნით, არამასივებისთვის ან ცარიელი მასივებისთვის აბრუნებს `false`-ს.
- ეფექტიანობისთვის პირველივე არ-`false` ელემენტზე ადრე წყვეტს.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `areFalse(array)`

პარამეტრები:

- `array`: შესამოწმებელი მასივი, რომელიც ნებისმიერი ტიპის ელემენტებს შეიცავს.

### ფუნქციის ლოკალური იმპორტი

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // true
const b = areFalse([false, true, false]);  // false
const c = areFalse([false, "false", false]); // false
const d = areFalse([]); // false

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.areFalse(array)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>ფაილი შეიქმნა 31 January 2026 at 16:17:36 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>