# isNull

## বর্ণনা

প্রদত্ত `value` কি `null` তা নির্ধারণ করে।

### ব্যবহারের ক্ষেত্র

ইনপুট বা API payload ফিল্ড যাচাই করতে `isNull` ব্যবহার করুন, যেখানে `null` একটি অর্থবহ sentinel মান এবং `undefined` বা
অন্যান্য মানের তুলনায় ভিন্নভাবে হ্যান্ডেল করা দরকার।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `null`-কে `undefined` এবং অন্যান্য falsy মান থেকে আলাদা করে শনাক্ত করতে হলে `isNull` ব্যবহার করুন; এটি শুধু `null`-এর
> জন্যই `true` রিটার্ন করে।

### সুবিধাসমূহ

- `undefined`-এর সঙ্গে গুলিয়ে না ফেলে `null`-এর জন্য একটি নির্ভুল যাচাই প্রদান করে।
- `unknown` গ্রহণ করে বলে যেকোনো ইনপুট টাইপের জন্য নির্ভরযোগ্যভাবে কাজ করে।
- সহজ, দ্রুত, এবং কোনো পার্শ্বপ্রতিক্রিয়া নেই; শুধু `true` বা `false` রিটার্ন করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isNull(value)`

প্যারামিটার:

- `value`: `null` কিনা তা যাচাই করার জন্য মান।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // সত্য
console.log(isNull(b)); // মিথ্যা

if (isNull(a)) {
  // এখানে a হল null
}
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isNull(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isNull](../_analysis/isNull.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ৩:৩৮:৩৯ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>