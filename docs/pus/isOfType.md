# isOfType

## تشریح

ټاکي چې ورکړل شوی `value` د ټاکل شوي ډول-سټرينګ سره سمون لري که نه؛ د پرائمېټیفونو لپاره `typeof` کاروي او د پېچلو
ډولونو لپاره بدیل لاره.

### د کارولو بېلګه

د `unknown` داخلېدونکو ارزښتونو (لکه د API ځوابونه، د کاروونکي داخلونه، پارس شوی JSON) اعتبارسنجونه او تنګول؛ د
ډول-ځانګړو عملیاتو تر ترسره کولو مخکې دا چک کول چې ارزښت د تمه شوي ډول-سټرينګ دی که نه.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> کله چې له `unknown` ارزښتونو سره کار کوئ، د رن‌ټایم ډولونو پر بنسټ د څانګه‌بندۍ لپاره `isOfType` وکاروئ؛ دا `true`/
`false` بېرته ورکوي او `null` او `undefined` په څرګند ډول چلندوي.

### ګټې

- پرائمېټیفونه د چټکتیا او روښانتیا لپاره د مستقیم `typeof` له لارې ګوري.
- `null` او `undefined` په سمه توګه سمبالوي، کوم چې یوازې `typeof` یې د مطلوبې موخې له مخې نه شي بېلولای.
- د `getTypeOf` په کارولو سره د بدیل پرتله کولو له لارې د پېچلو یا دودیزو ډول-سټرينګونو ملاتړ کوي.
- یو ساده بولین پایله (`true`/`false`) بېرته ورکوي چې د ګارډونو او څانګه‌بندۍ لپاره مناسبه ده.

## کارونه

### سینټکس

فنکشن:

- `isOfType(value, type)`

پارامېټرونه:

- `value`: هغه ارزښت چې د `type` پر وړاندې ازمویل کېږي.
- `type`: د ډول هغه سټرينګي استازیتوب چې پر وړاندې یې چک کېږي.

### د فنکشن محلي امپورټ

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  //‎‎ input دلته يو شمېر دی
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  //‎‎ input دلته يو تار دی
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isOfType(value, type)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isOfType](‎../_analysis/isOfType.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 17:06:06 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>