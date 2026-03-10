# isBinary

## تشریح

`isBinary` ټاکي چې آیا یو ارزښت باینري سټرینګ دی (په اختیاري ډول د `0b`/`0B` مخکښ سره) او `true` یا `false` بېرته ورکوي.

### د کارولو بېلګه

د کاروونکي له خوا ورکړل شوي سټرینګونه (لکه د فورم فیلډونه، CLI args، config values) تایید کړئ، څو ډاډ ترلاسه شي چې یوازې
باینري شمېرې (digits) استازیتوب کوي، په اختیاري ډول د `0b`/`0B` مخکښ سره، د نورو پروسس کولو نه مخکې.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> د سټرینګ د `BigInt`/`Number` ته د پارس کولو یا بدلولو نه مخکې `isBinary` د type guard په توګه وکاروئ، څو له ناسم داخل
> څخه مخنیوی وشي.

### ګټې

- د `0b`/`0B` مخکښ (prefix) سره يا بې له هغه باینري سټرینګونه مني.
- تش سټرینګونه او هغه سټرینګونه ردوي چې په سر/پای کې تش ځایونه (ASCII ≤ 32) ولري.
- بې له دې چې استثنا (throw) وکړي `true`/`false` بېرته ورکوي، نو د نااشنا داخلونو لپاره خوندي دی.

## کارونه

### سینټکس

فنکشن:

- `isBinary(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې باید وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); //‎ رښتیا
const b = isBinary("1010");   //‎ رښتیا
const c = isBinary("0b1020"); //‎ ناسم
const d = isBinary(0b1010);     //‎ ناسم

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isBinary(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isBinary](‎../_analysis/isBinary.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 23:11:10 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>