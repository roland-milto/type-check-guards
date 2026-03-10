# areValidDates

## বর্ণনা

নির্ধারণ করে যে একটি অ্যারে খালি নয় এবং সম্পূর্ণভাবে বৈধ `Date` অবজেক্ট নিয়ে গঠিত কি না।

### ব্যবহারের ক্ষেত্র

তারিখ-ভিত্তিক অপারেশন (সোর্টিং, রেঞ্জ চেক, ফরম্যাটিং) করার আগে ব্যবহারকারী-প্রদত্ত বা API-প্রদত্ত অ্যারে ভ্যালিডেট করতে
`areValidDates` ব্যবহার করুন, যাতে নিশ্চিত হয় যে সব এন্ট্রি বাস্তব, বৈধ `Date` অবজেক্ট এবং তালিকাটি খালি নয়।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `areValidDates` খালি অ্যারের জন্য `false` ফেরত দেয়; ভ্যালিডেশন ধাপ হিসেবে এর ওপর নির্ভর করার আগে নিশ্চিত করুন যে
> অ্যারেটি খালি নয় হওয়ার উদ্দেশ্যে দেওয়া হয়েছে।

### সুবিধাসমূহ

- শুধুমাত্র তখনই `true` ফেরত দেয় যখন প্রতিটি উপাদান একটি বৈধ `Date` ইনস্ট্যান্স (যেমন `new Date('invalid')`-এর মতো অবৈধ
  তারিখ নয়)।
- `false` ফেরত দিয়ে খালি ইনপুট প্রত্যাখ্যান করে, ফলে আপনি কেবল অর্থবহ, খালি নয় এমন তারিখের তালিকাই গ্রহণ করেন।
- একটি সহজ বুলিয়ান গার্ড-স্টাইল চেক প্রদান করে, যা অন্যান্য ভ্যালিডেশনের সাথে কম্পোজ করা সহজ।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areValidDates(array)`

প্যারামিটার:

- `array`: যে অ্যারে পরীক্ষা করা হবে, যাতে সম্ভাব্যভাবে `Date` অবজেক্ট থাকতে পারে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // সত্য
console.log(areValidDates(b)); // মিথ্যা
console.log(areValidDates(c)); // মিথ্যা
console.log(areValidDates(d)); // মিথ্যা

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areValidDates(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ২:৩০:৪৫ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>