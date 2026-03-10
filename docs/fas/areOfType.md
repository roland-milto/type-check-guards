# areOfType

## توضیحات

بررسی می‌کند آیا همهٔ عناصر `array` داده‌شده از `type` مشخص‌شده هستند یا نه.

### مورد استفاده

از `areOfType` برای اعتبارسنجی ورودی ناشناخته (مثلاً JSON پارس‌شده، payloadهای API، ورودی کاربر) پیش از انجام عملیات
وابسته به نوع روی تک‌تک عناصر یک آرایه استفاده کنید.

> **نکته برای کاربران TypeScript:**
>
> از آن‌جا که `areOfType` یک Type Guard است، TypeScript داخل بلوک `if (areOfType(...)) {}` آرایه را به
`Array<DataTypeOf<T>>` محدود می‌کند.

### مزایا

- یک نگهبان نوع (Type Guard) در TypeScript ارائه می‌دهد: وقتی `true` برمی‌گرداند، ورودی به `Array<DataTypeOf<T>>` محدود
  می‌شود.
- هر عنصر را در برابر نوع زمان‌اجرای درخواستی اعتبارسنجی می‌کند و از عبور آرایه‌های با نوع‌های ترکیبی جلوگیری می‌کند.
- سریع شکست می‌خورد: به‌محض یافتن یک عنصر نامطابق، `false` برمی‌گرداند.
- به‌صورت پیش‌فرض آرایه‌های غیرآرایه و آرایه‌های خالی را رد می‌کند (وابسته به `isFilledArray`).

## نحوه استفاده

### نحو

تابع:

- `areOfType(array, type)`

پارامترها:

- `array`: آرایه‌ای که باید بررسی شود.
- `type`: نوعی که باید هر عنصر آرایه با آن سنجیده شود.

### وارد کردن محلی تابع

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  //‎‎ values اکنون number[] است
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); //‎ نادرست

```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areOfType(array, type)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areOfType](‎../_analysis/areOfType.md‎)

<br>

---

<small>این فایل در ۱۰ بهمن ۱۴۰۴ ساعت ۱۷:۰۹:۲۱ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>