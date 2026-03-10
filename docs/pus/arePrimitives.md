# arePrimitives

## تشریح

`arePrimitives` ارزوي چې ايا په ورکړل شوي، غير تش اراي کې ټول عناصر ابتدايي ډولونه دي که نه.

### د کارولو بېلګه

دا باوري کړئ چې راتلونکی ډاټا (لکه query parameters، CSV row values، يا د IDs/tags لېست) د سيريالايز کولو، هاش کولو، لاګ
کولو، يا هغو APIs ته د لېږلو نه مخکې چې بايد شيان (objects) و نه مني، يواځې ابتدايي ارزښتونه لري.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> کله چې تاسې اړتيا لرئ ډاډ ترلاسه کړئ چې يو `unknown[]` يواځې ابتدايي ارزښتونه (string, number, bigint, boolean,
> symbol, undefined, يا null) لري، د نورو پروسس کولو نه مخکې `arePrimitives` وکاروئ.

### ګټې

- `true` يواځې هله واپس کوي چې هر عنصر يو ابتدايي ارزښت وي، نو دا د “بې له شيانو/فنکشنونو” ارايو لپاره يو سخت ګارډ دی.
- ژر ناکامېږي: لکه چې يو غير ابتدايي عنصر وموندل شي، سمدستي `false` واپس کوي.
- د غير-ارايونو او تشو ارايو لپاره هم `false` واپس کوي (د ډک-اراي د چک له لارې)، چې د ناسم انپټ د تصادفي منلو مخه نيسي.

## کارونه

### سینټکس

فنکشن:

- `arePrimitives(array)`

پارامېټرونه:

- `array`: هغه اراي چې د ابتدايي ډول عناصرو لپاره به وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); //‎ رښتیا
const r2 = arePrimitives(b); //‎ رښتیا
const r3 = arePrimitives(c); //‎ ناسم
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.arePrimitives(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [arePrimitives](‎../_analysis/arePrimitives.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 00:06:19 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>