# areObjects

## বর্ণনা

`areObjects` যাচাই করে যে প্রদত্ত পূর্ণ (খালি নয়) অ্যারেতে শুধুমাত্র অবজেক্ট আছে কি না।

### ব্যবহারের ক্ষেত্র

যখন আপনি একটি অজানা অ্যারে (যেমন, JSON পার্সিং বা বাহ্যিক API থেকে) পান এবং ইটারেট করা ও অবজেক্ট প্রপার্টি অ্যাক্সেস
করার আগে নিশ্চিত হতে চান যে এটি খালি নয় এবং প্রতিটি উপাদানই একটি অবজেক্ট—তখন `areObjects` ব্যবহার করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `unknown[]`-কে অবজেক্ট হিসেবে ধরার আগে যাচাই করতে `areObjects` ব্যবহার করুন; খালি অ্যারের জন্য এটি `false` রিটার্ন
> করে।

### সুবিধাসমূহ

- ইনপুটটি একটি পূর্ণ (খালি নয়) অ্যারে এবং প্রতিটি উপাদান একটি অবজেক্ট হলে তবেই `true` রিটার্ন করে।
- যেইমাত্র কোনো নন-অবজেক্ট উপাদান পাওয়া যায়, সঙ্গে সঙ্গে থেমে `false` রিটার্ন করে।
- অবজেক্ট-নির্দিষ্ট অপারেশন করার আগে অজানা ইনপুট যাচাই করতে সাহায্য করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areObjects(array)`

প্যারামিটার:

- `array`: অবজেক্ট উপাদান আছে কি না তা যাচাই করার জন্য অ্যারেটি।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value হল অবজেক্টের একটি পূর্ণ অ্যারে
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areObjects(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ১২:০৮:০০ AM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>