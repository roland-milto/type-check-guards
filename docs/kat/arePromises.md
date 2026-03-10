# arePromises

## აღწერა

`arePromises` განსაზღვრავს, არის თუ არა მასივში ყველა ელემენტი `Promise`-ის ინსტანცია.

### გამოყენების შემთხვევა

დაადასტურეთ, რომ დინამიკურად აგებული ან გარედან მოწოდებული სია შეიცავს მხოლოდ promise-ებს, სანამ მათ გააერთიანებთ (მაგ.,
`Promise.all`-ით).

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `arePromises` `unknown[]`-ის ვალიდაციისთვის, სანამ გამოიძახებთ `Promise.all`-ს ან სხვა მხოლოდ promise-ებზე
> გათვლილ ოპერაციებს; ცარიელი მასივებისთვის აბრუნებს `false`-ს.

### უპირატესობები

- უზრუნველყოფს, რომ თითოეული ელემენტი იყოს `Promise`, სანამ გააგრძელებთ promise-სპეციფიკურ ლოგიკას.
- არაშევსებული მასივებისთვის აბრუნებს `false`-ს, რაც ცარიელი შეყვანებისთვის ორაზროვან შედეგებს თავიდან აცილებს.
- სასარგებლოა როგორც runtime guard, როცა მუშაობთ გარე წყაროებიდან მიღებულ `unknown[]`-თან.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `arePromises(array)`

პარამეტრები:

- `array`: მასივი, რომელიც უნდა შემოწმდეს Promise-ის ინსტანციებზე.

### ფუნქციის ლოკალური იმპორტი

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values არის Promise-ის ინსტანციების მასივი შესრულების დროს
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.arePromises(array)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 23:48:50 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>