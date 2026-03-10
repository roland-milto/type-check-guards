# areNullOrUndefined

## বর্ণনা

প্রদত্ত অ্যারেতে সব উপাদান `null` বা `undefined` কিনা তা পরীক্ষা করে।

### ব্যবহারের ক্ষেত্র

প্রসেসিং এড়িয়ে যাওয়া বা “কোনো মান দেওয়া হয়নি” অবস্থা দেখানোর সিদ্ধান্ত নেওয়ার আগে, ঐচ্ছিক ফিল্ডগুলোর একটি তালিকায়
কোনো বাস্তব মান নেই (শুধু `null`/`undefined`) — তা যাচাই করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> যখন আপনাকে যাচাই করতে হবে যে একটি অ্যারেতে কেবল অনুপস্থিত মান (`null`/`undefined`) আছে, তখন `areNullOrUndefined`
> ব্যবহার করুন। মনে রাখবেন, খালি অ্যারের জন্য এটি `false` ফেরত দেয়।

### সুবিধাসমূহ

- শুধুমাত্র তখনই `true` ফেরত দেয় যখন প্রতিটি উপাদান `null` বা `undefined` হয়।
- খালি অ্যারের জন্য `false` ফেরত দেয়, যা “কোনো ডেটা নেই” এবং “সব মান অনুপস্থিত” — এই দুটির মধ্যে পার্থক্য করতে সাহায্য
  করে।
- `unknown[]`-এর সাথে কাজ করে, ফলে টাইপ সংকীর্ণ (narrowing) করার আগে ব্যবহার করা নিরাপদ।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areNullOrUndefined(array)`

প্যারামিটার:

- `array`: যে অ্যারেটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areNullOrUndefined(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ১২:২৯:০৭ AM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>