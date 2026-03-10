# areFinite

## تشریح

`areFinite` ګوري چې ايا يو ارزښت يو غير-خالي اېرې ده چې عناصر يې ټول محدود (finite) شمېرې وي؛ که داسې وي `true` او که نه
وي `false` واپس کوي.

### د کارولو بېلګه

د عددي اِنپُټ اېرېګانې (لکه د چارټ سريز، د همغږۍ/کوآرډينيټ لېستونه، د اندازه‌ګيرۍ نمونې) د محاسبې تر مخه اعتبارسنجۍ کړئ،
څو نتيجه يواځې هغه وخت `true` وي چې ټول ارزښتونه محدود (finite) شمېرې وي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areFinite` هغه وخت وکاروئ چې تاسې ته اړينه وي ډاډ ترلاسه کړئ اېرې غير-خالي ده او يواځې محدود (finite) شمېرې لري؛ دا د
> خالي اېرې لپاره او هم د هغو اېرېګانو لپاره چې `NaN` يا انفينيټيګانې پکې وي `false` واپس کوي.

### ګټې

- `true` يواځې هغه وخت واپس کوي چې اِنپُټ يو غير-خالي اېرې وي او هر عنصر يې يو محدود (finite) شمېر وي.
- `Infinity`، `-Infinity`، او `NaN` ردوي، ځکه د هر عنصر لپاره د `isFinite` چکونو ته تکيه کوي.
- يو ساده بولين نتيجه (`true`/`false`) برابروي چې د ګارډونو او د اعتبارسنجۍ (validation) بهيرونو لپاره مناسبه ده.

## کارونه

### سینټکس

فنکشن:

- `areFinite(array)`

پارامېټرونه:

- `array`: هغه اېرې چې بايد وکتل شي چې ايا د هغې ټول عناصر محدود (finite) دي که نه.

### د فنکشن محلي امپورټ

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); //‎ رښتیا
console.log(areFinite(b)); //‎ ناسم
console.log(areFinite(c)); //‎ ناسم

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); //‎ ۶۰
console.log(sumIfFinite([10, NaN, 30])); //‎ null
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areFinite(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areFinite](‎../_analysis/areFinite.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 16:37:07 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>