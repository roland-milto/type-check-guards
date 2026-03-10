# areStreams

## توضیحات

`areStreams` تعیین می‌کند آیا یک مقدار، آرایه‌ای پُر است که در آن هر عنصر یک `Stream` است یا نه.

### مورد استفاده

اعتبارسنجی مجموعه‌هایی که توسط کاربر ارائه شده‌اند یا به‌صورت پویا ساخته شده‌اند (مثلاً چندین استریم خواندن فایل) پیش از
pipe کردن، resume کردن، یا انجام عملیات گروهی دیگر روی آن‌ها.

> **نکته برای کاربران TypeScript:**
>
> از `areStreams` برای اعتبارسنجی ورودی ناشناخته پیش از برخورد با آن به‌عنوان `Stream[]` استفاده کنید؛ این تابع فقط وقتی
`true` برمی‌گرداند که مقدار یک آرایهٔ غیرخالی باشد و هر عنصر آن یک `Stream` باشد.

### مزایا

- اطمینان می‌دهد که ورودی یک آرایهٔ پُر است که هر عنصر آن یک `Stream` است.
- یک نگهبان سادهٔ `true`/`false` برای اعتبارسنجی مجموعه‌های استریم پیش از پردازش فراهم می‌کند.
- سریع شکست می‌خورد: به محض پیدا شدن یک عنصر غیرِ `Stream`، `false` برمی‌گرداند.
- کمک می‌کند از خطاهای زمان اجرا جلوگیری شود وقتی کد فرض می‌کند همهٔ آیتم‌ها نمونه‌های `Stream` هستند.

## نحوه استفاده

### نحو

تابع:

- `areStreams(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر داشتن اشیای Stream بررسی شود.

### وارد کردن محلی تابع

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  //‎‎ input یک آرایهٔ پُر از شیءهای Stream است
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areStreams(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areStreams](‎../_analysis/areStreams.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 23:35:18 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>