# isFalse

## توضیحات

`isFalse` بررسی می‌کند آیا یک مقدار داده‌شده به‌صورت سخت‌گیرانه با مقدار بولیِ literal `false` برابر است یا نه.

### مورد استفاده

اعتبارسنجی دادهٔ ناشناخته (مثلاً از JSON، پارامترهای query، یا ورودی کاربر) در جایی که فقط مقدار بولیِ صریح `false` باید
به‌عنوان یک پرچم معتبر در نظر گرفته شود و هر چیز دیگری رد شود.

> **نکته برای کاربران TypeScript:**
>
> وقتی لازم دارید فقط مقدار literal `false` پذیرفته شود و همهٔ مقادیر falsy دیگر رد شوند از `isFalse` استفاده کنید؛ این
> تابع فقط برای `value === false` مقدار `true` برمی‌گرداند.

### مزایا

- یک بررسی سخت‌گیرانه برای مقدار بولیِ literal `false` بدون تبدیل نوع (coercion) فراهم می‌کند.
- کمک می‌کند `false` را از سایر مقادیر falsy مانند `0`، `""`، `null` و `undefined` متمایز کنید.
- با صریح کردن قصد هنگام اعتبارسنجی ورودی ناشناخته، خوانایی را بهبود می‌دهد.

## نحوه استفاده

### نحو

تابع:

- `isFalse(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  //‎‎ input اینجا دقیقاً false است
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isFalse(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isFalse](‎../_analysis/isFalse.md‎)

<br>

---

<small>این فایل در 31 January 2026 at 16:44:12 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>