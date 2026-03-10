# isOfType

## বর্ণনা

প্রিমিটিভের জন্য `typeof` এবং জটিল টাইপের জন্য ফলব্যাক ব্যবহার করে, প্রদত্ত `value` একটি নির্দিষ্ট টাইপ স্ট্রিংয়ের সাথে
মেলে কিনা তা নির্ধারণ করে।

### ব্যবহারের ক্ষেত্র

টাইপ-নির্দিষ্ট অপারেশন করার আগে কোনো মান প্রত্যাশিত টাইপ স্ট্রিংয়ের কিনা তা যাচাই করে `unknown` ইনপুট (যেমন, API
রেসপন্স, ব্যবহারকারীর ইনপুট, পার্স করা JSON) ভ্যালিডেট এবং ন্যারো করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `unknown` মান নিয়ে কাজ করার সময় রানটাইম টাইপ অনুযায়ী ব্রাঞ্চ করতে `isOfType` ব্যবহার করুন; এটি `true`/`false` ফেরত দেয়
> এবং `null` ও `undefined`-কে স্পষ্টভাবে বিবেচনা করে।

### সুবিধাসমূহ

- গতি এবং স্পষ্টতার জন্য সরাসরি `typeof` ব্যবহার করে প্রিমিটিভ যাচাই করে।
- `null` এবং `undefined` সঠিকভাবে হ্যান্ডেল করে, যা কেবল `typeof` দিয়ে উদ্দেশ্য অনুযায়ী আলাদা করা যায় না।
- `getTypeOf` ব্যবহার করে ফলব্যাক তুলনার মাধ্যমে জটিল বা কাস্টম টাইপ স্ট্রিং সমর্থন করে।
- গার্ড এবং ব্রাঞ্চিংয়ের জন্য উপযোগী একটি সহজ বুলিয়ান ফলাফল (`true`/`false`) ফেরত দেয়।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isOfType(value, type)`

প্যারামিটার:

- `value`: `type`-এর বিপরীতে পরীক্ষা করার জন্য মান।
- `type`: যে টাইপের বিপরীতে যাচাই করা হবে তার স্ট্রিং উপস্থাপনা।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // এখানে input একটি সংখ্যা
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // এখানে input একটি স্ট্রিং
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isOfType(value, type)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ৪:৫৮:৩৭ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>