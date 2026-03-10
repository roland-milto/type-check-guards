# areFalse

## تشریح

`areFalse` ګوري چې ایا په ورکړل شوې اراې کې ټول عناصر په کلکه د بولین `false` دي که نه.

### د کارولو بېلګه

له پرمخ تلو مخکې دا تایید کړئ چې د فیچر فلګونو، چکونو، یا ګارډ پایلو لېست ټول `false` دي (لکه دا باوري کول چې هېڅ
بندوونکې شرطونه موجود نه دي).

> **د TypeScript کاروونکو لپاره یادونه:**
>
> کله چې تاسې ته دا اړتیا وي چې په کلکه تایید کړئ اراې تشه نه وي او یوازې د بولین ارزښت `false` ولري، `areFalse` وکاروئ.

### ګټې

- یقینی کوي چې هر عنصر په کلکه `false` وي (د truthy/falsey جبري بدلون پرته).
- د `isFilledArray` له لارې د ډک اراې شرط لګولو سره د غیر-اراې یا تشو اراېګانو لپاره `false` بېرته ورکوي.
- د موثریت لپاره په لومړي غیر-`false` عنصر کې ژر تم کېږي.

## کارونه

### سینټکس

فنکشن:

- `areFalse(array)`

پارامېټرونه:

- `array`: هغه اراې چې باید وکتل شي، د هر ډول عناصرو لرونکې.

### د فنکشن محلي امپورټ

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); //‎ رښتیا
const b = areFalse([false, true, false]);  //‎ ناسم
const c = areFalse([false, "false", false]); //‎ ناسم
const d = areFalse([]); //‎ ناسم
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areFalse(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areFalse](‎../_analysis/areFalse.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 16:18:26 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>