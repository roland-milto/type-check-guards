# isOfType

## توضیحات

مشخص می‌کند آیا `value` داده‌شده با یک رشتهٔ نوع مشخص مطابقت دارد یا نه؛ برای انواع اولیه از `typeof` و برای انواع
پیچیده از یک روش جایگزین استفاده می‌کند.

### مورد استفاده

اعتبارسنجی و محدودسازی (narrow) ورودی‌های `unknown` (مثلاً پاسخ‌های API، ورودی کاربر، JSON پارس‌شده) با بررسی اینکه آیا
یک مقدار از رشتهٔ نوع مورد انتظار است یا نه، پیش از انجام عملیات وابسته به نوع.

> **نکته برای کاربران TypeScript:**
>
> از `isOfType` برای شاخه‌بندی بر اساس نوع در زمان اجرا هنگام کار با مقادیر `unknown` استفاده کنید؛ این تابع `true`/
`false` برمی‌گرداند و با `null` و `undefined` به‌صورت صریح برخورد می‌کند.

### مزایا

- برای سرعت و شفافیت، انواع اولیه را با `typeof` به‌صورت مستقیم بررسی می‌کند.
- `null` و `undefined` را به‌درستی مدیریت می‌کند؛ چیزی که `typeof` به‌تنهایی نمی‌تواند مطابق انتظار از هم تفکیک کند.
- از رشته‌های نوع پیچیده یا سفارشی با یک مقایسهٔ جایگزین مبتنی بر `getTypeOf` پشتیبانی می‌کند.
- یک نتیجهٔ بولی ساده (`true`/`false`) برمی‌گرداند که برای گاردها و شاخه‌بندی مناسب است.

## نحوه استفاده

### نحو

تابع:

- `isOfType(value, type)`

پارامترها:

- `value`: مقداری که باید در برابر `type` آزموده شود.
- `type`: نمایش رشته‌ایِ نوعی که باید با آن بررسی شود.

### وارد کردن محلی تابع

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  //‎‎ input در اینجا یک عدد است
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  //‎‎ input در اینجا یک رشته است
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isOfType(value, type)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isOfType](‎../_analysis/isOfType.md‎)

<br>

---

<small>این فایل در ۱۰ بهمن ۱۴۰۴ ساعت ۱۶:۵۹:۲۸ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>