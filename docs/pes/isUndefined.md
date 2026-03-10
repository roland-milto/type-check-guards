# isUndefined

## توضیحات

بررسی می‌کند آیا یک مقدار داده‌شده `undefined` است یا نه.

### مورد استفاده

از `isUndefined` برای گارد کردن ورودی‌های اختیاری، تشخیص ویژگی‌های موجودِ نیست، یا تمایز بین «ارائه نشده» (`undefined`)
و «صراحتاً خالی» (`null`) استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> وقتی مشخصاً لازم دارید `undefined` را تشخیص دهید (نه `null`)، از `isUndefined` استفاده کنید. این کار امن است چون بر
`typeof value === "undefined"` تکیه دارد.

### مزایا

- یک بررسی روشن و صریح برای `undefined` با استفاده از `typeof` فراهم می‌کند و از موارد لبه‌ای مربوط به متغیرهای
  تعریف‌نشده جلوگیری می‌کند.
- یک نتیجهٔ بولی ساده (`true`/`false`) برمی‌گرداند که برای گاردها، شاخه‌بندی و منطق اعتبارسنجی مناسب است.
- کمک می‌کند `undefined` را از سایر مقادیر «خالی» مانند `null`، `0`، `""` یا `NaN` متمایز کنید.

## نحوه استفاده

### نحو

تابع:

- `isUndefined(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  //‎‎ x اینجا undefined است
} else {
  //‎‎ x اینجا undefined نیست
}

const a = isUndefined(undefined); //‎ true
const b = isUndefined(null);      //‎ false

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isUndefined(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isUndefined](‎../_analysis/isUndefined.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 14:04:03 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>