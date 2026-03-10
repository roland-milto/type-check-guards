# areRegExes

## აღწერა

`areRegExes` ამოწმებს, არის თუ არა მნიშვნელობა შევსებული მასივი, რომელიც შეიცავს მხოლოდ `RegExp` ობიექტებს.

### გამოყენების შემთხვევა

დაავალიდირეთ, რომ კონფიგურაციის პარამეტრი (მაგ., allow/deny პატერნების სია) არის რეგულარული გამოსახულებების არაცარიელი
მასივი, სანამ მას დამთხვევისთვის გამოიყენებთ.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `areRegExes`, რათა `unknown` დაავიწროვოთ `RegExp[]`-მდე, სანამ იტერაციას ან პატერნების კომპოზიციას
> დაიწყებთ.

### უპირატესობები

- უზრუნველყოფს, რომ მნიშვნელობა იყოს არაცარიელი მასივი, სადაც ყოველი ელემენტი არის `RegExp` ინსტანცია.
- უზრუნველყოფს მარტივ ბულურ დამცავს (`true`/`false`) მომხმარებლის შეყვანის ან კონფიგურაციის ვალიდაციისთვის.
- ეხმარება თავიდან აიცილოს შესრულების დროის შეცდომები, როცა შემდგომი კოდი ვარაუდობს, რომ ყველა ელემენტი მხარს უჭერს
  რეგულარული გამოსახულებების ოპერაციებს.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `areRegExes(array)`

პარამეტრები:

- `array`: შესამოწმებელი მნიშვნელობა.

### ფუნქციის ლოკალური იმპორტი

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // აქ patterns არის RegExp-ის მასივი
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.areRegExes(array)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 23:19:18 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>