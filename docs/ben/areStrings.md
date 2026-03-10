# areStrings

## বর্ণনা

`areStrings` পরীক্ষা করে একটি অ্যারে অ-খালি কি না এবং তার সব উপাদান স্ট্রিং কি না; কেবল সেই ক্ষেত্রেই `true` রিটার্ন
করে।

### ব্যবহারের ক্ষেত্র

প্রসেস করার আগে আপনার কাছে স্ট্রিংয়ের একটি অ-খালি তালিকা আছে কি না নিশ্চিত করতে বাহ্যিক বা ব্যবহারকারী-প্রদত্ত ডেটা (
যেমন, query params, JSON payloads, CSV fields) যাচাই করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> শুধু-স্ট্রিং লজিক প্রয়োগ করার আগে অজানা অ্যারে যাচাই করতে `areStrings` ব্যবহার করুন; খালি অ্যারের জন্য এটি `false`
> রিটার্ন করে।

### সুবিধাসমূহ

- প্রতিটি উপাদান যে একটি স্ট্রিং তা নিশ্চিত করে এবং `false` রিটার্ন করে মিশ্র-টাইপ অ্যারে প্রত্যাখ্যান করে।
- খালি অ্যারে প্রত্যাখ্যান করে, তাই `true` কেবল একটি অ-খালি স্ট্রিংয়ের তালিকাই নির্দেশ করে।
- শুধু-স্ট্রিং অপারেশন (যেমন, `trim`, `toLowerCase`) করার আগে দ্রুত রানটাইম গার্ড হিসেবে উপকারী।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areStrings(value)`

প্যারামিটার:

- `value`: Expected type `string[]`.

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // রানটাইমে input একটি খালি নয় এমন string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areStrings(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ১:১৭:১৮ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>