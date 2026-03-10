# isArray

## تشریح

`isArray` ګوري چې ورکړل شوی ارزښت اراي دی که نه، او که اراي وي `true` بېرته ورکوي، کنه `false`.

### د کارولو بېلګه

ناپېژندل شوې ډاټا (لکه parsed JSON يا API ځوابونه) وڅېړئ څو ډاډ ترلاسه شي چې يو ارزښت اراي دی، مخکې له دې چې پرې تکرار (
iterate) وکړئ، اندېکس (index) کړئ، يا `.length` ته لاسرسی ومومئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> کله چې د ارايو لپاره د رنټايم چک ته اړتيا لرئ `isArray` وکاروئ؛ دا بولين بېرته ورکوي او له `unknown` ارزښتونو سره يې
> غږول خوندي دي.

### ګټې

- د بېل بېل چاپېريالونو (لکه iframes) ترمنځ د اراي د باوري پېژندنې لپاره جوړ-په-جوړ `Array.isArray` کاروي.
- يو ساده بولين پايله (`true`/`false`) بېرته ورکوي چې د ګارډونو او څانګيز منطق لپاره مناسبه ده.
- له هر ډول داخلېدونکي سره کار کوي، ځکه پاراميټر `unknown` دی.

## کارونه

### سینټکس

فنکشن:

- `isArray(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  //‎‎ input په اجرا کې یو اراې دی
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isArray(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isArray](‎../_analysis/isArray.md‎)

<br>

---

<small>دا فایل په 6 February 2026 at 11:31:55 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>