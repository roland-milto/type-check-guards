# arePlainObjects

## বর্ণনা

একটি অ্যারের সব উপাদান সাধারণ অবজেক্ট কি না তা পরীক্ষা করে; প্রতিটি উপাদান যোগ্য হলেই কেবল `true` রিটার্ন করে।

### ব্যবহারের ক্ষেত্র

বাহ্যিক বা টাইপবিহীন ডেটা (যেমন, পার্স করা JSON, API payloads, ফর্ম সাবমিশন) যাচাই করুন—যাতে ইটারেট করা এবং প্রপার্টি
পড়ার আগে নিশ্চিত হওয়া যায় যে আপনি একটি নন-এম্পটি অ্যারে পেয়েছেন যেখানে প্রতিটি এন্ট্রি একটি সাধারণ অবজেক্ট।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> TypeScript-এ অজানা ইনপুটকে `Record<string, unknown>[]` (অথবা আরও কঠোর অবজেক্ট শেপ) হিসেবে ব্যবহারের আগে যাচাই করতে
`arePlainObjects` ব্যবহার করুন।

### সুবিধাসমূহ

- ইনপুট অ্যারের প্রতিটি উপাদান একটি সাধারণ অবজেক্ট কি না তা নিশ্চিত করে; সব আইটেম মিলে গেলেই কেবল `true` রিটার্ন করে।
- অবৈধ ইনপুট (অ্যারে নয় বা খালি অ্যারে) দ্রুত বাতিল করে `false` রিটার্ন করে।
- অবজেক্ট-লিটারাল অবজেক্ট এবং `Object.create(null)` অবজেক্ট—দুটিকেই বৈধ সাধারণ অবজেক্ট হিসেবে গণ্য করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `arePlainObjects(array)`

প্যারামিটার:

- `array`: সাধারণ অবজেক্ট উপাদান আছে কি না তা যাচাই করার জন্য যে অ্যারেটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // সত্য
const b = arePlainObjects([{}, Object.create(null)]); // সত্য
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // মিথ্যা
const d = arePlainObjects([] as unknown[]); // মিথ্যা
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.arePlainObjects(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ৪:২৪:২৩ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>