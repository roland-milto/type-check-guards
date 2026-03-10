# areBuffers

## توضیحات

`areBuffers` بررسی می‌کند آیا مقدارِ ارائه‌شده یک آرایهٔ غیرخالی و پُر است که در آن هر عنصر یک `Buffer` باشد؛ در این
صورت `true` و در غیر این صورت `false` برمی‌گرداند.

### مورد استفاده

اعتبارسنجی آرایه‌های قطعه‌های ورودی (مثلاً از استریم‌ها، آپلود فایل، یا بسته‌های شبکه) برای اطمینان از اینکه همهٔ بخش‌ها
نمونه‌های `Buffer` هستند، پیش از الحاق، دیکود کردن، یا ارسال آن‌ها به توابع رمزنگاری یا پردازش دودویی.

> **نکته برای کاربران TypeScript:**
>
> از `areBuffers` برای اعتبارسنجی `unknown[]` پیش از فراخوانی APIهای مخصوص Buffer مانند `Buffer.concat` استفاده کنید تا
> مطمئن شوید این تابع فقط وقتی `true` برمی‌گرداند که هر عنصر یک `Buffer` باشد.

### مزایا

- اطمینان می‌دهد هر عنصرِ ورودی یک نمونهٔ `Buffer` در Node.js است و فقط وقتی `true` برمی‌گرداند که کل آرایه مطابق باشد.
- با الزام به یک آرایهٔ غیرخالی و پُر، ورودی‌های نامعتبر را زود رد می‌کند؛ برای آرایه‌های خالی یا غیرآرایه‌ها `false`
  برمی‌گرداند.
- به‌عنوان یک گارد پیش از انجام عملیاتِ مخصوص بافر (مثل الحاق، هش‌کردن، پروتکل‌های دودویی) مفید است.

## نحوه استفاده

### نحو

تابع:

- `areBuffers(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر نمونه‌های بافر بررسی شود.

### وارد کردن محلی تابع

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areBuffers(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areBuffers](‎../_analysis/areBuffers.md‎)

<br>

---

<small>این فایل در 31 January 2026 at 16:26:50 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>