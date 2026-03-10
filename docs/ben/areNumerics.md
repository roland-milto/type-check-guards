# areNumerics

## বর্ণনা

`areNumerics` পরীক্ষা করে কোনো মান খালি নয় এমন একটি অ্যারে কি না, যেখানে সব উপাদান সংখ্যাসূচক।

### ব্যবহারের ক্ষেত্র

যোগফল, গড়, বা অন্যান্য সংখ্যাসূচক অপারেশন গণনা করার আগে বাহ্যিক বা টাইপবিহীন ডেটা (যেমন JSON পে-লোড, কুয়েরি
প্যারামিটার, ফর্ম ইনপুট) যাচাই করতে `areNumerics` ব্যবহার করুন—ইনপুটটি খালি নয় এমন সংখ্যাসূচক অ্যারে কি না নিশ্চিত করে,
অন্যথায় `false` ফেরত দেয়।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `unknown` ইনপুটকে সংখ্যাসূচক অ্যারে হিসেবে ব্যবহারের আগে গার্ড করতে `areNumerics` ব্যবহার করুন; এটি নন-অ্যারে এবং খালি
> অ্যারের জন্য `false` ফেরত দেয়।

### সুবিধাসমূহ

- ইনপুটটি একটি খালি নয় এমন অ্যারে এবং প্রতিটি উপাদান সংখ্যাসূচক হলে তবেই `true` ফেরত দেয়।
- দ্রুত ব্যর্থ হয়: কোনো অ-সংখ্যাসূচক উপাদান পাওয়া মাত্রই পরীক্ষা থামিয়ে `false` ফেরত দেয়।
- সংখ্যাসূচক অপারেশন করার আগে অজানা ইনপুট নিরাপদভাবে যাচাই করতে সাহায্য করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areNumerics(array)`

প্যারামিটার:

- `array`: সংখ্যাসূচক উপাদান আছে কি না তা যাচাই করার জন্য অ্যারেটি।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // সত্য
console.log(areNumerics(b)); // সত্য
console.log(areNumerics(c)); // মিথ্যা
console.log(areNumerics(d)); // মিথ্যা
console.log(areNumerics(e)); // মিথ্যা

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // ৬০
console.log(sumUnknown([10, "20", 30])); // নাল
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areNumerics(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৬
ফেব্রুয়ারী, ২০২৬ এ ৪:০৪:০১ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>