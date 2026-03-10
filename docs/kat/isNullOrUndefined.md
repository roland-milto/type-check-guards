# isNullOrUndefined

## აღწერა

ამოწმებს, არის თუ არა მოცემული მნიშვნელობა `null` ან `undefined`.

### გამოყენების შემთხვევა

`isNullOrUndefined` გამოიყენეთ მაშინ, როცა გჭირდებათ როგორც `null`-ის, ისე `undefined`-ის „მნიშვნელობის არარსებობად“
მიჩნევა — მაგალითად, არასავალდებულო შეყვანების ვალიდაციისას, API payload-ების ნორმალიზაციისას, ან კოდის ბილიკების
დასაცავად, სანამ პოტენციურად არმყოფ მნიშვნელობას dereference-ს გაუკეთებთ.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> `isNullOrUndefined` გამოიყენეთ დაკარგული მნიშვნელობებისგან დასაცავად, სანამ თვისებებზე წვდომას ან მეთოდების
> გამოძახებას შეეცდებით; ის `true`-ს აბრუნებს მხოლოდ `null`-ისა და `undefined`-ისთვის.

### უპირატესობები

- ერთ ადგილზე უზრუნველყოფს მკაფიო, ხელახლა გამოყენებად დაცვას `null`-ისა და `undefined`-ის ამოსაცნობად.
- აბრუნებს მარტივ ბულურ მნიშვნელობას (`true`/`false`), რომლის პირობებსა და ვალიდაციებში კომბინირება მარტივია.
- ეხმარება გავრცელებული runtime შეცდომების თავიდან აცილებაში, რადგან თვისებებზე წვდომამდე ან მეთოდების გამოძახებამდე
  ამოწმებს, ხომ არ აკლია მნიშვნელობა.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isNullOrUndefined(value)`

პარამეტრები:

- `value`: მნიშვნელობა, რომელიც უნდა შემოწმდეს `null`-ზე ან `undefined`-ზე.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // missing value-ya handle
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isNullOrUndefined(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>ფაილი შეიქმნა 31 January 2026 at 00:34:14 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>