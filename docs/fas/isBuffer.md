# isBuffer

## توضیحات

بررسی می‌کند که آیا یک مقدار، `Buffer` در Node.js است یا نه و `true` یا `false` برمی‌گرداند.

### مورد استفاده

ورودی‌ها را در زمان اجرا (برای نمونه، payloadهای API، داده‌های فایل، یا بافرهای پیام) اعتبارسنجی کنید تا پیش از پردازش
مطمئن شوید مقدار یک `Buffer` است، و هنگام اجرا خارج از Node.js که ممکن است `Buffer` وجود نداشته باشد، به‌طور قابل‌اعتماد
مقدار `false` دریافت کنید.

> **نکته برای کاربران TypeScript:**
>
> از `isBuffer` برای محدودسازی مقادیر `unknown` به `Buffer` پیش از فراخوانی متدهای مخصوص Buffer استفاده کنید.

### مزایا

- نمونه‌های `Buffer` در Node.js را با استفاده از `Buffer.isBuffer` به‌صورت ایمن تشخیص می‌دهد.
- در محیط‌هایی که `Buffer` در دسترس نیست، مقدار `false` برمی‌گرداند و از خطاهای زمان اجرا جلوگیری می‌کند.
- با ورودی `unknown` کار می‌کند و آن را برای اعتبارسنجی زمان اجرا و محدودسازی نوع مناسب می‌سازد.

## نحوه استفاده

### نحو

تابع:

- `isBuffer(value)`

پارامترها:

- `value`: مقداری که باید آزموده شود.

### وارد کردن محلی تابع

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); //‎ true
console.log(isBuffer(b)); //‎ false

if (isBuffer(a)) {
  //‎‎ a در اینجا یک Buffer است
  console.log(a.toString("utf8"));
}
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isBuffer(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isBuffer](‎../_analysis/isBuffer.md‎)

<br>

---

<small>این فایل در ۱۱ بهمن ۱۴۰۴ ساعت ۱۶:۳۱:۳۳ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>