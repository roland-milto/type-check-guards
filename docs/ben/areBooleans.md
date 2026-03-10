# areBooleans

## বর্ণনা

`areBooleans` যাচাই করে একটি প্রদত্ত খালি নয় এমন অ্যারেতে শুধুমাত্র boolean মান আছে কি না; থাকলে `true` এবং না থাকলে
`false` ফেরত দেয়।

### ব্যবহারের ক্ষেত্র

ব্যবহারকারী-প্রদত্ত বা বাহ্যিক ডেটা (যেমন, JSON payloads, query params, config arrays) যাচাই করুন যাতে একটি খালি নয় এমন
তালিকায় শুধুমাত্র boolean থাকে—তারপর boolean লজিক প্রয়োগ করুন বা `boolean[]` প্রত্যাশা করে এমন API-তে পাঠান।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `unknown[]`-কে `boolean[]` হিসেবে ব্যবহার করার আগে যাচাই করতে `areBooleans` ব্যবহার করুন; এটি খালি অ্যারের জন্য
`false` ফেরত দেয়, তাই খালি তালিকা অনুমোদিত হওয়া উচিত হলে সেই কেসটি স্পষ্টভাবে হ্যান্ডেল করুন।

### সুবিধাসমূহ

- শুধুমাত্র তখনই `true` ফেরত দেয় যখন প্রতিটি উপাদান একটি boolean এবং ইনপুটটি একটি খালি নয় এমন অ্যারে।
- খালি অ্যারে প্রত্যাখ্যান করে ( `false` ফেরত দেয়) ভুলভাবে `true` পাওয়া প্রতিরোধ করে।
- boolean-শুধু অপারেশনের আগে (যেমন, `every`, `some`, লজিক্যাল রিডাকশন) রানটাইম গার্ড হিসেবে ভালো কাজ করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areBooleans(array)`

প্যারামিটার:

- `array`: boolean উপাদান আছে কি না তা যাচাই করার জন্য অ্যারেটি।

### লোকাল ফাংশন ইমপোর্ট

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

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areBooleans(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ২:৩৯:১৯ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>