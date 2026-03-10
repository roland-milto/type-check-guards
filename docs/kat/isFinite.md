# isFinite

## აღწერა

ადგენს, არის თუ არა მოცემული `value` სასრულ `number`.

### გამოყენების შემთხვევა

გამოიყენეთ `isFinite` უცნობი შეყვანის (მაგ., JSON-იდან, ფორმებიდან ან API-ებიდან) ვალიდაციისთვის რიცხვითი გამოთვლების
შესრულებამდე, რათა დარწმუნდეთ, რომ მნიშვნელობა რეალური, სასრული რიცხვია.

> **შენიშვნა TypeScript მომხმარებლებისთვის:**
>
> `isFinite` აბრუნებს `true`-ს მხოლოდ სასრულ რიცხვებზე; ის აბრუნებს `false`-ს `NaN`-ისთვის, `Infinity`-ისთვის და
> ნებისმიერი არარიცხვითი მნიშვნელობისთვის.

### უპირატესობები

- იყენებს ჩაშენებულ `Number.isFinite`-ს სანდო სასრულობის შემოწმებისთვის.
- აბრუნებს `true`-ს მხოლოდ სასრულ რიცხვებზე; აბრუნებს `false`-ს `NaN`-ისთვის, `Infinity`-ისთვის და არარიცხვითი
  შეყვანებისთვის.
- მარტივი, გვერდითი ეფექტებისგან თავისუფალი პრედიკატი, რომელიც გამოდგება ვალიდაციისა და დამცავი ლოგიკისთვის.

## გამოყენება

### სინტაქსი

ფუნქცია:

- `isFinite(value)`

პარამეტრები:

- `value`: მნიშვნელობა, რომლის სასრულობაც უნდა შემოწმდეს.

### ფუნქციის ლოკალური იმპორტი

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers aris: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value ak aris sasrulo ricxvi
  const doubled = value * 2;
  console.log(doubled);
}
```

### ობიექტის გლობალური იმპორტი

ფუნქციების, როგორც გლობალური ობიექტის მეთოდების, იმპორტისთვის გამოიყენეთ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

შემდეგი მეთოდი გლობალურად იქნება ხელმისაწვდომი:

- `Type.isFinite(value)`

## ფუნქციების ანალიზი

აქ დოკუმენტირებულია ცხრილური ანალიზი იმ შედეგის შესახებ, რომელიც მიიღება ფუნქციებში სხვადასხვა პარამეტრის
შეყვანისას: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>ფაილი შეიქმნა 30 January 2026 at 16:30:25 (UTC)-ზე *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-ის გამოყენებით,
ავტორი: **[Roland Milto](https://roland-milto.de/)**.</small>