# isFinite

## বর্ণনা

প্রদত্ত `value` একটি সসীম `number` কি না তা নির্ধারণ করে।

### ব্যবহারের ক্ষেত্র

সংখ্যাগত গণনা করার আগে অজানা ইনপুট (যেমন JSON, ফর্ম, বা API থেকে) যাচাই করতে `isFinite` ব্যবহার করুন, যাতে মানটি একটি
বাস্তব, সসীম সংখ্যা হওয়া নিশ্চিত হয়।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `isFinite` শুধুমাত্র সসীম সংখ্যার জন্য `true` ফেরত দেয়; `NaN`, `Infinity`, এবং সংখ্যা নয় এমন যেকোনো মানের জন্য এটি
`false` ফেরত দেয়।

### সুবিধাসমূহ

- নির্ভরযোগ্যভাবে সসীমতা যাচাই করতে বিল্ট-ইন `Number.isFinite` ব্যবহার করে।
- শুধুমাত্র সসীম সংখ্যার জন্য `true` ফেরত দেয়; `NaN`, `Infinity`, এবং সংখ্যা নয় এমন ইনপুটের জন্য `false` ফেরত দেয়।
- ভ্যালিডেশন এবং গার্ডিং লজিকের জন্য উপযোগী, সহজ এবং সাইড-ইফেক্ট-মুক্ত প্রেডিকেট।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isFinite(value)`

প্যারামিটার:

- `value`: সসীমতা যাচাই করার জন্য মান।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers হলো: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // এখানে value একটি সসীম সংখ্যা
  const doubled = value * 2;
  console.log(doubled);
}
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isFinite(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ৪:২৮:৫৯ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>