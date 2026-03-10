# areBooleans

## توضیحات

`areBooleans` بررسی می‌کند آیا یک آرایهٔ غیرخالیِ داده‌شده فقط شامل مقادیر بولی است یا نه؛ اگر باشد `true` و در غیر این
صورت `false` برمی‌گرداند.

### مورد استفاده

اعتبارسنجی داده‌های ارائه‌شده توسط کاربر یا داده‌های خارجی (مثلاً payloadهای JSON، پارامترهای query، آرایه‌های پیکربندی)
برای اطمینان از اینکه یک فهرست غیرخالی فقط شامل بولی‌هاست، پیش از اعمال منطق بولی یا ارسال آن به APIهایی که `boolean[]`
انتظار دارند.

> **نکته برای کاربران TypeScript:**
>
> از `areBooleans` برای اعتبارسنجی `unknown[]` پیش از اینکه آن را `boolean[]` در نظر بگیرید استفاده کنید؛ برای آرایه‌های
> خالی `false` برمی‌گرداند، پس اگر باید یک فهرست خالی مجاز باشد، آن حالت را به‌صورت صریح مدیریت کنید.

### مزایا

- فقط زمانی `true` برمی‌گرداند که همهٔ عناصر بولی باشند و ورودی یک آرایهٔ غیرخالی باشد.
- با رد کردن آرایه‌های خالی (برگرداندن `false`) از مثبت‌های کاذب جلوگیری می‌کند.
- به‌عنوان یک گارد زمان اجرا پیش از عملیات فقط-بولی (مثلاً `every`، `some`، کاهش‌های منطقی) خوب عمل می‌کند.

## نحوه استفاده

### نحو

تابع:

- `areBooleans(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر داشتن عناصر بولی بررسی شود.

### وارد کردن محلی تابع

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areBooleans(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areBooleans](‎../_analysis/areBooleans.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 14:41:58 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>