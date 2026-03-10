# isWeakSet

## বর্ণনা

প্রদত্ত `value` অবজেক্টগুলোর একটি `WeakSet` কি না তা নির্ধারণ করে।

### ব্যবহারের ক্ষেত্র

যখন আপনি টাইপবিহীন ইনপুট (যেমন বাহ্যিক API, ডায়নামিক কনফিগারেশন, বা `unknown` মান) গ্রহণ করছেন এবং `WeakSet`-নির্দিষ্ট
অপারেশন ব্যবহারের আগে এটি `WeakSet` কি না যাচাই করতে হবে, তখন `isWeakSet` ব্যবহার করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> রানটাইমে একটি `unknown` মানকে `WeakSet<object>`-এ সংকুচিত (narrow) করতে `isWeakSet` ব্যবহার করুন; মনে রাখবেন `WeakSet`
> কেবল অবজেক্ট রেফারেন্সই ধারণ করতে পারে।

### সুবিধাসমূহ

- কোনো মান `WeakSet` কি না তা যাচাই করার জন্য একটি সহজ রানটাইম পরীক্ষা প্রদান করে।
- `WeakSet` ইনস্ট্যান্সগুলোকে শুধুমাত্র সেভাবেই বিবেচনা করা হচ্ছে তা নিশ্চিত করে টাইপ ত্রুটি প্রতিরোধে সহায়তা করে।
- যেকোনো `unknown` ইনপুটের সাথে কাজ করে এবং একটি স্পষ্ট বুলিয়ান ফলাফল (`true`/`false`) ফেরত দেয়।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isWeakSet(value)`

প্যারামিটার:

- `value`: যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // সত্য
console.log(isWeakSet(b)); // মিথ্যা

if (isWeakSet(a)) {
  // রানটাইমে a একটি WeakSet
}
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isWeakSet(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ২:১৩:৫৮ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>