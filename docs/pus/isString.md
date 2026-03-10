# isString

## تشریح

`isString` ټاکي چې ورکړل شوی ارزښت سټرینګ دی که نه.

### د کارولو بېلګه

د کاروونکي input، د API payload فیلډونه، یا د configuration ارزښتونه په runtime کې تایید کړئ تر څو ډاډ ترلاسه شي چې
ارزښت سټرینګ دی، مخکې له دې چې د سټرینګ عملیات پرې تطبیق کړئ (لکه trimming، splitting، د case بدلون).

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isString` د `unknown` یا په نرم ډول ټایپ شوو ارزښتونو د تایید لپاره وکاروئ مخکې له دې چې د سټرینګ مېتودونه وغواړئ؛ دا
> یوازې هغه وخت `true` راګرځوي چې `typeof value === "string"` وي.

### ګټې

- د `typeof` په کارولو سره ساده او چټک چک.
- یو د اټکل وړ boolean پایله ورکوي: د سټرینګونو لپاره `true`، او که نه نو `false`.
- د تشو او ناتشو سټرینګونو لپاره کار کوي.
- د سټرینګ-ځانګړو عملیاتو تر ترسره کولو مخکې د سپک runtime guard په توګه ګټور دی.

## کارونه

### سینټکس

فنکشن:

- `isString(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې د سټرینګ ډول لپاره ازمویل کېږي.

### د فنکشن محلي امپورټ

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  //‎‎ input دلته یو سټرینګ دی
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isString(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isString](‎../_analysis/isString.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 13:15:21 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>