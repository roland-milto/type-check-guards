# isPlainObject

## توضیحات

بررسی می‌کند آیا `value` داده‌شده یک شیء ساده است و اگر باشد `true` و در غیر این صورت `false` برمی‌گرداند.

### مورد استفاده

اعتبارسنجی اینکه یک ورودی `unknown` (مثلاً JSON تجزیه‌شده، دادهٔ خارجی، یا آرگومان‌های تابع) یک شیء ساده است، پیش از
خواندن کلیدها یا نگاشت آن به یک شیء پیکربندیِ تایپ‌شده.

> **نکته برای کاربران TypeScript:**
>
> `isPlainObject` برای محدودسازی `unknown` پیش از برخورد با آن به‌عنوان یک شیء شبیه رکورد (record-like) مفید است؛ این
> تابع فقط برای مقادیری که برچسب داخلی آن‌ها `[object Object]` است `true` برمی‌گرداند.

### مزایا

- یک بررسی ساده و قابل‌اعتماد برای اینکه آیا یک مقدار یک شیء ساده (یعنی `Object` / `{}`) است فراهم می‌کند و `true` یا
  `false` برمی‌گرداند.
- کمک می‌کند شیءهای ساده را از آرایه‌ها، توابع، `null` و سایر انواع غیرِ شیء ساده تشخیص دهید.
- به‌عنوان یک نگهبان نوع (type guard) در TypeScript مفید است تا پیش از دسترسی به ویژگی‌های شیء، مقادیر `unknown` را
  محدود (narrow) کنید.

## نحوه استفاده

### نحو

تابع:

- `isPlainObject(value)`

پارامترها:

- `value`: مقداری که باید برای وضعیت شیء ساده بودن آزمایش شود.

### وارد کردن محلی تابع

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  //‎‎ input در اینجا یک شیء ساده است
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); //‎ درست
console.log(isPlainObject([])); //‎ نادرست
console.log(isPlainObject(null)); //‎ نادرست
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isPlainObject(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isPlainObject](‎../_analysis/isPlainObject.md‎)

<br>

---

<small>این فایل در ۱۷ بهمن ۱۴۰۴ ساعت ۱۲:۱۷:۱۹ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>