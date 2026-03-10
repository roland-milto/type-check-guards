# areUndefined

## توضیحات

`areUndefined` بررسی می‌کند که آیا هر عنصر در یک آرایهٔ ارائه‌شده `undefined` است یا نه.

### مورد استفاده

اعتبارسنجی اینکه یک فهرست از نتایج اختیاری هیچ مقدار واقعی‌ای ندارد (فقط `undefined`)، مثلاً بعد از نگاشتِ جست‌وجوها (
lookups) که در آن ورودی‌های پیدا نشده با `undefined` نمایش داده می‌شوند، و می‌خواهید تأیید کنید که همهٔ جست‌وجوها ناموفق
بوده‌اند.

> **نکته برای کاربران TypeScript:**
>
> وقتی لازم دارید تأیید کنید که یک `unknown[]` فقط شامل مقادیر `undefined` است از `areUndefined` استفاده کنید؛ این تابع
> برای آرایه‌های خالی و ورودی‌های غیرآرایه/نامعتبر به‌دلیل بررسی داخلی `isFilledArray` مقدار `false` برمی‌گرداند.

### مزایا

- با الزام به داشتن یک آرایهٔ پُر از طریق `isFilledArray`، برای غیرآرایه‌ها و آرایه‌های خالی مقدار `false` برمی‌گرداند.
- اطمینان می‌دهد که هر عنصر `undefined` است، نه فقط بعضی از آن‌ها؛ و هدف را به‌صورت صریح روشن می‌کند.
- به‌عنوان یک گزارهٔ سبکِ نگهبان (guard-style predicate) هنگام اعتبارسنجی مجموعه‌های ورودیِ ناشناخته مفید است.

## نحوه استفاده

### نحو

تابع:

- `areUndefined(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر عناصر `undefined` بررسی شود.

### وارد کردن محلی تابع

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

//‎‎ نکته: برای آرایه‌های خالی مقدار false برمی‌گرداند
const r4 = areUndefined([]); // false
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areUndefined(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areUndefined](‎../_analysis/areUndefined.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 13:57:29 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>