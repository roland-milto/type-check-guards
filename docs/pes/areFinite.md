# areFinite

## توضیحات

`areFinite` بررسی می‌کند آیا یک مقدار، آرایه‌ای غیرخالی است که عناصر آن همگی اعداد متناهی هستند یا نه؛ اگر چنین باشد
`true` و در غیر این صورت `false` برمی‌گرداند.

### مورد استفاده

پیش از انجام محاسبات، آرایه‌های ورودی عددی (مثلاً سری‌های نمودار، فهرست مختصات، نمونه‌های اندازه‌گیری) را اعتبارسنجی
کنید تا نتیجه فقط زمانی `true` باشد که همهٔ مقادیر اعداد متناهی باشند.

> **نکته برای کاربران TypeScript:**
>
> وقتی لازم است مطمئن شوید یک آرایه غیرخالی است و فقط شامل اعداد متناهی است از `areFinite` استفاده کنید؛ برای آرایه‌های
> خالی و برای آرایه‌هایی که شامل `NaN` یا بی‌نهایت‌ها هستند `false` برمی‌گرداند.

### مزایا

- فقط زمانی `true` برمی‌گرداند که ورودی یک آرایهٔ غیرخالی باشد و هر عنصر آن یک عدد متناهی باشد.
- با تکیه بر بررسی‌های `isFinite` برای هر عنصر، `Infinity`، `-Infinity` و `NaN` را رد می‌کند.
- یک نتیجهٔ بولی ساده (`true`/`false`) ارائه می‌دهد که برای گاردها و جریان‌های اعتبارسنجی مناسب است.

## نحوه استفاده

### نحو

تابع:

- `areFinite(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر متناهی بودن همهٔ عناصرش بررسی شود.

### وارد کردن محلی تابع

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); //‎ درست
console.log(areFinite(b)); //‎ نادرست
console.log(areFinite(c)); //‎ نادرست

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); //‎ ۶۰
console.log(sumIfFinite([10, NaN, 30])); //‎ تهی

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areFinite(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areFinite](‎../_analysis/areFinite.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 16:36:42 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>