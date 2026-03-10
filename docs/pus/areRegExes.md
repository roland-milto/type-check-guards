# areRegExes

## تشریح

`areRegExes` ګوري چې يو ارزښت يو ډک ارايه ده او يوازې `RegExp` څيزونه پکې شته.

### د کارولو بېلګه

دا باوري کړئ چې د ترتيب يو اختيار (لکه د اجازه/منع د نمونو لېست) د منظم-اظهارونو يو نه-تش ارايه ده، مخکې له دې چې د
سمون (matching) لپاره يې وکاروئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areRegExes` وکاروئ څو `unknown` تر تکرارولو يا د نمونو تر يوځای کولو مخکې `RegExp[]` ته تنګ (narrow) کړئ.

### ګټې

- ډاډ ورکوي چې يو ارزښت يو نه-تش ارايه ده چې هر عنصر يې د `RegExp` نمونه (instance) وي.
- د کارن د داخلونې يا ترتيب (configuration) د اعتبار لپاره يو ساده بولين ساتونکی (`true`/`false`) برابروي.
- کله چې وروسته کوډ فرض کوي چې ټول توکي د منظم-اظهار (regular-expression) عمليات ملاتړ کوي، د اجرا پر مهال تېروتنې مخه
  نيسي.

## کارونه

### سینټکس

فنکشن:

- `areRegExes(array)`

پارامېټرونه:

- `array`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  //‎‎ patterns دلته د RegExp يو ارايه ده
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areRegExes(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areRegExes](‎../_analysis/areRegExes.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 23:21:12 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>