# isBigInt

## বর্ণনা

`isBigInt` পরীক্ষা করে কোনো প্রদত্ত মান `bigint` টাইপের কি না; BigInt প্রিমিটিভের জন্য `true` এবং অন্যথায় `false`
রিটার্ন করে।

### ব্যবহারের ক্ষেত্র

BigInt-নির্দিষ্ট গণনা করার আগে বা BigInt-শুধু ফিল্ডে সংরক্ষণ করার আগে টাইপবিহীন উৎস (যেমন, JSON parsing, user input,
external APIs) থেকে আসা মানগুলো যাচাই ও সংকুচিত (narrow) করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> BigInt অ্যারিথমেটিক (যেমন, `+`, `*`) করার আগে `unknown`-কে `bigint`-এ সংকুচিত (narrow) করতে `isBigInt` ব্যবহার করুন,
> কারণ এতে BigInt অপার্যান্ড প্রয়োজন।

### সুবিধাসমূহ

- `bigint` প্রিমিটিভ টাইপের জন্য একটি সহজ, নির্ভরযোগ্য রানটাইম চেক প্রদান করে।
- BigInt-শুধু অপারেশন করার আগে `unknown` মানগুলোকে সংকুচিত (narrow) করতে সাহায্য করে।
- ভুল পজিটিভ এড়ায়: সাধারণ সংখ্যা, স্ট্রিং এবং অন্যান্য টাইপ `false` রিটার্ন করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isBigInt(value)`

প্যারামিটার:

- `value`: যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // সত্য
console.log(isBigInt(10));  // মিথ্যা
console.log(isBigInt("10")); // মিথ্যা
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isBigInt(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ১১:৩১:১০ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>