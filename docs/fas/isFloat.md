# isFloat

## توضیحات

`isFloat` تعیین می‌کند آیا `value` داده‌شده یک عدد ممیز شناورِ متناهی است (یک `number` که عدد صحیح نیست).

### مورد استفاده

اعتبارسنجی ورودی عددیِ ارائه‌شده توسط کاربر در مواردی که مقادیر کسری لازم است (مثلاً قیمت‌ها، اندازه‌گیری‌ها، نرخ‌ها) و
رد کردن اعداد صحیح، `NaN` و بی‌نهایت‌ها.

> **نکته برای کاربران TypeScript:**
>
> وقتی لازم است فقط ورودی‌های عددیِ متناهی و غیرصحیح را بپذیرید از `isFloat` استفاده کنید؛ این تابع اعداد صحیح و اعداد
> نامتناهی را رد می‌کند.

### مزایا

- `true` را فقط برای اعداد متناهی و غیرصحیح برمی‌گرداند (اعداد صحیح، `NaN`، `Infinity` و `-Infinity` را مستثنا می‌کند).
- با هر نوع ورودی (`unknown`) کار می‌کند و با بررسی `typeof value === "number"` به‌صورت ایمن نوع را محدود می‌کند.
- برای رفتار قابل پیش‌بینی از نگهبان‌های عددی داخلی (`Number.isInteger`، `Number.isFinite`) استفاده می‌کند.

## نحوه استفاده

### نحو

تابع:

- `isFloat(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود آیا یک عدد ممیز شناور است یا خیر.

### وارد کردن محلی تابع

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    //‎‎ مقدار در زمان اجرا یک عدد است؛ متناهی است و عدد صحیح نیست
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isFloat(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isFloat](‎../_analysis/isFloat.md‎)

<br>

---

<small>این فایل در ۱۰ بهمن ۱۴۰۴ ساعت ۱۶:۰۷:۳۴ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>