# getTypeOf

## აღწერა

`getTypeOf` აბრუნებს დეტალურ, ადამიანისთვის წაკითხვად ტიპის იარლიყს მოცემული მნიშვნელობისთვის, მათ შორის დახვეწილ
რიცხვით ტიპებს და კონკრეტულ ობიექტის სახეობებს.

### გამოყენების შემთხვევა

გამოიყენეთ `getTypeOf` ტიპის ამოცნობის ნორმალიზებისთვის შეყვანის ვალიდაციასა და დიაგნოსტიკაში—მაგალითად, `nan`-ის
უარყოფისთვის, მხოლოდ `integer` ID-ების მისაღებად, `decimal`-ის მსგავსი რიცხვითი სტრიქონების განსხვავებულად
დასამუშავებლად, ვიდრე ჩვეულებრივი `string`, ან ზუსტი ობიექტის სახეობების დასალოგად, როგორიცაა `date` და `regexp`.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> დაბრუნებული ტიპია `DataTypeAsString | string`. მოექეცით მას როგორც აღწერით იარლიყს; განშტოებისას შეადარეთ ცნობილ
> ლიტერალებს, როგორიცაა `integer`, `float`, `nan`, `array`, `null` და `undefined`.

### უპირატესობები

- აბრუნებს უფრო დეტალურ ტიპის სტრიქონს, ვიდრე JavaScript-ის `typeof`, მათ შორის რიცხვით ქვეტიპებს, როგორიცაა `integer`,
  `float` და `nan`.
- `null`-სა და `undefined`-ს მკაფიოდ განასხვავებს როგორც `null` და `undefined`.
- ამოიცნობს გავრცელებულ რიცხვითი სტრიქონების ფორმატებს და მათ შესახებ ანგარიშობს როგორც `binary`, `octal`, `decimal` ან
  `hexadecimal`, ნაცვლად ჩვეულებრივი `string`-ისა.
- ასევე ამოიცნობს მასივებს როგორც `array` და იყენებს `Object.prototype.toString`-ს კონკრეტული ობიექტის ტიპის სახელების
  მისაცემად (მაგ., `date`, `regexp`, `map`, `set`).
- ძალიან სასარგებლოა ვალიდაციისთვის, ლოგირებისთვის და დებაგინგისთვის, სადაც საჭიროა თანმიმდევრული, ადამიანისთვის
  წაკითხვადი ტიპის იარლიყები.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `getTypeOf(value)`

პარამეტრები:

- `value`: მნიშვნელობა, რომლისთვისაც უნდა განისაზღვროს მონაცემთა ტიპი.

### ფუნქციის ლოკალური იმპორტი

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// მაგალითის შემოწმებები
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.getTypeOf(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>ფაილი შეიქმნა 6 February 2026 at 13:12:55 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>