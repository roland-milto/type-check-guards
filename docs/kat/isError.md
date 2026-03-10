# isError

## აღწერა

ამოწმებს, არის თუ არა მოცემული `value` `Error`-ის ინსტანცია.

### გამოყენების შემთხვევა

გამოიყენეთ `isError`, როცა იღებთ `unknown` მნიშვნელობას (მაგალითად, `catch` ბლოკიდან, callback-იდან ან გარე
ბიბლიოთეკიდან) და გჭირდებათ უსაფრთხოდ განსაზღვროთ, არის თუ არა ის `Error`, სანამ `message`, `name` ან `stack`-ს
წაიკითხავთ.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `isError` `unknown` მნიშვნელობების დასაცავად (მაგ., `catch`-იდან) მანამდე, სანამ მათ `Error`-ად მოექცევით.

### უპირატესობები

- მნიშვნელობის `Error` ინსტანციად ყოფნის მარტივ გაშვების-დროის შემოწმებას უზრუნველყოფს.
- ეხმარება უცნობი შეყვანების შევიწროებაში, სანამ `Error`-ის ისეთ თვისებებს მივწვდებით, როგორიცაა `message` ან `stack`.
- `catch`-იდან, გარე API-ებიდან ან უტიპო წყაროებიდან მიღებული მნიშვნელობების დამუშავებისას ამცირებს გაშვების-დროის
  გამონაკლისების რისკს.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isError(value)`

პარამეტრები:

- `value`: `Error` ტიპთან შესამოწმებელი მნიშვნელობა.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isError(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isError](../_analysis/isError.md)

<br>

---

<small>ფაილი შეიქმნა 6 February 2026 at 12:46:03 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>