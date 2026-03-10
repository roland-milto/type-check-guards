# areValidDates

## توضیحات

مشخص می‌کند آیا یک آرایه غیرخالی است و به‌طور کامل از اشیای معتبر `Date` تشکیل شده است یا نه.

### مورد استفاده

از `areValidDates` برای اعتبارسنجی آرایه‌های ارائه‌شده توسط کاربر یا API پیش از انجام عملیات مبتنی بر تاریخ (مرتب‌سازی،
بررسی بازه، قالب‌بندی) استفاده کنید تا مطمئن شوید همهٔ ورودی‌ها اشیای واقعی و معتبر `Date` هستند و فهرست خالی نیست.

> **نکته برای کاربران TypeScript:**
>
> `areValidDates` برای یک آرایهٔ خالی `false` برمی‌گرداند؛ پیش از اتکا به آن به‌عنوان یک گام اعتبارسنجی، مطمئن شوید
> آرایه قرار است غیرخالی باشد.

### مزایا

- فقط زمانی `true` برمی‌گرداند که هر عنصر یک نمونهٔ معتبر از `Date` باشد (بدون تاریخ‌های نامعتبر مانند
  `new Date('invalid')`).
- با برگرداندن `false` ورودی خالی را رد می‌کند و تضمین می‌کند فقط فهرست‌های تاریخِ معنادار و غیرخالی را می‌پذیرید.
- یک بررسی سادهٔ بولی به سبک guard فراهم می‌کند که به‌راحتی با اعتبارسنجی‌های دیگر ترکیب می‌شود.

## نحوه استفاده

### نحو

تابع:

- `areValidDates(array)`

پارامترها:

- `array`: آرایه‌ای که باید بررسی شود و ممکن است شامل اشیای `Date` باشد.

### وارد کردن محلی تابع

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); //‎ درست
console.log(areValidDates(b)); //‎ نادرست
console.log(areValidDates(c)); //‎ نادرست
console.log(areValidDates(d)); //‎ نادرست

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areValidDates(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areValidDates](‎../_analysis/areValidDates.md‎)

<br>

---

<small>این فایل در ۱۰ بهمن ۱۴۰۴ ساعت ۱۴:۳۱:۳۶ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>