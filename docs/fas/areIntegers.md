# areIntegers

## توضیحات

`areIntegers` تعیین می‌کند آیا همهٔ عناصر یک آرایهٔ داده‌شده عدد صحیح هستند یا نه؛ اگر باشند `true` و در غیر این صورت
`false` برمی‌گرداند.

### مورد استفاده

از `areIntegers` برای اعتبارسنجی داده‌های ارائه‌شده توسط کاربر یا منابع خارجی (مثلاً پارامترهای کوئری، payloadهای JSON،
ردیف‌های CSV) استفاده کنید، زمانی که منطق شما به یک فهرست پُر از مقادیر عدد صحیح مانند شناسه‌ها (ID)، شمارنده‌ها،
offsetهای صفحه‌بندی، یا اندیس‌های آرایه نیاز دارد.

> **نکته برای کاربران TypeScript:**
>
> `areIntegers` را به‌عنوان یک گارد زمان اجرا برای ورودی‌های `unknown[]` استفاده کنید، پیش از آنکه با آن‌ها مانند
`number[]` که فقط شامل اعداد صحیح است رفتار کنید. اگر `false` برگرداند، ورودی یا یک آرایهٔ پُر نیست یا دست‌کم یک مقدار
> غیرصحیح در آن وجود دارد.

### مزایا

- فقط زمانی `true` برمی‌گرداند که همهٔ عناصر عدد صحیح باشند؛ در غیر این صورت `false` برمی‌گرداند.
- کمک می‌کند پیش از انجام عملیات مخصوص اعداد صحیح (مثلاً اندیس‌گذاری، شمارش‌ها، شناسه‌ها) ورودی ناشناخته را اعتبارسنجی
  کنید.
- سریع شکست می‌خورد: به محض یافتن یک عنصر غیرصحیح، بررسی را متوقف می‌کند.

## نحوه استفاده

### نحو

تابع:

- `areIntegers(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر داشتن عناصر عدد صحیح بررسی شود.

### وارد کردن محلی تابع

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); //‎ درست
console.log(areIntegers(b)); //‎ درست
console.log(areIntegers(c)); //‎ نادرست

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areIntegers(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areIntegers](‎../_analysis/areIntegers.md‎)

<br>

---

<small>این فایل در ۱۱ بهمن ۱۴۰۴ ساعت ۰:۵۸:۱۶ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>