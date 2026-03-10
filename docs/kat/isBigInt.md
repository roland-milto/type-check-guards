# isBigInt

## აღწერა

`isBigInt` ამოწმებს, არის თუ არა მოცემული მნიშვნელობა `bigint` ტიპის, აბრუნებს `true`-ს BigInt პრიმიტივებისთვის და სხვა
შემთხვევაში `false`-ს.

### გამოყენების შემთხვევა

დაადასტურეთ და შევიწროეთ მნიშვნელობები, რომლებიც მოდის არატიპიზებული წყაროებიდან (მაგ., JSON-ის პარსინგი, მომხმარებლის
შეყვანა, გარე API-ები) BigInt-ზე სპეციფიკური გამოთვლების შესრულებამდე ან BigInt-ზე בלבד ველებში მათი შენახვამდე.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `isBigInt`, რათა `unknown` შევიწროოთ `bigint`-მდე BigInt არითმეტიკის (მაგ., `+`, `*`) შესრულებამდე, რომელიც
> მოითხოვს BigInt ოპერანდებს.

### უპირატესობები

- `bigint` პრიმიტიული ტიპისთვის უზრუნველყოფს მარტივ და სანდო შესრულების დროის (runtime) შემოწმებას.
- ეხმარება `unknown` მნიშვნელობების შევიწროებაში BigInt-ზე בלבד ოპერაციების შესრულებამდე.
- არიდებს ცრუ დადებით შედეგებს: ჩვეულებრივი რიცხვები, სტრიქონები და სხვა ტიპები აბრუნებენ `false`-ს.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isBigInt(value)`

პარამეტრები:

- `value`: შესამოწმებელი მნიშვნელობა.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // true
console.log(isBigInt(10));  // false
console.log(isBigInt("10")); // false
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isBigInt(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>ფაილი შეიქმნა 31 January 2026 at 23:32:25 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>