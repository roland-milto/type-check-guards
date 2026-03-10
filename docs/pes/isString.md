# isString

## توضیحات

`isString` تعیین می‌کند که آیا یک مقدار داده‌شده رشته است یا نه.

### مورد استفاده

اعتبارسنجی ورودی کاربر، فیلدهای payload در API، یا مقادیر پیکربندی در زمان اجرا تا مطمئن شوید یک مقدار رشته است، پیش از
اعمال عملیات رشته‌ای (مثلاً trim کردن، split کردن، تبدیل حروف).

> **نکته برای کاربران TypeScript:**
>
> از `isString` برای اعتبارسنجی مقادیر `unknown` یا با نوع‌دهی سست پیش از فراخوانی متدهای رشته استفاده کنید؛ فقط وقتی
`true` برمی‌گرداند که `typeof value === "string"` باشد.

### مزایا

- بررسی ساده و سریع با استفاده از `typeof`.
- یک نتیجهٔ بولی قابل پیش‌بینی برمی‌گرداند: برای رشته‌ها `true` و در غیر این صورت `false`.
- برای رشته‌های خالی و غیرخالی کار می‌کند.
- به‌عنوان یک نگهبان سبک در زمان اجرا پیش از انجام عملیات مخصوص رشته مفید است.

## نحوه استفاده

### نحو

تابع:

- `isString(value)`

پارامترها:

- `value`: مقداری که باید از نظر رشته بودن بررسی شود.

### وارد کردن محلی تابع

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  //‎‎ input اینجا یک رشته است
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isString(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isString](‎../_analysis/isString.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 13:15:18 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>