# isNumber

## აღწერა

`isNumber` ამოწმებს, არის თუ არა მნიშვნელობა საბოლოო, არა-`NaN` რიცხვი.

### გამოყენების შემთხვევა

დაავალიდირეთ რიცხვითი შეყვანა არასანდო წყაროებიდან (ფორმები, query params, JSON payloads) გამოთვლებამდე, შენახვამდე ან
დიაპაზონის შემოწმებამდე, რათა მხოლოდ საბოლოო რიცხვებმა გაიარონ (`true`), ხოლო ყველაფერი დანარჩენმა დააბრუნოს `false`.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> გამოიყენეთ `isNumber` `unknown` მნიშვნელობების ვალიდაციისთვის არითმეტიკის შესრულებამდე; ის უარყოფს `NaN`-ს, `Infinity`
> -ს და `-Infinity`-ს.

### უპირატესობები

- აბრუნებს `true`-ს მხოლოდ ნამდვილი JavaScript რიცხვებისთვის (ტიპის შემოწმება პლუს `NaN`-ისა და უსასრულობის უარყოფა).
- იცავს გავრცელებული ვალიდაციის შეცდომებისგან, როცა `NaN`, `Infinity` ან `-Infinity` შემთხვევით გადის როგორც რიცხვი.
- კარგად მუშაობს როგორც runtime guard უცნობი შეყვანისთვის (მაგ., JSON, მომხმარებლის შეყვანა, გარე API-ები).
- მარტივი, სწრაფი და გვერდითი ეფექტების გარეშე.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isNumber(value)`

პარამეტრები:

- `value`: შესამოწმებელი მნიშვნელობა.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input jẹ nomba to wulo, to lopin
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isNumber(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 13:09:40 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>