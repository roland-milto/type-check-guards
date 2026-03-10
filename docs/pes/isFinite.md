# isFinite

## توضیحات

مشخص می‌کند آیا `value` داده‌شده یک `number` متناهی است یا نه.

### مورد استفاده

از `isFinite` برای اعتبارسنجی ورودیِ ناشناخته (مثلاً از JSON، فرم‌ها یا APIها) پیش از انجام محاسبات عددی استفاده کنید تا
مطمئن شوید مقدار یک عدد واقعی و متناهی است.

> **نکته برای کاربران TypeScript:**
>
> `isFinite` فقط برای عددهای متناهی `true` برمی‌گرداند؛ برای `NaN`، `Infinity` و هر مقدارِ غیرعددی `false` برمی‌گرداند.

### مزایا

- برای بررسی قابل‌اعتمادِ متناهی بودن، از `Number.isFinite` داخلی استفاده می‌کند.
- فقط برای عددهای متناهی `true` برمی‌گرداند؛ برای `NaN`، `Infinity` و ورودی‌های غیرعددی `false` برمی‌گرداند.
- یک گزارهٔ ساده و بدون اثر جانبی است که برای اعتبارسنجی و منطقِ محافظ (guarding) مناسب است.

## نحوه استفاده

### نحو

تابع:

- `isFinite(value)`

پارامترها:

- `value`: مقداری که باید از نظر متناهی بودن بررسی شود.

### وارد کردن محلی تابع

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
//‎‎ finiteNumbers این است: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  //‎‎ مقدار اینجا یک عدد متناهی است
  const doubled = value * 2;
  console.log(doubled);
}
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isFinite(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isFinite](‎../_analysis/isFinite.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 16:31:18 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>