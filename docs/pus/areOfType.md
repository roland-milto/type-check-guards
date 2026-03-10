# areOfType

## تشریح

ګوري چې ايا په ورکړل شوي `array` کې ټول عناصر د ټاکل شوي `type` دي که نه.

### د کارولو بېلګه

`areOfType` د نامعلوم input (لکه parsed JSON، API payloads، user input) د تصديق لپاره وکاروئ، مخکې له دې چې د array پر
هر عنصر type-ځانګړي عمليات ترسره کړئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> ځکه چې `areOfType` يو type guard دی، TypeScript د `if (areOfType(...)) {}` بلاک دننه array `Array<DataTypeOf<T>>` ته
> محدودوي.

### ګټې

- يو TypeScript type guard برابروي: چې کله `true` واپس کړي، نو input `Array<DataTypeOf<T>>` ته محدودېږي.
- هر عنصر د غوښتل شوي runtime type پر ضد تصديق کوي، او د ګډو-ډولو arrays د تېرېدو مخه نيسي.
- ژر ناکامېږي: لکه چې يو غير-مطابق عنصر وموندل شي، سمدستي `false` واپس کوي.
- د ډيزاين له مخې non-arrays او تش arrays ردوي (په `isFilledArray` پورې تړاو لري).

## کارونه

### سینټکس

فنکشن:

- `areOfType(array, type)`

پارامېټرونه:

- `array`: هغه array چې بايد وکتل شي.
- `type`: هغه type چې د array د هر عنصر پر ضد به وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  //‎‎ values اوس number[] دی
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); //‎ ناسم

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areOfType(array, type)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areOfType](‎../_analysis/areOfType.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 17:11:10 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>