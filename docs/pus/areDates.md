# areDates

## تشریح

`areDates` ټاکي چې ورکړل شوې ارايه ډکه ده او يوازې `Date` شيان لري که نه، او يوازې هغه وخت `true` بېرته ورکوي چې ټول
عناصر معتبرې نېټې وي.

### د کارولو بېلګه

د `areDates` څخه د نامعلوم داخل (لکه parsed JSON، د فورم ډاټا، API payloads) د اعتبار لپاره کار واخلئ مخکې له دې چې د
نېټې-ځانګړې منطق لکه د وخت له مخې ترتيبول، بڼه ورکول، يا د رېنجونو محاسبه پرمخ يوسئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> يوازې د هغو غير-تشو ارايو لپاره `true` بېرته ورکوي چې هر عنصر يې `Date` وي؛ تشې ارايې `false` ورکوي.

### ګټې

- ډاډ ورکوي چې ارايه تشه نه وي مخکې له دې چې د هغې منځپانګه وڅېړي، او د تشو داخلونو لپاره د `true` مخه نيسي.
- هر عنصر د `Date` د يوې بېلګې (instance) په توګه تصديقوي، او د لومړۍ ناسمون (mismatch) پر مهال سمدستي `false` بېرته
  ورکوي.
- د ارايې پر توکو د نېټې-ځانګړو عملياتو تر ترسره کولو مخکې د ګارډ-ډول (guard-style) چک په توګه ګټور دی.

## کارونه

### سینټکس

فنکشن:

- `areDates(array)`

پارامېټرونه:

- `array`: هغه ارايه چې د `Date` شيانو لپاره بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); //‎ رښتیا
console.log(areDates(b)); //‎ ناسم
console.log(areDates(c)); //‎ ناسم

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areDates(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areDates](‎../_analysis/areDates.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 15:32:07 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>