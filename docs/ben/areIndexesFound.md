# areIndexesFound

## বর্ণনা

`areIndexesFound` পরীক্ষা করে কোনো মান একটি খালি নয় এমন অ্যারে কি না এবং তার সব উপাদান বৈধ ইনডেক্স কি না; হলে `true`
এবং না হলে `false` ফেরত দেয়।

### ব্যবহারের ক্ষেত্র

ব্যবহারকারী-প্রদত্ত বা বাহ্যিক ডেটা (যেমন, পার্স করা JSON) যা ইনডেক্সের একটি তালিকা হওয়ার কথা, সেটি অ্যাক্সেস বা স্লাইস
করার আগে যাচাই করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> অজানা ইনপুটকে অ্যারে ইনডেক্স হিসেবে ধরার আগে তার উপাদানগুলো যাচাই করতে `areIndexesFound` ব্যবহার করুন; খালি অ্যারের
> জন্য এবং নন-ইনডেক্স মান থাকা অ্যারের জন্য এটি `false` ফেরত দেয়।

### সুবিধাসমূহ

- ইনপুটটি একটি পূর্ণ (খালি নয়) অ্যারে এবং প্রতিটি উপাদান একটি বৈধ ইনডেক্স হলে তবেই `true` ফেরত দেয়।
- দ্রুত ব্যর্থ হয়: কোনো নন-ইনডেক্স উপাদান পাওয়া মাত্রই `false` ফেরত দেয়।
- মানগুলোকে অ্যারের অবস্থান বা অফসেট হিসেবে ব্যবহার করার আগে গার্ড হিসেবে উপকারী।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areIndexesFound(array)`

প্যারামিটার:

- `array`: ইনডেক্স-সম্মতি আছে কি না তা যাচাই করার জন্য অ্যারেটি।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // সত্য
console.log(areIndexesFound(b)); // মিথ্যা
console.log(areIndexesFound(c)); // মিথ্যা

if (areIndexesFound(a)) {
  // এখানে, `a`-কে সূচকের একটি পূর্ণ অ্যারে হিসেবে নিশ্চিত করা হয়েছে।
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areIndexesFound(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ১২:৪১:০৩ AM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>