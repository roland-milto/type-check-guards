# areStreams

## বর্ণনা

`areStreams` নির্ধারণ করে কোনো মান একটি পূর্ণ (খালি নয়) অ্যারে কি না, যেখানে প্রতিটি উপাদান একটি `Stream`।

### ব্যবহারের ক্ষেত্র

ব্যবহারকারী-প্রদত্ত বা ডাইনামিকভাবে তৈরি সংগ্রহ (যেমন, একাধিক ফাইল রিড স্ট্রিম) গ্রুপ হিসেবে পাইপ করা, রিজিউম করা, বা
অন্যভাবে অপারেট করার আগে তা যাচাই করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> অজানা ইনপুটকে `Stream[]` হিসেবে ব্যবহার করার আগে তা যাচাই করতে `areStreams` ব্যবহার করুন; এটি `true` ফেরত দেয়
> শুধুমাত্র তখনই যখন মানটি একটি খালি নয় এমন অ্যারে এবং প্রতিটি উপাদান একটি `Stream`।

### সুবিধাসমূহ

- নিশ্চিত করে যে ইনপুটটি একটি পূর্ণ (খালি নয়) অ্যারে, যেখানে প্রতিটি উপাদান একটি `Stream`।
- প্রসেসিংয়ের আগে স্ট্রিম সংগ্রহ যাচাই করার জন্য একটি সহজ `true`/`false` গার্ড প্রদান করে।
- দ্রুত ব্যর্থ হয়: কোনো non-`Stream` উপাদান পাওয়া মাত্রই `false` ফেরত দেয়।
- কোড যখন ধরে নেয় সব আইটেমই `Stream` ইনস্ট্যান্স, তখন রানটাইম ত্রুটি প্রতিরোধে সাহায্য করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areStreams(array)`

প্যারামিটার:

- `array`: Stream অবজেক্ট আছে কি না তা যাচাই করার জন্য যে অ্যারেটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input হলো Stream অবজেক্টগুলোর একটি পূর্ণ অ্যারে
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areStreams(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ১১:৩২:৫৩ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>