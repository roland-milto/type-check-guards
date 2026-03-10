# isPrimitive

## توضیحات

`isPrimitive` تعیین می‌کند آیا یک مقدار داده‌شده یک مقدار اولیه است (`null`، `undefined`، `boolean`، `number`، `string`،
`bigint`، `symbol`).

### مورد استفاده

اعتبارسنجی ورودی‌ها در زمان اجرا (مثلاً فیلدهای payload در API، مقادیر پیکربندی، یا داده‌های ارائه‌شده توسط کاربر) تا
پیش از سریال‌سازی، ثبت (logging)، یا اعمال عملیات مخصوصِ مقادیر اولیه، مطمئن شوید مقدار یک مقدار اولیه است.

> **نکته برای کاربران TypeScript:**
>
> از `isPrimitive` برای محافظت (guard) از ورودی‌های `unknown` پیش از اینکه با آن‌ها مانند شیء یا تابع رفتار کنید استفاده
> کنید؛ این تابع برای مقادیر اولیه `true` و برای اشیاء و توابع `false` برمی‌گرداند.

### مزایا

- بررسی سریع و بدون تخصیص حافظه برای اینکه آیا یک مقدار یک مقدار اولیهٔ JavaScript است یا نه.
- `null` را به‌درستی به‌عنوان مقدار اولیه در نظر می‌گیرد (با اینکه `typeof null` برابر با `"object"` است).
- کمک می‌کند مقادیر `unknown` را پیش از انجام عملیات مخصوصِ اشیاء محدودتر (narrow) کنید.

## نحوه استفاده

### نحو

تابع:

- `isPrimitive(value)`

پارامترها:

- `value`: مقداری که باید برای نوع اولیه بودن بررسی شود.

### وارد کردن محلی تابع

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isPrimitive(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isPrimitive](‎../_analysis/isPrimitive.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 23:57:26 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>