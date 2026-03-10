# isStream

## বর্ণনা

`isStream` পরীক্ষা করে প্রদত্ত কোনো মান স্ট্রিম অবজেক্ট কি না (Node.js স্ট্রিম-সদৃশ, `ReadableStream`, বা
`WritableStream`)।

### ব্যবহারের ক্ষেত্র

ইনপুট যাচাই করুন যা সাধারণ অবজেক্ট বা স্ট্রিম—দুটোর যেকোনোটি হতে পারে (যেমন, ফাইল আপলোড, HTTP বডি, বা প্রসেসিং
পাইপলাইন), এবং মানটি স্ট্রিম কি না তার ভিত্তিতে লজিক শাখাবিভাজন করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> স্ট্রিম মেথড কল করার আগে `unknown`-কে সংকীর্ণ করতে `isStream` ব্যবহার করুন; এটি Node.js স্ট্রিম-সদৃশ অবজেক্ট (`pipe`/
`on` এর মাধ্যমে) এবং Web Streams (`ReadableStream`/`WritableStream`)—যখন ওই গ্লোবালগুলো থাকে—শনাক্ত করে।

### সুবিধাসমূহ

- `pipe` এবং `on` ফাংশন আছে কি না পরীক্ষা করে সাধারণ Node.js স্ট্রিম-সদৃশ অবজেক্ট নিরাপদে শনাক্ত করে।
- উপলব্ধ থাকলে `ReadableStream` এবং `WritableStream` চিনে Web Streams-ও সমর্থন করে।
- গার্ড এবং শাখাভিত্তিক লজিকের জন্য উপযোগী একটি সহজ বুলিয়ান ফলাফল (`true`/`false`) ফেরত দেয়।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isStream(value)`

প্যারামিটার:

- `value`: যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream স্ট্রিম-সদৃশ; আপনি নিরাপদে সাধারণ স্ট্রিম API ব্যবহার করতে পারেন
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isStream(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isStream](../_analysis/isStream.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ১১:৩৮:৫৪ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>