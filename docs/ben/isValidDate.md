# isValidDate

## বর্ণনা

`isValidDate` পরীক্ষা করে প্রদত্ত মানটি একটি বৈধ `Date` অবজেক্ট কি না এবং কেবল বাস্তব, অবৈধ নয় এমন তারিখের জন্যই `true`
ফেরত দেয়।

### ব্যবহারের ক্ষেত্র

ব্যবহারকারীর ইনপুট বা API ডেটা যাচাই করুন যেখানে তারিখ থাকতে পারে—তারিখ গণনা, ফরম্যাটিং, বা তুলনা করার আগে মানটি যে একটি
বাস্তব `Date` ইনস্ট্যান্স এবং অবৈধ তারিখ নয় তা নিশ্চিত করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `unknown` হিসেবে টাইপ করা মানগুলোর ওপর `Date` মেথড (যেমন, `toISOString`, `getTime`) কল করার আগে সেগুলো বৈধ `Date`
> অবজেক্ট কি না নিশ্চিত করতে `isValidDate` ব্যবহার করুন।

### সুবিধাসমূহ

- একটি মান যে `Date` ইনস্ট্যান্স তা নিশ্চিত করে, শুধু তারিখ-সদৃশ স্ট্রিং বা সংখ্যা নয়।
- `NaN` সময় মান আছে কি না পরীক্ষা করে অবৈধ তারিখ (যেমন, `new Date("invalid")`) প্রত্যাখ্যান করে।
- সহজ বুলিয়ান গার্ড, যা শর্ত (conditionals) এবং ভ্যালিডেশন পাইপলাইনে ব্যবহার করা সহজ।
- ইনপুট আগে যাচাই করে তারিখের মেথড কল করার সময় রানটাইম ত্রুটি প্রতিরোধে সহায়তা করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isValidDate(value)`

প্যারামিটার:

- `value`: যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input একটি বৈধ Date ইনস্ট্যান্স
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isValidDate(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ৪:৩৮:৫৭ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>