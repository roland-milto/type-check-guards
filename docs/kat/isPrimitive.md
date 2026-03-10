# isPrimitive

## აღწერა

`isPrimitive` განსაზღვრავს, არის თუ არა მოცემული მნიშვნელობა პრიმიტივი (`null`, `undefined`, `boolean`, `number`,
`string`, `bigint`, `symbol`).

### გამოყენების შემთხვევა

შეყვანების ვალიდაცია შესრულების დროს (მაგ., API payload-ის ველები, კონფიგურაციის მნიშვნელობები ან მომხმარებლის მიერ
მოწოდებული მონაცემები), რათა დარწმუნდეთ, რომ მნიშვნელობა პრიმიტივია სერიალიზაციამდე, ლოგირებამდე ან მხოლოდ-პრიმიტივზე
ოპერაციების გამოყენებამდე.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> `isPrimitive` გამოიყენეთ `unknown` შეყვანების დასაცავად, სანამ მათ ობიექტებად ან ფუნქციებად მოექცევით; ის აბრუნებს
`true`-ს პრიმიტივებისთვის და `false`-ს ობიექტებისა და ფუნქციებისთვის.

### უპირატესობები

- სწრაფი, ალოკაციის გარეშე შემოწმება იმისთვის, არის თუ არა მნიშვნელობა JavaScript-ის პრიმიტივი.
- სწორად მიიჩნევს `null`-ს პრიმიტივად (მიუხედავად იმისა, რომ `typeof null` არის `"object"`).
- ეხმარება `unknown` მნიშვნელობების შევიწროებაში ობიექტებზე-მხოლოდ ოპერაციების შესრულებამდე.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isPrimitive(value)`

პარამეტრები:

- `value`: მნიშვნელობა, რომლის პრიმიტიულ ტიპად ყოფნაც უნდა შემოწმდეს.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isPrimitive(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 23:56:43 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>