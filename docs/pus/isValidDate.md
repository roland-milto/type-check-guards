# isValidDate

## تشریح

`isValidDate` بررسی می‌کند که آیا یک مقدارِ داده‌شده یک شیء `Date` معتبر است یا نه و فقط برای تاریخ‌های واقعی و
غیرنامعتبر `true` برمی‌گرداند.

### د کارولو بېلګه

اعتبارسنجی ورودی کاربر یا داده‌های API که ممکن است شامل تاریخ باشند؛ با اطمینان از این‌که مقدار یک نمونهٔ واقعی `Date`
است و نه یک تاریخ نامعتبر، پیش از انجام محاسبات تاریخ، قالب‌بندی یا مقایسه‌ها.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> پیش از فراخوانی متدهای `Date` (مثلاً `toISOString`، `getTime`) روی مقدارهایی با نوع `unknown` از `isValidDate` استفاده
> کنید تا مطمئن شوید آن‌ها شیءهای `Date` معتبر هستند.

### ګټې

- یقینی می‌سازد که یک مقدار نمونهٔ `Date` است و نه صرفاً یک رشته یا عددِ شبیه‌به‌تاریخ.
- با بررسی مقدارهای زمانیِ `NaN`، تاریخ‌های نامعتبر (مثلاً `new Date("invalid")`) را رد می‌کند.
- یک گاردِ سادهٔ بولی است که استفاده از آن در شرط‌ها و پایپ‌لاین‌های اعتبارسنجی آسان است.
- با تأیید ورودی پیش از فراخوانی، کمک می‌کند از خطاهای زمانِ اجرا هنگام صدا زدن متدهای تاریخ جلوگیری شود.

## کارونه

### سینټکس

فنکشن:

- `isValidDate(value)`

پارامېټرونه:

- `value`: مقداری که باید بررسی شود.

### د فنکشن محلي امپورټ

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  //‎‎ input د اعتبار وړ Date نمونه ده
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); //‎ ناسم
console.log(isValidDate("2025-12-22")); //‎ ناسم

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isValidDate(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isValidDate](‎../_analysis/isValidDate.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 16:52:36 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>