# isStream

## توضیحات

`isStream` بررسی می‌کند که آیا یک مقدارِ داده‌شده یک شیء استریم است (شبیه به استریم در Node.js، `ReadableStream` یا
`WritableStream`).

### مورد استفاده

اعتبارسنجی ورودی‌هایی که ممکن است یا شیء ساده باشند یا استریم (مثلاً آپلود فایل، بدنهٔ HTTP، یا پایپ‌لاین‌های پردازش) و
انشعاب منطق بر اساس اینکه مقدار یک استریم هست یا نه.

> **نکته برای کاربران TypeScript:**
>
> از `isStream` برای محدودسازی نوعِ `unknown` پیش از فراخوانی متدهای استریم استفاده کنید؛ این تابع اشیای شبیه به استریم
> در Node.js (از طریق `pipe`/`on`) و Web Streams (`ReadableStream`/`WritableStream`) را زمانی که آن گلوبال‌ها وجود داشته
> باشند تشخیص می‌دهد.

### مزایا

- با بررسی وجود توابع `pipe` و `on`، اشیای رایجِ شبیه به استریم در Node.js را به‌صورت ایمن تشخیص می‌دهد.
- همچنین با شناسایی `ReadableStream` و `WritableStream` (در صورت در دسترس بودن)، از Web Streams پشتیبانی می‌کند.
- یک نتیجهٔ بولی ساده (`true`/`false`) برمی‌گرداند که برای گاردها و منطق انشعابی مناسب است.

## نحوه استفاده

### نحو

تابع:

- `isStream(value)`

پارامترها:

- `value`: مقداری که باید بررسی شود.

### وارد کردن محلی تابع

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  //‎‎ nodeStream شبیه جریان است؛ می‌توانید با خیال راحت از APIهای رایج جریان استفاده کنید
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### وارد کردن سراسری شیء

برای وارد کردن توابع به‌عنوان متدهای سراسری شیء از این استفاده کنید:

```ts
import "@type-check/guards/register-global-object.mjs";
```

در این صورت متد زیر به‌صورت سراسری در دسترس خواهد بود:

- `Type.isStream(value)`

## تحلیل توابع

در اینجا یک تحلیل جدولی از خروجی حاصل از وارد کردن پارامترهای مختلف در توابع مستند شده
است: [isStream](‎../_analysis/isStream.md‎)

<br>

---

<small>این فایل در ۱۰ بهمن ۱۴۰۴ ساعت ۲۳:۳۹:۳۸ (UTC) با استفاده از *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** توسط *
*[Roland Milto](https://roland-milto.de/)** ایجاد شد.</small>