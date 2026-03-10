# isBigInt

## توضیحات

`isBigInt` بررسی می‌کند آیا یک مقدار داده‌شده از نوع `bigint` است یا نه؛ برای مقادیر اولیهٔ BigInt مقدار `true` و در غیر
این صورت `false` برمی‌گرداند.

### مورد استفاده

اعتبارسنجی و محدودسازی مقادیری که از منابع بدون نوع می‌آیند (مثلاً تجزیهٔ JSON، ورودی کاربر، APIهای خارجی) پیش از انجام
محاسبات مخصوص BigInt یا ذخیرهٔ آن‌ها در فیلدهایی که فقط BigInt را می‌پذیرند.

> **نکته برای کاربران TypeScript:**
>
> از `isBigInt` استفاده کنید تا `unknown` را پیش از انجام محاسبات BigInt (مثلاً `+`، `*`) که به عملوندهای BigInt نیاز
> دارند، به `bigint` محدودسازی کنید.

### مزایا

- یک بررسی زمان اجرا ساده و قابل‌اعتماد برای نوع اولیهٔ `bigint` فراهم می‌کند.
- کمک می‌کند مقادیر `unknown` را پیش از انجام عملیات مخصوص BigInt محدودسازی (narrow) کنید.
- از مثبتِ کاذب جلوگیری می‌کند: اعداد معمولی، رشته‌ها و انواع دیگر مقدار `false` برمی‌گردانند.

## نحوه استفاده

### نحو

تابع:

- `isBigInt(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); //‎ درست
console.log(isBigInt(10));  //‎ نادرست
console.log(isBigInt("10")); //‎ نادرست
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isBigInt(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isBigInt](‎../_analysis/isBigInt.md‎)

<br>

---

<small>این فایل در ۱۱ بهمن ۱۴۰۴ ساعت ۲۳:۳۱:۴۱ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>