# isBuffer

## বর্ণনা

কোনো মান Node.js `Buffer` কি না তা পরীক্ষা করে এবং `true` বা `false` ফেরত দেয়।

### ব্যবহারের ক্ষেত্র

রানটাইমে ইনপুট (যেমন API payloads, ফাইল ডেটা, বা মেসেজ বাফার) যাচাই করুন যাতে প্রসেস করার আগে মানটি `Buffer` হওয়া
নিশ্চিত হয়, এবং Node.js-এর বাইরে যেখানে `Buffer` নাও থাকতে পারে সেখানে চালালে নির্ভরযোগ্যভাবে `false` পাওয়া যায়।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> Buffer-নির্দিষ্ট মেথড কল করার আগে `unknown` মানকে `Buffer`-এ ন্যারো করতে `isBuffer` ব্যবহার করুন।

### সুবিধাসমূহ

- `Buffer.isBuffer` ব্যবহার করে নিরাপদভাবে Node.js `Buffer` ইনস্ট্যান্স শনাক্ত করে।
- `Buffer` অনুপলব্ধ এমন পরিবেশে `false` ফেরত দেয়, ফলে রানটাইম ত্রুটি এড়ানো যায়।
- `unknown` ইনপুটের সাথে কাজ করে, তাই এটি রানটাইম ভ্যালিডেশন এবং টাইপ ন্যারোয়িং-এর জন্য উপযোগী।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isBuffer(value)`

প্যারামিটার:

- `value`: যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // সত্য
console.log(isBuffer(b)); // মিথ্যা

if (isBuffer(a)) {
  // এখানে a একটি Buffer
  console.log(a.toString("utf8"));
}
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isBuffer(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ৪:৩০:৪৯ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>