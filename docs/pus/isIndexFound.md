# isIndexFound

## تشریح

`isIndexFound` ټاکي چې ورکړل شوی ارزښت غير-منفي صحيح عدد دی که نه، چې دا ښيي يو اندېکس موندل شوی.

### د کارولو بېلګه

دا باوري کړئ چې د لټون پايله يو د کار وړ اندېکس (صحيح عدد `>= 0`) دی مخکې له دې چې په اراې يا سټرينګ کې اندېکس وکاروئ،
څو د `-1` يا غير-شمېري ارزښتونو ناڅاپي کارول مخه ونيول شي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> له `isIndexFound` څخه د `indexOf`، `findIndex`، يا دوديزو لټونونو وروسته کار واخلئ چېرته چې `-1` (يا نور ناسم
> ارزښتونه) د “نه موندل شوی” معنا ورکولای شي. کله چې `true` بېرته ورکړي، ارزښت يو شمېر (number) وي او د اراې/سټرينګ د
> اندېکس په توګه کارول خوندي وي.

### ګټې

- د يو ساده ډول ساتونکی برابروي چې دا وپېژني آيا يو اندېکس موندل شوی که نه، د يو غير-منفي صحيح عدد په کتلو سره.
- يوازې د باوري اندېکس-په-څېر ارزښتونو لپاره `true` بېرته ورکوي (صحيح عددونه `>= 0`)، منفي، غير-صحيح، او غير-شمېري
  ارزښتونه ردوي.
- له هغو API ګانو سره د کار پر مهال د يو-کم/يو-زيات (off-by-one) او د نښه-ارزښت (sentinel-value) تېروتنو مخه نيسي چې د
  “نه موندل شوی” لپاره `-1` بېرته ورکوي.

## کارونه

### سینټکس

فنکشن:

- `isIndexFound(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې وکتل شي آيا غير-منفي صحيح عدد دی که نه.

### د فنکشن محلي امپورټ

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  //‎‎ idx دلته یو شمېر دی او >= 0 دی
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

//‎‎ د indexOf سره عادي کارونه
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isIndexFound(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isIndexFound](‎../_analysis/isIndexFound.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 00:47:40 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>