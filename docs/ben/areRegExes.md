# areRegExes

## বর্ণনা

`areRegExes` পরীক্ষা করে কোনো মান কি না এমন একটি পূর্ণ অ্যারে যা কেবল `RegExp` অবজেক্ট ধারণ করে।

### ব্যবহারের ক্ষেত্র

ম্যাচিংয়ের জন্য ব্যবহার করার আগে একটি কনফিগারেশন অপশন (যেমন, allow/deny প্যাটার্নের তালিকা) যে খালি নয় এমন নিয়মিত
অভিব্যক্তির অ্যারে—তা যাচাই করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> ইটারেট করা বা প্যাটার্ন কম্পোজ করার আগে `unknown`-কে `RegExp[]`-এ সংকুচিত করতে `areRegExes` ব্যবহার করুন।

### সুবিধাসমূহ

- একটি মান যে খালি নয় এমন অ্যারে এবং যেখানে প্রতিটি উপাদান একটি `RegExp` ইনস্ট্যান্স—তা নিশ্চিত করে।
- ব্যবহারকারীর ইনপুট বা কনফিগারেশন যাচাই করার জন্য একটি সহজ বুলিয়ান গার্ড (`true`/`false`) প্রদান করে।
- পরবর্তী কোড যখন ধরে নেয় যে সব আইটেম নিয়মিত-অভিব্যক্তি অপারেশন সমর্থন করে, তখন রানটাইম ত্রুটি প্রতিরোধে সাহায্য করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areRegExes(array)`

প্যারামিটার:

- `array`: যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // এখানে patterns হলো RegExp-এর একটি অ্যারে
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areRegExes(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ১১:১৬:৫৪ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>