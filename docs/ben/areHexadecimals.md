# areHexadecimals

## বর্ণনা

একটি অ্যারের সব উপাদান হেক্সাডেসিমাল স্ট্রিং কি না তা পরীক্ষা করে; কেবল নন-এম্পটি অ্যারেতে প্রতিটি আইটেম বৈধ হলে `true`
ফেরত দেয়।

### ব্যবহারের ক্ষেত্র

হেক্সাডেসিমাল পার্সিং বা পরবর্তী প্রসেসিং করার আগে ব্যবহারকারীর ইনপুট বা বাহ্যিক ডেটা (যেমন, ID, চেকসম, শুরুর '#' ছাড়া
কালার কোড) যাচাই করতে `areHexadecimals` ব্যবহার করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> মান পার্স বা কনভার্ট করার আগে অজানা ইনপুট যাচাই করতে `areHexadecimals` ব্যবহার করুন (উদাহরণস্বরূপ,
`parseInt(value, 16)` বা BigInt কনভার্সনের আগে)।

### সুবিধাসমূহ

- প্রতিটি উপাদান যে একটি হেক্সাডেসিমাল স্ট্রিং তা যাচাই করে এবং সব আইটেম মিললেই কেবল `true` ফেরত দেয়।
- ডিজাইন অনুযায়ী খালি অ্যারে প্রত্যাখ্যান করে, ইনপুট ডেটা না থাকলে `false` ফেরত দেয়।
- গার্ড এবং আগেভাগে রিটার্ন-ভিত্তিক যাচাইয়ের জন্য উপযোগী একটি সহজ বুলিয়ান ফলাফল (`true`/`false`) প্রদান করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areHexadecimals(array)`

প্যারামিটার:

- `array`: হেক্সাডেসিমাল স্ট্রিং উপাদান আছে কি না তা যাচাই করার জন্য অ্যারেটি।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areHexadecimals(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ১১:০৫:২৫ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>