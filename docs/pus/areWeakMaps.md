# areWeakMaps

## تشریح

`areWeakMaps` ګوري چې ایا یو ارزښت داسې ناتشه اېري ده چې هر عنصر یې `WeakMap` وي؛ یوازې په هماغه حالت کې `true` بېرته
ورکوي او په نورو ټولو حالتونو کې `false`.

### د کارولو بېلګه

د رن‌ټایم ډاټا (لکه parsed JSON، د پلګین داخلونه، یا په نرم ډول ټایپ شوې کانفیګ) تایید کړئ څو ډاډ ترلاسه شي چې دا د
`WeakMap` نمونو ناتشه اېري ده، مخکې له دې چې پرې تکرار وکړئ او د `WeakMap` مېتودونه وغواړئ؛ کله چې کوم عنصر `WeakMap` نه
وي یا اېري تشه وي `false` بېرته ورکوي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> د نامعلوم داخل د تایید لپاره `areWeakMaps` وکاروئ مخکې له دې چې هغه د ناتشې `WeakMap[]` په توګه وکاروئ؛ دا د تشو
> اېري‌ګانو لپاره `false` بېرته ورکوي.

### ګټې

- یقینی کوي چې په ورکړل شوي اېري کې هر عنصر د `WeakMap` نمونه وي.
- د تشو اېري‌ګانو لپاره `false` بېرته ورکوي، او د “بې‌ډاټا” ناڅاپي منل د معتبر داخل په توګه مخه نیسي.
- د ټولو توکو پر سر د `WeakMap`-ځانګړو عملیاتو تر ترسره کولو مخکې د ساتونکي (guard) په توګه ګټور دی.

## کارونه

### سینټکس

فنکشن:

- `areWeakMaps(array)`

پارامېټرونه:

- `array`: هغه اېري چې د `WeakMap` نمونو لپاره یې باید وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  //‎‎ list د WeakMap بېلګو يو غير تش ارايه ده
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  //‎‎ غير تش WeakMap[] نه دی
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areWeakMaps(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areWeakMaps](‎../_analysis/areWeakMaps.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 13:39:13 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>