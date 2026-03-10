# areStrings

## აღწერა

`areStrings` ამოწმებს, არის თუ არა მასივი არაცარიელი და მისი ყველა ელემენტი სტრინგი, და `true`-ს აბრუნებს მხოლოდ ამ
შემთხვევაში.

### გამოყენების შემთხვევა

გარე ან მომხმარებლის მიერ მოწოდებული მონაცემების (მაგ., query params, JSON payloads, CSV fields) ვალიდაცია, რათა
დარწმუნდეთ, რომ დამუშავებამდე გაქვთ სტრინგების არაცარიელი სია.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `areStrings` უცნობი მასივების ვალიდაციისთვის, სანამ მხოლოდ სტრინგებზე გათვლილ ლოგიკას გამოიყენებთ; ცარიელი
> მასივებისთვის ის `false`-ს აბრუნებს.

### უპირატესობები

- უზრუნველყოფს, რომ ყოველი ელემენტი იყოს სტრინგი და შერეული ტიპების მასივებს უარყოფს `false`-ის დაბრუნებით.
- უარყოფს ცარიელ მასივებს, ამიტომ `true` მხოლოდ არაცარიელ სტრინგების სიას ნიშნავს.
- სასარგებლოა, როგორც სწრაფი runtime-გარდი, სანამ მხოლოდ სტრინგებზე მოქმედ ოპერაციებს შეასრულებთ (მაგ., `trim`,
  `toLowerCase`).

## გამოყენება

### სინტაქსი

ფუნქცია:

- `areStrings(value)`

პარამეტრები:

- `value`: Expected type `string[]`.

### ფუნქციის ლოკალური იმპორტი

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input runtime-ze ar aris ara-carieli string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.areStrings(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 13:18:53 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>