# areOneOfType

## تشریح

`areOneOfType` ګوري چې ایا د یوې نه-تشې اراې ټول عناصر د ټاکل شوو اجرا-وخت ډولونو له ډلې څخه د کوم یو ډول دي که نه.

### د کارولو بېلګه

راتلونکی ډاټا (لکه parsed JSON) تایید کړئ چې پکې یو فیلډ باید یوه نه-تشه اراې وي او د هغې توکي یوازې د معلومو primitive
ډولونو یوې ټاکلې ټولګې ته محدود وي؛ کله چې اراې تشه وي یا کوم ناسم (اجازه نه لرونکی) ډول ولري، `false` بېرته ورکړئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> دا فنکشن یو boolean بېرته ورکوي او د compile time پر مهال د اراې د عناصرو ډولونه نه تنګوي (narrow)؛ د نورو پروسس کولو
> تر مخه یې د runtime تایید د ګام په توګه وکاروئ.

### ګټې

- یقینی کوي چې په یو اراې کې هر عنصر لږ تر لږه له یوې اجازه ورکړل شوې د اجرا-وخت (runtime) ډول سره سمون ولري، او یوازې
  هغه وخت `true` بېرته ورکوي چې ټوله اراې بریالۍ شي.
- ناسم داخلونه ژر ردوي: کله چې `array` یا `types` تش وي یا ډکه اراې نه وي، `false` بېرته ورکوي.
- د ګډو-ډولو ټولګو (لکه شمېرې او تارونه) د تایید لپاره ګټور دی، د `areOneOfType` په یوه واحد غږ (call) سره.

## کارونه

### سینټکس

فنکشن:

- `areOneOfType(array, types)`

پارامېټرونه:

- `array`: د عناصرو اراې چې د ورکړل شوو ډولونو پر وړاندې یې تایید کوئ.
- `types`: د تارونو اراې چې هغه د معلوماتو ډولونه استازیتوب کوي چې پر وړاندې یې چک کېږي.

### د فنکشن محلي امپورټ

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areOneOfType(array, types)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areOneOfType](‎../_analysis/areOneOfType.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 23:38:28 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>