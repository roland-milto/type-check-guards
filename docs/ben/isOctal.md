# isOctal

## বর্ণনা

কোনো মান বৈধ অক্টাল লিটারাল স্ট্রিং কি না নির্ধারণ করে (যেমন `0o755`)।

### ব্যবহারের ক্ষেত্র

পার্স বা কনভার্ট করার আগে, অক্টাল লিটারাল স্ট্রিং হিসেবে প্রকাশ করা আবশ্যক এমন ব্যবহারকারীর ইনপুট বা কনফিগারেশন মান
যাচাই করুন (উদাহরণস্বরূপ, `0o644`-এর মতো ফাইল পারমিশন মোড)।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `isOctal` একটি টাইপ গার্ড (`value is string`)। `true` ফলাফলের পরে, TypeScript পরীক্ষা করা ভেরিয়েবলটিকে `string`
> হিসেবে ন্যারো করে।

### সুবিধাসমূহ

- কঠোর টাইপ গার্ড প্রদান করে: ইনপুটটি অক্টাল লিটারাল ফরম্যাটের সাথে মেলে এমন একটি স্ট্রিং হলেই কেবল `true` রিটার্ন করে।
- খালি স্ট্রিং এবং শুরু/শেষে হোয়াইটস্পেস (ASCII control/space) থাকা স্ট্রিং প্রত্যাখ্যান করে, ফলে অনিচ্ছাকৃত ম্যাচ কমে।
- ঐচ্ছিক সাইন সমর্থন করে এবং `0o`/`0O` প্রিফিক্সের ক্ষেত্রে কেস-ইনসেনসিটিভ।
- নন-স্ট্রিং ইনপুটের ক্ষেত্রে থ্রো না করে `false` রিটার্ন করে—ফলে আরও লেনিয়েন্ট।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isOctal(value)`

প্যারামিটার:

- `value`: যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // সত্য
console.log(isOctal(b)); // সত্য
console.log(isOctal(c)); // মিথ্যা
console.log(isOctal(d)); // মিথ্যা

if (isOctal(a)) {
  // এখানে a একটি স্ট্রিং
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isOctal(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ২:৪৪:০৮ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>