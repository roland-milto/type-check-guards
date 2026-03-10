# isUndefined

## აღწერა

ამოწმებს, არის თუ არა მოცემული მნიშვნელობა `undefined`.

### გამოყენების შემთხვევა

გამოიყენეთ `isUndefined` არასავალდებულო (optional) შეყვანების დასაცავად, დაკარგული თვისებების (properties) აღმოსაჩენად,
ან „არ არის მოწოდებული“ (`undefined`) და „ცალსახად ცარიელია“ (`null`) შორის გასარჩევად.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `isUndefined`, როცა კონკრეტულად `undefined`-ის (და არა `null`-ის) აღმოჩენა გჭირდებათ. ეს უსაფრთხოა, რადგან
> ეყრდნობა `typeof value === "undefined"`-ს.

### უპირატესობები

- `typeof`-ის გამოყენებით `undefined`-ის მკაფიო და პირდაპირ შემოწმებას უზრუნველყოფს, რაც თავიდან აცილებს არადეკლარირებულ
  ცვლადებთან დაკავშირებულ საზღვრულ შემთხვევებს.
- აბრუნებს მარტივ ბულურ შედეგს (`true`/`false`), რომელიც გამოდგება guard-ებისთვის, განშტოებისთვის და ვალიდაციის
  ლოგიკისთვის.
- ეხმარება `undefined`-ის გარჩევაში სხვა „ცარიელი“ მნიშვნელობებისგან, როგორიცაა `null`, `0`, `""` ან `NaN`.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isUndefined(value)`

პარამეტრები:

- `value`: შესამოწმებელი მნიშვნელობა.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x აქ undefined არის
} else {
  // x აქ undefined არ არის
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isUndefined(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 14:03:18 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>