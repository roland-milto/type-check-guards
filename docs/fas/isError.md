# isError

## توضیحات

بررسی می‌کند آیا `value` داده‌شده نمونه‌ای از `Error` است یا نه.

### مورد استفاده

وقتی یک مقدار `unknown` دریافت می‌کنید (مانند یک بلوک `catch`، یک callback، یا یک کتابخانهٔ خارجی) و لازم است با اطمینان
تعیین کنید آیا آن مقدار یک `Error` است یا نه، پیش از خواندن `message`، `name`، یا `stack` از `isError` استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> از `isError` برای محافظت از مقادیر `unknown` (مثلاً از `catch`) پیش از برخورد با آن‌ها به‌عنوان یک `Error` استفاده
> کنید.

### مزایا

- یک بررسی ساده در زمان اجرا فراهم می‌کند تا مشخص شود آیا یک مقدار نمونه‌ای از `Error` است یا نه.
- کمک می‌کند ورودی‌های ناشناخته را پیش از دسترسی به ویژگی‌های `Error` مانند `message` یا `stack` محدودسازی (narrow)
  کنید.
- خطر استثناهای زمان اجرا را هنگام رسیدگی به مقادیر حاصل از `catch`، APIهای خارجی، یا منابع بدون نوع کاهش می‌دهد.

## نحوه استفاده

### نحو

تابع:

- `isError(value)`

پارامترها:

- `value`: مقداری که باید در برابر نوع `Error` بررسی شود.

### وارد کردن محلی تابع

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isError(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isError](‎../_analysis/isError.md‎)

<br>

---

<small>این فایل در ۱۷ بهمن ۱۴۰۴ ساعت ۱۲:۴۵:۱۷ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>