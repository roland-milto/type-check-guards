# areTrue

## تشریح

ګوري چې ايا يوه غير-تشه اراې يواځې د بولين `true` ارزښتونه لري که نه.

### د کارولو بېلګه

`areTrue` وکاروئ څو دا تائيد کړئ چې د مخکينيو شرطونو يا د فيچر فلګونو يو ټولګه ټول فعال دي (ټول ارزښتونه `true` دي) مخکې
له دې چې دوام ورکړئ، او تش يا ناسمه داخلونه د نه پوره کېدو په توګه (`false`) وبلئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areTrue` د تشې اراې لپاره او د هغو اراېګانو لپاره چې پکې هر داسې ارزښت وي چې په کلکه `true` نه وي، `false` واپس کوي.

### ګټې

- `true` يواځې هغه وخت واپس کوي چې هر عنصر په کلکه `true` وي او اراې تشه نه وي.
- ژر ناکامېږي: لکه چې يو غير-`true` ارزښت وموندل شي، سمدستي `false` واپس کوي.
- ناسم داخلونه (غير-اراې يا تشې اراې) د `false` په واپس کولو سره ردوي.

## کارونه

### سینټکس

فنکشن:

- `areTrue(array)`

پارامېټرونه:

- `array`: هغه اراې چې د ټولو `true` ارزښتونو لپاره يې ګوري.

### د فنکشن محلي امپورټ

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areTrue(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areTrue](‎../_analysis/areTrue.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 13:52:35 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>