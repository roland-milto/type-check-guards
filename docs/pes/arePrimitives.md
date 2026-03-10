# arePrimitives

## توضیحات

`arePrimitives` بررسی می‌کند که آیا همهٔ عناصر در یک آرایهٔ ارائه‌شده و غیرخالی از نوع‌های اولیه هستند یا نه.

### مورد استفاده

اعتبارسنجی کنید که دادهٔ ورودی (مثلاً پارامترهای کوئری، مقدارهای ردیف CSV، یا یک فهرست از IDها/برچسب‌ها) قبل از
سریال‌سازی، هش‌کردن، لاگ‌کردن، یا ارسال به APIهایی که نباید شیء دریافت کنند، فقط شامل مقدارهای اولیه باشد.

> **نکته برای کاربران TypeScript:**
>
> وقتی لازم دارید مطمئن شوید یک `unknown[]` فقط مقدارهای اولیه (string, number, bigint, boolean, symbol, undefined, یا
> null) دارد، قبل از پردازش بیشتر از `arePrimitives` استفاده کنید.

### مزایا

- فقط زمانی `true` برمی‌گرداند که هر عنصر یک مقدار اولیه (primitive) باشد؛ بنابراین یک گارد سخت‌گیرانه برای آرایه‌های
  «بدون شیء/تابع» است.
- سریع متوقف می‌شود: به‌محض اینکه یک عنصر غیر اولیه پیدا شود، `false` برمی‌گرداند.
- برای غیرآرایه‌ها و آرایه‌های خالی هم `false` برمی‌گرداند (از طریق بررسی پُربودن آرایه)، و از پذیرش تصادفی ورودی
  نامعتبر جلوگیری می‌کند.

## نحوه استفاده

### نحو

تابع:

- `arePrimitives(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر داشتن عناصر از نوع اولیه بررسی شود.

### وارد کردن محلی تابع

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); //‎ درست
const r2 = arePrimitives(b); //‎ درست
const r3 = arePrimitives(c); //‎ نادرست
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.arePrimitives(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [arePrimitives](‎../_analysis/arePrimitives.md‎)

<br>

---

<small>این فایل در 31 January 2026 at 00:06:08 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>