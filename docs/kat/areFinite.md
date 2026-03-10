# areFinite

## აღწერა

`areFinite` ამოწმებს, არის თუ არა მნიშვნელობა არაცარიელი მასივი, რომლის ელემენტებიც ყველა საბოლოო (finite) რიცხვებია; თუ
ასეა აბრუნებს `true`-ს, წინააღმდეგ შემთხვევაში — `false`-ს.

### გამოყენების შემთხვევა

რიცხვითი შეყვანის მასივების (მაგ., გრაფიკის სერიები, კოორდინატების სიები, გაზომვის ნიმუშები) ვალიდაცია გამოთვლების
შესრულებამდე, რათა შედეგი იყოს `true` მხოლოდ მაშინ, როცა ყველა მნიშვნელობა საბოლოო (finite) რიცხვია.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `areFinite`, როცა გჭირდებათ დარწმუნდეთ, რომ მასივი არაცარიელია და შეიცავს მხოლოდ საბოლოო (finite) რიცხვებს;
> ის აბრუნებს `false`-ს ცარიელი მასივებისთვის და ასევე იმ მასივებისთვის, რომლებიც შეიცავს `NaN`-ს ან უსასრულობებს.

### უპირატესობები

- აბრუნებს `true` მხოლოდ მაშინ, როცა შეყვანა არის არაცარიელი მასივი და ყოველი ელემენტი არის საბოლოო (finite) რიცხვი.
- `isFinite`-ის შემოწმებაზე დაყრდნობით თითოეული ელემენტისთვის, უარყოფს `Infinity`-ს, `-Infinity`-ს და `NaN`-ს.
- იძლევა მარტივ ბულურ შედეგს (`true`/`false`), რომელიც გამოდგება guard-ებისა და ვალიდაციის ნაკადებისთვის.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `areFinite(array)`

პარამეტრები:

- `array`: მასივი, რომელიც უნდა შემოწმდეს, რომ მისი ყველა ელემენტი იყოს საბოლოო (finite).

### ფუნქციის ლოკალური იმპორტი

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // ჭეშმარიტი
console.log(areFinite(b)); // მცდარი
console.log(areFinite(c)); // მცდარი

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.areFinite(array)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 16:35:33 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>