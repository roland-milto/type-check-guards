# isRegEx

## توضیحات

مشخص می‌کند آیا مقدار ارائه‌شده یک نمونهٔ `RegExp` است یا نه.

### مورد استفاده

اعتبارسنجی مقادیر ارائه‌شده توسط کاربر یا مقادیر پویا (مثلاً پیکربندی، payloadهای API، ورودی‌های افزونه) پیش از اینکه با
آن‌ها مانند یک عبارت باقاعده رفتار شود.

> **نکته برای کاربران TypeScript:**
>
> از `isRegEx` برای محدودسازی (narrow) مقادیر `unknown` (یا union) پیش از استفاده از ویژگی‌ها یا متدهای مخصوص RegExp
> استفاده کنید؛ این تابع فقط برای مقادیری که نمونه‌ای از `RegExp` هستند `true` برمی‌گرداند.

### مزایا

- یک نگهبان نوع زمان اجرا (runtime type guard) ساده فراهم می‌کند تا بررسی شود آیا یک مقدار `RegExp` است یا نه.
- کمک می‌کند از خطاها جلوگیری شود وقتی کد انتظار یک عبارت باقاعده را دارد (مثلاً پیش از فراخوانی `test`، `exec` یا
  خواندن `source`).
- هم با لیترال‌های regex و هم با نمونه‌هایی که از طریق `new RegExp(...)` ساخته می‌شوند کار می‌کند.
- بدون پرتاب خطا برای ورودی‌های غیر-regex، یک نتیجهٔ بولی روشن (`true`/`false`) برمی‌گرداند.

## نحوه استفاده

### نحو

تابع:

- `isRegEx(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  //‎‎ input در اینجا یک RegExp است
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isRegEx(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isRegEx](‎../_analysis/isRegEx.md‎)

<br>

---

<small>این فایل در ۱۰ بهمن ۱۴۰۴ ساعت ۲۳:۲۹:۱۴ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>