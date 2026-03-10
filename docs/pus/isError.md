# isError

## تشریح

ګوري چې ورکړل شوی `value` د `Error` نمونه (instance) ده که نه.

### د کارولو بېلګه

`isError` هغه وخت وکاروئ کله چې تاسو يو `unknown` ارزښت ترلاسه کوئ (لکه د `catch` بلاک، يو callback، يا يوې بهرنۍ
کتابتون څخه) او تاسو ته اړينه وي چې په خوندي ډول وټاکئ آيا دا `Error` دی که نه، مخکې له دې چې `message`، `name`، يا
`stack` ولولئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isError` وکاروئ څو `unknown` ارزښتونه (لکه د `catch` څخه) د `Error` په توګه له چلند کولو مخکې خوندي وڅارئ.

### ګټې

- د يو ساده رن‌ټايم چک برابروي چې آيا يو ارزښت د `Error` نمونه (instance) ده که نه.
- د `Error` ځانګړنو لکه `message` يا `stack` ته له لاسرسي مخکې د ناڅرګندو (unknown) داخلونو تنګول (narrow) اسانه کوي.
- د رن‌ټايم استثناوو (exceptions) خطر کموي کله چې د `catch`، بهرنيو API ګانو، يا بې‌ډوله سرچينو څخه راغلي ارزښتونه
  سمبالوئ.

## کارونه

### سینټکس

فنکشن:

- `isError(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې د `Error` ډول پر وړاندې يې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isError(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isError](‎../_analysis/isError.md‎)

<br>

---

<small>دا فایل په 6 February 2026 at 12:46:58 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>