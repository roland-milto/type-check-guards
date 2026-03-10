# isNumber

## বর্ণনা

`isNumber` পরীক্ষা করে কোনো মান সসীম, `NaN`-নয় এমন সংখ্যা কি না।

### ব্যবহারের ক্ষেত্র

অবিশ্বস্ত উৎস (ফর্ম, কুয়েরি প্যারাম, JSON পে-লোড) থেকে আসা সংখ্যাগত ইনপুট গণনা, সংরক্ষণ, বা রেঞ্জ চেকের আগে যাচাই
করুন—যাতে শুধুমাত্র সসীম সংখ্যা `true` হিসেবে পাস করে এবং বাকি সবকিছু `false` ফেরত দেয়।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> অ্যারিথমেটিক করার আগে `unknown` মান যাচাই করতে `isNumber` ব্যবহার করুন; এটি `NaN`, `Infinity`, এবং `-Infinity`
> প্রত্যাখ্যান করে।

### সুবিধাসমূহ

- `true` ফেরত দেয় শুধুমাত্র প্রকৃত JavaScript সংখ্যা হলে (টাইপ চেকের সাথে `NaN` এবং ইনফিনিটি প্রত্যাখ্যান)।
- সাধারণ ভ্যালিডেশন বাগ প্রতিরোধ করে, যেখানে `NaN`, `Infinity`, বা `-Infinity` ভুলবশত সংখ্যা হিসেবে পাস করে যায়।
- অজানা ইনপুটের (যেমন JSON, ব্যবহারকারীর ইনপুট, বাহ্যিক API) জন্য রানটাইম গার্ড হিসেবে ভালো কাজ করে।
- সহজ, দ্রুত, এবং কোনো সাইড-ইফেক্ট নেই।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isNumber(value)`

প্যারামিটার:

- `value`: যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // ইনপুট একটি বৈধ সসীম সংখ্যা
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isNumber(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ১:০৮:১২ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>