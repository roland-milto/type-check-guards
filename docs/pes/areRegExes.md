# areRegExes

## توضیحات

`areRegExes` بررسی می‌کند آیا یک مقدار، آرایه‌ای پُر است که فقط شامل اشیای `RegExp` باشد.

### مورد استفاده

پیش از استفاده برای تطبیق، بررسی کنید که یک گزینهٔ پیکربندی (مثلاً فهرستی از الگوهای allow/deny) یک آرایهٔ غیرخالی از
عبارات باقاعده باشد.

> **نکته برای کاربران TypeScript:**
>
> از `areRegExes` استفاده کنید تا پیش از پیمایش یا ترکیب الگوها، نوع `unknown` را به `RegExp[]` محدود کنید.

### مزایا

- اطمینان می‌دهد که یک مقدار، آرایه‌ای غیرخالی است که هر عنصر آن یک نمونه از `RegExp` است.
- یک گارد بولی ساده (`true`/`false`) برای اعتبارسنجی ورودی کاربر یا پیکربندی فراهم می‌کند.
- کمک می‌کند از خطاهای زمان اجرا جلوگیری شود وقتی کدهای بعدی فرض می‌کنند همهٔ آیتم‌ها از عملیات عبارات باقاعده پشتیبانی
  می‌کنند.

## نحوه استفاده

### نحو

تابع:

- `areRegExes(array)`

پارامترها:

- `array`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  //‎‎ patterns در اینجا یک آرایه از RegExp است
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areRegExes(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areRegExes](‎../_analysis/areRegExes.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 23:21:04 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>