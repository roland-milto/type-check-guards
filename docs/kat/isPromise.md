# isPromise

## აღწერა

ადგენს, არის თუ არა მოცემული მნიშვნელობა `Promise`.

### გამოყენების შემთხვევა

გამოიყენეთ `isPromise` უცნობი შეყვანების ვალიდაციისთვის, სანამ მათ `Promise`-ად მოექცევით, მაგალითად, პლაგინებიდან
დაბრუნებული მნიშვნელობების, დინამიკური იმპორტების ან სუსტად ტიპიზებული API-ების დამუშავებისას.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> `isPromise` ამოწმებს `instanceof Promise`-ით, ამიტომ `true`-ს აბრუნებს მხოლოდ რეალური `Promise` ინსტანციებისთვის (არა
> ზოგადი thenable-ებისთვის).

### უპირატესობები

- მნიშვნელობის `Promise`-ად ყოფნის მარტივ გაშვების დროის შემოწმებას უზრუნველყოფს.
- ეხმარება კოდის იმ ბილიკების დაცვაში, რომლებსაც რეალური `Promise` ინსტანცია სჭირდება, და პროგნოზირებადად აბრუნებს
  `true` ან `false`.
- არიდებს თავს ცრუ დადებით შედეგებს “thenable” ობიექტებიდან (მაგ., `{ then() {} }`) რეალური `Promise` ინსტანციის
  მოთხოვნით.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isPromise(value)`

პარამეტრები:

- `value`: შესამოწმებელი მნიშვნელობა.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // ჭეშმარიტი
console.log(isPromise(b)); // მცდარი
console.log(isPromise(123)); // მცდარი
console.log(isPromise(null)); // მცდარი

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isPromise(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 23:53:17 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>