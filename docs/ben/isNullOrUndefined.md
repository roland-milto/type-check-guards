# isNullOrUndefined

## বর্ণনা

প্রদত্ত কোনো মান `null` বা `undefined` কিনা তা পরীক্ষা করে।

### ব্যবহারের ক্ষেত্র

যখন আপনাকে `null` এবং `undefined`—দুটিকেই “কোনো মান নেই” হিসেবে বিবেচনা করতে হয়, যেমন ঐচ্ছিক ইনপুট ভ্যালিডেট করা, API
পে-লোড নরমালাইজ করা, বা সম্ভাব্যভাবে অনুপস্থিত কোনো মান ডিরেফারেন্স করার আগে কোড পাথ গার্ড করা—তখন `isNullOrUndefined`
ব্যবহার করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> প্রপার্টি অ্যাক্সেস করা বা মেথড কল করার আগে অনুপস্থিত মান থেকে সুরক্ষিত থাকতে `isNullOrUndefined` ব্যবহার করুন; এটি
> কেবল `null` এবং `undefined`-এর জন্যই `true` ফেরত দেয়।

### সুবিধাসমূহ

- এক জায়গায় `null` এবং `undefined` শনাক্ত করার জন্য একটি স্পষ্ট, পুনঃব্যবহারযোগ্য গার্ড প্রদান করে।
- একটি সহজ বুলিয়ান (`true`/`false`) ফেরত দেয়, যা শর্ত এবং ভ্যালিডেশনে সহজে কম্পোজ করা যায়।
- প্রপার্টি অ্যাক্সেস করা বা মেথড কল করার আগে অনুপস্থিত মান আছে কি না যাচাই করে সাধারণ রানটাইম ত্রুটি এড়াতে সাহায্য করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isNullOrUndefined(value)`

প্যারামিটার:

- `value`: `null` বা `undefined` কিনা তা যাচাই করার জন্য মানটি।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // অনুপস্থিত মান পরিচালনা করুন
}

console.log(isNullOrUndefined(b)); // সত্য
console.log(isNullOrUndefined(c)); // মিথ্যা

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isNullOrUndefined(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ১২:৩৩:০৬ AM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>