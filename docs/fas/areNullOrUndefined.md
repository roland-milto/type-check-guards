# areNullOrUndefined

## توضیحات

بررسی می‌کند آیا همهٔ عناصر در آرایهٔ داده‌شده `null` یا `undefined` هستند یا نه.

### مورد استفاده

اعتبارسنجی کنید که یک فهرست از فیلدهای اختیاری هیچ مقدار واقعی‌ای ندارد (فقط `null`/`undefined`) پیش از آن‌که تصمیم
بگیرید پردازش را نادیده بگیرید یا وضعیت «هیچ مقداری ارائه نشده است» را نمایش دهید.

> **نکته برای کاربران TypeScript:**
>
> وقتی لازم است بررسی کنید که یک آرایه فقط شامل مقادیر ناموجود (`null`/`undefined`) است، از `areNullOrUndefined` استفاده
> کنید. توجه داشته باشید که برای آرایهٔ خالی `false` برمی‌گرداند.

### مزایا

- تنها زمانی `true` برمی‌گرداند که هر عنصر `null` یا `undefined` باشد.
- برای آرایه‌های خالی `false` برمی‌گرداند و کمک می‌کند «بدون داده» را از «همهٔ مقادیر ناموجود» متمایز کنید.
- با `unknown[]` کار می‌کند و استفاده از آن را پیش از محدودسازی نوع‌ها (narrowing) ایمن می‌سازد.

## نحوه استفاده

### نحو

تابع:

- `areNullOrUndefined(array)`

پارامترها:

- `array`: آرایه‌ای که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
//‎‎ allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
//‎‎ containsValue === false

const empty = areNullOrUndefined([]);
//‎‎ empty === false
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areNullOrUndefined(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areNullOrUndefined](‎../_analysis/areNullOrUndefined.md‎)

<br>

---

<small>این فایل در ۱۱ بهمن ۱۴۰۴ ساعت ۰:۲۹:۳۴ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>