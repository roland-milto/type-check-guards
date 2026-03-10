# isFinite

## تشریح

ټاکي چې ورکړل شوی `value` يو محدود `number` دی که نه.

### د کارولو بېلګه

د `isFinite` څخه کار واخلئ څو نامعلوم ننوت (لکه له JSON، فورمونو، يا API ګانو څخه) د عددي محاسبو تر ترسره کولو مخکې
اعتبارسنجۍ کړئ، او ډاډ ترلاسه کړئ چې ارزښت يو واقعي، محدود شمېر دی.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isFinite` يوازې د محدودو شمیرو لپاره `true` بېرته ورکوي؛ د `NaN`، `Infinity` او هر غير-شمېر ارزښت لپاره `false` بېرته
> ورکوي.

### ګټې

- د باور وړ محدودوالي د کتنې لپاره جوړ-په-جوړ `Number.isFinite` کاروي.
- `true` يوازې د محدودو شمیرو لپاره بېرته ورکوي؛ د `NaN`، `Infinity` او د غير-شمېر ننوتونو لپاره `false` بېرته ورکوي.
- يو ساده، بې-اړخيزو اغېزو predicate چې د اعتبارسنجۍ او د ساتنې (guarding) منطق لپاره مناسب دی.

## کارونه

### سینټکس

فنکشن:

- `isFinite(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې د محدودوالي لپاره يې وازمويئ.

### د فنکشن محلي امپورټ

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
//‎‎ finiteNumbers دا دی: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  //‎‎ value دلته یو محدود شمېر دی
  const doubled = value * 2;
  console.log(doubled);
}
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isFinite(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isFinite](‎../_analysis/isFinite.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 16:31:28 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>