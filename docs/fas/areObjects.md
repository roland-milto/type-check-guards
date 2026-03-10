# areObjects

## توضیحات

`areObjects` بررسی می‌کند آیا یک آرایهٔ پُرِ ارائه‌شده فقط شامل اشیاء است یا نه.

### مورد استفاده

وقتی یک آرایهٔ ناشناخته دریافت می‌کنید (مثلاً از تجزیهٔ JSON یا APIهای خارجی) و لازم است پیش از پیمایش و دسترسی به
ویژگی‌های شیء مطمئن شوید که خالی نیست و هر عنصر آن یک شیء است، از `areObjects` استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> از `areObjects` برای اعتبارسنجی `unknown[]` پیش از اینکه با آیتم‌ها مانند شیء رفتار کنید استفاده کنید؛ برای آرایه‌های
> خالی `false` برمی‌گرداند.

### مزایا

- تنها زمانی `true` برمی‌گرداند که ورودی یک آرایهٔ پُر باشد و هر عنصر یک شیء باشد.
- به‌محض یافتن یک عنصرِ غیرشیء، زود متوقف می‌شود و `false` برمی‌گرداند.
- کمک می‌کند ورودی ناشناخته را پیش از انجام عملیاتِ مخصوصِ اشیاء اعتبارسنجی کنید.

## نحوه استفاده

### نحو

تابع:

- `areObjects(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر داشتن عناصرِ شیء بررسی شود.

### وارد کردن محلی تابع

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  //‎‎ value یک آرایهٔ پُر از اشیاء است
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areObjects(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areObjects](‎../_analysis/areObjects.md‎)

<br>

---

<small>این فایل در ۱۱ بهمن ۱۴۰۴ ساعت ۰:۰۸:۳۷ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>