# areFilledArrays

## توضیحات

`areFilledArrays` بررسی می‌کند که آیا یک آرایهٔ دوبعدی خالی نیست و همهٔ زیرآرایه‌های آن خالی نیستند.

### مورد استفاده

از `areFilledArrays` برای اعتبارسنجی ورودی‌های جدولی یا ماتریسی (مثلاً ردیف‌های CSV، داده‌های شبکه‌ای، نتایج
گروه‌بندی‌شده) استفاده کنید تا بتوانید با خیال راحت فرض کنید حداقل یک زیرآرایه وجود دارد و هیچ‌کدام از زیرآرایه‌ها خالی
نیستند.

> **نکته برای کاربران TypeScript:**
>
> وقتی لازم دارید مطمئن شوید یک آرایهٔ ۲بعدی حداقل یک ردیف دارد و هر ردیف حداقل یک عنصر دارد، قبل از پیمایش یا
> اندیس‌گذاری از `areFilledArrays` استفاده کنید.

### مزایا

- اعتبارسنجی می‌کند که آرایهٔ بیرونی خالی نیست و هر آرایهٔ داخلی نیز خالی نیست، و فقط زمانی `true` برمی‌گرداند که هر دو
  شرط برقرار باشند.
- با هر نوع عنصری داخل زیرآرایه‌ها کار می‌کند (مثلاً عدد، رشته، شیء، آرایه‌های تو در تو) چون فقط وضعیت «پر بودن» آرایه
  را بررسی می‌کند، نه محتوای عناصر را.
- یک نتیجهٔ بولی ساده (`true`/`false`) ارائه می‌دهد که برای گاردها قبل از پردازش داده‌های دوبعدی مناسب است.

## نحوه استفاده

### نحو

تابع:

- `areFilledArrays(array)`

پارامترها:

- `array`: آرایهٔ دوبعدی‌ای که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // درست
console.log(areFilledArrays(b)); // درست
console.log(areFilledArrays(c)); // درست
console.log(areFilledArrays(d)); // نادرست
console.log(areFilledArrays(e)); // نادرست
console.log(areFilledArrays(f)); // نادرست

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areFilledArrays(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areFilledArrays](‎../_analysis/areFilledArrays.md‎)

<br>

---

<small>این فایل در 6 February 2026 at 11:58:32 (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>