# isPrimitive

## বর্ণনা

`isPrimitive` নির্ধারণ করে কোনো প্রদত্ত মান primitive কি না (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`)।

### ব্যবহারের ক্ষেত্র

রানটাইমে ইনপুট যাচাই করুন (যেমন API payload ফিল্ড, কনফিগারেশন মান, বা ব্যবহারকারী-প্রদত্ত ডেটা) যাতে সিরিয়ালাইজ, লগ, বা
শুধু primitive-এ প্রযোজ্য অপারেশন প্রয়োগ করার আগে নিশ্চিত হওয়া যায় যে মানটি primitive।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> অবজেক্ট বা ফাংশন হিসেবে ব্যবহারের আগে `unknown` ইনপুটকে গার্ড করতে `isPrimitive` ব্যবহার করুন; এটি primitives-এর জন্য
`true` এবং objects ও functions-এর জন্য `false` রিটার্ন করে।

### সুবিধাসমূহ

- কোনো মান JavaScript primitive কি না তা দ্রুত, allocation-ছাড়া যাচাই করে।
- `null`-কে সঠিকভাবে primitive হিসেবে গণ্য করে (যদিও `typeof null` হলো `"object"`)।
- শুধু object-এ প্রযোজ্য অপারেশন করার আগে `unknown` মানগুলোকে সংকীর্ণ (narrow) করতে সাহায্য করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `isPrimitive(value)`

প্যারামিটার:

- `value`: primitive টাইপ কি না তা যাচাই করার জন্য মান।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.isPrimitive(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩০
জানুয়ারী, ২০২৬ এ ১১:৫৫:২৯ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>