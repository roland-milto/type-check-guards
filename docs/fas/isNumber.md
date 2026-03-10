# isNumber

## توضیحات

`isNumber` بررسی می‌کند که آیا یک مقدار، عددی متناهی و غیرِ `NaN` است یا نه.

### مورد استفاده

پیش از محاسبات، ذخیره‌سازی یا بررسی بازه، ورودی عددی را از منابع غیرقابل‌اعتماد (فرم‌ها، پارامترهای کوئری، payloadهای
JSON) اعتبارسنجی کنید تا فقط اعداد متناهی پذیرفته شوند (`true`) و برای سایر موارد `false` برگردد.

> **نکته برای کاربران TypeScript:**
>
> از `isNumber` برای اعتبارسنجی مقادیر `unknown` قبل از انجام محاسبات استفاده کنید؛ این تابع `NaN`، `Infinity` و
`-Infinity` را رد می‌کند.

### مزایا

- `true` را فقط برای اعداد واقعی جاوااسکریپت برمی‌گرداند (بررسی نوع به‌همراه رد کردن `NaN` و بی‌نهایت).
- از باگ‌های رایج اعتبارسنجی جلوگیری می‌کند که در آن‌ها `NaN`، `Infinity` یا `-Infinity` به‌اشتباه به‌عنوان عدد پذیرفته
  می‌شوند.
- به‌عنوان یک گارد زمان اجرا برای ورودی ناشناخته (مثلاً JSON، ورودی کاربر، APIهای خارجی) به‌خوبی کار می‌کند.
- ساده، سریع و بدون اثر جانبی است.

## نحوه استفاده

### نحو

تابع:

- `isNumber(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  //‎‎ input یک عدد متناهیِ معتبر است
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isNumber(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isNumber](‎../_analysis/isNumber.md‎)

<br>

---

<small>این فایل در ۱۰ بهمن ۱۴۰۴ ساعت ۱۳:۰۸:۴۹ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>