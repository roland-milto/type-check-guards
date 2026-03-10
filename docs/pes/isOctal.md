# isOctal

## توضیحات

مشخص می‌کند آیا یک مقدار، رشتهٔ لیترال هشت‌هشتی (octal) معتبر است یا نه (مثلاً `0o755`).

### مورد استفاده

اعتبارسنجی ورودی کاربر یا مقادیر پیکربندی که باید به‌صورت یک رشتهٔ لیترال هشت‌هشتی بیان شوند (برای مثال، حالت‌های مجوز
فایل مثل `0o644`) پیش از تجزیه (parse) یا تبدیل آن‌ها.

> **نکته برای کاربران TypeScript:**
>
> `isOctal` یک نگهبان نوع است (`value is string`). بعد از نتیجهٔ `true`، TypeScript متغیرِ بررسی‌شده را به `string`
> محدود می‌کند.

### مزایا

- یک نگهبان نوع (type guard) سخت‌گیرانه فراهم می‌کند: فقط وقتی `true` برمی‌گرداند که ورودی یک رشته باشد که با قالب یک
  لیترال هشت‌هشتی (octal) مطابقت دارد.
- رشته‌های خالی و رشته‌هایی با فاصلهٔ سفیدِ ابتدایی/انتهایی (کنترل/فاصلهٔ ASCII) را رد می‌کند و احتمال تطابق‌های تصادفی
  را کاهش می‌دهد.
- علامت اختیاری را پشتیبانی می‌کند و نسبت به حروف بزرگ/کوچک برای پیشوند `0o`/`0O` حساس نیست.
- برای ورودی‌های غیررشته‌ای با برگرداندن `false` (به‌جای پرتاب خطا) انعطاف‌پذیر است.

## نحوه استفاده

### نحو

تابع:

- `isOctal(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); //‎ درست
console.log(isOctal(b)); //‎ درست
console.log(isOctal(c)); //‎ نادرست
console.log(isOctal(d)); //‎ نادرست

if (isOctal(a)) {
  //‎‎ a اینجا رشته است
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isOctal(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isOctal](‎../_analysis/isOctal.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 15:42:54 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>