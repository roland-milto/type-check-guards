# areBuffers

## বর্ণনা

`areBuffers` যাচাই করে প্রদত্ত মানটি একটি নন-এম্পটি, পূর্ণ অ্যারে কি না যেখানে প্রতিটি উপাদান একটি `Buffer`; হলে `true`
এবং না হলে `false` রিটার্ন করে।

### ব্যবহারের ক্ষেত্র

ইনকামিং চাঙ্ক অ্যারে (যেমন, স্ট্রিম, ফাইল আপলোড, বা নেটওয়ার্ক প্যাকেট থেকে) যাচাই করুন যাতে concatenating, decoding, বা
ক্রিপ্টোগ্রাফিক/বাইনারি-প্রসেসিং ফাংশনে পাঠানোর আগে সব অংশই `Buffer` ইনস্ট্যান্স হয়।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `unknown[]` যাচাই করতে `areBuffers` ব্যবহার করুন, `Buffer.concat`-এর মতো Buffer-নির্দিষ্ট API কল করার আগে; এতে ফাংশনটি
> কেবল তখনই `true` রিটার্ন করবে যখন প্রতিটি উপাদান একটি `Buffer` হবে।

### সুবিধাসমূহ

- ইনপুটের প্রতিটি উপাদান যে Node.js `Buffer` ইনস্ট্যান্স তা নিশ্চিত করে; পুরো অ্যারে মিললেই কেবল `true` রিটার্ন করে।
- নন-এম্পটি, পূর্ণ অ্যারে আবশ্যক করে অবৈধ ইনপুট আগেই প্রত্যাখ্যান করে; খালি অ্যারে বা অ্যারে নয় এমন ইনপুটের জন্য `false`
  রিটার্ন করে।
- শুধু-বাফার অপারেশন (যেমন, concatenation, hashing, বাইনারি প্রোটোকল) করার আগে গার্ড হিসেবে উপকারী।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areBuffers(array)`

প্যারামিটার:

- `array`: বাফার ইনস্ট্যান্স আছে কি না যাচাই করার জন্য যে অ্যারেটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areBuffers(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ৪:২৪:২০ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>