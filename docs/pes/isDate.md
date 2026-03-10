# isDate

## توضیحات

`isDate` تعیین می‌کند آیا مقدار ارائه‌شده یک `Date` است یا نه؛ برای نمونه‌های `Date` مقدار `true` و در غیر این صورت
`false` برمی‌گرداند.

### مورد استفاده

پیش از انجام عملیات `Date` مانند قالب‌بندی، مقایسه‌ها، یا فراخوانی `toISOString()`، مقادیر ناشناخته را (مثلاً داده‌های
درخواست، مقادیر پیکربندی، یا JSON تجزیه‌شده) اعتبارسنجی و محدود کنید.

> **نکته برای کاربران TypeScript:**
>
> از `isDate` برای محدود کردن `unknown` به `Date` در زمان اجرا استفاده کنید؛ این تابع فقط برای نمونه‌های واقعی `Date`
> مقدار `true` برمی‌گرداند (نه رشته‌های تاریخ).

### مزایا

- یک نگهبان ساده در زمان اجرا فراهم می‌کند تا بررسی شود آیا یک مقدار `Date` است یا نه.
- با اطمینان از اینکه فقط نمونه‌های `Date` از اعتبارسنجی عبور می‌کنند، به جلوگیری از خطاهای نوع کمک می‌کند.
- برای اعتبارسنجی ورودی‌های ناشناخته (مثلاً payloadهای API) پیش از استفاده از متدهای مخصوص تاریخ مفید است.

## نحوه استفاده

### نحو

تابع:

- `isDate(value)`

پارامترها:

- `value`: مقداری که باید از نظر نوع `Date` بودن بررسی شود.

### وارد کردن محلی تابع

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  //‎‎ input در اینجا یک Date است
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isDate(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isDate](‎../_analysis/isDate.md‎)

<br>

---

<small>این فایل در 31 January 2026 at 15:47:25 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>