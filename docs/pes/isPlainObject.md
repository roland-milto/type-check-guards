# isPlainObject

## توضیحات

بررسی می‌کند آیا `value` داده‌شده یک شیء ساده است و اگر باشد `true` و در غیر این صورت `false` برمی‌گرداند.

### مورد استفاده

اعتبارسنجی کنید که یک ورودی `unknown` (مثلاً JSON پارس‌شده، دادهٔ خارجی، یا آرگومان‌های تابع) یک شیء ساده است، پیش از
آن‌که کلیدها را بخوانید یا آن را به یک شیء پیکربندیِ تایپ‌شده نگاشت کنید.

> **نکته برای کاربران TypeScript:**
>
> `isPlainObject` برای محدودتر کردن `unknown` پیش از برخورد با آن به‌عنوان یک شیء شبیه رکورد مفید است؛ این تابع فقط برای
> مقدارهایی که برچسب داخلی‌شان `[object Object]` است `true` برمی‌گرداند.

### مزایا

- یک بررسی ساده و قابل‌اعتماد فراهم می‌کند تا مشخص شود آیا یک مقدار یک شیء ساده (یعنی `Object` / `{}`) است یا نه، و
  `true` یا `false` برمی‌گرداند.
- کمک می‌کند شیءهای ساده را از آرایه‌ها، تابع‌ها، `null` و سایر نوع‌های غیرِ شیء ساده تشخیص دهید.
- به‌عنوان یک نگهبان نوع (type guard) در TypeScript مفید است تا مقدارهای `unknown` را پیش از دسترسی به ویژگی‌های شیء
  محدودتر (narrow) کند.

## نحوه استفاده

### نحو

تابع:

- `isPlainObject(value)`

پارامترها:

- `value`: مقداری که باید برای وضعیت «شیء ساده» بودن آزمایش شود.

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

<small>این فایل در 6 February 2026 at 12:19:20 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>