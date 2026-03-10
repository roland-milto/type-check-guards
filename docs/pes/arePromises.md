# arePromises

## توضیحات

`arePromises` تعیین می‌کند که آیا همهٔ عناصرِ یک آرایه نمونه‌های `Promise` هستند یا نه.

### مورد استفاده

پیش از تجمیع آن‌ها (مثلاً با `Promise.all`)، اعتبارسنجی کنید که یک فهرستِ ساخته‌شده به‌صورت پویا یا ارائه‌شده از بیرون
فقط شامل پرامیس‌ها است.

> **نکته برای کاربران TypeScript:**
>
> از `arePromises` برای اعتبارسنجی `unknown[]` پیش از فراخوانی `Promise.all` یا سایر عملیاتِ مخصوصِ پرامیس استفاده کنید؛
> برای آرایه‌های خالی `false` برمی‌گرداند.

### مزایا

- اطمینان می‌دهد که پیش از ادامه دادن با منطقِ مخصوصِ پرامیس، هر عنصر یک `Promise` است.
- برای آرایه‌های خالی `false` برمی‌گرداند و از نتایج مبهم برای ورودی‌های خالی جلوگیری می‌کند.
- به‌عنوان یک گارد زمان اجرا هنگام کار با `unknown[]` از منابع خارجی مفید است.

## نحوه استفاده

### نحو

تابع:

- `arePromises(array)`

پارامترها:

- `array`: آرایه‌ای که باید برای نمونه‌های Promise بررسی شود.

### وارد کردن محلی تابع

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  //‎‎ values در زمان اجرا یک آرایه از نمونه‌های Promise است
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.arePromises(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [arePromises](‎../_analysis/arePromises.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 23:49:38 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>