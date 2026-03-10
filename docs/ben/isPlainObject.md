# isPlainObject

## বর্ণনা

প্রদত্ত `value` একটি সাধারণ অবজেক্ট কি না তা পরীক্ষা করে এবং হলে `true`, নইলে `false` ফেরত দেয়।

### ব্যবহারের ক্ষেত্র

`unknown` ইনপুট (যেমন, parsed JSON, বাহ্যিক ডেটা, বা ফাংশন আর্গুমেন্ট) থেকে কী পড়া বা সেটিকে টাইপড কনফিগারেশন অবজেক্টে
ম্যাপ করার আগে সেটি একটি সাধারণ অবজেক্ট কি না তা যাচাই করা।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `isPlainObject` `unknown`-কে রেকর্ড-সদৃশ অবজেক্ট হিসেবে ব্যবহারের আগে সংকুচিত (narrow) করতে উপকারী; এটি কেবল সেই
> মানগুলোর জন্য `true` ফেরত দেয় যাদের internal tag হলো `[object Object]`।

### সুবিধাসমূহ

- কোনো মান একটি সাধারণ অবজেক্ট (অর্থাৎ, `Object` / `{}`) কি না তা যাচাই করার জন্য একটি সহজ, নির্ভরযোগ্য পরীক্ষা প্রদান
  করে, এবং `true` বা `false` ফেরত দেয়।
- সাধারণ অবজেক্টকে অ্যারে, ফাংশন, `null`, এবং অন্যান্য অ-সাধারণ অবজেক্ট টাইপ থেকে আলাদা করতে সাহায্য করে।
- TypeScript-এ একটি টাইপ গার্ড হিসেবে উপকারী, অবজেক্টের প্রপার্টি অ্যাক্সেস করার আগে `unknown` মানকে সংকুচিত (narrow)
  করতে সাহায্য করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isPlainObject(value)`

প্যারামিটার:

- `value`: সাধারণ অবজেক্ট স্ট্যাটাস যাচাই করার জন্য যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // এখানে input একটি সাধারণ অবজেক্ট
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // সত্য
console.log(isPlainObject([])); // মিথ্যা
console.log(isPlainObject(null)); // মিথ্যা
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isPlainObject(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৬
ফেব্রুয়ারী, ২০২৬ এ ১২:১৬:৩১ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>