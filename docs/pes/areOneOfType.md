# areOneOfType

## توضیحات

`areOneOfType` بررسی می‌کند آیا همهٔ عناصر در یک آرایهٔ غیرخالی، یکی از نوع‌های مشخص‌شده در زمان اجرا هستند یا نه.

### مورد استفاده

اعتبارسنجی داده‌های ورودی (مثلاً JSON پارس‌شده) که در آن یک فیلد باید یک آرایهٔ غیرخالی باشد و آیتم‌هایش به یک مجموعهٔ
شناخته‌شده از نوع‌های اولیه محدود شوند؛ وقتی آرایه خالی است یا هر نوعِ غیرمجاز در آن وجود دارد، `false` برگردانید.

> **نکته برای کاربران TypeScript:**
>
> این تابع یک مقدار بولی برمی‌گرداند و در زمان کامپایل نوع عناصر آرایه را محدود (narrow) نمی‌کند؛ از آن به‌عنوان یک
> مرحلهٔ اعتبارسنجی در زمان اجرا پیش از پردازش‌های بعدی استفاده کنید.

### مزایا

- اطمینان می‌دهد هر عنصر در یک آرایه با دست‌کم یکی از نوع‌های مجاز در زمان اجرا مطابقت دارد و فقط وقتی `true`
  برمی‌گرداند که کل آرایه قبول شود.
- ورودی‌های نامعتبر را زود رد می‌کند: وقتی `array` یا `types` خالی باشد یا یک آرایهٔ پُر نباشد، `false` برمی‌گرداند.
- برای اعتبارسنجی مجموعه‌های با نوع‌های ترکیبی (مثلاً عدد و رشته) با یک فراخوانی به `areOneOfType` مفید است.

## نحوه استفاده

### نحو

تابع:

- `areOneOfType(array, types)`

پارامترها:

- `array`: آرایه‌ای از عناصر برای بررسی در برابر نوع‌های ارائه‌شده.
- `types`: آرایه‌ای از رشته‌ها که نوع‌های داده را برای بررسی مشخص می‌کنند.

### وارد کردن محلی تابع

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areOneOfType(array, types)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areOneOfType](‎../_analysis/areOneOfType.md‎)

<br>

---

<small>این فایل در 31 January 2026 at 23:38:18 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>