# isPromise

## বর্ণনা

প্রদত্ত কোনো মান `Promise` কি না তা নির্ধারণ করে।

### ব্যবহারের ক্ষেত্র

প্লাগইন, ডাইনামিক ইমপোর্ট, বা ঢিলেঢালা-টাইপড API থেকে ফেরত আসা মান হ্যান্ডল করার মতো ক্ষেত্রে, অজানা ইনপুটকে `Promise`
হিসেবে ব্যবহার করার আগে যাচাই করতে `isPromise` ব্যবহার করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> `isPromise` `instanceof Promise` দিয়ে চেক করে, তাই এটি কেবল বাস্তব `Promise` ইনস্ট্যান্সের জন্যই `true` রিটার্ন করে (
> সাধারণ thenable-এর জন্য নয়)।

### সুবিধাসমূহ

- কোনো মান `Promise` কি না তা যাচাই করার জন্য একটি সহজ রানটাইম চেক প্রদান করে।
- যে কোড-পাথগুলোর জন্য একটি বাস্তব `Promise` ইনস্ট্যান্স প্রয়োজন, সেগুলোকে সুরক্ষিত রাখতে সাহায্য করে এবং
  পূর্বানুমেয়ভাবে `true` বা `false` রিটার্ন করে।
- প্রকৃত `Promise` ইনস্ট্যান্স আবশ্যক করে “thenable” অবজেক্ট (যেমন, `{ then() {} }`) থেকে আসা ভুল পজিটিভ এড়িয়ে চলে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isPromise(value)`

প্যারামিটার:

- `value`: যে মানটি যাচাই করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // সত্য
console.log(isPromise(b)); // মিথ্যা
console.log(isPromise(123)); // মিথ্যা
console.log(isPromise(null)); // মিথ্যা

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isPromise(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ১১:৫২:১১ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>