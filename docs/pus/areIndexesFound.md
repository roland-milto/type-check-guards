# areIndexesFound

## تشریح

`areIndexesFound` ګوري چې يو ارزښت يو غير-تش اراې دی که نه چې عناصر يې ټول معتبر اندېکسونه وي؛ که وي `true` او که نه
`false` بېرته ورکوي.

### د کارولو بېلګه

د کاروونکي له خوا ورکړل شوي يا بهرني معلومات (لکه parsed JSON) اعتبارول چې تمه ترې کېږي د اندېکسونو لېست وي، مخکې له دې
چې د اراېګانو ته د لاسرسي يا د پرېکولو (slice) لپاره وکارول شي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areIndexesFound` وکاروئ څو نامعلوم ورننوتی ارزښت د اعتبار لپاره وازمويئ مخکې له دې چې عناصر يې د اراې د اندېکسونو په
> توګه وکاروئ؛ دا د تشو اراېګانو لپاره او د هغو اراېګانو لپاره چې غير-اندېکس ارزښتونه لري `false` بېرته ورکوي.

### ګټې

- دا يواځې هغه وخت `true` بېرته ورکوي چې ورننوتی ارزښت يو ډک اراې وي او هر عنصر يې يو معتبر اندېکس وي.
- ژر ناکامېږي: لکه چې يو غير-اندېکس عنصر مخې ته راشي، سمدستي `false` بېرته ورکوي.
- د اراې د موقعيتونو يا آفسيټونو په توګه د ارزښتونو له کارولو مخکې د ساتونکي (guard) په توګه ګټور دی.

## کارونه

### سینټکس

فنکشن:

- `areIndexesFound(array)`

پارامېټرونه:

- `array`: هغه اراې چې د اندېکس-مطابقت لپاره بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // ‎رښتیا
console.log(areIndexesFound(b)); // ‎ناسم
console.log(areIndexesFound(c)); // ‎ناسم

if (areIndexesFound(a)) {
  //‎ ‎دلته، `a` تایید شوی چې د اندېکسونو ډک ارایه ده.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areIndexesFound(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areIndexesFound](‎../_analysis/areIndexesFound.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 01:03:58 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>