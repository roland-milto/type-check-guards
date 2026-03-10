# isBoolean

## აღწერა

განსაზღვრავს, არის თუ არა მოცემული მნიშვნელობა `boolean`.

### გამოყენების შემთხვევა

გარე ან უტიპო მონაცემების (მაგ., გარემოს ცვლადები, JSON payload-ები, query პარამეტრები) ვალიდაცია, რათა დარწმუნდეთ, რომ
მნიშვნელობა არის `boolean`, სანამ მას პირობით ლოგიკაში გამოიყენებთ.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `isBoolean`, რათა `unknown` შეავიწროვოთ `boolean`-მდე ბულეან ოპერაციების გამოყენებამდე.

### უპირატესობები

- `typeof`-ის გამოყენებით მარტივი და სწრაფი შესრულების დროის შემოწმება.
- ეხმარება უცნობი შეყვანის ვალიდაციას ბულეანზე სპეციფიკურ ლოგიკამდე.
- აბრუნებს პროგნოზირებად `boolean` შედეგს (`true`/`false`).

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isBoolean(value)`

პარამეტრები:

- `value`: შესამოწმებელი მნიშვნელობა.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input აქ ბულეანია
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isBoolean(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 14:36:52 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>