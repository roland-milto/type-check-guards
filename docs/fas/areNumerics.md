# areNumerics

## توضیحات

`areNumerics` بررسی می‌کند آیا یک مقدار، آرایه‌ای غیرخالی است که همهٔ عناصر آن عددی هستند یا نه.

### مورد استفاده

از `areNumerics` برای اعتبارسنجی داده‌های خارجی یا بدون نوع (مثلاً payloadهای JSON، پارامترهای query، ورودی فرم) پیش از
محاسبهٔ جمع، میانگین یا سایر عملیات عددی استفاده کنید تا مطمئن شوید ورودی یک آرایهٔ عددیِ غیرخالی است و در غیر این صورت
`false` برگردانده می‌شود.

> **نکته برای کاربران TypeScript:**
>
> از `areNumerics` برای گارد کردن ورودی `unknown` پیش از برخورد با آن به‌عنوان یک آرایهٔ عددی استفاده کنید؛ برای
> غیرآرایه‌ها و آرایه‌های خالی `false` برمی‌گرداند.

### مزایا

- فقط زمانی `true` برمی‌گرداند که ورودی یک آرایهٔ غیرخالی باشد و همهٔ عناصر عددی باشند.
- سریع شکست می‌خورد: به‌محض یافتن یک عنصر غیرعددی، بررسی را متوقف کرده و `false` برمی‌گرداند.
- کمک می‌کند پیش از انجام عملیات عددی، ورودی ناشناخته را به‌صورت ایمن اعتبارسنجی کنید.

## نحوه استفاده

### نحو

تابع:

- `areNumerics(array)`

پارامترها:

- `array`: آرایه‌ای که باید از نظر عددی بودن عناصر بررسی شود.

### وارد کردن محلی تابع

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); //‎ درست
console.log(areNumerics(b)); //‎ درست
console.log(areNumerics(c)); //‎ نادرست
console.log(areNumerics(d)); //‎ نادرست
console.log(areNumerics(e)); //‎ نادرست

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); //‎ ۶۰
console.log(sumUnknown([10, "20", 30])); //‎ تهی

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areNumerics(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areNumerics](‎../_analysis/areNumerics.md‎)

<br>

---

<small>این فایل در ۱۷ بهمن ۱۴۰۴ ساعت ۱۶:۰۴:۵۱ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>