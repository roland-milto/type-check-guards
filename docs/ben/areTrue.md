# areTrue

## বর্ণনা

একটি খালি নয় এমন অ্যারেতে শুধুমাত্র বুলিয়ান `true` মান আছে কি না পরীক্ষা করে।

### ব্যবহারের ক্ষেত্র

চালিয়ে যাওয়ার আগে পূর্বশর্ত বা ফিচার ফ্ল্যাগগুলোর একটি সেট সবগুলোই সক্রিয় (সব মান `true`) কি না যাচাই করতে `areTrue`
ব্যবহার করুন, এবং খালি বা বিকৃত ইনপুটকে পূরণ হয়নি (`false`) হিসেবে গণ্য করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `areTrue` খালি অ্যারের জন্য এবং এমন অ্যারের জন্য `false` ফেরত দেয় যেখানে কোনো মান কঠোরভাবে `true` নয়।

### সুবিধাসমূহ

- শুধুমাত্র তখনই `true` ফেরত দেয় যখন প্রতিটি উপাদান কঠোরভাবে `true` এবং অ্যারেটি খালি নয়।
- দ্রুত ব্যর্থ হয়: কোনো non-`true` মান পাওয়া মাত্রই `false` ফেরত দেয়।
- অবৈধ ইনপুট (অ্যারে নয় বা খালি অ্যারে) হলে `false` ফেরত দিয়ে প্রত্যাখ্যান করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areTrue(array)`

প্যারামিটার:

- `array`: সব `true` মান আছে কি না যাচাই করার জন্য অ্যারেটি।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areTrue(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ১:৫০:২৫ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>