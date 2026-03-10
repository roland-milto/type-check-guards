# areIndexesFound

## توضیحات

`areIndexesFound` بررسی می‌کند آیا یک مقدار، آرایه‌ای غیرخالی است که عناصر آن همگی ایندکس‌های معتبر هستند یا نه؛ اگر
باشند `true` و در غیر این صورت `false` برمی‌گرداند.

### مورد استفاده

اعتبارسنجی داده‌های ارائه‌شده توسط کاربر یا داده‌های خارجی (مثلاً JSON پارس‌شده) که انتظار می‌رود فهرستی از ایندکس‌ها
باشند، پیش از استفاده از آن‌ها برای دسترسی به آرایه‌ها یا برش‌زدن آن‌ها.

> **نکته برای کاربران TypeScript:**
>
> از `areIndexesFound` برای اعتبارسنجی ورودی ناشناخته پیش از آن‌که عناصرش را به‌عنوان ایندکس‌های آرایه در نظر بگیرید
> استفاده کنید؛ برای آرایه‌های خالی و برای آرایه‌هایی که شامل مقادیر غیرایندکس هستند `false` برمی‌گرداند.

### مزایا

- فقط زمانی `true` برمی‌گرداند که ورودی یک آرایهٔ پُر باشد و هر عنصر یک ایندکس معتبر باشد.
- شکست سریع: به‌محض برخورد با یک عنصرِ غیرایندکس، `false` برمی‌گرداند.
- به‌عنوان یک گارد پیش از استفاده از مقادیر به‌عنوان موقعیت‌ها یا آفست‌های آرایه مفید است.

## نحوه استفاده

### نحو

تابع:

- `areIndexesFound(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر انطباق با ایندکس بررسی شود.

### وارد کردن محلی تابع

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); //‎ true
console.log(areIndexesFound(b)); //‎ false
console.log(areIndexesFound(c)); //‎ false

if (areIndexesFound(a)) {
  //‎‎ در اینجا، تأیید می‌شود که `a` یک آرایهٔ پرشده از اندیس‌ها است.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areIndexesFound(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areIndexesFound](‎../_analysis/areIndexesFound.md‎)

<br>

---

<small>این فایل در ۱۱ بهمن ۱۴۰۴ ساعت ۰:۴۱:۳۹ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>