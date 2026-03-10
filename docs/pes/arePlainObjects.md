# arePlainObjects

## توضیحات

بررسی می‌کند آیا همهٔ عناصر یک آرایه شیء ساده هستند یا نه، و فقط اگر هر عنصر واجد شرایط باشد `true` برمی‌گرداند.

### مورد استفاده

اعتبارسنجی داده‌های خارجی یا بدون نوع (مثلاً JSON پارس‌شده، payloadهای API، ارسال‌های فرم) برای اطمینان از اینکه یک
آرایهٔ غیرخالی دریافت کرده‌اید که هر ورودی آن یک شیء ساده است، پیش از اینکه روی آن پیمایش کنید و ویژگی‌ها را بخوانید.

> **نکته برای کاربران TypeScript:**
>
> از `arePlainObjects` برای اعتبارسنجی ورودی ناشناخته پیش از اینکه در TypeScript با آن مانند
`Record<string, unknown>[]` (یا یک شکلِ شیء سخت‌گیرانه‌تر) رفتار کنید استفاده کنید.

### مزایا

- اطمینان می‌دهد هر عنصر در آرایهٔ ورودی یک شیء ساده است و فقط وقتی همهٔ موارد مطابق باشند `true` برمی‌گرداند.
- ورودی‌های نامعتبر را زود رد می‌کند (غیرآرایه‌ها یا آرایه‌های خالی) و با برگرداندن `false` این کار را انجام می‌دهد.
- هم اشیای literal و هم اشیای `Object.create(null)` را به‌عنوان شیء سادهٔ معتبر در نظر می‌گیرد.

## نحوه استفاده

### نحو

تابع:

- `arePlainObjects(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر داشتن عناصرِ شیء ساده بررسی شود.

### وارد کردن محلی تابع

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); //‎ درست
const b = arePlainObjects([{}, Object.create(null)]); //‎ درست
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); //‎ نادرست
const d = arePlainObjects([] as unknown[]); //‎ نادرست
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.arePlainObjects(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [arePlainObjects](‎../_analysis/arePlainObjects.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 16:55:23 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>