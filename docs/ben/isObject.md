# isObject

## বর্ণনা

প্রদত্ত `value` একটি `object` কি না ( `null` বাদে) তা নির্ধারণ করে।

### ব্যবহারের ক্ষেত্র

প্রপার্টি অ্যাক্সেস করার আগে অজানা ইনপুট (যেমন, parsed JSON, API response, event payload) যাচাই করতে `isObject` ব্যবহার
করুন, যাতে মানটি object হয় এবং `null` না হয় তা নিশ্চিত করা যায়।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `isObject` একটি runtime guard যা boolean ফেরত দেয়; এটি কোনো নির্দিষ্ট object shape-এ narrow করে না। আরও শক্তিশালী
> typing দরকার হলে অতিরিক্ত চেক (যেমন, property আছে কি না) এর সাথে এটি ব্যবহার করুন।

### সুবিধাসমূহ

- `typeof` যাদের `"object"`, এমন কেবলমাত্র non-`null` মানের জন্য `true` ফেরত দেয়।
- JavaScript-এর সাধারণ ফাঁদটি এড়ায়, যেখানে `null`-কে অন্যথায় object হিসেবে গণ্য করা হতো।
- সাধারণ object এবং বিল্ট-ইন object instance (যেমন, `Date`, `RegExp`)—উভয়ের জন্য কাজ করে।
- ডিফেন্সিভ প্রোগ্রামিং এবং ইনপুট ভ্যালিডেশনের জন্য উপযোগী সহজ, দ্রুত runtime চেক।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isObject(value)`

প্যারামিটার:

- `value`: `object` কি না তা যাচাই করার জন্য যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // ইনপুট রানটাইমে একটি নন-নাল অবজেক্ট
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isObject(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isObject](../_analysis/isObject.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ১২:১৭:৩৮ AM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>