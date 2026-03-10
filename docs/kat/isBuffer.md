# isBuffer

## აღწერა

Маани Node.js `Buffer` экенин текшерип, `true` же `false` кайтарат.

### გამოყენების შემთხვევა

Кириштерди runtime маалында текшериңиз (мис., API payload'дары, файл маалыматтары же билдирүү буферлери) — иштетүүдөн
мурун маани `Buffer` экенин камсыз кылуу үчүн, жана `Buffer` жок болушу мүмкүн болгон Node.js'тен тышкаркы чөйрөдө
иштегенде ишенимдүү түрдө `false` алуу үчүн.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> `Buffer`-га тиешелүү ыкмаларды чакыруудан мурун `unknown` маанилерин `Buffer` түрүнө тарытуу үчүн `isBuffer`
> колдонуңуз.

### უპირატესობები

- `Buffer.isBuffer` колдонуп Node.js `Buffer` инстанстарын коопсуз аныктайт.
- `Buffer` жеткиликсиз болгон чөйрөлөрдө `false` кайтарат, ошону менен аткаруу убагындагы каталарды болтурбайт.
- `unknown` кириш мааниси менен иштейт, бул аны runtime текшерүү жана типти тарытуу үчүн ылайыктуу кылат.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isBuffer(value)`

პარამეტრები:

- `value`: Текшериле турган маани.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a Buffer di sini
  console.log(a.toString("utf8"));
}
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isBuffer(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>ფაილი შეიქმნა 31 January 2026 at 16:32:07 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>