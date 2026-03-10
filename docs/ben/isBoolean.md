# isBoolean

## বর্ণনা

প্রদত্ত কোনো মান `boolean` কি না তা নির্ধারণ করে।

### ব্যবহারের ক্ষেত্র

বাহ্যিক বা টাইপবিহীন ডেটা (যেমন, environment variables, JSON payloads, query parameters) যাচাই করুন, যাতে শর্তাধীন লজিকে
ব্যবহারের আগে কোনো মান `boolean` হওয়া নিশ্চিত করা যায়।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> বুলিয়ান অপারেশন প্রয়োগের আগে `unknown`-কে `boolean`-এ সংকুচিত (narrow) করতে `isBoolean` ব্যবহার করুন।

### সুবিধাসমূহ

- `typeof` ব্যবহার করে সহজ এবং দ্রুত রানটাইম যাচাই।
- বুলিয়ান-নির্দিষ্ট লজিক প্রয়োগের আগে অজানা ইনপুট যাচাই করতে সাহায্য করে।
- পূর্বানুমেয় `boolean` ফলাফল (`true`/`false`) ফেরত দেয়।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isBoolean(value)`

প্যারামিটার:

- `value`: যে মানটি যাচাই করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // এখানে input একটি boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isBoolean(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ২:৩৫:৪৪ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>