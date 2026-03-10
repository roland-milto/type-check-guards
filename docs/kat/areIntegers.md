# areIntegers

## აღწერა

`areIntegers` განსაზღვრავს, არის თუ არა მოცემულ მასივში ყველა ელემენტი მთელი რიცხვი; თუ არის, აბრუნებს `true`-ს, ხოლო
სხვა შემთხვევაში — `false`-ს.

### გამოყენების შემთხვევა

გამოიყენეთ `areIntegers` მომხმარებლის მიერ მოწოდებული ან გარე მონაცემების (მაგ., query პარამეტრები, JSON payload-ები,
CSV რიგები) ვალიდაციისთვის, როცა თქვენს ლოგიკას სჭირდება მთელ რიცხვთა შევსებული სია, როგორიცაა ID-ები, მთვლელები,
გვერდებად დაყოფის (pagination) offset-ები ან მასივის ინდექსები.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `areIntegers` როგორც runtime guard `unknown[]` შეყვანებისთვის, სანამ მათ `number[]`-ად (რომელიც მხოლოდ მთელ
> რიცხვებს შეიცავს) ჩათვლით. თუ ის აბრუნებს `false`-ს, შეყვანა ან არ არის შევსებული მასივი, ან შეიცავს მინიმუმ ერთ
> არამთელ
> მნიშვნელობას.

### უპირატესობები

- აბრუნებს `true` მხოლოდ მაშინ, როცა ყოველი ელემენტი მთელი რიცხვია; სხვა შემთხვევაში აბრუნებს `false`.
- ეხმარება უცნობი შეყვანის ვალიდაციას მთელი-რიცხვებზე დაფუძნებული ოპერაციების შესრულებამდე (მაგ., ინდექსირება,
  რაოდენობები, ID-ები).
- სწრაფად წყვეტს: ამოწმებს შეწყვეტით, როგორც კი არამთელი ელემენტი მოიძებნება.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `areIntegers(array)`

პარამეტრები:

- `array`: მასივი, რომელიც უნდა შემოწმდეს მთელი რიცხვების ელემენტებზე.

### ფუნქციის ლოკალური იმპორტი

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // ჭეშმარიტი
console.log(areIntegers(b)); // ჭეშმარიტი
console.log(areIntegers(c)); // მცდარი

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.areIntegers(array)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>ფაილი შეიქმნა 31 January 2026 at 00:59:08 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>