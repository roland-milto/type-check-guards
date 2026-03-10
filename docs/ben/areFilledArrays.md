# areFilledArrays

## বর্ণনা

`areFilledArrays` পরীক্ষা করে একটি দ্বিমাত্রিক অ্যারে খালি নয় কি না এবং তার সব সাবঅ্যারে খালি নয় কি না।

### ব্যবহারের ক্ষেত্র

ট্যাবুলার বা ম্যাট্রিক্স-সদৃশ ইনপুট (যেমন CSV রো, গ্রিড ডেটা, গ্রুপড রেজাল্ট) ভ্যালিডেট করতে `areFilledArrays` ব্যবহার
করুন, যাতে আপনি নিরাপদে ধরে নিতে পারেন অন্তত একটি সাবঅ্যারে আছে এবং কোনো সাবঅ্যারে খালি নয়।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> ইটারেট করা বা ইনডেক্সিং করার আগে 2D অ্যারেতে অন্তত একটি রো আছে এবং প্রতিটি রোতে অন্তত একটি এলিমেন্ট আছে—এটা নিশ্চিত
> করতে `areFilledArrays` ব্যবহার করুন।

### সুবিধাসমূহ

- বাইরের অ্যারেটি খালি নয় এবং প্রতিটি ভেতরের অ্যারেও খালি নয়—এই দু’টি শর্তই পূরণ হলে তবেই `true` রিটার্ন করে।
- সাবঅ্যারের ভেতরে যেকোনো ধরনের এলিমেন্ট (যেমন সংখ্যা, স্ট্রিং, অবজেক্ট, নেস্টেড অ্যারে) থাকলেও কাজ করে, কারণ এটি
  এলিমেন্টের কনটেন্ট নয়—শুধু অ্যারে “ভর্তি” (খালি নয়) কি না তা পরীক্ষা করে।
- দ্বিমাত্রিক ডেটা প্রসেস করার আগে গার্ড হিসেবে ব্যবহারযোগ্য একটি সহজ বুলিয়ান ফলাফল (`true`/`false`) দেয়।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areFilledArrays(array)`

প্যারামিটার:

- `array`: যে দ্বিমাত্রিক অ্যারেটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // সত্য
console.log(areFilledArrays(b)); // সত্য
console.log(areFilledArrays(c)); // সত্য
console.log(areFilledArrays(d)); // মিথ্যা
console.log(areFilledArrays(e)); // মিথ্যা
console.log(areFilledArrays(f)); // মিথ্যা

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areFilledArrays(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৬
ফেব্রুয়ারী, ২০২৬ এ ১১:৫৫:৩৩ AM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>