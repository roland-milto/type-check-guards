# areFalse

## توضیحات

`areFalse` بررسی می‌کند آیا همهٔ عناصر در یک آرایهٔ ارائه‌شده به‌طور سخت‌گیرانه مقدار بولی `false` هستند یا نه.

### مورد استفاده

پیش از ادامه، اعتبارسنجی کنید که فهرستی از feature flagها، بررسی‌ها یا نتایج guard همگی `false` هستند (مثلاً تأیید کنید
هیچ شرط مسدودکننده‌ای وجود ندارد).

> **نکته برای کاربران TypeScript:**
>
> وقتی به یک اعتبارسنجی سخت‌گیرانه نیاز دارید که آرایه خالی نباشد و فقط مقدار بولی `false` را داشته باشد، از `areFalse`
> استفاده کنید.

### مزایا

- اطمینان می‌دهد هر عنصر به‌طور سخت‌گیرانه `false` است (بدون تبدیل ضمنی truthy/falsey).
- برای غیرآرایه‌ها یا آرایه‌های خالی `false` برمی‌گرداند، چون از طریق `isFilledArray` وجود آرایهٔ پُر را الزام می‌کند.
- برای کارایی، با اولین عنصرِ غیرِ `false` زود متوقف می‌شود.

## نحوه استفاده

### نحو

تابع:

- `areFalse(array)`

پارامترها:

- `array`: آرایه‌ای که باید بررسی شود و شامل عناصری از هر نوع است.

### وارد کردن محلی تابع

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); //‎ درست
const b = areFalse([false, true, false]);  //‎ نادرست
const c = areFalse([false, "false", false]); //‎ نادرست
const d = areFalse([]); //‎ نادرست
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.areFalse(array)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [areFalse](‎../_analysis/areFalse.md‎)

<br>

---

<small>این فایل در ۱۱ بهمن ۱۴۰۴ ساعت ۱۶:۱۶:۵۴ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>