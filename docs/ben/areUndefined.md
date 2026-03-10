# areUndefined

## বর্ণনা

`areUndefined` পরীক্ষা করে প্রদত্ত একটি অ্যারের প্রতিটি উপাদান `undefined` কিনা।

### ব্যবহারের ক্ষেত্র

ঐচ্ছিক ফলাফলের একটি তালিকায় কোনো বাস্তব মান নেই (শুধু `undefined`)—এটি যাচাই করুন; যেমন, লুকআপ ম্যাপ করার পরে যেখানে
অনুপস্থিত এন্ট্রি `undefined` দিয়ে প্রকাশ করা হয়, এবং আপনি নিশ্চিত হতে চান যে সব লুকআপ ব্যর্থ হয়েছে।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `areUndefined` ব্যবহার করুন যখন আপনাকে নিশ্চিত করতে হবে যে একটি `unknown[]`-এ শুধুই `undefined` মান আছে; এটি খালি
> অ্যারে এবং নন-অ্যারে/অবৈধ ইনপুটের জন্য `false` রিটার্ন করে, কারণ ভেতরে `isFilledArray` চেক করা হয়।

### সুবিধাসমূহ

- `isFilledArray` ব্যবহার করে ভরা অ্যারে বাধ্যতামূলক করায় নন-অ্যারে এবং খালি অ্যারের জন্য `false` রিটার্ন করে।
- শুধু কিছু নয়, প্রতিটি উপাদানই `undefined` কিনা নিশ্চিত করে, ফলে উদ্দেশ্যটি স্পষ্ট হয়।
- অজানা ইনপুট সংগ্রহ যাচাই করার সময় গার্ড-স্টাইল প্রেডিকেট হিসেবে উপকারী।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areUndefined(array)`

প্যারামিটার:

- `array`: `undefined` উপাদান আছে কিনা পরীক্ষা করার জন্য অ্যারে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// নোট: খালি অ্যারের জন্য false ফেরত দেয়
const r4 = areUndefined([]); // false

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areUndefined(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ১:৫৪:৫০ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>