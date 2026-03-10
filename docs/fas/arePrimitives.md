# arePrimitives

## توضیحات

`arePrimitives` ارزیابی می‌کند که آیا همهٔ عناصر در یک آرایهٔ ارائه‌شده و غیرخالی از نوع‌های اولیه هستند یا نه.

### مورد استفاده

پیش از سریال‌سازی، هش‌کردن، لاگ‌گرفتن، یا ارسال به APIهایی که نباید شیء دریافت کنند، بررسی کنید دادهٔ ورودی (مثلاً
پارامترهای کوئری، مقادیر ردیف CSV، یا فهرستی از IDها/برچسب‌ها) فقط شامل مقادیر اولیه باشد.

> **نکته برای کاربران TypeScript:**
>
> وقتی لازم است پیش از پردازش بیشتر مطمئن شوید که یک `unknown[]` فقط شامل مقادیر اولیه (string, number, bigint, boolean,
> symbol, undefined, یا null) است، از `arePrimitives` استفاده کنید.

### مزایا

- فقط زمانی `true` برمی‌گرداند که هر عنصر یک مقدار اولیه (primitive) باشد و به این ترتیب یک نگهبان سخت‌گیرانه برای
  آرایه‌های «بدون شیء/تابع» است.
- سریع متوقف می‌شود: به محض یافتن یک عنصر غیر اولیه، `false` برمی‌گرداند.
- برای غیرآرایه‌ها و آرایه‌های خالی نیز `false` برمی‌گرداند (از طریق بررسی پُر بودن آرایه)، و از پذیرش تصادفی ورودی
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

<small>این فایل در ۱۱ بهمن ۱۴۰۴ ساعت ۰:۰۴:۲۵ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>