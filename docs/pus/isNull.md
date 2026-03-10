# isNull

## تشریح

ټاکي چې ورکړل شوی `value` `null` دی که نه.

### د کارولو بېلګه

د انپټونو يا د API payload د فيلډونو د اعتبار لپاره `isNull` وکاروئ، هلته چې `null` يو مانادار sentinel ارزښت وي او بايد
له `undefined` يا نورو ارزښتونو څخه په بېل ډول اداره شي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> کله چې تاسې ته اړينه وي چې `null` له `undefined` او نورو falsy ارزښتونو څخه بېل کړئ، `isNull` وکاروئ؛ دا يوازې د
`null` لپاره `true` بېرته ورکوي.

### ګټې

- `null` د پاره يو کره چک برابروي، بې له دې چې دا له `undefined` سره ګډ کړي.
- د هر ډول انپټ لپاره په باوري ډول کار کوي، ځکه چې `unknown` مني.
- ساده، چټک، او بې جانبي اغېزو؛ يوازې `true` يا `false` بېرته ورکوي.

## کارونه

### سینټکس

فنکشن:

- `isNull(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې د `null` لپاره يې چک کوئ.

### د فنکشن محلي امپورټ

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // رښتیا
console.log(isNull(b)); // ناسم

if (isNull(a)) {
  //‎‎ a دلته null دی
}
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isNull(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isNull](‎../_analysis/isNull.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 15:40:38 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>