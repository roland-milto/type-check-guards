# getTypeOf

## توضیحات

`getTypeOf` برای یک مقدارِ داده‌شده، یک برچسب نوعِ دقیق و قابل‌خواندن برای انسان برمی‌گرداند؛ شامل نوع‌های عددیِ
پالایش‌شده و گونه‌های مشخصِ اشیا.

### مورد استفاده

از `getTypeOf` برای یکسان‌سازی تشخیص نوع در اعتبارسنجی ورودی و عیب‌یابی استفاده کنید—برای مثال، برای رد کردن `nan`،
پذیرش فقط IDهای `integer`، برخورد متفاوت با رشته‌های عددی مانند `decimal` نسبت به `string` ساده، یا لاگ کردن گونه‌های
دقیقِ اشیا مانند `date` و `regexp`.

> **نکته برای کاربران TypeScript:**
>
> نوع بازگشتی `DataTypeAsString | string` است. آن را به‌عنوان یک برچسب توصیفی در نظر بگیرید؛ هنگام شاخه‌بندی، با
> لیترال‌های شناخته‌شده‌ای مانند `integer`، `float`، `nan`، `array`، `null` و `undefined` مقایسه کنید.

### مزایا

- یک رشتهٔ نوع (type) با جزئیات بیشتر از `typeof` در JavaScript برمی‌گرداند، شامل زیرنوع‌های عددی مانند `integer`،
  `float` و `nan`.
- `null` و `undefined` را به‌صورت صریح به‌عنوان `null` و `undefined` از هم متمایز می‌کند.
- قالب‌های رایج رشته‌های عددی را تشخیص می‌دهد و آن‌ها را به‌جای `string` ساده، به‌صورت `binary`، `octal`، `decimal` یا
  `hexadecimal` گزارش می‌کند.
- آرایه‌ها را به‌عنوان `array` شناسایی می‌کند و از `Object.prototype.toString` برای ارائهٔ نام‌های نوعِ مشخصِ اشیا
  استفاده می‌کند (برای نمونه: `date`، `regexp`، `map`، `set`).
- برای اعتبارسنجی، لاگ‌گیری و دیباگ کردن مفید است؛ جایی که به برچسب‌های نوعِ سازگار و قابل‌خواندن برای انسان نیاز است.

## نحوه استفاده

### نحو

تابع:

- `getTypeOf(value)`

پارامترها:

- `value`: مقداری که باید نوع دادهٔ آن تعیین شود.

### وارد کردن محلی تابع

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

//‎‎ بررسی‌های نمونه
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.getTypeOf(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [getTypeOf](‎../_analysis/getTypeOf.md‎)

<br>

---

<small>این فایل در ۱۷ بهمن ۱۴۰۴ ساعت ۱۳:۰۶:۱۴ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>