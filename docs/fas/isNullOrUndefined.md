# isNullOrUndefined

## توضیحات

بررسی می‌کند که آیا یک مقدارِ داده‌شده `null` یا `undefined` است یا نه.

### مورد استفاده

وقتی لازم است هم `null` و هم `undefined` را به‌عنوان «بدون مقدار» در نظر بگیرید از `isNullOrUndefined` استفاده کنید؛
مانند اعتبارسنجی ورودی‌های اختیاری، نرمال‌سازی payloadهای API، یا محافظت از مسیرهای کد پیش از dereference کردنِ مقداری
که ممکن است موجود نباشد.

> **نکته برای کاربران TypeScript:**
>
> از `isNullOrUndefined` برای محافظت در برابر مقادیرِ موجود نبودن پیش از دسترسی به ویژگی‌ها یا فراخوانی متدها استفاده
> کنید؛ این تابع فقط برای `null` و `undefined` مقدار `true` برمی‌گرداند.

### مزایا

- یک گارد روشن و قابل‌استفاده‌مجدد برای تشخیص `null` و `undefined` در یک نقطه فراهم می‌کند.
- یک بولین ساده (`true`/`false`) برمی‌گرداند که ترکیب‌کردن آن در شرط‌ها و اعتبارسنجی‌ها آسان است.
- با بررسی مقادیرِ موجود نبودن پیش از دسترسی به ویژگی‌ها یا فراخوانی متدها، به جلوگیری از خطاهای رایج زمان اجرا کمک
  می‌کند.

## نحوه استفاده

### نحو

تابع:

- `isNullOrUndefined(value)`

پارامترها:

- `value`: مقداری که باید از نظر `null` یا `undefined` بودن بررسی شود.

### وارد کردن محلی تابع

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  //‎‎ مقدارِ موجود نیست را مدیریت کن
}

console.log(isNullOrUndefined(b)); //‎ درست
console.log(isNullOrUndefined(c)); //‎ نادرست

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isNullOrUndefined(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isNullOrUndefined](‎../_analysis/isNullOrUndefined.md‎)

<br>

---

<small>این فایل در ۱۱ بهمن ۱۴۰۴ ساعت ۰:۳۳:۳۶ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>