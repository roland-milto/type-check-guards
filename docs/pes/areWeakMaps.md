# areWeakMaps

## توضیحات

`areWeakMaps` بررسی می‌کند که آیا یک مقدار، آرایه‌ای غیرخالی است که هر عنصر آن یک `WeakMap` باشد؛ فقط در همان حالت
`true` و در غیر این صورت `false` برمی‌گرداند.

### مورد استفاده

داده‌های زمان اجرا (مثلاً JSON پارس‌شده، ورودی‌های پلاگین، یا پیکربندی با نوع‌دهی سست) را اعتبارسنجی کنید تا مطمئن شوید
پیش از پیمایش و فراخوانی متدهای `WeakMap`، یک آرایهٔ غیرخالی از نمونه‌های `WeakMap` است؛ وقتی هر عنصری `WeakMap` نباشد
یا آرایه خالی باشد مقدار `false` برمی‌گرداند.

> **نکته برای کاربران TypeScript:**
>
> از `areWeakMaps` برای اعتبارسنجی ورودی ناشناخته پیش از برخورد با آن به‌عنوان یک `WeakMap[]` غیرخالی استفاده کنید؛ برای
> آرایه‌های خالی مقدار `false` برمی‌گرداند.

### مزایا

- اطمینان می‌دهد که هر عنصر در آرایهٔ ارائه‌شده یک نمونهٔ `WeakMap` است.
- برای آرایه‌های خالی مقدار `false` برمی‌گرداند و از پذیرش تصادفی «بدون داده» به‌عنوان ورودی معتبر جلوگیری می‌کند.
- به‌عنوان یک گارد پیش از انجام عملیات مخصوص `WeakMap` روی همهٔ آیتم‌ها مفید است.

## نحوه استفاده

### نحو

تابع:

- `areWeakMaps(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر نمونه‌های `WeakMap` بودن بررسی شود.

### وارد کردن محلی تابع

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  //‎‎ list یک آرایهٔ غیرخالی از نمونه‌های WeakMap است
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  //‎‎ یک WeakMap[] غیرخالی نیست
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areWeakMaps(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areWeakMaps](‎../_analysis/areWeakMaps.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 13:39:00 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>