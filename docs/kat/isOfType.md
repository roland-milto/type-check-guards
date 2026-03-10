# isOfType

## აღწერა

განსაზღვრავს, ემთხვევა თუ არა მოცემული `value` მითითებულ ტიპის სტრიქონს; პრიმიტივებისთვის იყენებს `typeof`-ს და რთული
ტიპებისთვის — სარეზერვო მეთოდს.

### გამოყენების შემთხვევა

დაამოწმეთ და დაავიწროვეთ `unknown` შეყვანები (მაგ., API პასუხები, მომხმარებლის შეყვანა, დამუშავებული JSON) იმის
შემოწმებით, შეესაბამება თუ არა მნიშვნელობა მოსალოდნელ ტიპის სტრიქონს, სანამ ტიპზე სპეციფიკურ ოპერაციებს შეასრულებთ.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `isOfType` გაშვების დროის ტიპებზე განშტოებისთვის, როცა მუშაობთ `unknown` მნიშვნელობებთან; ის აბრუნებს
`true`/`false`-ს და `null`-სა და `undefined`-ს ცალსახად ამუშავებს.

### უპირატესობები

- ამოწმებს პრიმიტივებს პირდაპირი `typeof`-ით სიჩქარისა და სიცხადისთვის.
- სწორად ამუშავებს `null`-სა და `undefined`-ს, რასაც მხოლოდ `typeof` ვერ განასხვავებს დანიშნულებისამებრ.
- მხარს უჭერს რთულ ან მორგებულ ტიპის სტრიქონებს `getTypeOf`-ის გამოყენებით სარეზერვო შედარების გზით.
- აბრუნებს მარტივ ბულურ შედეგს (`true`/`false`), რომელიც შესაფერისია გარდებისთვის და განშტოებისთვის.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isOfType(value, type)`

პარამეტრები:

- `value`: მნიშვნელობა, რომელიც უნდა შემოწმდეს `type`-თან მიმართებით.
- `type`: ტიპის სტრიქონული წარმოდგენა, რომელთანაც უნდა მოხდეს შემოწმება.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input aq aris ricxvi
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input aq aris striqoni
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isOfType(value, type)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 17:00:33 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>