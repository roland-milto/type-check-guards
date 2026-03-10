# areWeakSets

## تشریح

ګوري چې داخلې یو ناتشه اراې ده او هر عنصر یې `WeakSet` دی؛ یوازې په همدغه حالت کې `true` بېرته ورکوي.

### د کارولو بېلګه

د اجرا پر مهال داخلې (لکه له APIs، تنظیماتو، یا د کاروونکي له خوا ورکړل شوي معلومات) تایید کړئ څو ډاډ ترلاسه کړئ چې د
`WeakSet` بېلګو یو ناتشه لېست لرئ، مخکې له دې چې هغه منطق پر مخ یوسئ چې د `WeakSet` چلند پورې تړلی وي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areWeakSets` وکاروئ څو نااشنا داخلې د `WeakSet[]` په توګه له چلند کولو مخکې تایید کړئ. دا د تشو اراېګانو او
> غیر-اراېګانو لپاره `false` بېرته ورکوي.

### ګټې

- یقینی کوي چې د داخلې اراې هر عنصر یو `WeakSet` وي.
- د تشو اراېګانو لپاره `false` بېرته ورکوي، او د ورکو معلوماتو پر مهال د ناڅاپي «ټول سم دي» پایلو مخه نیسي.
- په خوندي ډول ناکامېږي؛ کله چې داخلې یو ډکه اراې نه وي (په شمول د `null`) `false` بېرته ورکوي.
- د هغو عملیاتو تر ترسره کولو مخکې د ساتونکي (guard) په توګه ګټور دی چې د `WeakSet` بېلګو ته اړتیا لري.

## کارونه

### سینټکس

فنکشن:

- `areWeakSets(array)`

پارامېټرونه:

- `array`: هغه اراې چې د `WeakSet` شیانو لپاره باید وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  //‎‎ a یو غیر تش ارې ده د WeakSet بېلګو څخه
}

console.log(areWeakSets(a)); //‎ رښتیا
console.log(areWeakSets(b)); //‎ ناسم
console.log(areWeakSets(c)); //‎ ناسم
console.log(areWeakSets(null as unknown)); //‎ ناسم
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areWeakSets(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areWeakSets](‎../_analysis/areWeakSets.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 14:10:38 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>