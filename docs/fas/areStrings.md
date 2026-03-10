# areStrings

## توضیحات

`areStrings` بررسی می‌کند آیا یک آرایه غیرخالی است و همهٔ عناصر آن رشته هستند یا نه، و فقط در همان حالت `true`
برمی‌گرداند.

### مورد استفاده

اعتبارسنجی داده‌های خارجی یا ارائه‌شده توسط کاربر (مثلاً پارامترهای کوئری، payloadهای JSON، فیلدهای CSV) برای اطمینان از
اینکه پیش از پردازش، یک فهرست غیرخالی از رشته‌ها دارید.

> **نکته برای کاربران TypeScript:**
>
> از `areStrings` برای اعتبارسنجی آرایه‌های ناشناخته پیش از اعمال منطق مخصوص رشته‌ها استفاده کنید؛ برای آرایه‌های خالی
`false` برمی‌گرداند.

### مزایا

- اطمینان می‌دهد هر عنصر یک رشته است و با برگرداندن `false` آرایه‌های با نوع‌های ترکیبی را رد می‌کند.
- آرایه‌های خالی را رد می‌کند؛ بنابراین `true` فقط نشان‌دهندهٔ یک فهرست غیرخالی از رشته‌ها است.
- به‌عنوان یک گارد سریع در زمان اجرا پیش از انجام عملیات مخصوص رشته‌ها (مثلاً `trim`، `toLowerCase`) مفید است.

## نحوه استفاده

### نحو

تابع:

- `areStrings(value)`

پارامترها:

- `value`: Expected type `string[]`.

### وارد کردن محلی تابع

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  //‎‎ input در زمان اجرا یک string[] غیرخالی است
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areStrings(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areStrings](‎../_analysis/areStrings.md‎)

<br>

---

<small>این فایل در ۱۰ بهمن ۱۴۰۴ ساعت ۱۳:۱۸:۰۱ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>