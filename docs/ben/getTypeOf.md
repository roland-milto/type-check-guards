# getTypeOf

## বর্ণনা

`getTypeOf` প্রদত্ত মানের জন্য একটি বিস্তারিত, মানুষের পড়ার উপযোগী টাইপ লেবেল ফেরত দেয়, যেখানে পরিশোধিত সংখ্যাগত টাইপ
এবং নির্দিষ্ট অবজেক্টের ধরনও অন্তর্ভুক্ত থাকে।

### ব্যবহারের ক্ষেত্র

ইনপুট ভ্যালিডেশন এবং ডায়াগনস্টিকসে টাইপ শনাক্তকরণকে একরূপ করতে `getTypeOf` ব্যবহার করুন—উদাহরণস্বরূপ, `nan` প্রত্যাখ্যান
করতে, শুধু `integer` আইডি গ্রহণ করতে, `decimal`-এর মতো সংখ্যাগত স্ট্রিংকে সাধারণ `string` থেকে আলাদাভাবে বিবেচনা করতে,
অথবা `date` এবং `regexp`-এর মতো নির্দিষ্ট অবজেক্টের ধরন নির্ভুলভাবে লগ করতে।

> **TypeScript ব্যবহারকারীদের জন্য ইঙ্গিত:**
>
> রিটার্ন টাইপ হলো `DataTypeAsString | string`। এটিকে একটি বর্ণনামূলক লেবেল হিসেবে বিবেচনা করুন; ব্রাঞ্চিং করার সময়
`integer`, `float`, `nan`, `array`, `null`, এবং `undefined`-এর মতো পরিচিত লিটারেলগুলোর সাথে তুলনা করুন।

### সুবিধাসমূহ

- JavaScript-এর `typeof`-এর তুলনায় আরও সূক্ষ্ম টাইপ স্ট্রিং ফেরত দেয়, যেখানে `integer`, `float`, এবং `nan`-এর মতো
  সংখ্যাগত উপ-টাইপও অন্তর্ভুক্ত থাকে।
- `null` এবং `undefined`-কে স্পষ্টভাবে `null` এবং `undefined` হিসেবে পৃথক করে।
- সাধারণ সংখ্যাগত স্ট্রিং ফরম্যাট শনাক্ত করে এবং সেগুলোকে সাধারণ `string` না বলে `binary`, `octal`, `decimal`, বা
  `hexadecimal` হিসেবে রিপোর্ট করে।
- অ্যারে-কে `array` হিসেবে শনাক্ত করে এবং নির্দিষ্ট অবজেক্ট টাইপ নাম (যেমন `date`, `regexp`, `map`, `set`) দিতে
  `Object.prototype.toString` ব্যবহার করে।
- যেখানে সামঞ্জস্যপূর্ণ, মানুষের পড়ার উপযোগী টাইপ লেবেল দরকার—এমন ভ্যালিডেশন, লগিং, এবং ডিবাগিং-এর জন্য উপকারী।

## ব্যবহার

### সিনট্যাক্স

ফাংশন:

- `getTypeOf(value)`

প্যারামিটার:

- `value`: যে মানটির ডেটা টাইপ নির্ধারণ করতে হবে।

### লোকাল ফাংশন ইমপোর্ট

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// উদাহরণ যাচাই
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### গ্লোবাল অবজেক্ট ইমপোর্ট

ফাংশনগুলোকে গ্লোবাল অবজেক্ট মেথড হিসেবে ইমপোর্ট করতে ব্যবহার করুন:

```ts
import "@type-check/guards/register-global-object.mjs";
```

তাহলে নিম্নলিখিত মেথডটি গ্লোবালি উপলব্ধ হবে:

- `Type.getTypeOf(value)`

## ফাংশন বিশ্লেষণ

ফাংশনগুলোতে বিভিন্ন প্যারামিটার দিলে কোন আউটপুট হয় তার একটি সারণিভিত্তিক বিশ্লেষণ এখানে নথিভুক্ত
আছে: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>**[Roland Milto](https://roland-milto.de/)** কর্তৃক *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ব্যবহার করে ৬
ফেব্রুয়ারী, ২০২৬ এ ১:০৫:১৫ PM (UTC) তারিখে ফাইলটি তৈরি করা হয়েছে।</small>