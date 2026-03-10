# areJson

## تشریح

ګوري چې ايا د اراې ټول عناصر JSON سټرنګونه دي که نه؛ يوازې هغه وخت `true` واپس کوي چې اراې ډکه وي او هر توکی معتبر JSON
وي؛ که نه نو `false` واپس کوي.

### د کارولو بېلګه

راتلونکی ډاټا (لکه د query params، environment variables، يا خارجي APIs څخه) تاييد کړئ، چېرته چې تاسې د JSON-انکوډ شويو
سټرنګونو د اراې تمه لرئ او غواړئ تش اراې يا هر ډول غير-JSON داخلې رد کړئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areJson` هغه وخت وکاروئ کله چې تاسې ته اړتيا وي چې دا تاييد کړئ چې يو `unknown[]` يوازې JSON سټرنګونه لري مخکې له دې
> چې تاسې يې پارس کړئ (لکه د `JSON.parse` په وسيله).

### ګټې

- `true` صرف هغه وخت واپس کوي چې هر عنصر يو معتبر JSON سټرنګ وي؛ که نه نو `false` واپس کوي.
- ژر ناکامېږي: څېړنه هماغه وخت بندوي چې يو غير-JSON عنصر وموندل شي.
- د طرحې له مخې تش اراې ردوي، د نه-ډک انپټ لپاره `false` واپس کوي.

## کارونه

### سینټکس

فنکشن:

- `areJson(array)`

پارامېټرونه:

- `array`: هغه اراې چې د JSON سټرنګ عناصرو لپاره به وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); //‎ رښتیا
const mixed = areJson(["{\"a\":1}", 123 as unknown]); //‎ ناسم
const empty = areJson([]); //‎ ناسم

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areJson(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areJson](‎../_analysis/areJson.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 16:17:22 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>