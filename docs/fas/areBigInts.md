# areBigInts

## توضیحات

`areBigInts` تعیین می‌کند آیا یک مقدار، آرایه‌ای غیرخالی است که فقط شامل مقادیر `bigint` باشد یا نه.

### مورد استفاده

اعتبارسنجی ورودی ناشناخته (مثلاً داده‌های شبیه JSONِ پارس‌شده، payloadهای API، یا پارامترهای تابع با نوع `unknown`) برای
اطمینان از اینکه یک آرایهٔ غیرخالی از مقادیر `bigint` است پیش از پردازش؛ فقط زمانی `true` برمی‌گرداند که همهٔ عناصر
`bigint` باشند، در غیر این صورت `false`.

> **نکته برای کاربران TypeScript:**
>
> از `areBigInts` به‌عنوان یک گارد زمان اجرا پیش از انجام عملیاتِ مخصوصِ `bigint` (مثلاً محاسبات، مقایسه‌ها) روی ورودی
> ناشناخته استفاده کنید.

### مزایا

- اطمینان می‌دهد هر عنصر یک `bigint` است و فقط زمانی `true` برمی‌گرداند که کل آرایه مطابقت داشته باشد.
- به‌صورت پیش‌فرض آرایه‌نبودن و آرایه‌های خالی را رد می‌کند (از طریق `isFilledArray`) و از پذیرش تصادفی ورودی‌های
  نامعتبر جلوگیری می‌کند.
- شکست سریع: به‌محض یافتن یک عنصر غیرِ `bigint` مقدار `false` را برمی‌گرداند.

## نحوه استفاده

### نحو

تابع:

- `areBigInts(array)`

پارامترها:

- `array`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); //‎ درست
console.log(areBigInts(b)); //‎ نادرست
console.log(areBigInts(c)); //‎ نادرست
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areBigInts(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areBigInts](‎../_analysis/areBigInts.md‎)

<br>

---

<small>این فایل در ۱۱ بهمن ۱۴۰۴ ساعت ۲۳:۲۵:۵۱ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>