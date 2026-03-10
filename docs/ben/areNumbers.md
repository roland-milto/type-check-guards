# areNumbers

## বর্ণনা

`areNumbers` যাচাই করে কোনো মান অ-খালি অ্যারে কি না, যেখানে সব উপাদানই সংখ্যা।

### ব্যবহারের ক্ষেত্র

মোট, গড়, বা অন্যান্য সংখ্যাগত সমষ্টি (aggregation) গণনা করার আগে ব্যবহারকারী-প্রদত্ত বা API-প্রদত্ত ডেটা যাচাই করুন
যাতে নিশ্চিত হওয়া যায় এটি সংখ্যার একটি অ-খালি অ্যারে।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> সংখ্যাগত গণনা করার আগে অজানা অ্যারে যাচাই করতে `areNumbers` ব্যবহার করুন; খালি অ্যারের জন্য এবং কোনো অ-সংখ্যা মান থাকা
> অ্যারের জন্য এটি `false` রিটার্ন করে।

### সুবিধাসমূহ

- ইনপুটটি একটি অ-খালি অ্যারে এবং প্রতিটি উপাদান সংখ্যা হলে তবেই `true` রিটার্ন করে।
- খালি অ্যারে এবং অ্যারে নয় এমন ইনপুট প্রত্যাখ্যান করে ভুলভাবে `true` হওয়া (false positives) প্রতিরোধ করে।
- রানটাইম ত্রুটি এড়াতে সংখ্যাগত অপারেশনের (যেমন, যোগফল, গড়) আগে গার্ড হিসেবে উপকারী।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `areNumbers(array)`

প্যারামিটার:

- `array`: সংখ্যা উপাদান আছে কি না তা যাচাই করার জন্য অ্যারেটি।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.areNumbers(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ১:০৩:৩১ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>