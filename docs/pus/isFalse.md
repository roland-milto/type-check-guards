# isFalse

## تشریح

`isFalse` ګوري چې ورکړل شوی ارزښت په سخت ډول د boolean literal `false` سره برابر دی که نه.

### د کارولو بېلګه

نامعلوم معلومات (لکه له JSON، query params، يا د کارن input څخه) اعتبارسنج کړئ، چېرې چې يوازې څرګند boolean ارزښت
`false` بايد د يو معتبر flag په توګه ومنل شي، او نور هر څه بايد رد شي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isFalse` هغه وخت وکاروئ چې يوازې literal `false` منل غواړئ او نور ټول falsy ارزښتونه رد کړئ؛ دا يوازې د
`value === false` لپاره `true` بېرته ورکوي.

### ګټې

- د boolean literal `false` د سختې کتنې لپاره بې له coercion څخه برابروي.
- له نورو falsy ارزښتونو لکه `0`, `""`, `null`, او `undefined` څخه د `false` په بېلوالي کې مرسته کوي.
- د نامعلوم input د اعتبارسنجۍ پر مهال نيت څرګندوي او لوستونتيا ښه کوي.

## کارونه

### سینټکس

فنکشن:

- `isFalse(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  //‎‎ input دلته بالکل false دی
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isFalse(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isFalse](‎../_analysis/isFalse.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 16:44:19 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>