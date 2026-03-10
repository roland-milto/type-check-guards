# areFinite

## বর্ণনা

`areFinite` যাচাই করে কোনো মান একটি খালি নয় এমন অ্যারে কি না যার উপাদানগুলো সবই সসীম সংখ্যা; হলে `true` এবং না হলে
`false` ফেরত দেয়।

### ব্যবহারের ক্ষেত্র

গণনা করার আগে সংখ্যাসূচক ইনপুট অ্যারে (যেমন, চার্ট সিরিজ, কোঅর্ডিনেট তালিকা, মাপজোকের স্যাম্পল) যাচাই করুন, যাতে সব মান
সসীম সংখ্যা হলেই ফলাফল `true` হয়।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> যখন আপনাকে নিশ্চিত করতে হবে যে একটি অ্যারে খালি নয় এবং এতে কেবল সসীম সংখ্যা রয়েছে, তখন `areFinite` ব্যবহার করুন; এটি
> খালি অ্যারের জন্য এবং `NaN` বা অসীম মানযুক্ত অ্যারের জন্য `false` ফেরত দেয়।

### সুবিধাসমূহ

- ইনপুটটি একটি খালি নয় এমন অ্যারে এবং প্রতিটি উপাদান একটি সসীম সংখ্যা হলে তবেই `true` ফেরত দেয়।
- প্রতিটি উপাদানের জন্য `isFinite` যাচাইয়ের উপর নির্ভর করে `Infinity`, `-Infinity`, এবং `NaN` প্রত্যাখ্যান করে।
- গার্ড এবং ভ্যালিডেশন ফ্লো-এর জন্য উপযোগী একটি সহজ বুলিয়ান ফলাফল (`true`/`false`) প্রদান করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areFinite(array)`

প্যারামিটার:

- `array`: এর সব উপাদান সসীম কি না তা যাচাই করার জন্য অ্যারেটি।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // সত্য
console.log(areFinite(b)); // মিথ্যা
console.log(areFinite(c)); // মিথ্যা

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // ৬০
console.log(sumIfFinite([10, NaN, 30])); // নাল

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areFinite(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ৪:৩৩:৪২ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>