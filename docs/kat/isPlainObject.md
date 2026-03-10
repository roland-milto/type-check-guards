# isPlainObject

## აღწერა

ამოწმებს, არის თუ არა მოცემული `value` უბრალო ობიექტი და თუ არის, აბრუნებს `true`-ს, წინააღმდეგ შემთხვევაში — `false`-ს.

### გამოყენების შემთხვევა

დაადასტურეთ, რომ `unknown` შეყვანა (მაგ., გაპარსული JSON, გარე მონაცემები ან ფუნქციის არგუმენტები) არის უბრალო ობიექტი,
სანამ გასაღებებს წაიკითხავთ ან მას ტიპიზებულ კონფიგურაციის ობიექტად გარდაქმნით.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> `isPlainObject` სასარგებლოა `unknown`-ის დავიწროებისთვის, სანამ მას ჩანაწერის მსგავს (record-like) ობიექტად
> მოვექცევით; ის `true`-ს აბრუნებს მხოლოდ იმ მნიშვნელობებისთვის, რომელთა შიდა ტეგია `[object Object]`.

### უპირატესობები

- მარტივ და სანდო შემოწმებას უზრუნველყოფს, არის თუ არა მნიშვნელობა უბრალო ობიექტი (ანუ `Object` / `{}`), და აბრუნებს
  `true` ან `false`.
- ეხმარება უბრალო ობიექტების გარჩევაში მასივებისგან, ფუნქციებისგან, `null`-ისგან და სხვა არაუბრალო ობიექტის ტიპებისგან.
- სასარგებლოა TypeScript-ში როგორც ტიპის დამცველი (type guard), რათა `unknown` მნიშვნელობები დავავიწროვოთ ობიექტის
  თვისებებზე წვდომამდე.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isPlainObject(value)`

პარამეტრები:

- `value`: მნიშვნელობა, რომლისთვისაც მოწმდება, არის თუ არა იგი უბრალო ობიექტი.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // აქ input არის ჩვეულებრივი ობიექტი
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // ჭეშმარიტი
console.log(isPlainObject([])); // მცდარი
console.log(isPlainObject(null)); // მცდარი

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isPlainObject(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>ფაილი შეიქმნა 6 February 2026 at 12:18:17 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>