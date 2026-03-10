# isWeakSet

## توضیحات

مشخص می‌کند آیا `value` داده‌شده یک `WeakSet` از اشیاء است یا نه.

### مورد استفاده

وقتی ورودیِ بدون نوع می‌پذیرید (مثلاً از APIهای خارجی، پیکربندی پویا، یا مقادیر `unknown`) و لازم است پیش از استفاده از
عملیات مخصوص `WeakSet` بررسی کنید که واقعاً یک `WeakSet` است، از `isWeakSet` استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> از `isWeakSet` برای محدود کردن یک مقدار `unknown` به `WeakSet<object>` در زمان اجرا استفاده کنید؛ توجه داشته باشید که
`WeakSet` فقط می‌تواند ارجاع‌های شیء را در خود نگه دارد.

### مزایا

- یک بررسی ساده در زمان اجرا فراهم می‌کند تا مشخص شود آیا یک مقدار یک `WeakSet` است یا نه.
- با اطمینان از اینکه فقط نمونه‌های `WeakSet` به‌عنوان چنین چیزی در نظر گرفته می‌شوند، به جلوگیری از خطاهای نوع کمک
  می‌کند.
- با هر ورودی `unknown` کار می‌کند و یک نتیجهٔ بولیِ روشن (`true`/`false`) برمی‌گرداند.

## نحوه استفاده

### نحو

تابع:

- `isWeakSet(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); //‎ true
console.log(isWeakSet(b)); //‎ false

if (isWeakSet(a)) {
  //‎‎ a در زمان اجرا یک WeakSet است
}
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isWeakSet(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isWeakSet](‎../_analysis/isWeakSet.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 14:18:47 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>