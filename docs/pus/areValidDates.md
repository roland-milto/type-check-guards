# areValidDates

## تشریح

ټاکي چې يو array تش نه وي او په بشپړه توګه له معتبر `Date` objects څخه جوړ وي.

### د کارولو بېلګه

د `areValidDates` څخه کار واخلئ څو د کاروونکي له خوا ورکړل شوي يا د API له خوا ورکړل شوي array ګانې د نېټې-بنسټ
عملياتو (sorting، range checks، formatting) تر ترسره کولو مخکې validate کړئ، دا يقيني کوي چې ټول entries رښتيني، معتبر
`Date` objects دي او لېست تش نه دی.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areValidDates` د تش array لپاره `false` واپس کوي؛ مخکې له دې چې پرې د validation د ګام په توګه تکيه وکړئ، ډاډ ترلاسه
> کړئ چې array بايد غير-تش وي.

### ګټې

- `true` يواځې هغه وخت واپس کوي چې هر عنصر يو معتبر `Date` instance وي (بې‌اعتباره نېټې لکه `new Date('invalid')` نه
  وي).
- تش input ردوي او `false` واپس کوي، دا يقيني کوي چې تاسې يواځې ماناداره، غير-تش د نېټو لېستونه ومنئ.
- يو ساده boolean د guard-سټايل چک برابروي چې له نورو validation ګانو سره يو ځای کول يې اسانه دي.

## کارونه

### سینټکس

فنکشن:

- `areValidDates(array)`

پارامېټرونه:

- `array`: هغه array چې چک کېږي، کېدای شي `Date` objects پکې شامل وي.

### د فنکشن محلي امپورټ

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); //‎ رښتیا
console.log(areValidDates(b)); //‎ ناسم
console.log(areValidDates(c)); //‎ ناسم
console.log(areValidDates(d)); //‎ ناسم

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areValidDates(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areValidDates](‎../_analysis/areValidDates.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 14:33:46 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>