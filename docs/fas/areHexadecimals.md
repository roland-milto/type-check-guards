# areHexadecimals

## توضیحات

بررسی می‌کند آیا همهٔ عناصرِ یک آرایه رشته‌های هگزادسیمال هستند یا نه و فقط برای آرایه‌های غیرخالی که هر مورد معتبر باشد
`true` برمی‌گرداند.

### مورد استفاده

از `areHexadecimals` برای اعتبارسنجیِ ورودیِ کاربر یا داده‌های خارجی (مثلاً شناسه‌ها، چِکسام‌ها، کدهای رنگ بدون '#'
ابتدایی) پیش از انجام پارس هگزادسیمال یا پردازش‌های بیشتر استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> از `areHexadecimals` برای اعتبارسنجیِ ورودیِ ناشناخته پیش از پارس کردن یا تبدیل مقادیر استفاده کنید (برای مثال، پیش از
`parseInt(value, 16)` یا تبدیل‌های BigInt).

### مزایا

- اعتبارسنجی می‌کند که هر عنصر یک رشتهٔ هگزادسیمال است و فقط زمانی `true` برمی‌گرداند که همهٔ موارد مطابقت داشته باشند.
- طبق طراحی، آرایه‌های خالی را رد می‌کند و برای دادهٔ ورودیِ موجود نبودن `false` برمی‌گرداند.
- یک نتیجهٔ بولی ساده (`true`/`false`) ارائه می‌دهد که برای گاردها و اعتبارسنجیِ بازگشتِ زودهنگام مناسب است.

## نحوه استفاده

### نحو

تابع:

- `areHexadecimals(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر عناصرِ رشتهٔ هگزادسیمال بررسی شود.

### وارد کردن محلی تابع

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areHexadecimals(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areHexadecimals](‎../_analysis/areHexadecimals.md‎)

<br>

---

<small>این فایل در ۱۱ بهمن ۱۴۰۴ ساعت ۲۳:۰۶:۰۳ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>