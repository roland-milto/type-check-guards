# areFalse

## বর্ণনা

`areFalse` পরীক্ষা করে প্রদত্ত একটি অ্যারের সব উপাদান কঠোরভাবে বুলিয়ান `false` কি না।

### ব্যবহারের ক্ষেত্র

এগোনোর আগে ফিচার ফ্ল্যাগ, চেক, বা গার্ড রেজাল্টের একটি তালিকা যে সবই `false` তা যাচাই করুন (যেমন, কোনো ব্লকিং শর্ত নেই
তা নিশ্চিত করা)।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> যখন আপনার দরকার হয় একটি কঠোর যাচাই যে অ্যারেটি খালি নয় এবং এতে কেবল বুলিয়ান মান `false` আছে, তখন `areFalse` ব্যবহার
> করুন।

### সুবিধাসমূহ

- প্রতিটি উপাদান যে কঠোরভাবে `false` (truthy/falsey coercion ছাড়া) তা নিশ্চিত করে।
- `isFilledArray` দিয়ে পূর্ণ (non-empty) অ্যারে বাধ্যতামূলক করায় non-array বা খালি অ্যারের জন্য `false` ফেরত দেয়।
- দক্ষতার জন্য প্রথম non-`false` উপাদান পেলেই আগেভাগে থেমে যায়।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areFalse(array)`

প্যারামিটার:

- `array`: যে অ্যারেটি পরীক্ষা করা হবে, যাতে যেকোনো ধরনের উপাদান থাকতে পারে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // সত্য
const b = areFalse([false, true, false]);  // মিথ্যা
const c = areFalse([false, "false", false]); // মিথ্যা
const d = areFalse([]); // মিথ্যা
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areFalse(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ৪:১৬:১৫ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>