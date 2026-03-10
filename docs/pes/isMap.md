# isMap

## توضیحات

بررسی می‌کند آیا `value` داده‌شده یک `Map` است یا نه؛ اگر باشد `true` و در غیر این صورت `false` برمی‌گرداند.

### مورد استفاده

وقتی یک مقدار `unknown` دریافت می‌کنید (مثلاً از تجزیهٔ JSON، APIهای خارجی، یا ورودی کاربر) و لازم است پیش از انجام
عملیات‌های `Map` مطمئن شوید که آن مقدار یک `Map` است، از `isMap` استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> `isMap` یک گارد زمان اجرا است که وقتی مقدار یک `Map` باشد `true` و در غیر این صورت `false` برمی‌گرداند؛ از آن برای
> محدود کردن `unknown` پیش از فراخوانی APIهای `Map` استفاده کنید.

### مزایا

- یک بررسی سریع در زمان اجرا فراهم می‌کند تا مشخص شود آیا یک مقدار `Map` است یا نه.
- با محافظت از مسیرهای کدی که به متدهای `Map` مثل `get`، `set` و `has` نیاز دارند، به جلوگیری از خطاهای نوع کمک می‌کند.
- به‌عنوان یک گام اعتبارسنجی سبک هنگام کار با ورودی‌های `unknown` به‌خوبی عمل می‌کند.

## نحوه استفاده

### نحو

تابع:

- `isMap(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isMap(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isMap](‎../_analysis/isMap.md‎)

<br>

---

<small>این فایل در 31 January 2026 at 16:29:25 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>