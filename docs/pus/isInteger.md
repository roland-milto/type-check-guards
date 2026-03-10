# isInteger

## تشریح

ټاکي چې ورکړل شوی `value` يو خوندي صحيح عدد شمېر دی که نه.

### د کارولو بېلګه

بې باوره ورننوتنه (لکه query params، JSON payloads، environment variables) د کارولو مخکې تائيد کړئ، تر څو يې د اراې د
اندېکسونو، پاڼو وېش (pagination)، شمېرونکو، يا د ډاټابېس د پېژندپاڼو (IDs) لپاره د صحيح عدد په توګه وکاروئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isInteger` وکاروئ څو نا معلوم ورننوتنه د عددي صحيح عدد په توګه له کارولو مخکې تائيد کړئ؛ دا يوازې د هغو ارزښتونو
> لپاره `true` راګرځوي چې `typeof value === "number"` او `Number.isSafeInteger(value)` وي.

### ګټې

- هم د ډول او هم د عددي خونديتوب کتنه کوي: يوازې هغه وخت `true` راګرځوي چې ورننوتنه يو شمېر وي او خوندي صحيح عدد وي.
- د عددي جبري بدلون له عامو ستونزو مخنيوی کوي: لکه "5" تارونه په سمه توګه `false` راګرځوي.
- غير-صحیح عددونه او نا خوندي صحیح عددونه ردوي، نو د پېژندپاڼو (IDs)، شمېرونکو، او د اراې د اندېکس کولو لپاره مناسب دی.

## کارونه

### سینټکس

فنکشن:

- `isInteger(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې د صحيح عدد حالت لپاره يې وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      //‎ رښتیا
const b = isInteger(-100);   //‎ رښتیا
const c = isInteger("5");    //‎ ناسم
const d = isInteger(5.5);    //‎ ناسم
const e = isInteger(null);   //‎ ناسم

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isInteger(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isInteger](‎../_analysis/isInteger.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 00:51:20 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>