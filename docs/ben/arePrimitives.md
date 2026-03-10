# arePrimitives

## বর্ণনা

`arePrimitives` যাচাই করে যে প্রদত্ত, খালি নয় এমন একটি অ্যারের সব উপাদান প্রিমিটিভ টাইপ কি না।

### ব্যবহারের ক্ষেত্র

ইনকামিং ডেটা (যেমন, কুয়েরি প্যারামিটার, CSV রো ভ্যালু, বা ID/ট্যাগের তালিকা) সিরিয়ালাইজ, হ্যাশ, লগ করা, বা এমন API-তে
পাঠানোর আগে যাচাই করুন যে এতে কেবল প্রিমিটিভ মান আছে—যেসব API অবজেক্ট গ্রহণ করতে পারবে না।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> আরও প্রসেসিংয়ের আগে `unknown[]`-এ কেবল প্রিমিটিভ মান (string, number, bigint, boolean, symbol, undefined, বা null)
> আছে কি না নিশ্চিত করতে হলে `arePrimitives` ব্যবহার করুন।

### সুবিধাসমূহ

- `true` ফেরত দেয় শুধু তখনই যখন প্রতিটি উপাদান একটি প্রিমিটিভ মান, ফলে এটি “কোনো অবজেক্ট/ফাংশন নয়” এমন অ্যারের জন্য
  একটি কঠোর গার্ড।
- দ্রুত ব্যর্থ হয়: কোনো অ-প্রিমিটিভ উপাদান পাওয়া মাত্রই `false` ফেরত দেয়।
- নন-অ্যারে এবং খালি অ্যারের ক্ষেত্রেও `false` ফেরত দেয় (filled-array চেকের মাধ্যমে), ফলে ভুলবশত অবৈধ ইনপুট গ্রহণ হওয়া
  রোধ করে।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `arePrimitives(array)`

প্যারামিটার:

- `array`: প্রিমিটিভ টাইপের উপাদান আছে কি না তা যাচাই করার জন্য যে অ্যারেটি পরীক্ষা করা হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // সত্য
const r2 = arePrimitives(b); // সত্য
const r3 = arePrimitives(c); // মিথ্যা
```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.arePrimitives(array)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৩১
জানুয়ারী, ২০২৬ এ ১২:০০:২২ AM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>