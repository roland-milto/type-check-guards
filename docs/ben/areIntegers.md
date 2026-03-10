# areIntegers

## বর্ণনা

`areIntegers` নির্ধারণ করে প্রদত্ত একটি অ্যারের সব উপাদান পূর্ণসংখ্যা কি না; পূর্ণসংখ্যা হলে `true` এবং অন্যথায় `false`
ফেরত দেয়।

### ব্যবহারের ক্ষেত্র

যখন আপনার লজিকের জন্য ID, কাউন্টার, পেজিনেশন অফসেট, বা অ্যারে ইনডেক্সের মতো পূর্ণসংখ্যা মানের একটি পূর্ণ তালিকা দরকার,
তখন ব্যবহারকারী-প্রদত্ত বা বাহ্যিক ডেটা (যেমন, কুয়েরি প্যারামিটার, JSON পে-লোড, CSV সারি) যাচাই করতে `areIntegers`
ব্যবহার করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `unknown[]` ইনপুটকে শুধুমাত্র পূর্ণসংখ্যা-সম্বলিত `number[]` হিসেবে ব্যবহার করার আগে `areIntegers`-কে একটি রানটাইম
> গার্ড হিসেবে ব্যবহার করুন। এটি `false` ফেরত দিলে ইনপুটটি হয় পূর্ণ অ্যারে নয়, অথবা অন্তত একটি অ-পূর্ণসংখ্যা মান
> রয়েছে।

### সুবিধাসমূহ

- শুধুমাত্র তখনই `true` ফেরত দেয় যখন প্রতিটি উপাদান একটি পূর্ণসংখ্যা; অন্যথায় `false` ফেরত দেয়।
- শুধুমাত্র পূর্ণসংখ্যা-ভিত্তিক অপারেশন (যেমন, ইনডেক্সিং, গণনা, ID) করার আগে অজানা ইনপুট যাচাই করতে সাহায্য করে।
- দ্রুত ব্যর্থ হয়: কোনো অ-পূর্ণসংখ্যা উপাদান পাওয়া মাত্রই পরীক্ষা বন্ধ করে দেয়।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areIntegers(array)`

প্যারামিটার:

- `array`: পূর্ণসংখ্যা উপাদান আছে কি না তা যাচাই করার জন্য অ্যারে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // সত্য
console.log(areIntegers(b)); // সত্য
console.log(areIntegers(c)); // মিথ্যা

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areIntegers(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ১২:৫৭:২৭ AM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>