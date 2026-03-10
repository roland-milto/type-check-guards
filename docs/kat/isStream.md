# isStream

## აღწერა

`isStream` ამოწმებს, არის თუ არა მოცემული მნიშვნელობა სტრიმის ობიექტი (Node.js-ის სტრიმის მსგავსი, `ReadableStream` ან
`WritableStream`).

### გამოყენების შემთხვევა

დაავალიდირეთ ინპუტები, რომლებიც შეიძლება იყოს როგორც ჩვეულებრივი ობიექტები, ისე სტრიმები (მაგ., ფაილის ატვირთვები, HTTP
body-ები ან დამუშავების პაიპლაინები) და განშტოეთ ლოგიკა იმის მიხედვით, არის თუ არა მნიშვნელობა სტრიმი.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> `isStream` გამოიყენეთ `unknown`-ის დასავიწროებლად სტრიმის მეთოდების გამოძახებამდე; ის ცნობს Node.js-ის სტრიმის მსგავს
> ობიექტებს (`pipe`/`on`-ის მეშვეობით) და Web Streams-ს (`ReadableStream`/`WritableStream`), როცა ეს გლობალები არსებობს.

### უპირატესობები

- Node.js-ის გავრცელებული სტრიმის მსგავსი ობიექტების უსაფრთხოდ ამოცნობა `pipe` და `on` ფუნქციების შემოწმებით.
- ასევე უჭერს მხარს Web Streams-ს, ხელმისაწვდომობის შემთხვევაში `ReadableStream` და `WritableStream`-ის ამოცნობით.
- აბრუნებს მარტივ ბულურ შედეგს (`true`/`false`), რომელიც გამოდგება guard-ებისა და განშტოებული ლოგიკისთვის.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isStream(value)`

პარამეტრები:

- `value`: შესამოწმებელი მნიშვნელობა.

### ფუნქციის ლოკალური იმპორტი

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream ნაკადისმაგვარია; შეგიძლია უსაფრთხოდ გამოიყენო ნაკადის საერთო API-ები
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isStream(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isStream](../_analysis/isStream.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 23:40:49 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>