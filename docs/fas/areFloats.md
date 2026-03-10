# areFloats

## توضیحات

`areFloats` بررسی می‌کند آیا یک آرایهٔ داده‌شده پُر است و همهٔ عناصر آن عدد اعشاری (float) هستند یا نه.

### مورد استفاده

وقتی یک `unknown[]` دریافت می‌کنید (مثلاً از JSON، پارامترهای کوئری، یا APIهای خارجی) و لازم است مطمئن شوید که یک آرایهٔ
پُر است که هر آیتم آن یک float است، پیش از اجرای منطق عددی مانند میانگین‌گیری، درون‌یابی، یا محاسبات آماری از
`areFloats` استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> از `areFloats` برای گارد کردن `unknown[]` پیش از برخورد با آن به‌عنوان `number[]` که فقط شامل float است استفاده کنید؛
> این تابع برای آرایه‌های خالی و برای هر عنصرِ غیرِاعشاری `false` برمی‌گرداند.

### مزایا

- تنها زمانی `true` برمی‌گرداند که ورودی یک آرایهٔ غیرخالی باشد و هر عنصر آن یک عدد اعشاری (float) باشد.
- سریع متوقف می‌شود: به‌محض پیدا شدن یک عنصرِ غیرِاعشاری، `false` برمی‌گرداند.
- کمک می‌کند ورودی ناشناخته را پیش از انجام محاسباتِ مخصوصِ اعداد اعشاری اعتبارسنجی کنید.

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

console.log(sumFloats([0.5, 1.25])); //‎ 1.75
console.log(sumFloats([1, 2])); //‎ null
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

<small>این فایل در ۱۰ بهمن ۱۴۰۴ ساعت ۱۵:۵۷:۰۸ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>