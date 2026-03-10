# areFloats

## აღწერა

`areFloats` ამოწმებს, არის თუ არა მოცემული მასივი შევსებული და არის თუ არა მისი ყველა ელემენტი მცურავი რიცხვი (float).

### გამოყენების შემთხვევა

გამოიყენეთ `areFloats`, როცა იღებთ `unknown[]`-ს (მაგ., JSON-იდან, query პარამეტრებიდან ან გარე API-ებიდან) და გჭირდებათ
დარწმუნდეთ, რომ ეს არის შევსებული მასივი, სადაც ყოველი ელემენტი არის მცურავი რიცხვი (float), სანამ რიცხვით ლოგიკას
გაუშვებთ, როგორიცაა საშუალოს გამოთვლა, ინტერპოლაცია ან სტატისტიკური გამოთვლები.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `areFloats`, რათა დაიცვათ (guard) `unknown[]` მანამდე, სანამ მას `number[]`-ად, მხოლოდ მცურავი რიცხვების (
> float) შემცველად, მოექცევით; ის აბრუნებს `false`-ს ცარიელი მასივებისთვის და ნებისმიერი არამცურავი ელემენტისთვის.

### უპირატესობები

- აბრუნებს `true`-ს მხოლოდ მაშინ, როცა შეყვანა არის არაცარიელი მასივი და ყოველი ელემენტი არის მცურავი რიცხვი (float).
- სწრაფად წყვეტს შემოწმებას: აბრუნებს `false`-ს როგორც კი არამცურავ ელემენტს იპოვის.
- ეხმარება უცნობი შეყვანის ვალიდაციას, სანამ მცურავ რიცხვებზე (float) სპეციფიკურ გამოთვლებს შეასრულებთ.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `areFloats(array)`

პარამეტრები:

- `array`: მასივი, რომლის ელემენტების მცურავ რიცხვებად (float) შემოწმებაც უნდა მოხდეს.

### ფუნქციის ლოკალური იმპორტი

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // true
console.log(areFloats(b)); // false
console.log(areFloats(c)); // false

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.areFloats(array)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 15:58:09 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>