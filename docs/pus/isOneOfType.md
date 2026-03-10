# isOneOfType

## تشریح

`isOneOfType` ټاکي چې ورکړل شوی `value` لږ تر لږه له ورکړل شويو ډول-سټرينګونو څخه له يوه سره سمون خوري که نه؛ که کوم
سمون وموندل شي `true` بېرته ورکوي، او که نه `false`.

### د کارولو بېلګه

نيمه-ټايپ شوې يا بهرنۍ ډاټا (لکه parsed JSON، query parameters) تائيدول، د دې له لارې چې د اجرا پر مهال څو د منلو وړ
ډولونه (لکه `number` يا `string`) اجازه شي، تر دې مخکې چې نور منطق پر مخ يوړل شي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> کله چې غواړې د اجرا پر مهال دا وڅېړې چې يو ارزښت د څو اجازه شويو ډولونو له هر يوه سره سمون خوري، `isOneOfType` وکاروه؛
> که لږ تر لږه يو ډول سمون وخوري `true` ورکوي، ګنې `false`.

### ګټې

- په يوه يوازيني غږ کې يو ارزښت د څو اجازه شويو ډولونو پر وړاندې ګوري، او د لومړۍ سمون په موندلو سره `true` بېرته ورکوي.
- له `unknown` داخلونو سره کار کوي، نو د اجرا پر مهال د پولو (لکه بهرنۍ ډاټا، د کارن داخل) کې ګټور دی.
- يو ساده بولين پايله (`true`/`false`) برابروي چې له شرطي منطق او ژر بېرته ستنېدو (early returns) سره ښه يوځای کېږي.

## کارونه

### سینټکس

فنکشن:

- `isOneOfType(value, types)`

پارامېټرونه:

- `value`: هغه ارزښت چې د ټاکل شويو ډولونو پر وړاندې به وکتل شي.
- `types`: د ډول-سټرينګونو يو ارايه چې د ارزښت احتمالي ډولونه استازيتوب کوي.

### د فنکشن محلي امپورټ

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  //‎‎ input په اجرا کې يو څيز (object) دی
}

console.log(isOneOfType(3, ["number", "string"])); //‎ رښتيا
console.log(isOneOfType("hello", ["number", "boolean"])); //‎ ناسم

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isOneOfType(value, types)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isOneOfType](‎../_analysis/isOneOfType.md‎)

<br>

---

<small>دا فایل په 6 February 2026 at 13:54:10 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>