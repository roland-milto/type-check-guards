# isWeakMap

## বর্ণনা

প্রদত্ত `value` একটি `WeakMap` ইনস্ট্যান্স কি না তা নির্ধারণ করে।

### ব্যবহারের ক্ষেত্র

যখন আপনি একটি `unknown` মান গ্রহণ করেন (যেমন কোনো পাবলিক API, প্লাগইন সিস্টেম, বা ডাইনামিক কনফিগারেশন থেকে) এবং
`WeakMap`-নির্দিষ্ট আচরণ ব্যবহার করার আগে সেটি `WeakMap` কি না যাচাই করতে হয়, তখন `isWeakMap` ব্যবহার করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `isWeakMap` একটি `instanceof WeakMap` চেক করে; এটি একটি রানটাইম গার্ড, যা কেবল প্রকৃত `WeakMap` ইনস্ট্যান্সের জন্যই
`true` রিটার্ন করে।

### সুবিধাসমূহ

- কোনো মান `WeakMap` কি না তা যাচাই করার জন্য সহজ রানটাইম পরীক্ষা।
- `WeakMap` প্রয়োজন এমন API-গুলোর ভুল ব্যবহার প্রতিরোধে সাহায্য করে, কারণ এটি এক্সসেপশন ছোড়ার বদলে `true`/`false`
  রিটার্ন করে।
- `unknown` ইনপুটের সাথেও কাজ করে, ফলে মডিউল বাউন্ডারিতে (যেমন পার্সিং, বাহ্যিক ডেটা, বা আনটাইপড কোড) এটি সুবিধাজনক।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isWeakMap(value)`

প্যারামিটার:

- `value`: যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a রানটাইমে একটি WeakMap
}

console.log(isWeakMap(a)); // সত্য
console.log(isWeakMap(b)); // মিথ্যা
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isWeakMap(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ১:২৪:১১ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>