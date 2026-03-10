# areWeakSets

## বর্ণনা

ইনপুটটি একটি নন-এম্পটি অ্যারে কি না এবং যেখানে প্রতিটি উপাদান `WeakSet`—তা পরীক্ষা করে; কেবল সেই ক্ষেত্রেই `true`
রিটার্ন করে।

### ব্যবহারের ক্ষেত্র

রানটাইম ইনপুট (যেমন API, কনফিগারেশন, বা ব্যবহারকারী-প্রদত্ত ডেটা) যাচাই করুন, যাতে পরবর্তী লজিক চালানোর আগে আপনার কাছে
`WeakSet` ইনস্ট্যান্সগুলোর একটি নন-এম্পটি তালিকা আছে তা নিশ্চিত হয়—যে লজিক `WeakSet` আচরণের ওপর নির্ভর করে।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `WeakSet[]` হিসেবে ব্যবহার করার আগে অজানা ইনপুট যাচাই করতে `areWeakSets` ব্যবহার করুন। এটি খালি অ্যারে এবং নন-অ্যারের
> জন্য `false` রিটার্ন করে।

### সুবিধাসমূহ

- ইনপুট অ্যারের প্রতিটি উপাদান যে একটি `WeakSet` তা নিশ্চিত করে।
- খালি অ্যারের জন্য `false` রিটার্ন করে, ফলে অনুপস্থিত ডেটায় ভুলবশত “সব বৈধ” ফলাফল হওয়া প্রতিরোধ করে।
- ইনপুটটি পূর্ণ অ্যারে না হলে ( `null` সহ) `false` রিটার্ন করে নিরাপদভাবে ব্যর্থ হয়।
- `WeakSet` ইনস্ট্যান্স প্রয়োজন এমন অপারেশন করার আগে গার্ড হিসেবে উপকারী।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areWeakSets(array)`

প্যারামিটার:

- `array`: `WeakSet` অবজেক্টগুলোর জন্য যে অ্যারেটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a হলো WeakSet ইনস্ট্যান্সগুলোর একটি খালি নয় এমন অ্যারে
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areWeakSets(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ২:০৭:৩৮ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>