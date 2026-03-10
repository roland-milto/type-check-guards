# arePromises

## বর্ণনা

`arePromises` নির্ধারণ করে একটি অ্যারের সব উপাদান `Promise` ইনস্ট্যান্স কি না।

### ব্যবহারের ক্ষেত্র

ডাইনামিকভাবে তৈরি বা বাহ্যিকভাবে সরবরাহ করা কোনো তালিকায় কেবল প্রমিস আছে কি না একত্র করার আগে যাচাই করুন (যেমন,
`Promise.all` দিয়ে)।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `Promise.all` বা অন্যান্য শুধু-প্রমিস অপারেশন কল করার আগে `unknown[]` যাচাই করতে `arePromises` ব্যবহার করুন; খালি
> অ্যারের ক্ষেত্রে এটি `false` ফেরত দেয়।

### সুবিধাসমূহ

- প্রমিস-নির্দিষ্ট লজিক প্রয়োগ করার আগে প্রতিটি উপাদান যে একটি `Promise` তা নিশ্চিত করে।
- খালি অ্যারের ক্ষেত্রে `false` ফেরত দেয়, ফলে শূন্য ইনপুটে অস্পষ্ট ফলাফল এড়ানো যায়।
- বাহ্যিক উৎস থেকে পাওয়া `unknown[]` নিয়ে কাজ করার সময় রানটাইম গার্ড হিসেবে উপকারী।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `arePromises(array)`

প্যারামিটার:

- `array`: `Promise` ইনস্ট্যান্স আছে কি না যাচাই করার জন্য অ্যারে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values রানটাইমে Promise ইনস্ট্যান্সগুলোর একটি অ্যারে
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.arePromises(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ১১:৪৭:৩৪ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>