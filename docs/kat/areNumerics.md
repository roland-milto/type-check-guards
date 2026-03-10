# areNumerics

## აღწერა

`areNumerics` ამოწმებს, არის თუ არა მნიშვნელობა არაცარიელი მასივი, სადაც ყველა ელემენტი რიცხვითია.

### გამოყენების შემთხვევა

გამოიყენეთ `areNumerics` გარე ან უტიპო მონაცემების (მაგ., JSON payload-ები, query პარამეტრები, ფორმის შეყვანა)
ვალიდაციისთვის ჯამების, საშუალოების ან სხვა რიცხვითი ოპერაციების გამოთვლამდე, რათა დარწმუნდეთ, რომ შეყვანა არის
არაცარიელი რიცხვითი მასივი; სხვა შემთხვევაში დააბრუნებს `false`.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `areNumerics` `unknown` შეყვანის დასაცავად, სანამ მას რიცხვით მასივად ჩათვლით; ის აბრუნებს `false`-ს
> არამასივებისთვის და ცარიელი მასივებისთვის.

### უპირატესობები

- აბრუნებს `true` მხოლოდ მაშინ, როცა შეყვანა არის არაცარიელი მასივი და ყოველი ელემენტი რიცხვითია.
- სწრაფად წყვეტს შემოწმებას: როგორც კი არარიცხვით ელემენტს იპოვის, მაშინვე აბრუნებს `false`.
- ეხმარება უცნობი შეყვანის უსაფრთხოდ ვალიდაციას რიცხვითი ოპერაციების შესრულებამდე.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `areNumerics(array)`

პარამეტრები:

- `array`: მასივი, რომლის რიცხვით ელემენტებზე შემოწმებაც უნდა მოხდეს.

### ფუნქციის ლოკალური იმპორტი

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // ჭეშმარიტი
console.log(areNumerics(b)); // ჭეშმარიტი
console.log(areNumerics(c)); // მცდარი
console.log(areNumerics(d)); // მცდარი
console.log(areNumerics(e)); // მცდარი

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.areNumerics(array)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>ფაილი შეიქმნა 6 February 2026 at 16:05:53 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>