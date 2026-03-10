# isNull

## აღწერა

ადგენს, არის თუ არა მოწოდებული `value` `null`.

### გამოყენების შემთხვევა

გამოიყენეთ `isNull` შეყვანების ან API payload-ის ველების ვალიდაციისთვის, სადაც `null` მნიშვნელოვნად სენტინელური
მნიშვნელობაა და უნდა დამუშავდეს სხვაგვარად, ვიდრე `undefined` ან სხვა მნიშვნელობები.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `isNull`, როცა საჭიროა `null`-ის გარჩევა `undefined`-ისა და სხვა falsy მნიშვნელობებისგან; ის `true`-ს
> აბრუნებს მხოლოდ `null`-ისთვის.

### უპირატესობები

- `null`-ის ზუსტი შემოწმებას უზრუნველყოფს, ისე რომ არ აურევს მას `undefined`-თან.
- ნებისმიერი შეყვანის ტიპისთვის საიმედოდ მუშაობს, რადგან იღებს `unknown`-ს.
- მარტივი, სწრაფი და გვერდითი ეფექტების გარეშეა; აბრუნებს მხოლოდ `true` ან `false`.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isNull(value)`

პარამეტრები:

- `value`: `null`-ზე შესამოწმებელი მნიშვნელობა.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // ჭეშმარიტი
console.log(isNull(b)); // მცდარი

if (isNull(a)) {
  // a აქ null-ია
}
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isNull(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isNull](../_analysis/isNull.md)

<br>

---

<small>ფაილი შეიქმნა 31 January 2026 at 15:39:49 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>