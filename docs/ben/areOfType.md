# areOfType

## বর্ণনা

প্রদত্ত `array`-এর সব উপাদান নির্দিষ্ট `type`-এর কি না তা পরীক্ষা করে।

### ব্যবহারের ক্ষেত্র

অ্যারেতে প্রতিটি উপাদানের উপর টাইপ-নির্দিষ্ট অপারেশন করার আগে অজানা ইনপুট (যেমন, পার্স করা JSON, API payloads, user
input) যাচাই করতে `areOfType` ব্যবহার করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `areOfType` একটি টাইপ গার্ড হওয়ায়, TypeScript `if (areOfType(...)) {}` ব্লকের ভিতরে অ্যারেটিকে
`Array<DataTypeOf<T>>`-এ সংকুচিত করে।

### সুবিধাসমূহ

- একটি TypeScript টাইপ গার্ড প্রদান করে: যখন এটি `true` রিটার্ন করে, ইনপুটটি `Array<DataTypeOf<T>>`-এ সংকুচিত হয়।
- অনুরোধকৃত রানটাইম টাইপের বিরুদ্ধে প্রতিটি উপাদান যাচাই করে, ফলে মিশ্র-টাইপ অ্যারে পাস করতে পারে না।
- দ্রুত ব্যর্থ হয়: কোনো অমিল উপাদান পাওয়া মাত্রই `false` রিটার্ন করে।
- ডিজাইন অনুযায়ী নন-অ্যারে এবং খালি অ্যারে প্রত্যাখ্যান করে ( `isFilledArray`-এর উপর নির্ভর করে)।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areOfType(array, type)`

প্যারামিটার:

- `array`: যে অ্যারেটি পরীক্ষা করা হবে।
- `type`: অ্যারেতে প্রতিটি উপাদানের বিরুদ্ধে যে টাইপটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values এখন number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areOfType(array, type)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ৫:০৮:৪০ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>