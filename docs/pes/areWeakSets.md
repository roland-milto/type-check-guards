# areWeakSets

## توضیحات

بررسی می‌کند آیا ورودی یک آرایهٔ غیرخالی است که هر عنصر آن یک `WeakSet` باشد و فقط در همان حالت `true` برمی‌گرداند.

### مورد استفاده

اعتبارسنجی ورودی زمان اجرا (مثلاً از APIها، پیکربندی، یا دادهٔ ارائه‌شده توسط کاربر) برای اطمینان از اینکه پیش از ادامهٔ
منطقِ وابسته به رفتار `WeakSet`، یک فهرست غیرخالی از نمونه‌های `WeakSet` دارید.

> **نکته برای کاربران TypeScript:**
>
> از `areWeakSets` برای اعتبارسنجی ورودی ناشناخته پیش از اینکه آن را `WeakSet[]` در نظر بگیرید استفاده کنید. برای
> آرایه‌های خالی و غیرآرایه‌ها `false` برمی‌گرداند.

### مزایا

- اطمینان می‌دهد که هر عنصر در آرایهٔ ورودی یک `WeakSet` است.
- برای آرایه‌های خالی `false` برمی‌گرداند و از نتایج تصادفیِ «همه معتبرند» در صورت نبود داده جلوگیری می‌کند.
- با برگرداندن `false` وقتی ورودی یک آرایهٔ پُر نیست (از جمله `null`) به‌صورت ایمن شکست می‌خورد.
- به‌عنوان یک گارد پیش از انجام عملیات‌هایی که به نمونه‌های `WeakSet` نیاز دارند مفید است.

## نحوه استفاده

### نحو

تابع:

- `areWeakSets(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر داشتن اشیای `WeakSet` بررسی شود.

### وارد کردن محلی تابع

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  //‎‎ a یک آرایهٔ غیرخالی از نمونه‌های WeakSet است
}

console.log(areWeakSets(a)); //‎ درست
console.log(areWeakSets(b)); //‎ نادرست
console.log(areWeakSets(c)); //‎ نادرست
console.log(areWeakSets(null as unknown)); //‎ نادرست

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areWeakSets(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areWeakSets](‎../_analysis/areWeakSets.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 14:10:27 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>