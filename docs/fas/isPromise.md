# isPromise

## توضیحات

مشخص می‌کند آیا یک مقدار داده‌شده یک `Promise` است یا نه.

### مورد استفاده

از `isPromise` برای اعتبارسنجی ورودی‌های ناشناخته پیش از برخورد با آن‌ها به‌عنوان یک `Promise` استفاده کنید؛ مثلاً هنگام
رسیدگی به مقادیر بازگردانده‌شده از پلاگین‌ها، importهای پویا، یا APIهای با نوع‌دهی سست.

> **نکته برای کاربران TypeScript:**
>
> `isPromise` از طریق `instanceof Promise` بررسی می‌کند، بنابراین فقط برای نمونه‌های واقعی `Promise` مقدار `true`
> برمی‌گرداند (نه thenableهای عمومی).

### مزایا

- یک بررسی ساده در زمان اجرا فراهم می‌کند تا مشخص شود آیا یک مقدار یک `Promise` است یا نه.
- به محافظت از مسیرهای کد که به یک نمونهٔ واقعی `Promise` نیاز دارند کمک می‌کند و به‌صورت قابل پیش‌بینی `true` یا
  `false` برمی‌گرداند.
- با الزام به یک نمونهٔ واقعی `Promise`، از مثبت‌های کاذب ناشی از اشیای «thenable» (مثلاً `{ then() {} }`) جلوگیری
  می‌کند.

## نحوه استفاده

### نحو

تابع:

- `isPromise(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); //‎ درست
console.log(isPromise(b)); //‎ نادرست
console.log(isPromise(123)); //‎ نادرست
console.log(isPromise(null)); //‎ نادرست

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isPromise(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isPromise](‎../_analysis/isPromise.md‎)

<br>

---

<small>این فایل در ۱۰ بهمن ۱۴۰۴ ساعت ۲۳:۵۲:۴۱ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>