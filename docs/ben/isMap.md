# isMap

## বর্ণনা

প্রদত্ত `value` একটি `Map` কি না তা পরীক্ষা করে; `Map` হলে `true` এবং না হলে `false` রিটার্ন করে।

### ব্যবহারের ক্ষেত্র

`isMap` ব্যবহার করুন যখন আপনি একটি `unknown` মান (যেমন JSON পার্সিং, বাহ্যিক API, বা ব্যবহারকারীর ইনপুট থেকে) পান এবং
`Map` অপারেশন করার আগে নিশ্চিত হতে চান যে এটি একটি `Map`।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `isMap` একটি রানটাইম গার্ড, যা মানটি `Map` হলে `true` এবং অন্যথায় `false` রিটার্ন করে; `Map` API কল করার আগে `unknown`
> -কে ন্যারো করতে এটি ব্যবহার করুন।

### সুবিধাসমূহ

- কোনো মান `Map` কি না তা দ্রুত রানটাইমে যাচাই করার সুবিধা দেয়।
- `get`, `set`, এবং `has`-এর মতো `Map` মেথড প্রয়োজন এমন কোড পাথগুলোকে গার্ড করে টাইপ ত্রুটি প্রতিরোধে সাহায্য করে।
- `unknown` ইনপুট হ্যান্ডল করার সময় হালকা ভ্যালিডেশন ধাপ হিসেবে ভালো কাজ করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isMap(value)`

প্যারামিটার:

- `value`: যে মানটি যাচাই করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isMap(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isMap](../_analysis/isMap.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ৪:০৩:৪২ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>