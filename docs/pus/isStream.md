# isStream

## تشریح

`isStream` ګوري چې ورکړل شوی ارزښت يو stream څيز دی که نه (Node.js stream-ته ورته، `ReadableStream`، يا
`WritableStream`).

### د کارولو بېلګه

هغه inputs اعتبارسنج کړئ چې کېدای شي يا عادي objects وي يا streams (لکه د فايل اپلوډونه، HTTP bodies، يا processing
pipelines) او د دې پر بنسټ منطق څانګه کړئ چې ارزښت stream دی که نه.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isStream` وکاروئ څو `unknown` تنګ (narrow) کړئ مخکې له دې چې د stream مېتودونه وغواړئ؛ دا د Node.js stream-ته ورته
> شيان (د `pipe`/`on` له لارې) او Web Streams (`ReadableStream`/`WritableStream`) پېژني کله چې هغه globals موجود وي.

### ګټې

- په خوندي ډول عام Node.js stream-ته ورته شيان د `pipe` او `on` دندو په کتلو سره پېژني.
- د Web Streams ملاتړ هم کوي، د `ReadableStream` او `WritableStream` په پېژندلو سره کله چې موجود وي.
- يو ساده boolean پايله (`true`/`false`) بېرته ورکوي چې د guards او branching logic لپاره مناسبه ده.

## کارونه

### سینټکس

فنکشن:

- `isStream(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  //‎‎ nodeStream د سټریم په څېر دی؛ تاسې کولی شئ په خوندي ډول د سټریم عام APIs وکاروئ
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isStream(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isStream](‎../_analysis/isStream.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 23:42:43 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>