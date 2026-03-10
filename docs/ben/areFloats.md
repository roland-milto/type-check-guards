# areFloats

## বর্ণনা

`areFloats` পরীক্ষা করে একটি প্রদত্ত অ্যারে পূর্ণ (খালি নয়) কি না এবং এর সব উপাদান ফ্লোট কি না।

### ব্যবহারের ক্ষেত্র

যখন আপনি একটি `unknown[]` (যেমন JSON, কুয়েরি প্যারামিটার, বা বাহ্যিক API থেকে) পান এবং সংখ্যাগত লজিক যেমন গড় নির্ণয়,
ইন্টারপোলেশন, বা পরিসংখ্যানগত গণনা চালানোর আগে নিশ্চিত হতে চান যে এটি একটি পূর্ণ (খালি নয়) অ্যারে এবং প্রতিটি আইটেম
ফ্লোট—তখন `areFloats` ব্যবহার করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `unknown[]`-কে শুধুমাত্র ফ্লোটসমৃদ্ধ `number[]` হিসেবে ব্যবহার করার আগে গার্ড হিসেবে `areFloats` ব্যবহার করুন; এটি
> খালি অ্যারের জন্য এবং যেকোনো নন-ফ্লোট উপাদানের জন্য `false` ফেরত দেয়।

### সুবিধাসমূহ

- ইনপুটটি একটি খালি নয় এমন অ্যারে এবং প্রতিটি উপাদান ফ্লোট হলে তবেই `true` ফেরত দেয়।
- দ্রুত ব্যর্থ হয়: কোনো নন-ফ্লোট উপাদান পাওয়া মাত্রই `false` ফেরত দেয়।
- ফ্লোট-নির্দিষ্ট গণনা করার আগে অজানা ইনপুট যাচাই করতে সাহায্য করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areFloats(array)`

প্যারামিটার:

- `array`: ফ্লোট উপাদান আছে কি না যাচাই করার জন্য অ্যারেটি।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // সত্য
console.log(areFloats(b)); // মিথ্যা
console.log(areFloats(c)); // মিথ্যা

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // ১.৭৫
console.log(sumFloats([1, 2])); // শূন্য
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areFloats(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ৩:৫৬:২৩ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>