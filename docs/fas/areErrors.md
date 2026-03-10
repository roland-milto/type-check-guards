# areErrors

## توضیحات

بررسی می‌کند آیا یک آرایه غیرخالی است و فقط شامل اشیای `Error` است یا نه، و `true` یا `false` برمی‌گرداند.

### مورد استفاده

اعتبارسنجی کنید که یک `unknown[]` ارائه‌شده در زمان اجرا (مثلاً شکست‌های تجمیع‌شده، نتایج اعتبارسنجی، یا داده‌های
deserialized) پیش از پیمایش، ثبت، یا پرتاب مجدد، یک فهرست غیرخالی از اشیای `Error` است.

> **نکته برای کاربران TypeScript:**
>
> `areErrors` فقط برای یک آرایه پُر که هر آیتم آن یک `Error` باشد مقدار `true` برمی‌گرداند؛ برای آرایه خالی یا اگر هر
> عنصری `Error` نباشد مقدار `false` برمی‌گرداند.

### مزایا

- اطمینان می‌دهد هر عنصر یک نمونه از `Error` است و امکان مدیریت و ثبت امن خطا را فراهم می‌کند.
- آرایه‌های خالی را رد می‌کند و از این جلوگیری می‌کند که وضعیت‌های تصادفیِ «بدون خطا» به‌عنوان فهرست خطای معتبر تلقی
  شوند.
- به‌عنوان یک نگهبان زمان اجرا هنگام کار با ورودی‌های `unknown[]` (مثلاً از APIها یا بلوک‌های `catch`) عملکرد خوبی دارد.

## نحوه استفاده

### نحو

تابع:

- `areErrors(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر داشتن اشیای `Error` بررسی شود.

### وارد کردن محلی تابع

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  //‎‎ value یک آرایهٔ غیرخالی از اشیای Error است
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areErrors(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areErrors](‎../_analysis/areErrors.md‎)

<br>

---

<small>این فایل در ۱۷ بهمن ۱۴۰۴ ساعت ۱۲:۳۳:۲۷ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>