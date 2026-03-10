# isSymbol

## বর্ণনা

`isSymbol` নির্ধারণ করে কোনো প্রদত্ত মান `symbol` টাইপের কি না; symbol হলে `true` এবং অন্যথায় `false` ফেরত দেয়।

### ব্যবহারের ক্ষেত্র

কোনো `unknown` মানকে অনন্য শনাক্তকারী, রেজিস্ট্রি কী, অথবা অবজেক্ট ও ম্যাপে computed property key হিসেবে ব্যবহার করার
আগে সেটি `symbol` কি না যাচাই করুন।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> symbol-সম্পর্কিত ফাংশন কল করার আগে বা computed property key হিসেবে ব্যবহার করার আগে `unknown`-কে `symbol`-এ সংকুচিত (
> narrow) করতে `isSymbol` ব্যবহার করুন।

### সুবিধাসমূহ

- JavaScript-এর `symbol` প্রিমিটিভ টাইপের জন্য একটি সহজ, নির্ভরযোগ্য রানটাইম চেক প্রদান করে।
- `unknown` মানগুলোকে symbol-নির্দিষ্ট API ব্যবহার করার আগে বা কী হিসেবে সংরক্ষণ করার আগে সংকুচিত (narrow) করতে সাহায্য
  করে।
- `typeof` ব্যবহার করে ভুল পজিটিভ এড়ায়, যা `symbol` মান শনাক্ত করার জন্য প্রচলিত (canonical) উপায়।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isSymbol(value)`

প্যারামিটার:

- `value`: যে মানটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // এখানে input একটি সিম্বল
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isSymbol(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ২:২৫:৫৮ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>