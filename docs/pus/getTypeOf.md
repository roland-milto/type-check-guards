# getTypeOf

## تشریح

`getTypeOf` د ورکړل شوي ارزښت لپاره یو مفصل، د انسان له پاره لوستېدونکی ډول-لېبل بېرته ورکوي، چې پکې اصلاح شوي عددي
ډولونه او د ابجېکټ ځانګړي ډولونه هم شامل دي.

### د کارولو بېلګه

د `getTypeOf` څخه د انپټ اعتبارسنجۍ او تشخیصاتو کې د ډول پېژندنه معیاري کولو لپاره کار واخلئ—د بېلګې په توګه، `nan`
ردول، یوازې `integer` IDګانې منل، عددي سترینګونه لکه `decimal` له ساده `string` څخه جلا چلندول، یا د `date` او `regexp`
په څېر دقیق ابجېکټ ډولونه لاګ کول.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> د بېرته ستنېدونکي ډول (return type) `DataTypeAsString | string` دی. دا د تشریحي لېبل په توګه وکاروئ؛ د څانګې کولو (
> branching) پر مهال یې له پېژندل شوو literal ارزښتونو لکه `integer`، `float`، `nan`، `array`، `null` او `undefined` سره
> پرتله کړئ.

### ګټې

- د جاواسکرېپټ د `typeof` په پرتله لا ډېر ریز-ریز ډول-سترینګ بېرته ورکوي، چې پکې د شمېرې فرعي ډولونه لکه `integer`،
  `float` او `nan` هم شامل دي.
- `null` او `undefined` په څرګنده توګه د `null` او `undefined` په توګه سره بېلوي.
- د شمېرې د سترینګ عام فورمټونه پېژني او د ساده `string` پر ځای یې د `binary`، `octal`، `decimal` یا `hexadecimal` په
  توګه راپور ورکوي.
- ارې هم د `array` په توګه پېژني او د ځانګړو ابجېکټ ډول-نومونو د ورکولو لپاره `Object.prototype.toString` کاروي (لکه
  `date`، `regexp`، `map`، `set`).
- د اعتبارسنجۍ، لاګ کولو او ډيبګ کولو لپاره ډېر ګټور دی، هلته چې یو شان، د انسان له پاره لوستېدونکي ډول-لېبلونه پکار وي.

## کارونه

### سینټکس

فنکشن:

- `getTypeOf(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې د هغه لپاره د ډاټا ډول ټاکل کېږي.

### د فنکشن محلي امپورټ

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

//‎‎ د بېلګې ازموينې
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.getTypeOf(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [getTypeOf](‎../_analysis/getTypeOf.md‎)

<br>

---

<small>دا فایل په 6 February 2026 at 13:14:28 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>