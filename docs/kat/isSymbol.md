# isSymbol

## აღწერა

`isSymbol` განსაზღვრავს, არის თუ არა მოცემული მნიშვნელობა `symbol` ტიპის, აბრუნებს `true`-ს symbol-ებისთვის და `false`-ს
სხვა შემთხვევებში.

### გამოყენების შემთხვევა

დაადასტურეთ, რომ `unknown` მნიშვნელობა არის `symbol`, სანამ გამოიყენებთ მას უნიკალურ იდენტიფიკატორად, რეესტრის გასაღებად
ან ობიექტებსა და map-ებში გამოთვლილ (computed) თვისების გასაღებად.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `isSymbol`, რათა `unknown` შევიწროოთ `symbol`-ამდე მანამდე, სანამ გამოიძახებთ symbol-თან დაკავშირებულ
> ფუნქციებს ან გამოიყენებთ მას გამოთვლილ (computed) თვისების გასაღებად.

### უპირატესობები

- JavaScript-ის `symbol` პრიმიტიული ტიპისთვის უზრუნველყოფს მარტივ და სანდო შესრულების დროის (runtime) შემოწმებას.
- ეხმარება `unknown` მნიშვნელობების შევიწროებაში (narrow) მანამდე, სანამ გამოიყენებთ symbol-სპეციფიკურ API-ებს ან
  შეინახავთ მათ გასაღებად.
- არიდებს თავს ცრუ დადებით შედეგებს `typeof`-ის გამოყენებით, რაც `symbol` მნიშვნელობების ამოსაცნობად კანონიკური გზაა.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isSymbol(value)`

პარამეტრები:

- `value`: შესამოწმებელი მნიშვნელობა.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // აქ input სიმბოლოა
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isSymbol(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 14:27:30 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>