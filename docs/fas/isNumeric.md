# isNumeric

## توضیحات

`isNumeric` با بررسی نوعِ حل‌شدهٔ `value` در برابر `NUMERIC_TYPES` تعیین می‌کند آیا `value` داده‌شده عددی در نظر گرفته
می‌شود یا نه.

### مورد استفاده

از `isNumeric` برای اعتبارسنجی ورودی‌ها (برای نمونه payloadهای API، مقادیر فرم، پیکربندی) پیش از انجام عملیات عددی
استفاده کنید، و برای پذیرش سازگارِ نوع‌های شبه‌عددی (مانند `BigInt`) مطابق با `NUMERIC_TYPES`.

> **نکته برای کاربران TypeScript:**
>
> `isNumeric` یک گزارهٔ بازگردانندهٔ بولین است؛ آن را به‌عنوان یک بررسی زمان اجرا در نظر بگیرید که آیا یک مقدار به
> مجموعهٔ نوع‌های عددیِ تعریف‌شده توسط کتابخانه تعلق دارد یا نه.

### مزایا

- از `getTypeOf` به‌همراه `NUMERIC_TYPES` استفاده می‌کند تا منطق تشخیص عددی را متمرکز کند و بررسی‌ها را در سراسر یک
  کدبیس سازگار نگه دارد.
- یک بولین ساده (`true`/`false`) برمی‌گرداند تا برای شاخه‌بندی آسان و استفاده به سبک گارد مناسب باشد.
- از چندین نمایش عددی (برای نمونه `number`، `BigInt`) مطابق با تعریف `NUMERIC_TYPES` پشتیبانی می‌کند.

## نحوه استفاده

### نحو

تابع:

- `isNumeric(value)`

پارامترها:

- `value`: مقداری که باید از نظر نوع عددی بودن بررسی شود.

### وارد کردن محلی تابع

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    //‎‎ v بر اساس قواعد نوع‌دهی کتابخانه عددی در نظر گرفته می‌شود
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isNumeric(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isNumeric](‎../_analysis/isNumeric.md‎)

<br>

---

<small>این فایل در ۱۷ بهمن ۱۴۰۴ ساعت ۱۵:۵۲:۲۳ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>