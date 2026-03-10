# isError

## বর্ণনা

প্রদত্ত `value` কি `Error`-এর একটি ইনস্ট্যান্স তা পরীক্ষা করে।

### ব্যবহারের ক্ষেত্র

যখন আপনি একটি `unknown` মান (যেমন `catch` ব্লক, একটি কলব্যাক, বা কোনো বাহ্যিক লাইব্রেরি থেকে) পান এবং `message`, `name`,
বা `stack` পড়ার আগে সেটি নিরাপদে `Error` কি না নির্ধারণ করতে হয়, তখন `isError` ব্যবহার করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `unknown` মানগুলোকে (যেমন `catch` থেকে) `Error` হিসেবে বিবেচনা করার আগে গার্ড করতে `isError` ব্যবহার করুন।

### সুবিধাসমূহ

- কোনো মান `Error` ইনস্ট্যান্স কি না তা যাচাই করার জন্য একটি সহজ রানটাইম চেক প্রদান করে।
- `message` বা `stack`-এর মতো `Error` প্রপার্টি অ্যাক্সেস করার আগে অজানা ইনপুট সংকুচিত (narrow) করতে সাহায্য করে।
- `catch`, বাহ্যিক API, বা টাইপবিহীন উৎস থেকে আসা মান হ্যান্ডল করার সময় রানটাইম এক্সসেপশন হওয়ার ঝুঁকি কমায়।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isError(value)`

প্যারামিটার:

- `value`: `Error` টাইপের বিপরীতে যাচাই করার জন্য মানটি।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isError(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isError](../_analysis/isError.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৬
ফেব্রুয়ারী, ২০২৬ এ ১২:৪৪:৪৩ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>