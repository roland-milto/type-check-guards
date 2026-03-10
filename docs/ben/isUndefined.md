# isUndefined

## বর্ণনা

প্রদত্ত কোনো মান `undefined` কি না তা পরীক্ষা করে।

### ব্যবহারের ক্ষেত্র

ঐচ্ছিক ইনপুট গার্ড করতে, অনুপস্থিত প্রপার্টি শনাক্ত করতে, অথবা “প্রদান করা হয়নি” (`undefined`) এবং “স্পষ্টভাবে খালি” (
`null`)—এর মধ্যে পার্থক্য করতে `isUndefined` ব্যবহার করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> যখন আপনার বিশেষভাবে `undefined` ( `null` নয়) শনাক্ত করার প্রয়োজন হয়, তখন `isUndefined` ব্যবহার করুন। এটি নিরাপদ,
> কারণ এটি `typeof value === "undefined"`-এর ওপর নির্ভর করে।

### সুবিধাসমূহ

- `typeof` ব্যবহার করে `undefined`-এর জন্য একটি স্পষ্ট, নির্দিষ্ট পরীক্ষা প্রদান করে, ঘোষিত নয় এমন ভেরিয়েবলের ক্ষেত্রে
  প্রান্তিক পরিস্থিতি এড়িয়ে।
- গার্ড, শাখানির্ণয়, এবং যাচাইকরণ লজিকের জন্য উপযোগী একটি সহজ বুলিয়ান ফলাফল (`true`/`false`) ফেরত দেয়।
- `undefined`-কে `null`, `0`, `""`, বা `NaN`-এর মতো অন্যান্য “খালি” মান থেকে আলাদা করতে সাহায্য করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isUndefined(value)`

প্যারামিটার:

- `value`: যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // এখানে x অনির্ধারিত
} else {
  // এখানে x অনির্ধারিত নয়
}

const a = isUndefined(undefined); // সত্য
const b = isUndefined(null);      // মিথ্যা
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isUndefined(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ২:০১:৫৯ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>