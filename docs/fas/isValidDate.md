# isValidDate

## توضیحات

`isValidDate` بررسی می‌کند آیا یک مقدار داده‌شده یک شیء `Date` معتبر است و فقط برای تاریخ‌های واقعی و غیرنامعتبر مقدار
`true` برمی‌گرداند.

### مورد استفاده

اعتبارسنجی ورودی کاربر یا داده‌های API که ممکن است شامل تاریخ باشند؛ با اطمینان از اینکه مقدار یک نمونه واقعی از `Date`
است و پیش از انجام محاسبات، قالب‌بندی یا مقایسه‌های تاریخ، تاریخ نامعتبر نیست.

> **نکته برای کاربران TypeScript:**
>
> پیش از فراخوانی متدهای `Date` (برای نمونه، `toISOString`، `getTime`) روی مقادیری با نوع `unknown` از `isValidDate`
> استفاده کنید تا مطمئن شوید آن‌ها شیءهای `Date` معتبر هستند.

### مزایا

- اطمینان می‌دهد که یک مقدار نمونه‌ای از `Date` است و صرفاً یک رشته یا عدد شبیه تاریخ نیست.
- با بررسی مقادیر زمانی `NaN`، تاریخ‌های نامعتبر (برای نمونه، `new Date("invalid")`) را رد می‌کند.
- یک گارد بولی ساده است که استفاده از آن در شرط‌ها و پایپ‌لاین‌های اعتبارسنجی آسان است.
- با تأیید ورودی پیش از فراخوانی، به جلوگیری از خطاهای زمان اجرا هنگام فراخوانی متدهای تاریخ کمک می‌کند.

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

console.log(isValidDate(new Date("invalid"))); //‎ false
console.log(isValidDate("2025-12-22")); //‎ false

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

<small>این فایل در ۱۰ بهمن ۱۴۰۴ ساعت ۱۶:۳۹:۵۱ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>