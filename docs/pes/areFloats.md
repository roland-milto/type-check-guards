# areFloats

## توضیحات

`areFloats` بررسی می‌کند آیا یک آرایهٔ داده‌شده پر است و همهٔ عناصرش float هستند یا نه.

### مورد استفاده

وقتی یک `unknown[]` دریافت می‌کنید (مثلاً از JSON، پارامترهای کوئری، یا APIهای خارجی) و لازم است مطمئن شوید یک آرایهٔ
پُر است که هر آیتم آن float است، پیش از اجرای منطق عددی مثل میانگین‌گیری، درون‌یابی، یا محاسبات آماری از `areFloats`
استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> از `areFloats` برای گارد کردن `unknown[]` پیش از این‌که آن را به‌عنوان `number[]` شامل فقط float در نظر بگیرید استفاده
> کنید؛ برای آرایه‌های خالی و برای هر عنصرِ غیرِاعشاری `false` برمی‌گرداند.

### مزایا

- فقط وقتی `true` برمی‌گرداند که ورودی یک آرایهٔ غیرخالی باشد و همهٔ عناصر آن عدد اعشاری (float) باشند.
- سریع متوقف می‌شود: به محض پیدا شدن یک عنصرِ غیرِاعشاری، `false` برمی‌گرداند.
- کمک می‌کند پیش از انجام محاسبات مخصوصِ float، ورودیِ ناشناخته را اعتبارسنجی کنید.

## نحوه استفاده

### نحو

تابع:

- `areFloats(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر اعشاری (float) بودن عناصرش بررسی شود.

### وارد کردن محلی تابع

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); //‎ درست
console.log(areFloats(b)); //‎ نادرست
console.log(areFloats(c)); //‎ نادرست

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); //‎ ۱٫۷۵
console.log(sumFloats([1, 2])); //‎ تهی

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areFloats(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areFloats](‎../_analysis/areFloats.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 15:59:09 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>