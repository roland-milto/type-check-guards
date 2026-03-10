# areOfType

## აღწერა

ამოწმებს, არის თუ არა მოცემულ `array`-ში ყველა ელემენტი მითითებული `type`-ის.

### გამოყენების შემთხვევა

გამოიყენეთ `areOfType` უცნობი შეყვანის (მაგ., დამუშავებული JSON, API payload-ები, მომხმარებლის შეყვანა) ვალიდაციისთვის,
სანამ მასივის თითოეულ ელემენტზე ტიპზე დამოკიდებულ ოპერაციებს შეასრულებთ.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> რადგან `areOfType` არის ტიპის მცველი, TypeScript ავიწროებს მასივს `if (areOfType(...)) {}` ბლოკის შიგნით
`Array<DataTypeOf<T>>`-მდე.

### უპირატესობები

- TypeScript-ის ტიპის მცველს უზრუნველყოფს: როცა ის აბრუნებს `true`-ს, შეყვანა ვიწროვდება `Array<DataTypeOf<T>>`-მდე.
- ამოწმებს თითოეულ ელემენტს მოთხოვნილი runtime ტიპის მიხედვით, რაც ხელს უშლის შერეული ტიპების მასივებს გაიარონ.
- სწრაფად მარცხდება: აბრუნებს `false`-ს მაშინვე, როგორც კი მოიძებნება არათავსებადი ელემენტი.
- დიზაინით უარყოფს არამასივებს და ცარიელ მასივებს (დამოკიდებულია `isFilledArray`-ზე).

## გამოყენება

### სინტაქსი

ფუნქცია:

- `areOfType(array, type)`

პარამეტრები:

- `array`: მასივი, რომელიც უნდა შემოწმდეს.
- `type`: ტიპი, რომლის მიხედვითაც უნდა შემოწმდეს მასივში თითოეული ელემენტი.

### ფუნქციის ლოკალური იმპორტი

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values wa number[] na
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.areOfType(array, type)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 17:10:07 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>