# isWeakMap

## توضیحات

مشخص می‌کند آیا `value` داده‌شده یک نمونهٔ `WeakMap` است یا نه.

### مورد استفاده

وقتی یک مقدار `unknown` را می‌پذیرید (مثلاً از یک API عمومی، سیستم پلاگین، یا پیکربندی پویا) و لازم دارید قبل از استفاده
از رفتارهای مخصوص `WeakMap` تأیید کنید که آن مقدار یک `WeakMap` است، از `isWeakMap` استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> `isWeakMap` یک بررسی `instanceof WeakMap` انجام می‌دهد؛ این یک گارد زمان اجرا است که فقط برای نمونه‌های واقعی
`WeakMap` مقدار `true` برمی‌گرداند.

### مزایا

- بررسی سادهٔ زمان اجرا برای اینکه آیا یک مقدار یک `WeakMap` است یا نه.
- با برگرداندن `true`/`false` به‌جای پرتاب کردن خطا، به جلوگیری از استفادهٔ نادرست از APIهایی که به `WeakMap` نیاز دارند
  کمک می‌کند.
- با ورودی‌های `unknown` کار می‌کند و آن را در مرزهای ماژول (مثلاً تجزیه، دادهٔ خارجی، یا کد بدون نوع) راحت می‌کند.

## نحوه استفاده

### نحو

تابع:

- `isWeakMap(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  //‎‎ a در زمان اجرا یک WeakMap است
}

console.log(isWeakMap(a)); //‎ درست
console.log(isWeakMap(b)); //‎ نادرست
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isWeakMap(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isWeakMap](‎../_analysis/isWeakMap.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 13:26:33 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>