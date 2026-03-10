# isDate

## বর্ণনা

`isDate` নির্ধারণ করে প্রদত্ত কোনো মান `Date` কি না; `Date` ইনস্ট্যান্সের জন্য `true` এবং অন্যথায় `false` রিটার্ন করে।

### ব্যবহারের ক্ষেত্র

`Date` অপারেশন (যেমন ফরম্যাটিং, তুলনা, বা `toISOString()` কল করা) করার আগে অজানা মান (যেমন, request data, config values,
বা parsed JSON) ভ্যালিডেট এবং ন্যারো করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> রানটাইমে `unknown` কে `Date` এ ন্যারো করতে `isDate` ব্যবহার করুন; এটি কেবল প্রকৃত `Date` ইনস্ট্যান্সের জন্যই `true`
> রিটার্ন করে (date strings-এর জন্য নয়)।

### সুবিধাসমূহ

- কোনো মান `Date` কি না তা যাচাই করার জন্য একটি সহজ রানটাইম গার্ড প্রদান করে।
- শুধুমাত্র `Date` ইনস্ট্যান্সগুলোই ভ্যালিডেশন পাস করছে তা নিশ্চিত করে টাইপ ত্রুটি প্রতিরোধে সহায়তা করে।
- তারিখ-নির্দিষ্ট মেথড ব্যবহার করার আগে অজানা ইনপুট (যেমন, API payloads) যাচাই করতে উপকারী।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isDate(value)`

প্যারামিটার:

- `value`: `Date` টাইপের জন্য যাচাই করা হবে এমন মান।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // এখানে input একটি Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isDate(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isDate](../_analysis/isDate.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ৩:৩৬:৩৫ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>