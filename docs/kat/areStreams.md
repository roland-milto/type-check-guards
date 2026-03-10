# areStreams

## აღწერა

`areStreams` განსაზღვრავს, არის თუ არა მნიშვნელობა შევსებული მასივი, რომელშიც ყოველი ელემენტი არის `Stream`.

### გამოყენების შემთხვევა

დაავალიდირეთ მომხმარებლის მიერ მოწოდებული ან დინამიკურად აგებული კოლექციები (მაგ., რამდენიმე ფაილის წაკითხვის სტრიმი)
სანამ მათ ჯგუფურად გადამისამართებთ (pipe), გააგრძელებთ (resume) ან სხვაგვარად იმოქმედებთ მათზე.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `areStreams` უცნობი შეყვანის ვალიდაციისთვის, სანამ მას `Stream[]`-ად განიხილავთ; ის აბრუნებს `true`-ს
> მხოლოდ მაშინ, როცა მნიშვნელობა არის არაცარიელი მასივი და ყოველი ელემენტი არის `Stream`.

### უპირატესობები

- უზრუნველყოფს, რომ შეყვანა იყოს შევსებული მასივი, სადაც ყოველი ელემენტი არის `Stream`.
- უზრუნველყოფს მარტივ `true`/`false` დამცავს სტრიმების კოლექციების დამუშავებამდე ვალიდაციისთვის.
- სწრაფად წყვეტს: აბრუნებს `false`-ს მაშინვე, როგორც კი აღმოჩნდება არა-`Stream` ელემენტი.
- ეხმარება თავიდან აიცილოს შესრულების დროის შეცდომები, როცა კოდი ვარაუდობს, რომ ყველა ელემენტი არის `Stream` ინსტანსი.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `areStreams(array)`

პარამეტრები:

- `array`: მასივი, რომელიც უნდა შემოწმდეს Stream ობიექტებზე.

### ფუნქციის ლოკალური იმპორტი

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input არის Stream ობიექტების შევსებული მასივი
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.areStreams(array)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 23:34:25 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>