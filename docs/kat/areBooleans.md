# areBooleans

## აღწერა

`areBooleans` ამოწმებს, შეიცავს თუ არა მოცემული არაცარიელი მასივი მხოლოდ ბულურ მნიშვნელობებს; თუ შეიცავს, აბრუნებს
`true`-ს, წინააღმდეგ შემთხვევაში — `false`-ს.

### გამოყენების შემთხვევა

მომხმარებლის მიერ მოწოდებული ან გარე მონაცემების (მაგ., JSON payload-ები, query params, კონფიგურაციის მასივები)
ვალიდაცია, რათა დარწმუნდეთ, რომ არაცარიელი სია შეიცავს მხოლოდ ბულურ მნიშვნელობებს, სანამ ბულურ ლოგიკას გამოიყენებთ ან
მას იმ API-ებს გადასცემთ, რომლებიც `boolean[]`-ს ელიან.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `areBooleans` `unknown[]`-ის ვალიდაციისთვის, სანამ მას `boolean[]`-ად მოექცევით; ის ცარიელი მასივებისთვის
> აბრუნებს `false`-ს, ამიტომ თუ ცარიელი სია დასაშვებია, ეს შემთხვევა ცალკე დაამუშავეთ.

### უპირატესობები

- აბრუნებს `true` მხოლოდ მაშინ, როცა ყველა ელემენტი არის ბულური და შეყვანა არის არაცარიელი მასივი.
- თავიდან აცილებს ცრუ დადებით შედეგებს ცარიელი მასივების უარყოფით (აბრუნებს `false`).
- კარგად მუშაობს როგორც runtime guard ბულურ-მხოლოდ ოპერაციებამდე (მაგ., `every`, `some`, ლოგიკური რედუქციები).

## გამოყენება

### სინტაქსი

ფუნქცია:

- `areBooleans(array)`

პარამეტრები:

- `array`: მასივი, რომელიც უნდა შემოწმდეს ბულური ელემენტების არსებობაზე.

### ფუნქციის ლოკალური იმპორტი

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.areBooleans(array)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 14:40:56 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>