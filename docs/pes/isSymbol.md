# isSymbol

## توضیحات

`isSymbol` تعیین می‌کند آیا یک مقدار داده‌شده از نوع `symbol` است یا نه؛ برای symbolها `true` و در غیر این صورت `false`
برمی‌گرداند.

### مورد استفاده

اعتبارسنجی کنید که یک مقدار `unknown` یک `symbol` است پیش از آن‌که از آن به‌عنوان شناسهٔ یکتا، کلید رجیستری، یا کلید
ویژگی محاسبه‌شده در اشیا و mapها استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> از `isSymbol` برای محدودسازی `unknown` به `symbol` پیش از فراخوانی توابع مرتبط با symbol یا استفاده از آن به‌عنوان
> کلید ویژگی محاسبه‌شده استفاده کنید.

### مزایا

- یک بررسی زمان‌اجرای ساده و قابل‌اعتماد برای نوع اولیهٔ JavaScript یعنی `symbol` فراهم می‌کند.
- کمک می‌کند مقادیر `unknown` را پیش از استفاده از APIهای مخصوص symbol یا ذخیره‌کردن آن‌ها به‌عنوان کلید، محدودسازی (
  narrow) کنید.
- با استفاده از `typeof` که روش معیار برای تشخیص مقادیر `symbol` است، از مثبت‌های کاذب جلوگیری می‌کند.

## نحوه استفاده

### نحو

تابع:

- `isSymbol(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  //‎‎ input در اینجا یک نماد است
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isSymbol(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isSymbol](‎../_analysis/isSymbol.md‎)

<br>

---

<small>این فایل در 30 January 2026 at 14:28:16 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>