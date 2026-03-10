# isArray

## توضیحات

`isArray` بررسی می‌کند آیا مقدار داده‌شده یک آرایه است و اگر باشد `true` و در غیر این صورت `false` برمی‌گرداند.

### مورد استفاده

اعتبارسنجی داده‌های ناشناخته (مثلاً JSON پارس‌شده یا پاسخ‌های API) برای اطمینان از اینکه یک مقدار آرایه است، پیش از
پیمایش، اندیس‌گذاری یا دسترسی به `.length`.

> **نکته برای کاربران TypeScript:**
>
> وقتی به یک بررسی زمان اجرا برای آرایه‌ها نیاز دارید از `isArray` استفاده کنید؛ این تابع یک مقدار بولی برمی‌گرداند و
> فراخوانی آن با مقادیر `unknown` امن است.

### مزایا

- برای تشخیص قابل‌اعتماد آرایه در میان realmهای مختلف (مثلاً iframeها) از `Array.isArray` داخلی استفاده می‌کند.
- یک نتیجهٔ بولی ساده (`true`/`false`) برمی‌گرداند که برای گاردها و منطق انشعاب مناسب است.
- با هر نوع ورودی کار می‌کند چون پارامتر از نوع `unknown` است.

## نحوه استفاده

### نحو

تابع:

- `isArray(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  //‎‎ input در زمان اجرا یک آرایه است
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isArray(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isArray](‎../_analysis/isArray.md‎)

<br>

---

<small>این فایل در 6 February 2026 at 11:31:44 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>