# areUndefined

## تشریح

`areUndefined` ګوري چې ایا په ورکړل شوې ارې کې هر عنصر `undefined` دی که نه.

### د کارولو بېلګه

دا تاییدول چې د اختیاري پایلو یو لېست هېڅ واقعي ارزښت نه لري (یوازې `undefined`)، لکه د mapping lookups وروسته چې پکې
نشتې داخلې د `undefined` په توګه ښودل کېږي، او تاسو غواړئ ډاډ ترلاسه کړئ چې ټول lookups ناکام شوي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> کله چې اړتیا ولرئ دا تایید کړئ چې یو `unknown[]` یوازې د `undefined` ارزښتونه لري، `areUndefined` وکاروئ؛ دا د تشو
> ارېګانو او د غیر-ارې/ناسمو ورودي معلوماتو لپاره د دنني `isFilledArray` چک له امله `false` بېرته ورکوي.

### ګټې

- د غیر-ارېګانو او تشو ارېګانو لپاره `false` بېرته ورکوي، ځکه چې د `isFilledArray` له لارې ډکه ارې غواړي.
- ډاډ ورکوي چې هر عنصر `undefined` وي، نه یوازې ځینې؛ نو موخه روښانه کوي.
- د نامعلومو ورودي ټولګو د اعتبارسنجۍ پر مهال د ګارډ-سټایل predicate په توګه ګټور دی.

## کارونه

### سینټکس

فنکشن:

- `areUndefined(array)`

پارامېټرونه:

- `array`: هغه ارې چې د `undefined` عناصرو لپاره یې ګوري.

### د فنکشن محلي امپورټ

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); //‎ رښتیا
const r2 = areUndefined(b); //‎ ناسم
const r3 = areUndefined(c); //‎ ناسم

//‎‎ یادونه: د تشو ارايو لپاره ناسم بېرته ورکوي
const r4 = areUndefined([]); //‎ ناسم
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areUndefined(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areUndefined](‎../_analysis/areUndefined.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 13:57:38 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>