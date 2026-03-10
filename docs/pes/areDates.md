# areDates

## توضیحات

`areDates` تعیین می‌کند آیا یک آرایهٔ داده‌شده پر است و فقط شامل اشیای `Date` است یا نه؛ و تنها وقتی `true` برمی‌گرداند
که همهٔ عناصر تاریخ‌های معتبر باشند.

### مورد استفاده

از `areDates` برای اعتبارسنجی ورودی ناشناخته (مثل JSON پارس‌شده، دادهٔ فرم، payloadهای API) پیش از اجرای منطق مخصوص
تاریخ مانند مرتب‌سازی بر اساس زمان، قالب‌بندی، یا محاسبهٔ بازه‌ها استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> فقط برای آرایه‌های غیرخالی که هر عنصرشان یک `Date` است `true` برمی‌گرداند؛ آرایه‌های خالی `false` می‌دهند.

### مزایا

- اطمینان می‌دهد که یک آرایه پیش از اعتبارسنجی محتوایش خالی نیست و از بازگشت `true` برای ورودی‌های خالی جلوگیری می‌کند.
- بررسی می‌کند که هر عنصر یک نمونه از `Date` باشد و در اولین عدم تطابق فوراً `false` برمی‌گرداند.
- به‌عنوان یک بررسی سبکِ نگهبان (guard) پیش از انجام عملیات مخصوص تاریخ روی آیتم‌های آرایه مفید است.

## نحوه استفاده

### نحو

تابع:

- `areDates(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر داشتن اشیای `Date` بررسی شود.

### وارد کردن محلی تابع

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); //‎ درست
console.log(areDates(b)); //‎ نادرست
console.log(areDates(c)); //‎ نادرست

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areDates(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areDates](‎../_analysis/areDates.md‎)

<br>

---

<small>این فایل در 31 January 2026 at 15:31:58 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>