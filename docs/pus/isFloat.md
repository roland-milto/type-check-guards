# isFloat

## تشریح

`isFloat` ټاکي چې ورکړل شوی `value` يو محدود اعشاري (floating-point) عدد دی که نه (يو `number` چې صحیح عدد نه وي).

### د کارولو بېلګه

د کاروونکي له خوا ورکړل شوی عددي داخلېدنه اعتبارول، چېرته چې اعشاري ارزښتونه اړين وي (لکه بيې، اندازه‌ګيرنې، نرخونه) او
صحیح عددونه، `NaN`، او نامحدودۍ ردول.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isFloat` هغه وخت وکاروئ چې تاسې يواځې محدود، غير-صحیح عددي داخلېدنې منل غواړئ؛ دا صحیح عددونه او غير-محدود عددونه
> ردوي.

### ګټې

- `true` يواځې د محدودو، غير-صحیح عددونو لپاره بېرته ورکوي (صحیح عددونه، `NaN`، `Infinity`، او `-Infinity` نه شاملوي).
- له هر ډول داخلېدونکي ډول (`unknown`) سره کار کوي او په خوندي ډول تنګوي، د `typeof value === "number"` په کتنې سره.
- د وړاندوينې وړ چلند لپاره جوړ-په عددي ساتونکي (`Number.isInteger`, `Number.isFinite`) کاروي.

## کارونه

### سینټکس

فنکشن:

- `isFloat(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې کتل کېږي ايا دا د اعشاري (floating-point) عدد دی که نه.

### د فنکشن محلي امپورټ

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    //‎‎ ارزښت په اجرا کې یو شمېر دی؛ دا محدود دی او صحیح عدد نه دی
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isFloat(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isFloat](‎../_analysis/isFloat.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 16:09:29 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>