# isValidDate

## توضیحات

`isValidDate` بررسی می‌کند که آیا یک مقدارِ داده‌شده یک شیء `Date` معتبر است یا نه و فقط برای تاریخ‌های واقعی و
غیرنامعتبر `true` برمی‌گرداند.

### مورد استفاده

اعتبارسنجی ورودی کاربر یا داده‌های API که ممکن است شامل تاریخ باشند؛ با این کار پیش از انجام محاسبات تاریخ، قالب‌بندی یا
مقایسه‌ها، مطمئن می‌شوید مقدار یک نمونه واقعی از `Date` است و تاریخ نامعتبر نیست.

> **نکته برای کاربران TypeScript:**
>
> پیش از فراخوانی متدهای `Date` (مثلاً `toISOString`، `getTime`) روی مقدارهایی با نوع `unknown` از `isValidDate` استفاده
> کنید تا مطمئن شوید آن‌ها شیءهای `Date` معتبر هستند.

### مزایا

- اطمینان می‌دهد که یک مقدار نمونه‌ای از `Date` است و فقط یک رشته یا عددِ شبیه تاریخ نیست.
- با بررسی مقدارهای زمانیِ `NaN`، تاریخ‌های نامعتبر (مثلاً `new Date("invalid")`) را رد می‌کند.
- یک گارد بولیِ ساده که استفاده از آن در شرط‌ها و پایپ‌لاین‌های اعتبارسنجی آسان است.
- با تأیید ورودی پیش از فراخوانی، به جلوگیری از خطاهای زمان اجرا هنگام صدا زدن متدهای تاریخ کمک می‌کند.

## نحوه استفاده

### نحو

تابع:

- `isValidDate(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  //‎‎ input یک نمونهٔ معتبر از Date است
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); //‎ نادرست
console.log(isValidDate("2025-12-22")); //‎ نادرست

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isValidDate(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isValidDate](‎../_analysis/isValidDate.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 16:52:31 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>