# areDates

## বর্ণনা

`areDates` নির্ধারণ করে একটি প্রদত্ত অ্যারে পূর্ণ কি না এবং তাতে কেবল `Date` অবজেক্ট আছে কি না; সব উপাদান বৈধ তারিখ হলে
তবেই `true` ফেরত দেয়।

### ব্যবহারের ক্ষেত্র

তারিখ-নির্দিষ্ট লজিক (যেমন সময় অনুযায়ী সাজানো, ফরম্যাটিং, বা রেঞ্জ গণনা) চালানোর আগে অজানা ইনপুট (যেমন পার্স করা JSON,
ফর্ম ডেটা, API পেলোড) যাচাই করতে `areDates` ব্যবহার করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> শুধুমাত্র সেই নন-এম্পটি অ্যারের জন্য `true` ফেরত দেয় যেখানে প্রতিটি উপাদানই `Date`; খালি অ্যারে হলে `false` দেয়।

### সুবিধাসমূহ

- এর বিষয়বস্তু যাচাই করার আগে একটি অ্যারে খালি নয় তা নিশ্চিত করে, ফলে খালি ইনপুটের জন্য `true` ফেরত দেওয়া রোধ হয়।
- প্রতিটি উপাদান `Date` ইনস্ট্যান্স কি না যাচাই করে; প্রথম অমিল পেলেই সঙ্গে সঙ্গে `false` ফেরত দেয়।
- অ্যারের আইটেমগুলোর ওপর তারিখ-নির্দিষ্ট অপারেশন করার আগে গার্ড-স্টাইল চেক হিসেবে উপকারী।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areDates(array)`

প্যারামিটার:

- `array`: `Date` অবজেক্ট আছে কি না যাচাই করার জন্য যে অ্যারেটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // সত্য
console.log(areDates(b)); // মিথ্যা
console.log(areDates(c)); // মিথ্যা

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areDates(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areDates](../_analysis/areDates.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ৩:২৯:২৮ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>