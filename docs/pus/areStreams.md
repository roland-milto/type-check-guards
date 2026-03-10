# areStreams

## تشریح

`areStreams` معلوموي چې آیا یو ارزښت یو ډک اراې دی چې هر عنصر یې `Stream` وي.

### د کارولو بېلګه

د کاروونکي له خوا ورکړل شوې یا په متحرک ډول جوړه شوې ټولګې (لکه د څو فایل لوستلو سټریمونه) د پایپ کولو، بیاچالانولو (
resume)، یا په ډله‌ییز ډول پرې د نورو عملیاتو تر ترسره کولو مخکې تایید کړئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areStreams` وکاروئ څو نامعلوم داخلېدونکی ارزښت د `Stream[]` په توګه له چلند کولو مخکې تایید کړئ؛ دا یوازې هغه وخت
`true` بېرته ورکوي چې ارزښت یو غیر-تش اراې وي او هر عنصر یې `Stream` وي.

### ګټې

- یقینی کوي چې یو داخلېدونکی ارزښت یو ډک اراې وي چې هر عنصر یې `Stream` وي.
- د پروسس کولو نه مخکې د سټریم ټولګو د اعتبار لپاره یو ساده `true`/`false` ګارډ برابروي.
- ژر ناکامېږي: کله چې یو غیر-`Stream` عنصر وموندل شي، سمدستي `false` بېرته ورکوي.
- د اجرا پر مهال تېروتنې مخه نیسي کله چې کوډ فرض کوي چې ټول توکي د `Stream` بېلګې دي.

## کارونه

### سینټکس

فنکشن:

- `areStreams(array)`

پارامېټرونه:

- `array`: هغه اراې چې د Stream شیانو لپاره به وکتل شي.

### د فنکشن محلي امپورټ

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  //‎‎ input د Stream څيزونو يو ډک ارايه ده
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areStreams(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areStreams](‎../_analysis/areStreams.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 23:35:27 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>