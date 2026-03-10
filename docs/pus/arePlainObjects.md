# arePlainObjects

## تشریح

ګوري چې ایا د اراې ټول عناصر ساده شیان دي؛ یوازې هغه وخت `true` بېرته ورکوي چې هر عنصر وړ وي.

### د کارولو بېلګه

بهرنۍ یا بې-ټایپه شوې ډاټا (لکه parsed JSON، API payloads، د فورم سپارنې) تایید کړئ څو ډاډ ترلاسه کړئ چې تاسو یوه غیر-تش
اراې ترلاسه کړې چې هره ننوتنه یې یو ساده شی دی، مخکې له دې چې پرې تکرار وکړئ او ځانګړنې ولولئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> په TypeScript کې `arePlainObjects` وکاروئ څو نامعلومه داخلې تایید کړئ مخکې له دې چې هغه د
`Record<string, unknown>[]` (یا د لا سخت شی-بڼې) په توګه وکاروئ.

### ګټې

- یقینی کوي چې د داخلې په اراې کې هر عنصر یو ساده (plain) شی دی، او یوازې هغه وخت `true` بېرته ورکوي چې ټول توکي سمون
  ولري.
- ناسم داخلې ژر ردوي (غیر-اراې یا تشې اراې) د `false` په بېرته ورکولو سره.
- هم د object-literal شیان او هم د `Object.create(null)` شیان د معتبر ساده شیانو په توګه ګڼي.

## کارونه

### سینټکس

فنکشن:

- `arePlainObjects(array)`

پارامېټرونه:

- `array`: هغه اراې چې د ساده شیانو د عناصرو لپاره به وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); //‎ رښتیا
const b = arePlainObjects([{}, Object.create(null)]); //‎ رښتیا
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); //‎ ناسم
const d = arePlainObjects([] as unknown[]); //‎ ناسم
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.arePlainObjects(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [arePlainObjects](‎../_analysis/arePlainObjects.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 16:55:35 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>