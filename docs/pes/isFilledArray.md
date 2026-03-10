# isFilledArray

## توضیحات

بررسی می‌کند آیا `value` یک آرایه با حداقل یک عنصر است و `true` یا `false` برمی‌گرداند.

### مورد استفاده

از `isFilledArray` برای اعتبارسنجی داده‌های ورودی (مثلاً payloadهای API، مقادیر فرم، پیکربندی) پیش از پیمایش، دسترسی به
عنصر اول، یا اعمال منطقی که حداقل یک آیتم نیاز دارد استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> `isFilledArray` یک گارد زمان اجرا است که یک مقدار بولی برمی‌گرداند؛ فراتر از تأیید غیرخالی بودن آرایه، نوع عناصر را
> محدودتر نمی‌کند.

### مزایا

- بررسی ساده و سریع برای یک آرایهٔ غیرخالی با استفاده از `Array.isArray` و بررسی طول.
- کمک می‌کند از خطاهای زمان اجرا جلوگیری شود وقتی کد فرض می‌کند یک آرایه حداقل یک عنصر دارد.
- نتیجهٔ بولیِ روشن: برای آرایه‌های غیرخالی `true` و در غیر این صورت `false` برمی‌گرداند.

## نحوه استفاده

### نحو

تابع:

- `isFilledArray(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود آیا یک آرایهٔ غیرخالی است یا نه.

### وارد کردن محلی تابع

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  //‎‎ input در زمان اجرا یک آرایهٔ غیرخالی است
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isFilledArray(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isFilledArray](‎../_analysis/isFilledArray.md‎)

<br>

---

<small>این فایل در 6 February 2026 at 11:48:30 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>