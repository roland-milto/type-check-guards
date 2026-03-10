# isBoolean

## توضیحات

مشخص می‌کند آیا یک مقدار داده‌شده از نوع `boolean` است یا نه.

### مورد استفاده

اعتبارسنجی داده‌های خارجی یا بدون نوع (مثلاً متغیرهای محیطی، payloadهای JSON، پارامترهای query) برای اطمینان از اینکه یک
مقدار پیش از استفاده در منطق شرطی، `boolean` است.

> **نکته برای کاربران TypeScript:**
>
> از `isBoolean` استفاده کنید تا پیش از اعمال عملیات بولی، نوع `unknown` را به `boolean` محدود کنید.

### مزایا

- بررسی زمان اجرا ساده و سریع با استفاده از `typeof`.
- کمک می‌کند ورودی ناشناخته را پیش از منطقِ مخصوص بولی اعتبارسنجی کنید.
- یک نتیجه `boolean` قابل پیش‌بینی برمی‌گرداند (`true`/`false`).

## نحوه استفاده

### نحو

تابع:

- `isBoolean(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  //‎‎ اینجا input بولی است
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isBoolean(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isBoolean](‎../_analysis/isBoolean.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 14:37:32 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>