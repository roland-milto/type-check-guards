# getTypeOf

## توضیحات

`getTypeOf` برای یک مقدار داده‌شده، یک برچسب نوع دقیق و قابل‌خواندن برای انسان برمی‌گرداند؛ شامل نوع‌های عددی پالایش‌شده
و گونه‌های مشخصِ اشیاء.

### مورد استفاده

از `getTypeOf` برای یکسان‌سازی تشخیص نوع در اعتبارسنجی ورودی و عیب‌یابی استفاده کنید—برای مثال، رد کردن `nan`، پذیرش فقط
شناسه‌های `integer`، برخورد متفاوت با رشته‌های عددی مثل `decimal` نسبت به `string` ساده، یا ثبت دقیق گونه‌های شیء مانند
`date` و `regexp`.

> **نکته برای کاربران TypeScript:**
>
> نوع بازگشتی `DataTypeAsString | string` است. آن را به‌عنوان یک برچسب توصیفی در نظر بگیرید؛ هنگام شاخه‌بندی با
> لیترال‌های شناخته‌شده مثل `integer`، `float`، `nan`، `array`، `null` و `undefined` مقایسه کنید.

### مزایا

- یک رشتهٔ نوع دقیق‌تر از `typeof` در JavaScript برمی‌گرداند، شامل زیرنوع‌های عددی مثل `integer`، `float` و `nan`.
- `null` و `undefined` را به‌صورت صریح به‌ترتیب به‌عنوان `null` و `undefined` از هم متمایز می‌کند.
- قالب‌های رایج رشته‌های عددی را تشخیص می‌دهد و آن‌ها را به‌جای `string` ساده، به‌صورت `binary`، `octal`، `decimal` یا
  `hexadecimal` گزارش می‌کند.
- همچنین آرایه‌ها را به‌عنوان `array` شناسایی می‌کند و از `Object.prototype.toString` برای ارائهٔ نام‌های نوع شیء مشخص
  استفاده می‌کند (مثلاً `date`، `regexp`، `map`، `set`).
- برای اعتبارسنجی، لاگ‌گیری و دیباگ بسیار مفید است؛ جاهایی که به برچسب‌های نوع سازگار و قابل‌خواندن برای انسان نیاز است.

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

<small>این فایل در 6 February 2026 at 13:14:11 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>