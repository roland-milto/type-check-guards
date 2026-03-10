# areFilledArrays

## تشریح

`areFilledArrays` ګوري چې ايا يوه دوه-بعدي ارايه تشه نه ده او د هغې ټولې فرعي ارايې هم تشې نه دي.

### د کارولو بېلګه

د `areFilledArrays` څخه د جدول-ډول يا مېټرېکس-ډول داخلېدونکو معلوماتو (لکه CSV قطارونه، د ګريډ معلومات، ګروپ شوې پايلې)
د تصديق لپاره کار واخلئ، څو تاسې په خوندي ډول دا فرض کړئ چې لږ تر لږه يوه فرعي ارايه شته او هېڅ يوه فرعي ارايه تشه نه
ده.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> کله چې تاسې اړتيا لرئ ډاډ ترلاسه کړئ چې يوه 2D ارايه لږ تر لږه يو قطار لري او هر قطار لږ تر لږه يو عنصر لري، د تکرار (
> iterate) يا اندېکس کولو (indexing) نه مخکې `areFilledArrays` وکاروئ.

### ګټې

- تصدیق کوي چې بهرنۍ ارايه تشه نه وي او دا چې هره دنننۍ ارايه هم تشه نه وي، او يوازې هغه وخت `true` بېرته ورکوي چې دواړه
  شرطونه پوره شي.
- د فرعي ارايو دننه له هر ډول عناصرو سره کار کوي (لکه شمېرې، تارونه، څيزونه، ځالې شوې ارايې) ځکه چې يوازې د ارايې د
  «ډکې/نه تشې» حالت ګوري، نه د عناصرو منځپانګه.
- يو ساده بولين پايله (`true`/`false`) برابروي چې د دوه-بعدي معلوماتو له پروسس کولو مخکې د ګارډونو لپاره مناسبه ده.

## کارونه

### سینټکس

فنکشن:

- `areFilledArrays(array)`

پارامېټرونه:

- `array`: هغه دوه-بعدي ارايه چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); //‎ رښتیا
console.log(areFilledArrays(b)); //‎ رښتیا
console.log(areFilledArrays(c)); //‎ رښتیا
console.log(areFilledArrays(d)); //‎ ناسم
console.log(areFilledArrays(e)); //‎ ناسم
console.log(areFilledArrays(f)); //‎ ناسم

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areFilledArrays(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areFilledArrays](‎../_analysis/areFilledArrays.md‎)

<br>

---

<small>دا فایل په 6 February 2026 at 11:58:47 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>