# areErrors

## تشریح

ګوري چې اراې تشه نه وي او یوازې د `Error` شیان ولري، او `true` یا `false` بېرته ورکوي.

### د کارولو بېلګه

دا تایید کړئ چې د اجرا پر مهال ورکړل شوی `unknown[]` (لکه راټولې شوې ناکامۍ، د اعتبارسنجۍ پایلې، یا بې‌سریال شوې ډاټا) د
`Error` شیانو یو تش نه لېست دی، مخکې له دې چې پرې تکرار (iterate) وکړئ، لاګ یې کړئ، یا یې بېرته وغورځوئ (rethrow).

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areErrors` یوازې د یوې ډکې اراې لپاره `true` ورکوي چې هر توکی یې د `Error` نمونه وي؛ د تشې اراې لپاره یا که کوم عنصر
`Error` نه وي، `false` ورکوي.

### ګټې

- یقینی کوي چې هر عنصر د `Error` یوه نمونه وي، چې خوندي د تېروتنې سمبالونه او لاګ کول ممکن کوي.
- تش اراې ردوي، او د ناڅاپي «بې تېروتنې» حالتونو مخه نیسي چې د باوري تېروتنو لېستونو په توګه وبلل شي.
- د اجرا پر مهال د ساتونکي (runtime guard) په توګه ښه کار کوي کله چې له `unknown[]` داخلونو سره معامله کېږي (لکه د API
  ګانو یا د `catch` بلاکونو څخه).

## کارونه

### سینټکس

فنکشن:

- `areErrors(array)`

پارامېټرونه:

- `array`: هغه اراې چې د `Error` شیانو لپاره یې کتل کېږي.

### د فنکشن محلي امپورټ

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  //‎‎ value د Error شیانو یو نه-تش ارایه ده
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areErrors(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areErrors](‎../_analysis/areErrors.md‎)

<br>

---

<small>دا فایل په 6 February 2026 at 12:35:24 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>