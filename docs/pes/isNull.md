# isNull

## توضیحات

مشخص می‌کند آیا `value` ارائه‌شده برابر با `null` است یا نه.

### مورد استفاده

از `isNull` برای اعتبارسنجی ورودی‌ها یا فیلدهای payload در API استفاده کنید، جایی که `null` یک مقدار نشانه‌گذار (
sentinel) معنادار است و باید متفاوت از `undefined` یا سایر مقدارها مدیریت شود.

> **نکته برای کاربران TypeScript:**
>
> وقتی لازم است بین `null` و `undefined` و سایر مقدارهای falsy تمایز قائل شوید از `isNull` استفاده کنید؛ این تابع فقط
> برای `null` مقدار `true` برمی‌گرداند.

### مزایا

- یک بررسی دقیق برای `null` فراهم می‌کند بدون اینکه آن را با `undefined` یکی بگیرد.
- برای هر نوع ورودی به‌طور قابل‌اعتماد کار می‌کند چون `unknown` را می‌پذیرد.
- ساده، سریع و بدون اثر جانبی است؛ فقط `true` یا `false` برمی‌گرداند.

## نحوه استفاده

### نحو

تابع:

- `isNull(value)`

پارامترها:

- `value`: مقداری که باید از نظر `null` بودن بررسی شود.

### وارد کردن محلی تابع

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); //‎ درست
console.log(isNull(b)); //‎ نادرست

if (isNull(a)) {
  //‎‎ a اینجا null است
}
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isNull(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isNull](‎../_analysis/isNull.md‎)

<br>

---

<small>این فایل در 31 January 2026 at 15:40:29 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>